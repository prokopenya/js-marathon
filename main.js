const $btn = document.getElementById('btn-kick');
const $btnKickEnemy = document.getElementById('btn-kick-enemy');

const character = {
    name: 'Pickachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function (){
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

$btnKickEnemy.addEventListener('click', function (){
    kickEnemy(random(20), enemy)
    console.log('Kick enemy');
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    console.log(person.elProgressbar.style.width);
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }

    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function kickEnemy(count, person) {
    changeHP(count, person);
}

init();

