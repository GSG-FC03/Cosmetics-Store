

























//////// St Quantity code

let count=1;
const quantity=document.querySelector('#quantityText');
const plusSign =document.querySelector('.plussign ');
const minusSign=document.querySelector('.minussign');

quantity.textContent=count;

// fun. to increment count when clicking on plus icon and to Calculate the total price
plusSign .addEventListener('click',function(){
    count+=1;
    quantity.textContent=count;
   const totalPrice=numPrice*count;
    priceOfProducts.textContent=totalPrice+'$'; 
});

// fun. to decrement count when clicking on minus icon and to Calculate the total price
minusSign.addEventListener('click',function(){   
    if(count>0){ 
        count-=1;
        if(count!=0){ // if count not equal to zero then calculate total price and update content of priceOfProduct       
            quantity.textContent=count;
            const totalPrice=numPrice*count;
            priceOfProducts.textContent=totalPrice+'$';
        }       
    }
});