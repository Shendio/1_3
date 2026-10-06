const anim_button = document.getElementById("ex6_animate_button");
const anim_element = document.getElementById("ex6_element");

anim_button.addEventListener("click", () => {
  if (anim_element.classList.contains("animate")) return;
  anim_element.classList.add("animate");
});

anim_element.addEventListener("animationend", () => {
  anim_element.classList.remove("animate");
});

const bg_button = document.getElementById("ex4_button");
const colors = [
  "#f4f4f4",
  "#ffebee",
  "#e8f5e9",
  "#e3f2fd",
  "#fff3e0",
  "#f3e5f5",
  "#fce4ec",
  "#e0f7fa",
];

bg_button.addEventListener("click", () => {
  const random_index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random_index];
});
