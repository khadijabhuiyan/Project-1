let searchTrigger = document.getElementById('search_btn');
let searchOverlay = document.getElementById('search_overlay_wrapper');
let searchCloseBtn = document.getElementById('so_close_btn');
let searchInput = document.getElementById('search_input');
let searchBtn = document.getElementById('so_search_btn');
let body = document.body;

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






