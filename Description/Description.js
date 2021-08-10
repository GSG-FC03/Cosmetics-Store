//Declare variables
const firstSection = document.querySelector("section");
const img = document.querySelector("img");
const ProdectName = document.querySelector(".ProdectName");
const desc = document.querySelector(".desc");
const priceOfProducts = document.querySelector(".priceOfProducts");
let count = 1;
const quantity = document.querySelector("#quantityText");
const plusSign = document.querySelector(".plussign ");
const minusSign = document.querySelector(".minussign");
let numPrice;
const idProduct = Number(localStorage.getItem("idProduct")); // get id from local storage

setTimeout(() => {
  const dataTotal = JSON.parse(localStorage.getItem("dataTotal")); // get dataTotalfrom L.S
  for (let i = 0; i < dataTotal.length; ++i) {
    // loop on dataTotal to view description about id product
    if (dataTotal[i].id == idProduct) {
      img.setAttribute("src", dataTotal[i].image);
      ProdectName.textContent = dataTotal[i].name;
      desc.textContent = dataTotal[i].description;
      numPrice = dataTotal[i].price;
      priceOfProducts.textContent = dataTotal[i].price + "$";

      desc.addEventListener("click", function () {
        desc.classList.toggle("paraSize");
      });
    }
  }
});

//////// St Quantity code

quantity.textContent = count;

// fun. to increment count when clicking on plus icon and to Calculate the total price
plusSign.addEventListener("click", function () {
  count += 1;
  quantity.textContent = count;
  const totalPrice = numPrice * count;
  priceOfProducts.textContent = totalPrice + "$";
});

// fun. to decrement count when clicking on minus icon and to Calculate the total price
minusSign.addEventListener("click", function () {
  if (count > 0) {
    count -= 1;
    if (count != 0) {
      // if count not equal to zero then calculate total price and update content of priceOfProduct
      quantity.textContent = count;
      const totalPrice = numPrice * count;
      priceOfProducts.textContent = totalPrice + "$";
    }
  }
});
