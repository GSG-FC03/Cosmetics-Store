window.onclick = function (event) {
// A. Code for add quantity button
if (event.target.getAttribute("class") == "fas fa-plus-circle plussign") { //if button is add button
let quantityspan=event.target.parentElement.getElementsByClassName('quantity')[0].getElementsByClassName('quantityProdcut')[0];// get quanaity element from DOMquantityProduct
let idProduct=event.target.parentElement.getElementsByClassName('productId')[0].textContent;// get id element from DOM
console.log(idProduct)
let cart= JSON.parse(localStorage.getItem('cart')); // get cart from local storage

quantityspan.textContent=parseInt(quantityspan.textContent)+1 //add 1 to quantity in Dom

let product=cart.find((elm)=>elm.id==idProduct) //find product in cart array based on id
let index= cart.indexOf(product) // get product index in cart array
cart[index].quantity=parseInt(cart[index].quantity)+1 // add 1 to quantity in local sotrage
localStorage.setItem('cart',JSON.stringify(cart)) // save back new cart array in local storage

totalPrice(cart) // Invoke caluclation of sum
getSelectedValue() // Innvoke currency exchange
}

// B. Code for decrease quantity button
else if (event.target.getAttribute("class") == "fas fa-minus-circle minussign" && //if button is add button
event.target.parentElement.getElementsByClassName('quantity')[0].getElementsByClassName('quantityProdcut')[0].textContent>1) { // if qunatity > 1
    let quantityspan=event.target.parentElement.getElementsByClassName('quantity')[0].getElementsByClassName('quantityProdcut')[0];// get quanaity element from DOMquantityProduct
    let idProduct=event.target.parentElement.getElementsByClassName('productId')[0].textContent;// get id element from DOM
    console.log(idProduct)
    let cart= JSON.parse(localStorage.getItem('cart')); // get cart from local storage
    
    quantityspan.textContent=parseInt(quantityspan.textContent)-1 //add 1 to quantity in Dom
    
    let product=cart.find((elm)=>elm.id==idProduct) //find product in cart array based on id
    let index= cart.indexOf(product) // get product index in cart array
    cart[index].quantity=parseInt(cart[index].quantity)-1 // add 1 to quantity in local sotrage
    localStorage.setItem('cart',JSON.stringify(cart)) // save back new cart array in local storage
    
    totalPrice(cart) // Invoke caluclation of sum
    getSelectedValue() // Innvoke currency exchange
    }

// C. Code for delete button
else if (event.target.getAttribute("class") == "??????? x class"){



}

}
// St. Declare variables
const allcart = document.querySelector(".allCart");
const cartTotal = JSON.parse(localStorage.getItem("cart"));
// check if cartTotal not empty, if not then create elementes that whose contents are from the cartTotal
if (cartTotal.length != 0)
  cartTotal.forEach((element) => {
    // loop in cartTotal to get contnets
    let myCart = `<div class='cart'>`; // create elements

    myCart += `<div class="img">`;
    myCart += `<img src="${element.image}" alt="sadas" />`;
    myCart += `</div>`;

    myCart += `<div class="detail">`;
    myCart += `<span id="productId" class="productId" style="display:none">${element.id}</span>`;
    myCart += `<h3 id="productName">${element.name}</h3>`;
    myCart += `<p id="quantity" class="quantity">Quantity:
                 <span id="quantityProdcut" class='quantityProdcut'>${element.quantity}</span>
                </p>`;
    myCart += `<p id="priquantityce"><span>Price: </span>${element.price}$</p>`;
    myCart += `<i class="fas fa-plus-circle plussign"></i> <i class="fas fa-minus-circle minussign"></i>
      <i class="fas fa-times deleteIcon" id='deleteIcon'></i>`;
    myCart += `</div>`;

    myCart += `</div>`;
    allcart.innerHTML += myCart;
  });
else {
  // if cartTotal empty convert user to MainPage
  allcart.innerHTML = `<h2>You don't have any Products, Please browse products from <a href=../MainPage/MainPage.html>here</a></h2>`;
}

