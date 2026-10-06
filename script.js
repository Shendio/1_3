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

const ex2_txt = document.getElementById("ex2_text");
const ex2_cont = document.getElementById("ex2_content");

ex2_txt.addEventListener("input", () => {
  ex2_cont.textContent = "Wpisano " + ex2_txt.value.length + " znaków";
});

const timer_button = document.getElementById("ex6_button");
const timer_disp = document.getElementById("ex6_content");

let timer_interval = null;
let counter = 0;

timer_button.addEventListener("click", () => {
  if (timer_interval === null) {
    timer_interval = setInterval(() => {
      counter++;
      timer_disp.textContent = counter;
    }, 1000);
  } else {
    clearInterval(timer_interval);
    timer_interval = null;
  }
});
