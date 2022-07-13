//Button to switch color themes for page
let changeImg = document.getElementById('switch-img');
let btn = document.getElementById('switch-btn');
//nav background
let chgHeader = document.getElementById('introduction');
let navOne = document.getElementById('nav1');
let navTwo = document.getElementById('nav2');
let navThree = document.getElementById('nav3');
let navFour = document.getElementById('nav4');
//body elements text and background color change
let body = document.getElementById('body');
let  aboutMe = document.getElementById('about-me');
let fullStack = document.getElementById('full-stack');
let abtMeTwo = document.getElementById('abt-me');
let abtMe = document.getElementById('abt-me-p');
//skills 
let skill = document.getElementById('skills-title');
let pSkill = document.getElementById('pskill')
//portfolio
let portfolio = document.getElementById('portfolio-title');
let projOne = document.getElementById('project-1');
let projTwo = document.getElementById('project-2');
let projThree = document.getElementById('project-3');
let projFour = document.getElementById('project-4');
let projOneP = document.getElementById('project-1-p');
let projTwoP = document.getElementById('project-2-p');
let projThreeP = document.getElementById('project-3-p');
let projFourP = document.getElementById('project-4-p');
let codeOne = document.getElementById('code-1');
let liveOne = document.getElementById('live-1');
let codeTwo = document.getElementById('code-2');
let liveTwo = document.getElementById('live-2');
let codeThree = document.getElementById('code-3');
let liveThree = document.getElementById('live-3');
let codeFour = document.getElementById('code-4');
let liveFour = document.getElementById('live-4');


//contact
let contact = document.getElementById('contact-title');


//fopter background color and text
let footer = document.getElementById('footer');
let footerP = document.getElementById('footer-p')


function changeThemeToOn() {
    changeImg.src = '/imgs/switch2.png';
    chgHeader.classList.replace('bg-light', 'bg-dark');
    navOne.classList.replace('text-dark', 'text-white');
    navFour.classList.replace('text-dark', 'text-white');
    navThree.classList.replace('text-dark', 'text-white');
    navTwo.classList.replace('text-dark', 'text-white');
    footer.classList.replace('bg-light', 'bg-dark');
    body.classList.replace('bg-light', 'bg-dark');  
    aboutMe.classList.replace('text-dark', 'text-white');
    fullStack.classList.replace('text-dark', 'text-white');
    abtMeTwo.classList.replace('text-dark', 'text-white');
    abtMe.classList.replace('text-dark', 'text-white');
    skill.classList.replace('text-dark', 'text-white');
    pSkill.classList.replace('text-dark', 'text-white');
    portfolio.classList.replace('text-dark', 'text-white');
    contact.classList.replace('text-dark', 'text-white');
    projOne.classList.replace('text-dark', 'text-white');
    projTwo.classList.replace('text-dark', 'text-white');
    projThree.classList.replace('text-dark', 'text-white');
    projFour.classList.replace('text-dark', 'text-white');
    projOneP.classList.replace('text-dark', 'text-white');
    projTwoP.classList.replace('text-dark', 'text-white');
    projThreeP.classList.replace('text-dark', 'text-white');
    projFourP.classList.replace('text-dark', 'text-white');
    codeOne.classList.replace('text-dark', 'text-white');
    liveOne.classList.replace('text-dark', 'text-white');
    codeTwo.classList.replace('text-dark', 'text-white');
    liveTwo.classList.replace('text-dark', 'text-white');
    codeThree.classList.replace('text-dark', 'text-white');
    liveThree.classList.replace('text-dark', 'text-white');
    codeFour.classList.replace('text-dark', 'text-white');
    liveFour.classList.replace('text-dark', 'text-white');
    footerP.classList.replace('text-dark', 'text-white');





    

};

function changeToOff() {

};


btn.addEventListener('click', function(){
    changeThemeToOn()
});



console.log("hi");





