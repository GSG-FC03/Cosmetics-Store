//Declare variables 
const firstSection=document.querySelector('section');
const img=document.querySelector('img');
const ProdectName=document.querySelector('.ProdectName');
const desc=document.querySelector('.desc');
const priceOfProducts=document.querySelector('.priceOfProducts');

const idProduct=Number(localStorage.getItem('idProduct'));// get id from local storage

setTimeout((idProduct)=>{
    const dataTotal=JSON.parse(localStorage.getItem('dataTotal'));// get dataTotalfrom L.S 
    for(let i=0;i<dataTotal.length;++i){ // loop on dataTotal to view description about id product
        if(dataTotal[i].id == idProduct){
            img.setAttribute('src',dataTotal[i].image);
            ProdectName.textContent=dataTotal[i].name;
            desc.textContent=dataTotal[i].description;
            priceOfProducts.textContent=dataTotal[i].price+'$';
        }
    }
});