/* JavaScript */

$(document).ready(function() {
    $('.js_carousel').slick({
        arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  });







// 👉  toggle sidebar
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('#menu-toggle');
const body = document.querySelector('body');
// console.log(body);

menuToggle.addEventListener('click', (event) => {
  sidebar.classList.toggle('open');
//   menuToggle.classList.add('hide');
  event.stopPropagation(); // add this line to prevent event bubbling
});

body.addEventListener("click", (event) => {
  if (!event.target.closest('.sidebar')) {
    sidebar.classList.remove('open');
  }
//   if (!event.target.closest('.sidebar') && !event.target.closest('.menu-icon')) {
//     sidebar.classList.remove('open');
//     // menuToggle.classList.remove('hide');
//   }
});



//👉 slick slide carousel slide

