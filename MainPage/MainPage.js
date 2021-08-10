// St of 36-Search-Explore-Products-Resutls-Array------------------------------------------------------

// select elements from the DOM
let search_txt = document.querySelector(".search-txt");
let allBtn=document.getElementById('allProduct')
let makeupBtn=document.getElementById('makeupBtn')
let jewelryBtn= document.getElementById('jewelryBtn')

// Import products data from local storage
let dataTotal = JSON.parse(localStorage.getItem("dataTotal"));

// Define Initital values
let datafiltered=[] //Define medium array for results
let dataResults=[] //Define empty data results

//A0. run All on page opening
 // change class to change css
 allBtn.setAttribute("class","allProduct active")
 makeupBtn.setAttribute("class","makeupBtn")
 jewelryBtn.setAttribute("class","jewelryBtn")
 
 datafiltered=Array.from(dataTotal); //filter data
 dataResults= Array.from(datafiltered);//set final results with filtered data
 createSlider(dataResults); //Apply Slider function
 


//A. All Btn Code on click ---------------------
allBtn.addEventListener("click", (event) => {

  // change class to change css
allBtn.setAttribute("class","allProduct active")
makeupBtn.setAttribute("class","makeupBtn")
jewelryBtn.setAttribute("class","jewelryBtn")

datafiltered=Array.from(dataTotal); //filter data
dataResults= Array.from(datafiltered);//set final results with filtered data
slideIndex = 1;
createSlider(dataResults); //Apply Slider function
showSlides(1)
})

//B. makeupBtn Btn Code on click ---------------------
makeupBtn.addEventListener("click", (event) => {

// change class to change css
allBtn.setAttribute("class","allProduct")
makeupBtn.setAttribute("class","makeupBtn active")
jewelryBtn.setAttribute("class","jewelryBtn")

datafiltered = dataTotal.filter((elm) => { //Filter results based on Makeup
return elm.Type == "Makeup"; })
dataResults= Array.from(datafiltered);//set final results with filtered data
slideIndex = 1
createSlider(dataResults); //Apply Slider function
showSlides(1)
  
})

//C. Jewellery Btn Code on click ---------------------
jewelryBtn.addEventListener("click", (event) => {

  // change class to change css
  allBtn.setAttribute("class","allProduct")
  makeupBtn.setAttribute("class","makeupBtn")
  jewelryBtn.setAttribute("class","jewelryBtn active")
  
  datafiltered = dataTotal.filter((elm) => { //Filter results based on Makeup
  return elm.Type == "Jewellery"; })
  dataResults= Array.from(datafiltered);//set final results with filtered data
  slideIndex = 1
  createSlider(dataResults); //Apply Slider function
  showSlides(1)

    
  })


//D. Serach Results on change ---------------------
search_txt.addEventListener("change", (event) => {
  dataResults = []; //empty previous results

  for (let i = 0; i < datafiltered.length; i++) { //run through all array
    if (
      datafiltered[i].name
        .toUpperCase()
        .includes(search_txt.value.toUpperCase()) || //search in name
      datafiltered[i].description
        .toUpperCase()
        .includes(search_txt.value.toUpperCase()) || //search in brand
      datafiltered[i].brand
        .toUpperCase()
        .includes(search_txt.value.toUpperCase()) //search in description
    ) {
      dataResults.push(datafiltered[i]);
    }
  }
search_txt.value="";
slideIndex = 1
createSlider(dataResults)
showSlides(1)
});

// ------------------------------------------------------ end of 36-Search-Explore-Products-Resutls-Array

//St  of naming issue .............................
const head=document.getElementsByClassName('head')[0];

head.textContent+=' '+localStorage.getItem('userName');

//  ................ End of Name Issue

//St of Slider Issue ------------------------------
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
 document.getElementById('slider').innerHTML="" 
 

  // give the array limited num ( 15 products)
let num = 15;
let readyArr = Array.from(arr);
let newArr= readyArr.slice(0, num);


// loop through the array 
  newArr.forEach(item => { 

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
// createId.textContent=`id: ${item.id}`

// create eventlistener on the img so when the user clicks on image it store the id on localstoreage and move to description page 
chiledDiv.addEventListener('click', () => {
  localStorage.setItem('idProduct', JSON.stringify(item.id))
  window.location.href="../Description/Description.html"
})
  });
}
// ................. End of slider issue
