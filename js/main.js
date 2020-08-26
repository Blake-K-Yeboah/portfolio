AOS.init();

const seeMyWork = document.querySelector('#seeMyWork');

seeMyWork.addEventListener('click', () => {

    window.location = '#projects';

});

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

const contactForm = document.querySelector('#contact');
const errorAlert = document.querySelector('#contact-alert');

contactForm.addEventListener('submit', e => {

    const handleErr = () => {
        e.preventDefault();
        errorAlert.style.display = 'block';
    }

    let firstname = document.querySelector('#firstname'),
        lastname = document.querySelector('#lastname'),
        email = document.querySelector('#email'),
        message = document.querySelector('#message');

    if (!firstname.value || !lastname.value || !email.value || !message.value || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        handleErr();
    }

});

const errorClose = document.querySelector('#error-close');

errorClose.addEventListener('click', () => {

    errorAlert.style.display = "none";

});
