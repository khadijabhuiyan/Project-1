let searchTrigger = document.getElementById('search_btn');
let searchOverlay = document.getElementById('search_overlay_wrapper');
let searchCloseBtn = document.getElementById('so_close_btn');
let searchInput = document.getElementById('search_input');
let searchBtn = document.getElementById('so_search_btn');
let body = document.body;
let toggleTrigger = document.getElementById('menu-toggle-btn');
let mobileNav = document.getElementById('mobile_nav_wrapper'); 
let header = document.getElementById('header'); 
let toggleIcon = document.getElementById('toggle-icon');

let searchOpen = () =>{
    searchOverlay.style.display = 'flex';
    body.classList.add('search-fullscreen-active');
}
function searchClose() {
    searchOverlay.style.display = 'none';
    body.classList.remove('search-fullscreen-active');
}

searchTrigger.addEventListener('click', searchOpen);
searchCloseBtn.addEventListener('click', searchClose);

document.addEventListener('keydown', (event) => {
    if(body.classList.contains('search-fullscreen-active') && event.key === "Escape") {
        searchClose();
    }
});




let OpenMobileMenu = () => {
    mobileNav.style.transform = 'translateX(0)';
    header.style.transform = 'translateX(-300px)';
    body.classList.add('mobile_nav_active');
    toggleIcon.src = "../img/logos/close.webp";
    toggleIcon.style.animation= "rotateIn .5s ease-in-out";
    body.style.overflow = 'hidden';
}
let CloseMobileMenu = () => {
    mobileNav.style.transform = 'translateX(300px)';
    header.style.transform = 'translateX(0px)';
    body.classList.remove('mobile_nav_active');
    toggleIcon.src = "../img/logos/toggle.webp";
     toggleIcon.style.animation= "rotateOut .5s ease-in-out";
     body.style.overflow = 'auto';
}
toggleTrigger.addEventListener('click', () => {
    if (body.classList.contains('mobile_nav_active')) {
        CloseMobileMenu();
    } else {
        OpenMobileMenu();
    }
});







