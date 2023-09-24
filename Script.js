// header toggle
let menubotton = document.getElementById('menubotton')
menubotton.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
// typing effect
let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!','UI Designer!','Web Developer!'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
}) 
// Active Link state on scroll

// Get all link
let navlinks= document.querySelectorAll('nav ul li a')
// get all sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos =window.scrollY + 20
    sections.forEach(section =>{
        if(scrollPos>section.offsetTop && scrollPos<(section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link =>{
                link.classList.remove('active');

                if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});