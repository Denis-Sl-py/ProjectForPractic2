const images = [
  "https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fcs6.pikabu.ru%2Fpost_img%2Fbig%2F2015%2F06%2F08%2F3%2F1433735650_472905306.jpg&text=картинки&rpt=simage&lr=213",
  "https://yandex.ru/images/search?pos=2&from=tabbar&img_url=https%3A%2F%2Fsteamuserimages-a.akamaihd.net%2Fugc%2F52453354080448818%2F543783B601D5A853E3F50907B9722A314DFD92B6%2F%3Fimw%3D512%26amp%3Bimh%3D320%26amp%3Bima%3Dfit%26amp%3Bimpolicy%3DLetterbox%26amp%3Bimcolor%3D%2523000000%26amp%3Bletterbox%3Dtrue&text=картинки&rpt=simage&lr=213",
  "https://yandex.ru/images/search?pos=10&from=tabbar&img_url=https%3A%2F%2Fimg3.akspic.ru%2Fattachments%2Foriginals%2F7%2F1%2F2%2F0%2F0%2F100217-vodnye_elementy-vodopad-voda-vodotok-rastitelnost-2880x1800.jpg&text=картинки&rpt=simage&lr=213",
  "https://yandex.ru/images/search?pos=22&from=tabbar&img_url=https%3A%2F%2Fw-dog.ru%2Fwallpapers%2F9%2F19%2F500841690050007%2Fitaliya-gory-ozero-ostrov-les.jpg&text=картинки&rpt=simage&lr=213",
  "https://yandex.ru/images/search?pos=29&from=tabbar&img_url=https%3A%2F%2Fplay-lh.googleusercontent.com%2FSmptFHWgOWbBTVdme_FZMygqnyGY2BVo7fwLvc40tLcSoAR9SOsfULspvFQaXFPAkTQ%3Dw7680-h4320&text=картинки&rpt=simage&lr=213",
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
