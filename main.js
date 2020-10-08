import Pokemon from "./pokemon.js"
import {random, generateLog} from "./utils.js"
import {pokemons} from './pokemons.js'

const pikachu = pokemons.find(item => item.name === 'Pikachu');

const player1 = new Pokemon({
    ...pikachu,
    selectors: 'player1',
});

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'player2',
});

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
    console.log(item);
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount = clickCounter ($btn, item.maxCount);
    $btn.addEventListener('click', () => {
        console.log('Click button', $btn.innerText);
        btnCount();
    })
    $control.appendChild($btn);
});

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