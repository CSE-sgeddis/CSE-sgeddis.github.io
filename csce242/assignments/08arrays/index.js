const beforeImages = {
    "Bella": "https://preview.redd.it/tana-from-tvt-positive-living-with-a-homeless-man-to-being-v0-28g9wpepdyqf1.jpg?width=1080&crop=smart&auto=webp&s=864fdf07119b3b26c7eb81c611ae7bae35f9d97d",
    "Max": "https://preview.redd.it/little-chances-glow-up-v0-johk0cts2mpf1.jpg?width=1080&crop=smart&auto=webp&s=3c14597ea3f4624d77115104419ba4b0ecfdae9d",
    "Luna": "https://preview.redd.it/1-year-difference-v0-0xbjl2tlq4pf1.jpg?width=640&crop=smart&auto=webp&s=08d1adb1a4f8e49bf22dc59858d4dec09e13b3f8",
    "Charlie": "https://preview.redd.it/roaming-the-streets-of-greece-to-aging-in-reverse-in-texas-v0-b9g84z3weipf1.jpg?width=1080&crop=smart&auto=webp&s=a02bfa5fa5729f36fffb84dba5688c4b6068fcc3",
    "Lucy": "https://preview.redd.it/4-months-of-progress-for-rescue-willa-v0-vs8028qgr1of1.jpg?width=1080&crop=smart&auto=webp&s=8e9c1e455a71de59f066621aefbaf308f8ae6dd5",
    "Cooper": "https://preview.redd.it/lily-finally-has-the-life-she-deserves-v0-2rkuhjdnwklf1.jpg?width=640&crop=smart&auto=webp&s=88afb7e1463bd62ce65394b7680786bcba84bc5a"
};

const afterImages = {
    "Bella": "https://preview.redd.it/tana-from-tvt-positive-living-with-a-homeless-man-to-being-v0-00ljg8epdyqf1.jpg?width=1080&crop=smart&auto=webp&s=0775d1e64cdb0b0b6336f91af36609d07007ef7b",
    "Max": "https://preview.redd.it/little-chances-glow-up-v0-2dtg7cts2mpf1.jpg?width=1080&crop=smart&auto=webp&s=036b3c2776967d926679375c14a95d44f9e8104a", 
    "Luna": "https://preview.redd.it/1-year-difference-v0-wwdukbdmq4pf1.jpg?width=1080&crop=smart&auto=webp&s=c1853f543709b38f6d2eabb4c2eb857e73420aa7",
    "Charlie": "https://preview.redd.it/roaming-the-streets-of-greece-to-aging-in-reverse-in-texas-v0-zspqfr4weipf1.jpg?width=1080&crop=smart&auto=webp&s=3a12c5a53d4d0c927dcea43fc562ac059edbb25b",
    "Lucy": "https://preview.redd.it/4-months-of-progress-for-rescue-willa-v0-6zhhkbqgr1of1.jpg?width=1080&crop=smart&auto=webp&s=cb61be80f0cf02548814bb73aad8e9189114ee1b",
    "Cooper": "https://preview.redd.it/lily-finally-has-the-life-she-deserves-v0-60d964iqwklf1.jpg?width=1080&crop=smart&auto=webp&s=b7d55071ff2e1315c69422cad9d87ea58bfe79cc"
};

// DOM elements
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupTitle = document.getElementById('popup-title');
const closeBtn = document.getElementById('close');

// Load and display all before images when page loads
const loadDogs = () => {
    Object.keys(beforeImages).forEach(dogName => {
        const dogCard = document.createElement('div');
        dogCard.className = 'dog-card';
        dogCard.innerHTML = `
            <img class="dog-image" src="${beforeImages[dogName]}" alt="${dogName}">
            <div class="tooltip">${dogName} - Please Adopt!</div>
        `;
                
        // Add click event listener to show popup
        dogCard.addEventListener('click', () => showPopup(dogName));
                
        gallery.appendChild(dogCard);
    });
};

// Show popup with after image
const showPopup = (dogName) => {
    popupImage.src = afterImages[dogName];
    popupImage.alt = dogName;
    popupTitle.textContent = dogName;
    popup.classList.remove('hidden');
};

// Close popup
const closePopup = () => {
    popup.classList.add('hidden');
};

// Event listeners
closeBtn.addEventListener('click', closePopup);

// Close popup when clicking outside of content
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
        closePopup();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', loadDogs);