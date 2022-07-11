//Button to switch color themes for page
let changeImg = document.getElementById('switch-img');
let btn = document.getElementById('switch-btn');

function changeImageToOn() {
    changeImg.src = '/imgs/switch2.png';
};

function changeImageToOff() {
    changeImage.src = './imgs/switch1/png';
};

btn.addEventListener('click', function(){
    changeImageToOn()
});

btn.addEventListener('click', function(){
        changeImageToOff();
    });






