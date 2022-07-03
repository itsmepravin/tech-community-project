// REAPEATING THE PLAYER CARD 4 TIMES

const node = document.querySelector(".playerCard");
[...Array(4)].forEach((_) =>
  node.parentNode.insertBefore(node.cloneNode(true), node)
);
