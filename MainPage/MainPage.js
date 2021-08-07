// St of Search All Products Issue------------------------------------------------------

// Import products data from local storage
let dataTotal = JSON.parse(localStorage.getItem("dataTotal"));

// select elements from the DOM
let search_txt = document.querySelector(".search-txt");

// Define search Catagorey
let searchType = "All"; // supposed to change when toggoling buttons (All,Makup,Jewellery)

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

// ------------------------------------------------------ end of Search All Products Issue