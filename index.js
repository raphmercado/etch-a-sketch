function printGrid() {
  const container = document.querySelector(".container");
  container.className = "container";
  for (let count = 1; count <= 16; count++) {
    for (let i = 1; i <= 16; i++) {
      const grid = document.createElement("div");
      grid.setAttribute("id", "grid");
      grid.className = "grid";
      container.appendChild(grid);
    }
  }
}

function main() {
  printGrid();
  const grids = document.querySelectorAll("#grid");
  grids.forEach(function (grid) {
    grid.addEventListener("mouseover", function (e) {
      e.target.classList.toggle("active");
    });
  });
}

main();