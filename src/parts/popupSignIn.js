function popupSignIn() {
    let popupSignIn = document.querySelector('.popup-sign-in'),
        popupForm = popupSignIn.querySelector('#popup-form');



    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('sign-in')) {
            popupSignIn.style.display = 'block';
            popupSignIn.classList.add('animated', 'fadeInDown');
            document.body.style.overflow = 'hidden';
        }
    });

    popupSignIn.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('popup-close') || e.target.classList.contains('popup-sign-in')) {
            close();
        }

    });

    function close() {
        popupSignIn.style.display = 'none';
        popupForm.style.display = 'block';
        document.body.style.overflow = '';
    }
}

module.exports = popupSignIn;