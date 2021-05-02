const hamburgerButton = document.querySelector('.hamburger-button');
const nav = document.querySelector('.nav');

hamburgerButton.addEventListener('click', function () {

    if (hamburgerButton.classList.contains('--open') && nav.classList.contains('--open')) {
        hamburgerButton.classList.remove('--open');
        nav.classList.remove('--open');
    } else {
        hamburgerButton.classList.add('--open');
        nav.classList.add('--open');
    }

    // hamburgerButton.classList.add("--open");
})