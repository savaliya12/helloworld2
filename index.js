$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
}

let workHeading = document.getElementsByClassName("work-heading");
workHeading.addEventListener("click", () => {
    workHeading.classList.add(heading - bar);
})