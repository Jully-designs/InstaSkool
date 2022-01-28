//show banner on load
const bannerItems = document.querySelectorAll(".bannerItem");

const showBanner = () => {
  for(let x = 0; x < bannerItems.length; x++ ){
    bannerItems[x].classList.add("shwBannerItem");
  }
}
window.addEventListener("load", showBanner);

//show parts of index page when scrolled to part

//show other landing page Items
const appearItems = document.querySelectorAll(".scroll");

const appearOnScroll = () => {
  for(let i = 0; i < appearItems.length; i++){
    const screenPosition = window.innerHeight;
    const itemPosition = appearItems[i].getBoundingClientRect().top;

    if(screenPosition > itemPosition){
      appearItems[i].classList.add("scrolled");
    }else{
      appearItems[i].classList.remove("scrolled");
    }
  }
}

window.addEventListener("scroll", appearOnScroll)

//Variable Declarations
var expandBtn =  document.querySelectorAll(".expand-content");
var termContent = document.querySelectorAll(".term-content");
var sideNav = document.querySelector(".sidenav");
var menuIcon =  document.querySelector(".menu-icon");
var closeBtn = document.querySelector(".closebtn");
var drpDwnIcon = document.querySelectorAll("#video-drpdwn");
var courseContent = document.querySelectorAll(".course-content");
var shwLogout = document.querySelector(".logout-drpdwn");
var teacherDrpdwn = document.querySelector(".teacher-drpdwn");
var adminCaret = document.querySelector("#admin-caret");
var shwProfile = document.querySelector(".admin-profile");


//toggle video
drpDwnIcon.forEach(function(x) {
  x.addEventListener('click', function(e) {
    const clickedBtnIndex = [...drpDwnIcon].indexOf(e.target);
    courseContent[clickedBtnIndex].classList.toggle("show-video");
  });
});

//expand term dropdown
expandBtn.forEach(function(i) {
  i.addEventListener('click', function(e) {
    const clickedBtnIndex = [...expandBtn].indexOf(e.target);
    termContent[clickedBtnIndex].classList.toggle("show");
  }) 
});

//menu-icon
menuIcon.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

adminCaret.addEventListener("click", shwAdmin);

function openNav () {
  sideNav.classList.add("sidenav-show");
}
function closeNav (){
  sideNav.classList.remove("sidenav-show");
}

function openTeacherNav (){
  teacherDrpdwn.classList.add("teacher-show");
}
function closeTeacherNav (){
  teacherDrpdwn.classList.remove("teacher-show");
}

//show logout on settings page
function shwContent () {
  shwLogout.classList.toggle("shw-logout");
}

//show admin profile
function shwAdmin () {
  shwProfile.classList.toggle("shw-admin-profile");
}

$(document).ready( function () {
  $('#table_id').DataTable();
});