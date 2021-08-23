const menuHeader = document.getElementsByTagName('header')[0];
let menuBars = document.getElementsByClassName('fa-bars')[0];
const asidePresentation = document.querySelectorAll('.aside-presentation');
const hobby = document.querySelectorAll('.hobbies');
const skillsTitle = document.querySelectorAll('#titleSkills');
const buttonHobbyToImage = document.getElementsByClassName('hobbyToImage')[0];


menuHeader.addEventListener('click', eventMenuClick);
buttonHobbyToImage.addEventListener('click', eventHobbiesButton);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions)

asidePresentation.forEach(presentation => {
    appearOnScroll.observe(presentation);
})

hobby.forEach(hob => {
    appearOnScroll.observe(hob);
})

skillsTitle.forEach(skills => {
    appearOnScroll.observe(skills);
})