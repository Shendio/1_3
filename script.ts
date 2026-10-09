const anim_button = document.getElementById(
  "ex6_animate_button",
) as HTMLButtonElement;
const anim_element = document.getElementById("ex6_element") as HTMLElement;

anim_button.addEventListener("click", () => {
  if (anim_element.classList.contains("animate")) return;
  anim_element.classList.add("animate");
});

anim_element.addEventListener("animationend", () => {
  anim_element.classList.remove("animate");
});

const bg_button = document.getElementById("ex4_button") as HTMLButtonElement;
const colors: string[] = [
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
  const random_index: number = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random_index];
});

const ex2_txt = document.getElementById("ex2_text") as HTMLInputElement;
const ex2_cont = document.getElementById("ex2_content") as HTMLElement;

ex2_txt.addEventListener("input", () => {
  ex2_cont.textContent = `Wpisano ${ex2_txt.value.length} znaków`;
});

const timer_button = document.getElementById("ex6_button") as HTMLButtonElement;
const timer_disp = document.getElementById("ex6_content") as HTMLElement;

let timer_interval: number | null = null;
let counter: number = 0;

timer_button.addEventListener("click", () => {
  if (timer_interval === null) {
    timer_interval = window.setInterval(() => {
      counter++;
      timer_disp.textContent = counter.toString();
    }, 1000);
  } else {
    clearInterval(timer_interval);
    timer_interval = null;
  }
});
