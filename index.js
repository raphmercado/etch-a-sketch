function printGrid() {
  const grid = document.querySelector(".grid");
  for (let count = 1; count <= 16; count++) {
    for (let i = 1; i <= 16; i++) {
      const pixel = document.createElement("div");
      pixel.setAttribute("id", "pixel");
      pixel.className = "grid__pixel";
      grid.appendChild(pixel);
    }
  }
}

function main() {
  printGrid();
  const pixels = document.querySelectorAll("#pixel");
  pixels.forEach(function (pixel) {
    pixel.addEventListener("mouseover", function (e) {
      e.target.classList.toggle("is-active");
    });
  });
}

main();