function tabs() {
    
    let tab = document.querySelectorAll('.header-tab'),
        menu = document.querySelector('.portfolio-menu'),
        tabContent = document.querySelectorAll('.tabcontent');

    function hideContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
        }
        for (let i = a; i < tab.length; i++){
            tab[i].classList.remove('active');
        }
    }
    hideContent(1);

    function showContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
        }
        tab[b].classList.add('active');
    }

    menu.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (target && target.classList.contains('header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;