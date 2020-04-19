AOS.init();

const seeMyWork = document.querySelector('#seeMyWork');

seeMyWork.addEventListener('click', () => {

    window.location = '#projects';

});

window.addEventListener('scroll', () => {

    const scrollTop = window.pageYOffset;

    const navbar = document.querySelector('#navbar');

    if (scrollTop >= 100) {

        navbar.classList.add('contract');

    } else {

        navbar.classList.remove('contract');

    }
})