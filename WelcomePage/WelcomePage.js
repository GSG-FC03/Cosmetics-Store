const inpName = document.getElementsByClassName('inpName')[0];
const btnLogin = document.getElementsByClassName('btnLogin')[0];

btnLogin.onclik = welcome;

function welcome(e){
    if(inpName.value == '') 
        alert('Enter Your Name Please');
    else{
        e.preventDefault();
        localStorage.setItem('userName',inpName.value);
        window.location.href = "../MainPage/MainPage.html";
        inpName.value='';       
    }
}