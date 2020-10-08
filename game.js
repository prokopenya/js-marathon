import { pokemons } from './pokemons.js';
import Pokemon from './pokemon.js';
import { random, countBtn} from './utils.js';

// class Selectors {
//     constructor() {
//         this.playground = document.querySelector('.playground');
//         this.logDiv = document.querySelector('#logs');
//     };
// }

// class Game extends Selectors  {
//     constructor(){
//         super();
//     }

//     renderPlayer(player) {
//         let $elImg = document.getElementById(`img-player1`);
        
//         $elImg = player.elImg;
//         console.log($elImg);
//     }

//     startGame() {
//         let { player1, player2 } = this.createPokemons();
//         console.log(player1.name);
//         this.renderPlayer(player1);
//         //console.log(renderPlayer(player1));
//         //let buttons = [];

//         const $control = document.querySelector('.control');
//         //renderButtons();
//         player1.attacks.forEach(item => {
//             console.log(item);
//             //buttons.push(item);
            
//             const $btn = document.createElement('button');
//             $btn.classList.add('button');
//             $btn.innerText = item.name;
            
//             const btnCount = clickCounter ($btn, item.maxCount);

//             $btn.addEventListener('click', () => {
//                 console.log('Click button', $btn.innerText);
        
//                 player2.changeHP(random(item.minDamage, item.maxDamage), function (damage) {
//                     generateLog(player1, player2, damage);
//                 });
//                 btnCount();
//             })
        
//             $control.appendChild($btn);
//             //  renderButtons(buttons);
//         });

//     }

//     resetGame = () => {

//     }

//     renderButtons = (buttons) => {
        
//         const btn = document.createElement('button');
//         btn.classList.add('button');
//         btn.innerText = item.name;
        
//         const btnCount = clickCounter (btn, item.maxCount);
//     }

//     createPokemons = () => {
//         let player1 = new Pokemon({
//             ...pokemons[random(pokemons.length - 1)],
//             selectors: 'player1',
//         });
//         let player2 = new Pokemon({
//             ...pokemons[random(pokemons.length - 1)],
//             selectors: 'player2',
//         });
//         return { player1, player2 };
//     }
// }

class Selectors {
    constructor() {
        this.playground = document.querySelector('.playground');
        this.logDiv = document.querySelector('#logs');
    };
}

class Game extends Selectors {
    constructor() {
        super();
    };

    begin = () => {
        this.playground.textContent = '';
        this.logDiv.textContent = '';
        pokemons.forEach(item => {
            const { name, img } = item;
            const pokemon = document.createElement('div');
            pokemon.style.cursor = 'pointer';
            pokemon.className = 'pokemon';
            pokemon.innerHTML = `
                <img src="${img}" class="sprite" />
                <div class="details">
                    <h2 class="name">${name}</h2>
                </div>
            `;
            console.log(pokemon);
            pokemon.addEventListener('click', () => {
                this.start(name);
            });
            this.playground.appendChild(pokemon);
        });

    };

    start = (name) => {
        this.playground.textContent = '';

        let p1 = pokemons.find(item => item.name === name);
        let p2 = pokemons[random(pokemons.length - 1)];

        this.playground.appendChild(this.pokemon('player1'));
        this.playground.appendChild(this.pokemon('player2'));
        this.playground.appendChild(this.pokemon('control'));
        this.control = document.querySelector('.control');

        this.player1 = this.createPlayer(p1, 'player1');
        this.player2 = this.createPlayer(p2, 'player2');

        this.attacks();
    };

    pokemon = (player) => {
        const pokemon = document.createElement('div');

        if (player === 'control') {
            pokemon.className = 'control';
            return pokemon;
        };

        pokemon.className = `pokemon ${player}`;
        pokemon.innerHTML = `
            <span class="lvl">Lv. 1</span>
            <img src="http://sify4321.000webhostapp.com/charmander.png" class="sprite img-${player}" />
            <div class="details">
                <h2 class="name" id="name-${player}">Charmander</h2>
                <div class="hp">
                    <div class="bar">
                        <div class="health" id="progressbar-${player}" style="width: 100%"></div>
                    </div>
                    <span class="text" id="health-${player}">100 / 100</span>
                </div>
            </div>
        `;
        return pokemon;
    };

    attacks = () => {
        this.player1.attacks.forEach(item => {
            const btn = document.createElement('button');
            btn.classList.add('button');
            btn.textContent = item.name;
            const btnCount = countBtn(item.maxCount, btn);
            btn.addEventListener('click', () => {
                btnCount();
                 const cb = () => { this.player2.hit(this.player1, this.player2.attacks[0]) };
                 !this.player1.hit(this.player2, item) && cb();
                 this.player2.renderHP();
                //this.player2.changeHP(random(20));
            });
            this.control.appendChild(btn);
        });
    };

    changeOpponent = () => {
        let p2 = pokemons[random(pokemons.length - 1)];
        this.player2 = this.createPlayer(p2, 'player2');
    };

    createPlayer = (player, select) => {
        return new Pokemon({
            ...player,
            selectors: select,
        })
    };

    over = () => {
        const allButtons = document.querySelectorAll('.control .button');
        allButtons.forEach(item => item.remove());
        const newBtn = document.createElement('div');
        newBtn.className = 'button';
        newBtn.innerHTML = `Игра оконченна<br>Начать заново`;
        this.control.appendChild(newBtn);
        newBtn.addEventListener('click', this.begin);
    };
};

export default Game;