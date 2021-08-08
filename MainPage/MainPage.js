//Declare variables using dom to access elements
const head=document.getElementsByClassName('head')[0];

head.textContent+=' '+localStorage.getItem('userName');

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// function for makeing elem and push them into the slide      
function createSlider(arr){
  arr.forEach(item => { // loop through the array 
// create elements and get the parent container using DOM 
let chiledDiv = document.createElement('div')
let createImG = document.createElement('img')
let createPtag = document.createElement('p')
let createprice = document.createElement('p')
let createId = document.createElement('span')
let parentSec = document.getElementById('slider')
// Add classes to the created elements to manipulate them
chiledDiv.classList.add('mySlides')
chiledDiv.classList.add('fade')
createPtag.classList.add("text")
createprice.classList.add("text1")
createImG.setAttribute('class', 'img')
createId.setAttribute('class', 'numbertext')
createImG.setAttribute('src', "1.jpg")
createImG.setAttribute('src', item.image)
// insert all the elements to the parent section & arrange them
parentSec.appendChild(chiledDiv);
chiledDiv.appendChild(createImG);
chiledDiv.appendChild(createId);
chiledDiv.appendChild(createPtag);
chiledDiv.appendChild(createprice);
// change the slider content using the data from the given array 
createPtag.textContent= `Name: ${item.name}`
createprice.textContent=`Price: ${item.price} $`
createId.textContent=`id: ${item.id}`
  });
}