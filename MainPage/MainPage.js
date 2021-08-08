// St of 36-Search-Explore-Products-Resutls-Array------------------------------------------------------

// Import products data from local storage
let dataTotal = JSON.parse(localStorage.getItem("dataTotal"));

// select elements from the DOM
let search_txt = document.querySelector(".search-txt");
let allBtn=document.getElementById('makeupBtn')
let makeupBtn=document.getElementById('allProduct')
let jewelryBtn= document.getElementById('jewelryBtn')

// Define search defualt value
let searchType = "All"; // supposed to change when toggoling buttons (All,Makup,Jewellery)
let dataResults=[] //Define empty data results


allBtn.addEventListener("click", (event) => {



  
})












// Define array to search in
let datafiltered = [];
switch (true) {
  case searchType == "All":
    datafiltered = dataTotal.slice();
    break;
  case searchType != "All":
    datafiltered = dataTotal.filter((elm) => {
      return elm.Type == searchType;
    });
    break;
}

// define array of search results
let datasearched = [];

// search function
search_txt.addEventListener("change", (event) => {
  datasearched = []; //empty previous search
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
      datasearched.push(datafiltered[i]);
    }
  }

  console.log(datasearched); //present search
});

// ------------------------------------------------------ end of 36-Search-Explore-Products-Resutls-Array