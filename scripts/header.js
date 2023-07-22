// select document items
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
const nbar = document.querySelector('header')
const logo = document.querySelector('#logo_text')

const nwhite = "#f4f4eb";
const textcolor = "#7d775e";

// Switching hamburger/xmark when opening/closing drop down menu
toggleBtn.onclick = function () {
   dropDownMenu.classList.toggle('open')
   toggleBtnIcon.classList = dropDownMenu.classList.contains('open')
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars"

   // if opening dropdown
   if (dropDownMenu.classList.contains('open')) {

      toggleBtnIcon.classList = "fa-solid fa-xmark";

      nbar.style.backgroundColor = nwhite;
      nbar.style.transition = ".5s linear";
    
      logo.style.color = textcolor;
      logo.style.textShadow = "none";
      toggleBtnIcon.style.color = textcolor;
      
   // if closing dropdown
   } else {
      toggleBtnIcon.classList = "fa-solid fa-bars"
      nbar.style.backgroundColor = ""
      
      logo.style.color = nwhite;
      toggleBtnIcon.style.color = nwhite;

      // track to see if page is scrolled from top
      window.addEventListener("scroll", function () {
         // below top of page
         if (window.scrollY > 0){
            logo.style.color = textcolor;
            toggleBtnIcon.style.color = textcolor;
         }
         // at top of page and dropdown closed (must check again since using an even listener)
         else if (toggleBtnIcon.classList == "fa-solid fa-bars") {
            logo.style.color = nwhite;
            toggleBtnIcon.style.color = nwhite;
         }
      })  
   }
}

// Closes drop-down menu when clicking on a link 
document.onclick = function (e) {
   if (e.target.classList == 'drop_link') {
      toggleBtnIcon.classList = dropDownMenu.classList.contains('open')
         ? "fa-solid fa-bars"
         : "fa-solid fa-xmark"
      dropDownMenu.classList.remove('open');
      nbar.style.backgroundColor = ""
   }
   // Change color of header text / icon to white when at the top of the page
   // track to see if page is scrolled from top
   window.addEventListener("scroll", function () {
      // below top of page
      if (window.scrollY > 0){
         logo.style.color = textcolor;
         toggleBtnIcon.style.color = textcolor;
      }
      // at top of page and drop-down closed (must check again since using an even listener)
      else if (toggleBtnIcon.classList == "fa-solid fa-bars") {
         logo.style.color = nwhite;
         toggleBtnIcon.style.color = nwhite;
      }
   })  
}

// top of page header
window.addEventListener("scroll", function () {
   var header = document.querySelector("header");
   header.classList.toggle("top", window.scrollY === 0);
})

window.scroll(function()  {
   if (win.scrollTop() == 0){
      logo = 'red'
   }
});

// sticky header
window.addEventListener("scroll", function () {
   var header = document.querySelector("header");
   header.classList.toggle("sticky", window.scrollY > 0);
})
