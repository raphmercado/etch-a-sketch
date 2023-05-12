function printGrid() {
  const container = document.querySelector(".container");
  for (let count = 0; count < 16; count++) {
    for (let i = 1; i <= 16; i++) {
      const grid = document.createElement("div");
      grid.setAttribute("id", "grid");
      container.style.backgroundColor = "white";
      container.style.display = "flex";
      container.style.padding = " 0px 415px";
      container.style.alignContent = "center";
      container.style.justifyContent = "center";
      container.style.flexWrap = "wrap";
      container.style.height = "100vh";
      grid.style.backgroundColor = "lightgrey";
      grid.style.width = "5vh";
      grid.style.height = "5vh";
      grid.style.border = "1px solid white";
      container.appendChild(grid);
    }
  }
}

printGrid();