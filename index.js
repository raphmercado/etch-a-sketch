function printGrid(gridRowCount, gridColumnCount) {
  const grid = document.querySelector(".grid");
  for (let col = 1; col <= gridColumnCount; col++) {
    const gridColumn = document.createElement("div");
    gridColumn.className = "grid__column";
    for (let row = 1; row <= gridRowCount; row++) {
      const pixel = document.createElement("div");
      pixel.setAttribute("id", "pixel");
      pixel.className = "grid__pixel";
      gridColumn.appendChild(pixel);
      grid.appendChild(gridColumn);
    }
  }
}

function main() {
  const btn = document.querySelector(".btn-container__btn");
  btn.addEventListener("click", function (e) {
    const gridRowCount = prompt("Enter number of grid rows: ");
    const gridColumnCount = prompt("Enter number of grid columns: ");
    printGrid(gridRowCount, gridColumnCount);
  });
  const pixels = document.querySelectorAll(".grid");
  pixels.forEach(function (pixel) {
    pixel.addEventListener("mouseover", function (e) {
      if (e.target.id === "pixel") {
        e.target.classList.toggle("is-active");
      }
    })
  });
}

main();