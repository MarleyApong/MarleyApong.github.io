// =====================================================
let menu = document.querySelector("#icon-menu")
let nav = document.querySelector("nav")
menu.onclick = () => {
    menu.classList.toggle('fa-close')
    nav.classList.toggle('active')
}

let header = document.querySelector("header");
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        }
    });
    header.classList.toggle("end",window.scrollY > 100)

    menu.classList.remove('fa-close')
    nav.classList.remove('active')
}

// ================================Scroll guide======
ScrollReveal ({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
})

ScrollReveal().reveal('.me-start .left, .title',{origin: 'top'})
ScrollReveal().reveal('.me-start .right, .content, form',{origin: 'bottom'})
ScrollReveal().reveal('.me-start .left h1, #about .left',{origin: 'left'})
ScrollReveal().reveal('.me-start .left p, #about .right',{origin: 'right'})

//================================= typed ================
const typed = new Typed('.typed',{
    strings: ['Developpeur Full-Stack','Infographiste','Youtubeur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    lopp: true
})

