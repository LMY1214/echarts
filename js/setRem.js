//setRem.js
function setRem() {
    var clientWidht = document.clientWidht || document.body.clientWidth;

    clientWidht = clientWidht > 1920 ? 1920 : clientWidht;
    clientWidht = clientWidht < 1209 ? 1209 : clientWidht;

    var rem = clientWidht / 18;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = rem + 'px';

}

window.onload = setRem;
window.onresize = setRem;