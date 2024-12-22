let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let nav = document.querySelector('.nav');

menu.addEventListener('click',function(e){
    nav.setAttribute('style','transform : translateX(0px)');
});
close.addEventListener('click', function(e){
    nav.setAttribute('style','transform: translateX(200px)');
});


function typeWriter(text, element, speed) {
    let i = 0;
    const delay = speed || 100;
    const textLength = text.length;

    function type() {
        if (i < textLength) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else {
            i = 0;
            element.innerHTML = ''; // Effacer le contenu pour recommencer l'animation
            setTimeout(type, delay * 10); // Attente avant de recommencer l'animation
        }
    }

    type();
}

const codeContent = document.getElementById('codeContent');
typeWriter(" Je développe des applications web, des sites web, des applications mobiles anisi que des applications desktop et tant d'autre.", codeContent, 100);

// pour masques le message apres 30s seconde
setTimeout(function () {
    var successMessage = document.getElementById('success-message');
    successMessage.classList.add('d-none');
}, 10000); 


// 