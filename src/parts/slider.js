function Slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.services'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');


    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');


        slides[slideIndex - 1].style.display = 'block';
        slides.forEach((item) => item.classList.add('animated', 'fadeIn'));        
    }


    prev.addEventListener('click', () => {
        showSlides(slideIndex -= 1);
        slides[slideIndex - 1].classList.replace('fadeInRight', 'fadeInLeft');

    });

    next.addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });

    setTimeout(function sliderTimer() {
        showSlides(slideIndex += 1);
        setTimeout(sliderTimer, 8000);
    });
}

module.exports = Slider;