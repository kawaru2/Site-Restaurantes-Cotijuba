// Botão dark mode

const btn = document.querySelector(".btnDarkMode");

function btnDarkMode() {
  const btnCircle = document.querySelector(".circle");
  btn.classList.toggle("eventBtn")
  btnCircle.classList.toggle("eventBtnCircle")
  renderDarkMode()
}

// UMA FUNÇÃO QUE EXECUTA O OBJETIVO DO DARK MODE (RENDERIZA)

function renderDarkMode() {
  const $body = document.querySelector("body");
  const $sectionRestaurants = document.querySelector(".restaurantes");
  const $card = document.querySelectorAll(".card");
  const $features = document.querySelector(".features");
  const $feature = document.querySelectorAll(".feature");
  const $footer = document.querySelector("footer");
  const $txtTittle = document.querySelector(".subtitulo");
  const $paragraph = document.querySelector(".paragraph");
  const $sectionRestaurantsTittle = document.querySelector(".restaurantes > h2");
  const $nameRestaurant = document.querySelectorAll(".nameRestaurant");
  const $infoRestaurant = document.querySelectorAll(".infoRestaurant");
  const $tittleFeature = document.querySelectorAll(".tittleFeature");
  const $infoFeature = document.querySelectorAll(".infoFeature");
  
  $body.classList.toggle("black")
  $sectionRestaurants.classList.toggle("darkModeContrast")
  $card.forEach(tag => {
    tag.classList.toggle("black")
  })
  $features.classList.toggle("black")
  $feature.forEach(tag => {
    tag.classList.toggle("darkModeContrast")
  })
  $footer.classList.toggle("darkModeContrast")
  $txtTittle.classList.toggle("darkModeMainText")
  $paragraph.classList.toggle("darkModeSecondaryText")
  $sectionRestaurantsTittle.classList.toggle("darkModeMainText")
  $nameRestaurant.forEach(tag => {
    tag.classList.toggle("darkModeMainText")
  })
  $infoRestaurant.forEach(tag => {
    tag.classList.toggle("darkModeSecondaryText")
  })
  $tittleFeature.forEach(tag => {
    tag.classList.toggle("darkModeMainText")
  })
  $infoFeature.forEach(tag => {
    tag.classList.toggle("darkModeSecondaryText")
  })
}

btn.addEventListener("click", () => {
  btnDarkMode()
})