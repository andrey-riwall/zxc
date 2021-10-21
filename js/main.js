document.addEventListener('DOMContentLoaded', () => {
    
    const burgerBtn = document.querySelector(".burger");
    const burger = document.querySelector(".burger-popup");
    burgerBtn.onclick = () => {
        burger.classList.toggle('is_active');
    };

    const burgerClose = document.querySelector(".burger-close");
    burgerClose.onclick = () => {
        burger.classList.remove('is_active');
    };

})