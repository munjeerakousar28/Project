let items = document.querySelectorAll('.slider .list .li');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .li');

// Config parameters
let countItem = items.length;
let itemActive = 0;

// Event: next button click
next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// Event: prev button click
prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto-run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000);

// Function to show the active slider
function showSlider() {
    // Remove active class from old items
    let itemActiveOld = document.querySelector('.slider .list .li.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .li.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Add active class to new items
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // Reset auto-run slider interval
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

// Event: click on thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});


