// St of Issue 57-Code-Add-To-Cart -----------------------------------

//For Test purpose
localStorage.setItem('idProduct',JSON.stringify(25))

// Capture add to cart button + Quantity from DOM
let addToCartBtn = document.getElementById('addToCartBtn');
let quantityText= document.getElementById('quantityText');

//Create cart array in local strorage if it is not created yet
if (localStorage.getItem('cart')==null) {
localStorage.setItem("cart",JSON.stringify([]))
}

// Action to do on click on addToCartBtn
addToCartBtn.addEventListener('click',(event)=>{
// Get needed values to create product array
let cart =JSON.parse(localStorage.getItem('cart'))
let dataTotal=JSON.parse(localStorage.getItem('dataTotal'))
let idProduct =JSON.parse(localStorage.getItem('idProduct'))
let quantity=quantityText.textContent;

//find the product in dataTotal array using idProduct
let product=dataTotal.find((element)=>element.id==idProduct)
//Add quantity to the product
product.quantity=quantity;
//push in the cart and save in local storage
cart.push(product)
localStorage.setItem('cart',JSON.stringify(cart))
// Move to Main page
window.location.href = "../MainPage/MainPage.html";

})

// --------------------------- End of Issue 57-Code-Add-To-Cart