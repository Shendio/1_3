const anim_button = document.getElementById("ex6_animate_button");
const anim_element = document.getElementById("ex6_element");

anim_button.addEventListener("click", () => {
  if (anim_element.classList.contains("animate")) return;
  anim_element.classList.add("animate");
});

anim_element.addEventListener("animationend", () => {
  anim_element.classList.remove("animate");
});
