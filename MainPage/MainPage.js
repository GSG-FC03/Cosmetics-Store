//Declare variables using dom to access elements
const head = document.getElementsByClassName("head")[0];
const recom = document.getElementsByClassName("recom")[0];

head.textContent += " " + localStorage.getItem("userName");

// Create Recommended Section by get data from local Storage.
setTimeout(() => {
  const data = JSON.parse(localStorage.getItem("dataTotal"));

  const headRecom = document.createElement("h2");
  headRecom.textContent = "Recommended Today";
  recom.appendChild(headRecom);

  // Loop => to choose 2 random products from data
  for (let i = 0; i < 2; ++i) {
    let random = Math.floor(Math.random() * data.length);

    const recomBox = document.createElement("section");
    const imageBox = document.createElement("div");
    const recomImg = document.createElement("img");
    const recomDesc = document.createElement("div");
    const idProduct = document.createElement("span");
    const name = document.createElement("h4");
    const spanName = document.createElement("span");
    const price = document.createElement("h4");

    recom.appendChild(recomBox);
    recomBox.appendChild(imageBox);
    imageBox.appendChild(recomImg);
    recomBox.appendChild(recomDesc);
    recomDesc.appendChild(idProduct);
    recomDesc.appendChild(name);
    name.appendChild(spanName);
    recomDesc.appendChild(price);

    recomBox.setAttribute("class", "recomBox");
    imageBox.setAttribute("class", "imageBox");
    recomImg.setAttribute("class", "recomImg");
    recomDesc.setAttribute("class", "recomDesc");
    idProduct.setAttribute("class", "idProduct");
    name.setAttribute("class", "recomName");
    recomImg.setAttribute("src", `${data[random].image}`);

    //Add EnentListener, that work when clicking on the box to convert a user to the description page and Explore data based on id products
    recomBox.addEventListener("click", function () {
      localStorage.setItem("idProduct", data[random].id);
      window.location.href = "../Description/Description.html";
    });

    spanName.textContent = "Name";
    idProduct.textContent = `${data[random].id}`;
    idProduct.style.display = "none";
    name.textContent = `Name: ${data[random].name}`;
    price.textContent = `Price: ${data[random].price}`;
  }
});
