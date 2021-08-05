//St of 25-Code to Import All API data --------------------------------------------------------

// Fetch API1 Makup and save in local storage  at 0 mls
async function getAPI1() {
  const response = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  let data = await response.json();
  localStorage.setItem("Makeup", JSON.stringify(data));
}

// Fetch API2 Jewellery and save in local storage at 0 mls
async function getAPI2() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  let data = await response.json();
  localStorage.setItem("Jewellery", JSON.stringify(data));
}

// Fetch API3 Jewellery and save in local storage at 0 mls
async function getAPI3() {
  const response = await fetch(
    "https://v6.exchangerate-api.com/v6/d4ef3c6fae4ad19c0f38bc56/latest/USD"
  );
  let data = await response.json();
  localStorage.setItem("Exch_Rates", JSON.stringify(data.conversion_rates));
}

// Call the three functions
getAPI1();
getAPI2();
getAPI3();

// Run Manipulation after 20 sec
setTimeout(() => {
  // Import data1 & data2 from local storage to variables
  let data1 = JSON.parse(localStorage.getItem("Makeup"));
  let data2 = JSON.parse(localStorage.getItem("Jewellery"));

  //   Declare the dataTotal variable
  let dataTotal = [];

  // Push data 1 on in  dataTotal Array
  for (let i = 0; i < data1.length; i++) {
    let oneproduct = {
      Type: "Makeup",
      id: data1[i].id,
      image: data1[i].api_featured_image,
      name: data1[i].name,
      brand: data1[i].brand,
      price: data1[i].price,
      Currency: "USD",
      description: data1[i].description,
      rating: data1[i].rating,
    };
    dataTotal.push(oneproduct);
  }

  // Push data 2 on in  dataTotal Array
  for (let i = 0; i < data2.length; i++) {
    let oneproduct = {
      Type: "Jewellery",
      id: data2[i].id + 2000,
      image: data2[i].image,
      name: data2[i].title,
      brand: "Tiffany", // We created brand as it is not availabe in original API
      price: data2[i].price,
      //price: Math.round((Math.random() * 10 + 10) * 100) / 100,
      Currency: "USD",
      description: data2[i].description,
      rating: 5, //We created  rating as it is not availabe in original API
    };
    dataTotal.push(oneproduct);
  }

  // remove the replace API1 + API2  by dataToal in the Local stroage
  localStorage.removeItem("Makeup");
  localStorage.removeItem("Jewellery");
  localStorage.setItem(" dataTotal", JSON.stringify(dataTotal));
}, 16000);

//------------------------------------------------------ end 25-Code to Import All API data
