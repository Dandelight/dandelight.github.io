// MathJax

window.MathJax = {
  tex: {
    inlineMath: [
      ["\\(", "\\)"],
      ["$", "$"],
    ],
    displayMath: [
      ["\\[", "\\]"],
      ["$$", "$$"],
    ],
    packages: { "[+]": ["boldsymbol"] },
    processEscapes: true,
    processEnvironments: true,
  },
  loader: { load: ["[tex]/boldsymbol"] },
  options: { ignoreHtmlClass: ".*|", processHtmlClass: "arithmatex" },
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});

// highlight.js
document$.subscribe(() => {
  hljs.highlightAll();
});

// mermaid.js
// 每次Instant Reload之后重渲染Mermaid
document$.subscribe(() => {
  mermaid.init();
});
