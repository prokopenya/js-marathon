import Pokemon from "./pokemon.js"
import {random, generateLog} from "./utils.js"

const player1 = new Pokemon({
    name: 'Pickachu',
    type: 'electric',
    hp: 500,
    selectors: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'enemy',
});

console.log(player1);
console.log(player2);

const $btnKick = document.getElementById('btn-kick');
const $btnKickEnemy = document.getElementById('btn-kick-enemy');

$btnKick.addEventListener('click', function (){
    player1.changeHP(random(20), function (damage) {
        generateLog(player1, player2, damage);
    });
    player2.changeHP(random(20), function (damage) {
        generateLog(player2, player1, damage);
    });
});

$btnKickEnemy.addEventListener('click', function (){
    player2.changeHP(random(20), function (damage) {
        generateLog(player2, player1, damage);
    });
});

$btnKick.addEventListener('click', clickCounter($btnKick, 6) );
$btnKickEnemy.addEventListener('click', clickCounter($btnKickEnemy, 4) );

function clickCounter(button, clicksLeft) {
    let buttonInnerText = button.innerText;
    button.innerText = `${buttonInnerText} [${clicksLeft}] `;

    return function () {
        clicksLeft -= 1;
        button.innerText = `${buttonInnerText} [${clicksLeft}] `;
        if(clicksLeft <= 0) {
            button.disabled = true;
        }
    }
}