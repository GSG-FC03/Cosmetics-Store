window.onclick = function (event) {
// A. Code for add quantity button
if (event.target.getAttribute("class") == "??????") { //if button is add button
let quantity=event.target.parentElement.getElementById('quantity ????');// get quanaity element from DOM
let idProduct=event.target.parentElement.getElementById('idProduct ????');// get id element from DOM
let cart= JSON.parse(localStorage.getItem('cart')); // get cart from local storage

quantity.textContent+=1 //add 1 to quantity in Dom

let product=cart.find((elm)=>elm.id=idProduct) //find product in cart array based on id
let index= cart.indexOf(product) // get product index in cart array
cart[index].quantity+=1 // add 1 to quantity in local sotrage
localStorage.setItem('cart',JSON.stringify(cart)) // save back new cart array in local storage

sumTotal() // run function to calculate total sum

}

// B. Code for decrease quantity button
if (event.target.getAttribute("class") == "??????") {

}

// C. Code for delete button



}