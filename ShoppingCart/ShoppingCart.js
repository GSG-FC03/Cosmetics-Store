//  get items from the local store age 
 let cart = localStorage.getItem('cart')

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


