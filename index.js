const dotenv = require('dotenv').config();
const temp = process.env.TEMPLATE_KEY;
const service = process.env.SERVICE_KEY;

emailjs.send(temp, service, params).then(
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

function sendTailorMail() {
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
        OtherActivities: document.getElementById('activities').value,
        activities: checkedItems,
        Budget: selectbtn.value,
        accomodation: accomodation.value

    }
    console.log(params)

}

function sendMail() {
    let checkedItems = []
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            checkedItems.push(item.value)
        }
    })
    const selectbtn = document.getElementById('select')
    console.log(selectbtn.value)
    const accomodation = document.getElementById('Accomodation')
    console.log(accomodation.value)

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
    console.log(`this is first,${Object.entries(params)}`)
    console.log(`param 1,${params}`)
}


function sendContactMail() {
    var params = {
        FirstName: document.getElementById('firstname').value,
        LastName: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        number: document.getElementById('number').value,
        subject: document.getElementById('subject').value,


    }
    console.log(params)

}