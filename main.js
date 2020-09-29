const $btn = document.getElementById('btn-kick');
const $btnKickEnemy = document.getElementById('btn-kick-enemy');

const character = {
    name: 'Pickachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP,
    renderHPLife,
    renderHP,
    renderProgressbarHP,
    kickEnemy,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHP,
    renderHPLife,
    renderHP,
    renderProgressbarHP,
}

$btn.addEventListener('click', function (){
    console.log('Kick');
    changeHP.call(character, random(20));
    changeHP.call(enemy, random(20));
});

$btnKickEnemy.addEventListener('click', function (){
    console.log('Kick enemy');
    kickEnemy.call(enemy, random(20));
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
    }

    renderHP.call(this);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function kickEnemy(count) {
    changeHP.call(this, count);
}

init();

