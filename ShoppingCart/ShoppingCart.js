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
    myCart += `<span class='productId' style="display:none">${element.id}</span>`;
    myCart += `<h3 id="productName">${element.name}</h3>`;
    myCart += `<p id="quantity">Quantity:
                 <span id='quantityProdcut'>${element.quantity}</span>
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

