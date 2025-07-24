// Вставьте сюда свои реальные ссылки на изображения
const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];

let index = 0;

const imgEl = document.getElementById("slider-image");
const counterEl = document.getElementById("counter");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function render() {
  imgEl.classList.remove("active");
  const src = images[index];
  imgEl.setAttribute("src", src);
  imgEl.onload = () => imgEl.classList.add("active");
  counterEl.textContent = `Изображение ${index + 1} из ${images.length}`;
}

function next() {
  index = (index + 1) % images.length;
  render();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  render();
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

// Клавиатурная навигация
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

// Инициализация
render();
