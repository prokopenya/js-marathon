const $btn = $getElementById('btn-kick');
const $btnKickEnemy = $getElementById('btn-kick-enemy');
const $logs = document.querySelector('#logs');
const $btnCounter = document.querySelector('#btn-kick #counter');
const $btnKickEnemyCounter = document.querySelector('#btn-kick-enemy #counter');

function $getElementById(id) {
    return document.getElementById(id);
}

const pokemon = {
    name: 'abstract_pokemon',
    defaultHP: 100,
    damageHP: 100,
    changeHP,
    renderHPLife,
    renderHP,
    renderProgressbarHP,
}

const createCharacter = function() {
    return Object.assign(Object.create(pokemon), {
        name: 'Pickachu',
        defaultHP: 170,
        damageHP: 170,
        elHP: $getElementById('health-character'),
        elProgressbar: $getElementById('progressbar-character'),
    });
};

const createEnemy = function() {
    return Object.assign(Object.create(pokemon), {
        name: 'Charmander',
        defaultHP: 100,
        damageHP: 100,
        elHP: $getElementById('health-enemy'),
        elProgressbar: $getElementById('progressbar-enemy'),
    });
};

function counter(count = 1, clickLimit = 6) {
    return function () {
        console.log(count);
        console.log(`Осталось ${clickLimit - count}`);
        if (count === clickLimit) {
            console.log(this);
            this.disabled = true;
        }
        return count++;
    }
};

function renderCounter(button, selector){
    let clickCount = clickBtnCounter.call(button);
    selector.innerText = clickCount;
}

const clickBtnCounter = counter();
const clickEnemyCounter = counter();

$btn.addEventListener('click', function (){
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));

    renderCounter(this, $btnCounter)
});

$btnKickEnemy.addEventListener('click', function (){
    console.log('Kick enemy');
    enemy.changeHP(random(20));

    renderCounter(this, $btnKickEnemyCounter)
});

function init() {
    console.log('init');
    character = createCharacter();
    enemy = createEnemy();
}

function startGame() {
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
    this.elProgressbar.style.width = (this.damageHP * 100) / this.defaultHP + '%'
}

function changeHP(count) {

    this.damageHP -= count;

    this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);

    if (this.damageHP <= count) {
        this.damageHP = 0;
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
        $p.innerText = `${logs[random(logs.length) - 1]} ${generateDamageLog()}`;
        $logs.insertBefore($p, $logs.children[0]);
        console.log($p.innerText);
    }

    const logs = [
        `${firstPersonName} вспомнил что-то важное, но неожиданно ${secondPersonName}, не помня себя от испуга, ударил в предплечье врага.`,
        `${firstPersonName} поперхнулся, и за это ${secondPersonName} с испугу приложил прямой удар коленом в лоб врага.`,
        `${firstPersonName} забылся, но в это время наглый ${secondPersonName}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        `${firstPersonName} пришел в себя, но неожиданно ${secondPersonName} случайно нанес мощнейший удар.}`,
        `${firstPersonName} поперхнулся, но в это время ${secondPersonName} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
        `${firstPersonName} удивился, а ${secondPersonName} пошатнувшись влепил подлый удар.`,
        `${firstPersonName} высморкался, но неожиданно ${secondPersonName} провел дробящий удар.`,
        `${firstPersonName} пошатнулся, и внезапно наглый ${secondPersonName} беспричинно ударил в ногу противника.`,
        `${firstPersonName} расстроился, как вдруг, неожиданно ${secondPersonName} случайно влепил стопой в живот соперника.`,
        `${firstPersonName} пытался что-то сказать, но вдруг, неожиданно ${secondPersonName} со скуки, разбил бровь сопернику.`
    ];
    
    renderLog();

}

const random = (num) =>  Math.ceil(Math.random() * num);

init();

startGame();