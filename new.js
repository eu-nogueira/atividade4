const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})
  AOS.init()
let button = document.querySelector('.enviar')
button.addEventListener('click', function() {

    (function() {
        emailjs.init("LKkPQT7lUQf4cdsLS")
    })()

    var params = {
        sendername: document.querySelector('#sendername').value,
        to: document.querySelector('#to').value,
        message: document.querySelector('#message').value
    }

    var serviceID = "service_eobvmtr"
    var templateID = "template_7zismvl"

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert `Email Enviado!`
    })
  })