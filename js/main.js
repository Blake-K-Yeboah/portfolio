window.addEventListener('scroll', () => {

    const scrollTop = window.pageYOffset;

    const navbar = document.querySelector('#navbar');

    if (window.innerWidth > 728) {

        if (scrollTop >= 100) {

            navbar.classList.add('contract');

        } else {

            navbar.classList.remove('contract');

        }

    }
});