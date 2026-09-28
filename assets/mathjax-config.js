// Shared TeX support. MathJax leaves pre/code blocks as verbatim source.
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']],
    processEscapes: true
  },
  svg: {
    fontCache: 'global'
  }
};
