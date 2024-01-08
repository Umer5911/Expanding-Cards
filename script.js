const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panelremove();
    panel.classList.add("active");
  });
});

function panelremove() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     umer();
//     panel.classList.add("active");
//   });
// });

// function umer() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
