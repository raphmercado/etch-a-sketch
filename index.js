function printGrid(pixelCount) {
  const grid = document.querySelector(".grid");
  for (let count = 1; count <= pixelCount; count++) {
    for (let i = 1; i <= pixelCount; i++) {
      const pixel = document.createElement("div");
      pixel.setAttribute("id", "pixel");
      pixel.className = "grid__pixel";
      grid.appendChild(pixel);
    }
  }
}

function main() {
  const btn = document.querySelector(".btn-container__btn");
  btn.addEventListener("click", function (e) {
    const pixelCount = prompt("Enter number of pixels: ");
    printGrid(pixelCount);
  });
  const pixels = document.querySelectorAll("#pixel");
  pixels.forEach(function (pixel) {
    pixel.addEventListener("mouseover", function (e) {
      e.target.classList.toggle("is-active");
    });
  });
}

main();