// Create variables targetting the relevant DOM elements here 👇
var randomButton = document.querySelector(".random-cover-button")
var makeCoverButton = document.querySelector(".make-new-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedButton = document.querySelector(".view-saved-button")
var makeMyBookButton = document.querySelector(".create-new-book-button")
var homeButton = document.querySelector('.home-button')
var coverImage = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var tag1 = document.querySelector(".tagline-1")
var tag2 = document.querySelector(".tagline-2")
var viewForm = document.querySelector(".form-view")
var viewHome = document.querySelector(".home-view")
var viewSaved = document.querySelector(".saved-view")
var coverInput = document.querySelector(".user-cover")
var titleInput = document.querySelector(".user-title")
var firstDescriptorInput = document.querySelector(".user-desc1")
var secondDescriptorInput = document.querySelector(".user-desc2")
var miniCovers = document.querySelector('.saved-covers-section')


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener('load', createRandom)
randomButton.addEventListener('click', createRandom)
makeCoverButton.addEventListener('click', makeCoverToggle)
viewSavedButton.addEventListener('click', savedCoversToggle)
homeButton.addEventListener('click', homeButtonToggle)
makeMyBookButton.addEventListener('click', makeMyBook, false)
saveCoverButton.addEventListener('click', saveCover)


// Create your event handlers and other functions here 👇

function createRandom(){
  coverTitle.innerText = titles[getRandomIndex(titles)]
  coverImage.src = covers[getRandomIndex(covers)]
  tag1.innerText = descriptors[getRandomIndex(descriptors)]
  tag2.innerText = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tag1.innerText, tag2.innerText)
}

function makeCoverToggle() {
  saveCoverButton.classList.add("hidden")
  randomButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  viewHome.classList.add("hidden")
  viewForm.classList.remove("hidden")
  viewSaved.classList.add('hidden')
}

function savedCoversToggle() {
  saveCoverButton.classList.add("hidden")
  randomButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  viewHome.classList.add("hidden")
  viewSaved.classList.remove('hidden')
  viewForm.classList.add("hidden")
}

function homeButtonToggle() {
  saveCoverButton.classList.remove("hidden")
  randomButton.classList.remove("hidden")
  homeButton.classList.add("hidden")
  viewHome.classList.remove("hidden")
  viewSaved.classList.add('hidden')
  viewForm.classList.add("hidden")
}

function makeMyBook(){
  event.preventDefault()
  coverImage.src = coverInput.value
  coverTitle.innerText = titleInput.value
  tag1.innerText = firstDescriptorInput.value
  tag2.innerText = secondDescriptorInput.value
  covers.push(coverInput.value)
  titles.push(titleInput.value)
  descriptors.push(firstDescriptorInput.value)
  descriptors.push(secondDescriptorInput.value)
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tag1.innerText, tag2.innerText)
  homeButtonToggle()
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    miniCovers.innerHTML += 
    `<section class="mini-cover">
    <img class="cover-image" src="${coverImage.src}"> 
    <h2 class="cover-title">${coverTitle.innerText}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${tag1.innerText}</span> and <span class="tagline-2">${tag2.innerText}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`
  }
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}