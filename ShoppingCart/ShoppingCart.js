//  get items from the local store age 
 let getCart = localStorage.getItem('cart')
 let cart = JSON.parse(getCart);

//  this func sums all the items that already exists in the local storeage
function totalPrice(arr){
    let finalResult = [];
    for (let i=0; i<arr.length; i++){

        finalResult.push(arr[i].price * arr[i].quantity)
    }
    const reducer = (accumulator, curr) => accumulator + curr;
    finalResult.reduce(reducer)
return finalResult.reduce(reducer)
}
totalPrice(cart)

//  get the select to js to manipulate whis value later in the function getSelectedValue()
let currency = document.getElementById('exchange');

// function multiply the total value with the currencey coin type and return the final result 
// we well call this function in the select box  onchange = "getSelectedValue()"
function getSelectedValue(){
    let selectedValue = document.getElementById("exchange").value;
 
    let price = document.getElementById('price')
    let  coinType = localStorage.getItem('Exch_Rates');
   let final=  JSON.parse(coinType)
    if (currency.value == 'EUR'){
     
       return price.textContent = totalPrice(cart)*final.EUR + ' €'
    }
   else if (currency.value == 'GBP'){
        return price.textContent = totalPrice(cart)*final.GBP + ' £'
     }
     else if (currency.value == 'CHF'){
        return price.textContent = totalPrice(cart)*final.CHF //i didn't find spicial symbol for this coin type
     }
     else {
        return price.textContent = totalPrice(cart)*final.USD + ' $'
     }
}
getSelectedValue()