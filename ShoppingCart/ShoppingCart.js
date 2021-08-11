//Delete Products from page and local storage
window.onclick = function (event) {
  let cart = JSON.parse(localStorage.getItem("cart"));// get cart from L.s that contain products that user selected it
  if (event.target.getAttribute("id") == "deleteIcon") { // check if the user click on target product to remove it
    let idProduct = event.target.parentElement.firstChild.textContent;   //  get the id value for target product
    let product=cart.find((elm)=>elm.id==idProduct);

    let index = cart.indexOf(product);
    cart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cart)); // Update th cart on localstorage
    event.target.parentNode.parentNode.remove();    // remove product from page
    if (cart.length == 0) {    // if cart empty convert user to MainPage
      allcart.innerHTML = `<h2>You don't have any Products, Please browse products from <a href=../MainPage/MainPage.html>here</a></h2>`;
    }
  }
};