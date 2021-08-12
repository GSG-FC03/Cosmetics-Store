window.onclick = function (event) {
// A. Code for add quantity button
if (event.target.getAttribute("class") == "fas fa-plus-circle plussign") { //if button is add button
let quantityspan=event.target.parentElement.getElementById('quantityProduct');// get quanaity element from DOM
let idProduct=event.target.parentElement.getElementsByClassName(('productId')[0];// get id element from DOM
let cart= JSON.parse(localStorage.getItem('cart')); // get cart from local storage

quantityspan.textContent+=1 //add 1 to quantity in Dom

let product=cart.find((elm)=>elm.id=idProduct) //find product in cart array based on id
let index= cart.indexOf(product) // get product index in cart array
cart[index].quantity+=1 // add 1 to quantity in local sotrage
localStorage.setItem('cart',JSON.stringify(cart)) // save back new cart array in local storage

totalPrice(cart) // Invoke caluclation of sum
getSelectedValue() // Innvoke currency exchange
}

// B. Code for decrease quantity button
else if (event.target.getAttribute("class") == "fas fa-minus-circle minussign" && //if button is add button
event.target.parentElement.getElementById('quantityProduct').textContent>1) { // if qunatity > 1
    let quantityspan=event.target.parentElement.getElementById('quantityProduct');// get quanaity element from DOM
    let idProduct=event.target.parentElement.getElementsByClassName(('productId')[0];// get id element from DOM
    let cart= JSON.parse(localStorage.getItem('cart')); // get cart from local storage
    
    quantityspan.textContent-=1 //add 1 to quantity in Dom
    
    let product=cart.find((elm)=>elm.id=idProduct) //find product in cart array based on id
    let index= cart.indexOf(product) // get product index in cart array
    cart[index].quantity-=1 // add 1 to quantity in local sotrage
    localStorage.setItem('cart',JSON.stringify(cart)) // save back new cart array in local storage
    
    totalPrice(cart) // Invoke caluclation of sum
    getSelectedValue() // Innvoke currency exchange
    }

// C. Code for delete button
else if (event.target.getAttribute("class") == "??????? x class"){



}

}