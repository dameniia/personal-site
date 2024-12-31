const navSlide = () => {
    const sandwich = document.querySelector(".sandwich-menu")
    const nav = document.querySelector(".nav-list")
    const navLinks = document.querySelectorAll('.nav-list li')
    const body = document.querySelector("body")
    
    sandwich.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active')
        // Prevent scrolling while the nav is open (mobile)
        body.classList.toggle('fixed-position')

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })

        //Sandwich animation
        sandwich.classList.toggle('toggle')
    })

}

navSlide()