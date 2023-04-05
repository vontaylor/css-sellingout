document.getElementById('darkmode-toggle').addEventListener('change', (event) => {
    document.body.classList.toggle('darkmode', event.target.checked);
});

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    // If hour is 0, set it to 12 (12-hour format)
    hours = hours ? hours : 12;

    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm} EST`;
    timeElement.textContent = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);

const productImages = document.querySelectorAll('.product-img');

productImages.forEach((img) => {
    img.addEventListener('mouseover', () => {
        const hoverSrc = img.getAttribute('data-hover-src');
        img.setAttribute('src', hoverSrc);
    });

    img.addEventListener('mouseout', () => {
        const originalSrc = img.getAttribute('data-original-src');
        img.setAttribute('src', originalSrc);
    });

    img.setAttribute('data-original-src', img.getAttribute('src'));
});

const subscribeNavItem = document.querySelector('.nav-right .nav-item:nth-child(3)');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close');

subscribeNavItem.addEventListener('click', () => {
    popupOverlay.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});

// Show the subscribe form when the subscribe nav item is clicked
subscribeNavItem.addEventListener('click', (event) => {
    event.preventDefault();
    // Your code to show the subscribe form
});

const socialMediaIcons = document.querySelector('.social-media-icons');

// Show social media icons when the user scrolls to the end of the page
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.body.classList.add('scrolled-to-end');
    } else {
        document.body.classList.remove('scrolled-to-end');
    }
});
