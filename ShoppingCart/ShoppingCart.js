// St of List all prodcuts ----------------------------------------------------------
// St. Declare variables
const allcart = document.querySelector(".allCart");
const cartTotal = JSON.parse(localStorage.getItem("cart"));

//if cart is empty from page start
if (cartTotal==null) {allcart.innerHTML = `<h2>You don't have any Products, Please browse products from <a href=../MainPage/MainPage.html>here</a></h2>`}

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
    myCart += `<p id="priquantityce"><span>Unit Price: </span>${element.price}$</p>`;
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
// --------------------------------------------------End of List all prodcuts 

// St of increase & decrease &delete issue ---------------------------------------------
window.onclick = function (event) {
// A. Code for add quantity button
if (event.target.getAttribute("class") == "fas fa-plus-circle plussign") { //if button is add button
let quantityspan=event.target.parentElement.getElementsByClassName('quantity')[0].getElementsByClassName('quantityProdcut')[0];// get quanaity element from DOMquantityProduct
let idProduct=event.target.parentElement.getElementsByClassName('productId')[0].textContent;// get id element from DOM
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
else  if (event.target.getAttribute("id") == "deleteIcon") { // check if the user click on target product to remove it
  let idProduct = event.target.parentElement.firstChild.textContent;   //  get the id value for target product
  let cart= JSON.parse(localStorage.getItem('cart')); 
  let product=cart.find((elm)=>elm.id==idProduct);

  let index = cart.indexOf(product);
  cart.splice(index, 1); 
  localStorage.setItem("cart", JSON.stringify(cart)); // Update th cart on localstorage
  event.target.parentNode.parentNode.remove();    // remove product from page
  if (cart.length == 0) {    // if cart empty convert user to MainPage
    allcart.innerHTML = `<h2>You don't have any Products, Please browse products from <a href=../MainPage/MainPage.html>here</a></h2>`;
  }
totalPrice(cart) // Invoke caluclation of sum
getSelectedValue() // Innvoke currency exchange 
} 

}

// St of Total Issue -----------------------------------------------
// Declare initial variables
const getCart = localStorage.getItem("cart"); 
const cart = JSON.parse(getCart) //get item from local storeage 
const price = document.getElementById('price'); // get price span form DOM
const currency = document.getElementById('exchange'); //get input from DOM

// function that calculate all itemm price in the local storeage cart price * quantity 
function totalPrice(arr){
  if(arr[0]==null||arr[0]==[]||arr[0]==undefined){return 0} // if condition to return 0 if cart is empty
  else {
    let final = []; 
    for (let i=0; i<arr.length; i++){

  final.push(arr[i].price * arr[i].quantity) // create array final and push price and quantity
    }
    const reducer = (accumulator, curr) => accumulator + curr;
return Math.round(final.reduce(reducer)*100)/100 //return final price rounded
  }
}
totalPrice(cart)

// func that multiply the total price with curruncey value based on what user choose on the select box  
function getSelectedValue(){
    const  coinType = localStorage.getItem('Exch_Rates'); // they must be called again to get latest update
    const getCart = localStorage.getItem("cart");
    const cart = JSON.parse(getCart)
    const final=  JSON.parse(coinType)
  
    if (currency.value == 'EUR'){
     
       return price.textContent = Math.round(totalPrice(cart)*final.EUR*100)/100 + ' €'
    }
   else if (currency.value == 'GBP'){
        return price.textContent = Math.round(totalPrice(cart)*final.GBP*100)/100 + ' £'
     }
     else if (currency.value == 'CHF'){
        return price.textContent = Math.round(totalPrice(cart)*final.CHF*100)/100
     }
     else {
        return price.textContent = Math.round(totalPrice(cart)*final.USD*100)/100 + ' $'
     }
}
getSelectedValue()
// ---------------------------------------------------- End of Total Sum issue