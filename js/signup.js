//Navigation Part start
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
//Navigation Part end

//Signup or Login start
let signUpBtn= document.querySelector('.signupbtn');
let signInBtn=document.querySelector('.signinbtn');
let nameField=document.querySelector('.namefield');
let title=document.querySelector('.title');
let underline=document.querySelector('.underline');
let text=document.querySelector('.text');
signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.innerHTML ='Sign In';
    text.innerHTML ='Lost Password ';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform ='translateX(35px)';
});


signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML ='Sign Up';
    text.innerHTML ='Password Suggestions ';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform ='translateX(0)';
});


// Signup or Login end