function hereBtn() {
    let hereBtn = document.querySelector('.here'),
        tab = document.querySelectorAll('.header-tab'),
        menu = document.querySelector('.portfolio-menu'),
        tabContent = document.querySelectorAll('.tabcontent');

    function hideContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
        }
        for (let i = a; i < tab.length; i++) {
            tab[i].classList.remove('active');
        }
    }


    function showContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
        }
        tab[b].classList.add('active');
    }

    hereBtn.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (target && target.classList.contains('here')) {
                hideContent(0);
                showContent(2);
            }
        
    });
}


module.exports = hereBtn;