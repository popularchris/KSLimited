let navLinks = document.querySelectorAll(' nav   li');
navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => {
                item.classList.remove('active')
                this.classList.add('active')
            })
        })
    })
    /*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content', '.ceop', { origin: 'top' });
ScrollReveal().reveal('nile-heading', { origin: 'top' });
ScrollReveal().reveal('nile-para', { origin: 'bottom' });
ScrollReveal().reveal('.destination-plan', { origin: 'bottom' });
ScrollReveal().reveal('.content-para', { origin: 'bottom' });
ScrollReveal().reveal('.arrow-down', { origin: 'top' });
ScrollReveal().reveal('.spanp', { origin: 'bottom' });
ScrollReveal().reveal('.starter-content', { origin: 'top' });
ScrollReveal().reveal('.', { origin: 'top' });
ScrollReveal().reveal('.about-content', { origin: 'top' });
ScrollReveal().reveal('.lake-heading', { origin: 'bottom' });
ScrollReveal().reveal('.wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.park-content', { origin: 'bottom' });
ScrollReveal().reveal('.park-heading', { origin: 'bottom' })
ScrollReveal().reveal('.culture-heading', { origin: 'bottom' });
ScrollReveal().reveal('.culture-para', { origin: 'bottom' });
ScrollReveal().reveal('.strong', { origin: 'top' });
ScrollReveal().reveal('.ceo-heading', { origin: 'top' });
ScrollReveal().reveal('.about-content', '.home-content', { origin: 'top' });
ScrollReveal().reveal('.services', { origin: 'top' });
ScrollReveal().reveal('.spanheading', { origin: 'top' });
ScrollReveal().reveal('.contact-us', { origin: 'top' });
ScrollReveal().reveal('.contact', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.footer-box', { origin: 'top' });
ScrollReveal().reveal('.portfolio-container', { origin: 'bottom' });
ScrollReveal().reveal('.journey', { origin: 'top' });
ScrollReveal().reveal('.welcome', { origin: 'top' });
ScrollReveal().reveal('.adventure-btn1', { origin: 'bottom' });
ScrollReveal().reveal('.busuwoko-heading', { origin: 'bottom' });
ScrollReveal().reveal('.busuwoko-content', { origin: 'bottom' });
ScrollReveal().reveal('.lake-content', { origin: 'bottom' });
ScrollReveal().reveal('.service-listings', { origin: 'bottom' });
ScrollReveal().reveal('.serviceheading', { origin: 'top' });
ScrollReveal().reveal('.wrapper', { origin: 'top' });
ScrollReveal().reveal('.servicep', { origin: 'top' });
ScrollReveal().reveal('.nile-heading', { origin: 'bottom' });
ScrollReveal().reveal('.nile-content', { origin: 'bottom' });






function toggleMenue() {
    const exertbtn = document.querySelector('.expert-btn')
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('open')
    exertbtn.style.display = 'flex'

}