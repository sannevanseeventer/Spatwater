let text = document.getElementById('text');
let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');


window.addEventListener ('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    layer2.style.left = value * 1.5 + 'px';
    layer1.style.left = value * -1.5 + 'px';
    layer2.style.top = value * 1 + 'px';

});