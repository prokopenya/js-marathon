const $btn = $getElementById('btn-kick');
const $btnKickEnemy = $getElementById('btn-kick-enemy');
const $logs = document.querySelector('#logs');

function $getElementById(id) {
    return document.getElementById(id);
}

const character = {
    name: 'Pickachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElementById('health-character'),
    elProgressbar: $getElementById('progressbar-character'),
    changeHP,
    renderHPLife,
    renderHP,
    renderProgressbarHP,

}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElementById('health-enemy'),
    elProgressbar: $getElementById('progressbar-enemy'),
    changeHP,
    renderHPLife,
    renderHP,
    renderProgressbarHP,
}

$btn.addEventListener('click', function (){
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

$btnKickEnemy.addEventListener('click', function (){
    console.log('Kick enemy');
    enemy.changeHP(random(20));
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

    this.damageHP -= count;

    this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);

    if (this.damageHP <= count) {
        this,damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
    }

    renderHP.call(this);
}

function generateLog(firstPerson, secondPerson, count) {

    let damage = count;

    const {name: firstPersonName,  defaultHP: firstPersonDefaultHP,  damageHP: firstPersonDamageHP}  = firstPerson;
    const {name: secondPersonName} = secondPerson;

    function generateDamageLog(){
        return `${damage}, ${firstPersonDamageHP}/${firstPersonDefaultHP}`;
    }

    function renderLog(){
        const $p = document.createElement('p');
        $p.innerText = `${logs[random(logs.length) - 1]}`;
        $logs.insertBefore($p, $logs.children[0]);
        console.log($p.innerText);
    }

    const logs = [
        `${firstPersonName} вспомнил что-то важное, но неожиданно ${secondPersonName}, не помня себя от испуга, ударил в предплечье врага. ${generateDamageLog()}`,
        `${firstPersonName} поперхнулся, и за это ${secondPersonName} с испугу приложил прямой удар коленом в лоб врага. ${generateDamageLog()}`,
        `${firstPersonName} забылся, но в это время наглый ${secondPersonName}, приняв волевое решение, неслышно подойдя сзади, ударил. ${generateDamageLog()}`,
        `${firstPersonName} пришел в себя, но неожиданно ${secondPersonName} случайно нанес мощнейший удар. ${generateDamageLog()}`,
        `${firstPersonName} поперхнулся, но в это время ${secondPersonName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${generateDamageLog()}`,
        `${firstPersonName} удивился, а ${secondPersonName} пошатнувшись влепил подлый удар. ${generateDamageLog()}`,
        `${firstPersonName} высморкался, но неожиданно ${secondPersonName} провел дробящий удар. ${generateDamageLog()}`,
        `${firstPersonName} пошатнулся, и внезапно наглый ${secondPersonName} беспричинно ударил в ногу противника. ${generateDamageLog()}`,
        `${firstPersonName} расстроился, как вдруг, неожиданно ${secondPersonName} случайно влепил стопой в живот соперника. ${generateDamageLog()}`,
        `${firstPersonName} пытался что-то сказать, но вдруг, неожиданно ${secondPersonName} со скуки, разбил бровь сопернику. ${generateDamageLog()}`
    ];
    
    renderLog();

}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
