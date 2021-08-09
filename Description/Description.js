// St of Issue 57-Code-Add-To-Cart -----------------------------------

// Capture add to cart button from DOM
let addToCartBtn = document.getElementById('addToCartBtn');

//Create cart array in local strorage if it is not created yet
if (localStorage.getItem('cart')==null) {
localStorage.setItem("cart",JSON.stringify([]))
}

// Action to do on click on addToCartBtn
addToCartBtn.addEventListener('click',(event)=>{
let cart =JSON.parse(localStorage.getItem('cart'))
let idProduct =JSON.parse(localStorage.getItem('idProduct'))



})



// --------------------------- End of Issue 57-Code-Add-To-Cart