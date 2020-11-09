let levelHTML;
let moneyHTML;

if (!localStorage.getItem('started')) {
    localStorage.setItem('started', true);
    localStorage.setItem('level', 1);
    localStorage.setItem('money', 0);
}

let level = localStorage.getItem('level');
let money = localStorage.getItem('money');

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#gainlevel').onclick = count;
    levelHTML = document.querySelector('#level');
    moneyHTML = document.querySelector('#money');

    levelHTML.innerHTML = level;
    moneyHTML.innerHTML = money;
});

function count() {
    level++;

    levelHTML.innerHTML = level;
    localStorage.setItem('level', level);
}
