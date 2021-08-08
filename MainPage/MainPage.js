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

//A. All Btn Code on click ---------------------
allBtn.addEventListener("click", (event) => {

  // change class to change css
allBtn.setAttribute("class","allProduct active")
makeupBtn.setAttribute("class","makeupBtn")
jewelryBtn.setAttribute("class","jewelryBtn")

datafiltered=Array.from(dataTotal); //filter data
dataResults= Array.from(datafiltered);//set final results with filtered data
slider(dataResults); //Apply Slider function
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
slider(dataResults); //Apply Slider function
  
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
  slider(dataResults); //Apply Slider function
    
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
slider(dataResults)
});

// ------------------------------------------------------ end of 36-Search-Explore-Products-Resutls-Array

//St  Declare variables using dom to access elements .............................
const head=document.getElementsByClassName('head')[0];

head.textContent+=' '+localStorage.getItem('userName');
// .......................................... end of Declare variables using dom to access elements

//This is example function for slider
function slider (array) { 
  console. clear()
  console.log(array)
}