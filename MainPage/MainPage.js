//Declare variables using dom to access elements
const head=document.getElementsByClassName('head')[0];

head.textContent+=' '+localStorage.getItem('userName');