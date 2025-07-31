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
ScrollReveal().reveal('.lake-para', { origin: 'top' });
ScrollReveal().reveal('.park-para', { origin: 'bottom' });
ScrollReveal().reveal('.wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.park-content', { origin: 'bottom' });
ScrollReveal().reveal('.park-heading', { origin: 'bottom' });
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



const menuIcon = document.querySelector('.menu-icon1')
menuIcon.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('open')
})


function sendMail() {
    let checkedItems = []
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            checkedItems.push(item.value)
        }
    })
    const selectbtn = document.getElementById('select')
    const accomodation = document.getElementById('Accomodation')

    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        country: document.getElementById('country').value,
        number: document.getElementById('number').value,
        date: document.getElementById('date').value,
        people: document.getElementById('people').value,
        subject: document.getElementById('subject').value,
        days: document.getElementById('days').value,
        activities: checkedItems,
        Budget: selectbtn.value,
        accomodation: accomodation.value

    }
    console.log(`param 1,${params}`)
    emailjs.send('service_nihox9k', 'template_pzv5l58', params).then(
        (response) => {
            if (response.status === 200) {
                document.getElementById('name').value = '',
                    document.getElementById('email').value = '',
                    document.getElementById('message').value = '',
                    document.getElementById('number').value = '',
                    document.getElementById('subject').value = ''

            }
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}

function sendTailorMail() {
    let checkedItems = []
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            checkedItems.push(item.value)
        }
    })
    const selectbtn = document.getElementsByClassName('select')
    const accomodation = document.getElementById('Accomodation')
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        country: document.getElementById('country').value,
        number: document.getElementById('number').value,
        date: document.getElementById('date').value,
        people: document.getElementById('people').value,
        subject: document.getElementById('subject').value,
        days: document.getElementById('days').value,
        OtherActivities: document.getElementById('activities').value,
        activities: checkedItems,
        Budget: selectbtn.value,
        accomodation: accomodation.value

    }
    console.log(params)
        // console.log(`param 1,${params}`)
        // emailjs.send('service_nihox9k', 'template_pzv5l58', params).then(
        //     (response) => {
        //         if (response.status === 200) {
        //             document.getElementById('name').value = '',
        //                 document.getElementById('email').value = '',
        //                 document.getElementById('message').value = '',
        //                 document.getElementById('number').value = '',
        //                 document.getElementById('subject').value = ''

    //         }
    //     },
    //     (error) => {
    //         console.log('FAILED...', error);
    //     },
    // );
}

function sendContactMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        number: document.getElementById('number').value,
        subject: document.getElementById('subject').value,


    }
    console.log(params)
    emailjs.send('service_nihox9k', 'template_pzv5l58', params).then(
        (response) => {
            if (response.status === 200) {
                document.getElementById('name').value = '',
                    document.getElementById('email').value = '',
                    document.getElementById('message').value = '',
                    document.getElementById('number').value = '',
                    document.getElementById('subject').value = ''

            }
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}