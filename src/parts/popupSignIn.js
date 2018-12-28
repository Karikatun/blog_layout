function popupSignIn() {
    let popupConsult = document.querySelector('.popup-sign-in'),
        popupForm = popupConsult.querySelector('#popup-form');



    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('sign-in')) {
            popupConsult.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });

    popupConsult.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('popup-close') || e.target.classList.contains('popup-sign-in')) {
            close();
        }

    });

    function close() {
        popupConsult.style.display = 'none';
        popupForm.style.display = 'block';
        document.body.style.overflow = '';
    }
}

module.exports = popupSignIn;