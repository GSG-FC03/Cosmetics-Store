//St  Declare variables using dom to access elements .............................
const head=document.getElementsByClassName('head')[0];

head.textContent+=' '+localStorage.getItem('userName');
// .......................................... end of Declare variables using dom to access elements

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
createSlider(dataResults); //Apply Slider function
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
createSlider(dataResults); //Apply Slider function
  
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
  createSlider(dataResults); //Apply Slider function
    
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
createSlider(dataResults)
});

// ------------------------------------------------------ end of 36-Search-Explore-Products-Resutls-Array



//This is example function for slider
function createSlider (array) { 
  console. clear()
  console.log(array)
}
