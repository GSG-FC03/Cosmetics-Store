// Define Variables
const sliderbox=document.getElementById('slider')


// Create Recommended Section by get data from local Storage.
setTimeout(() => {
  const data = JSON.parse(localStorage.getItem("dataTotal"));
  const recom= document.querySelector('.recom');
  const headRecom = document.createElement("h2");
  headRecom.textContent = "Recommended Today";
  recom.appendChild(headRecom);

  // Loop => to choose 2 random products from data
  for (let i = 0; i < 2; ++i) {
    let random = Math.floor(Math.random() * data.length);

    const recomBox = document.createElement("section");
    const imageBox = document.createElement("div");
    const recomImg = document.createElement("img");
    const recomDesc = document.createElement("div");
    const idProduct = document.createElement("span");
    const name = document.createElement("h4");
    const spanName = document.createElement("span");
    const price = document.createElement("h4");

    recom.appendChild(recomBox);
    recomBox.appendChild(imageBox);
    imageBox.appendChild(recomImg);
    recomBox.appendChild(recomDesc);
    recomDesc.appendChild(idProduct);
    recomDesc.appendChild(name);
    name.appendChild(spanName);
    recomDesc.appendChild(price);

    recomBox.setAttribute("class", "recomBox");
    imageBox.setAttribute("class", "imageBox");
    recomImg.setAttribute("class", "recomImg");
    recomDesc.setAttribute("class", "recomDesc");
    idProduct.setAttribute("class", "idProduct");
    name.setAttribute("class", "recomName");
    recomImg.setAttribute("src", `${data[random].image}`);

    //Add EnentListener, that work when clicking on the box to convert a user to the description page and Explore data based on id products
    recomBox.addEventListener("click", function () {
      localStorage.setItem("idProduct", JSON.stringify(data[random].id));
      window.location.href = "../Description/Description.html";
    });

    spanName.textContent = "Name";
    idProduct.textContent = `${data[random].id}`;
    idProduct.style.display = "none";
    name.textContent = `Name: ${data[random].name}`;
    price.textContent = `Price: ${data[random].price}`;
  }
});
// End Recomended Section

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
dataResults.reverse()
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
search_txt.value=""; // Empty Search input

if(dataResults[0]==null||dataResults[0]==[]){// If search results are null
sliderbox.innerHTML='<P class="noResultMsg">The is no results to Show</P>';
}
else{// If there are results
slideIndex = 1
createSlider(dataResults)
showSlides(1)
}
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


// Add classes to the created elements to manipulate them
chiledDiv.classList.add('mySlides')
chiledDiv.classList.add('fade')
createPtag.classList.add("text")
createprice.classList.add("text1")
createImG.setAttribute('class', 'img')
createId.setAttribute('class', 'numbertext')
createImG.setAttribute('src', item.image)

// insert all the elements to the parent section & arrange them
sliderbox.appendChild(chiledDiv);
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

//  counter function
function changeCartNum(){
  let getCart = localStorage.getItem("cart")
  let getCartArr = JSON.parse(getCart).length
  let cartNum = document.getElementById('counter');
  if(getCartArr == 0 || getCartArr == null){
    cartNum.classList.add('count')
  }
  else{
    cartNum.classList.remove('count')
    cartNum.textContent = getCartArr;
  }
}
changeCartNum()