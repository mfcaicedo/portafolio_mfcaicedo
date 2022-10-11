
//Efecto de maquina de escribir
let text = document.getElementById('text_type');
let str = text.innerHTML;
text.innerHTML = '';
let speed = 250;

let time;
function repeatFunction() {
    time = setInterval(typeWriter, 8000);
}
let i = 0;
function typeWriter() {
    if (i < str.length) {
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }else{
        setTimeout(() => {
            text.innerHTML = '';
            i = 0;
        }, 8000);
    }
}
repeatFunction();