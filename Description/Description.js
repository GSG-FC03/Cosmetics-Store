// St of Issue 57-Code-Add-To-Cart -----------------------------------

// //For Test purpose
// localStorage.setItem('idProduct',JSON.stringify(25))

// Capture add to cart button + Quantity from DOM
let addToCartBtn = document.getElementById('addToCartBtn');
let quantityText2= document.getElementById('quantityText');

//Create cart array in local strorage if it is not created yet
if (localStorage.getItem('cart')==null) {
localStorage.setItem("cart",JSON.stringify([]))
}

// Action to do on click on addToCartBtn
addToCartBtn.addEventListener('click',(event)=>{
// Get needed values to create product array
let cart =JSON.parse(localStorage.getItem('cart'))
let dataTotal2=JSON.parse(localStorage.getItem('dataTotal'))
let idProduct2 =JSON.parse(localStorage.getItem('idProduct'))
let quantity2=quantityText2.textContent;

//find the product in dataTotal array using idProduct
let product=dataTotal2.find((element)=>element.id==idProduct2)
//Add quantity to the product
product.quantity=quantity2;
//push in the cart and save in local storage
cart.push(product)
localStorage.setItem('cart',JSON.stringify(cart))
// Move to Main page
window.location.href = "../MainPage/MainPage.html";

})

// --------------------------- End of Issue 57-Code-Add-To-Cart
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
