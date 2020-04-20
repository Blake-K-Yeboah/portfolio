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
});

const codeButtons = document.querySelectorAll('.code-btn');

const redirect = (link) => {
    window.open(link, '_blank');
}

codeButtons.forEach(button => button.addEventListener('click', () => {
    redirect(button.getAttribute('data-github'));
}));

const previewButtons = document.querySelectorAll('.preview-btn');

previewButtons.forEach(button => button.addEventListener('click', () => {
    redirect(button.getAttribute('data-website'));
}));