"use strict";

(() => {
  const button = document.getElementById("copy-citation");
  const code = document.getElementById("site-bibtex");
  const status = document.getElementById("citation-status");
  if (!button || !code || !status) return;

  let resetTimer;
  button.addEventListener("click", async () => {
    clearTimeout(resetTimer);
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.dataset.copied = "true";
      button.setAttribute("aria-label", "Citation copied");
      button.title = "Citation copied";
      status.textContent = "Copied!";
      resetTimer = setTimeout(() => {
        delete button.dataset.copied;
        button.setAttribute("aria-label", "Copy BibTeX citation");
        button.title = "Copy BibTeX citation";
        status.textContent = "";
      }, 2500);
    } catch {
      delete button.dataset.copied;
      button.setAttribute("aria-label", "Copy BibTeX citation");
      button.title = "Copy BibTeX citation";
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
      status.textContent = "Copy the selected citation manually.";
    }
  });
})();
