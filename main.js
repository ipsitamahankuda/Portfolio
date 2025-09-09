/===== MENU SHOW =====/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/===== REMOVE MENU MOBILE ON LINK CLICK =====/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/===== SCROLL SECTIONS ACTIVE LINK =====/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/===== SCROLL REVEAL ANIMATION =====/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true // Enable if you want animations to repeat on scroll
});

sr.reveal('.home__data', { origin: 'left', delay: 200 });
sr.reveal('.home__img', { origin: 'right', delay: 400 });

sr.reveal('.about_subtitle, .abouttext, .skillstext, .contact_input', {});
sr.reveal('.skills_data, .contact_form', { delay: 400 });
sr.reveal('.home_social-icon, .footer_icon', { interval: 200 });
/===== OPTIONAL: Smooth scroll for older browsers =====/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute("href") !== "#") {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});