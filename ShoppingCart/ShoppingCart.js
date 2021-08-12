// get item from local storeage 
let getCart = localStorage.getItem("cart");
let cart = JSON.parse(getCart)
let selectBox = document.getElementById("exchange");
let price = document.getElementById('price');
let currency = document.getElementById('exchange');

// function that calculate all itemm price in the local storeage cart price * quantity 
function totalPrice(arr){
    let final = [];
    for (let i=0; i<arr.length; i++){

final.push(arr[i].price * arr[i].quantity)
    }
    const reducer = (accumulator, curr) => accumulator + curr;
return final.reduce(reducer)
}
totalPrice(cart)

// func that multiply the total price with curruncey value based on what user choose on the select box  
function getSelectedValue(){
    let selectedValue = selectBox.value;
    let  coinType = localStorage.getItem('Exch_Rates');
    let final=  JSON.parse(coinType)
    if (currency.value == 'EUR'){
     
       return price.textContent = totalPrice(cart)*final.EUR + ' €'
    }
   else if (currency.value == 'GBP'){
        return price.textContent = totalPrice(cart)*final.GBP + ' £'
     }
     else if (currency.value == 'CHF'){
        return price.textContent = totalPrice(cart)*final.CHF
     }
     else {
        return price.textContent = totalPrice(cart)*final.USD + ' $'
     }
}
getSelectedValue()