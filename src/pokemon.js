import { generateLog } from './utils.js';
import game from './main.js';

class Selectors {
    constructor(name) {
       this.elHP = document.querySelector(`#health-${name}`);
       this.elPrograssbar = document.querySelector(`#progressbar-${name}`);
       this.elImg = document.querySelector(`.img-${name}`);
       this.elName = document.querySelector(`#name-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({id, name, hp, type, attacks = [], img, selectors}) {
        super(selectors);
        this.id = id;
        this.name = name;
        this.type = type;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.attacks = attacks;
        this.elImg.src = img;
        this.elName.textContent = name;
        this.selectors = selectors;

        this.renderHP();
    }

    doHit = (opponent, damage) => {
        const { hp, renderHP } = opponent;
        hp.current -= damage;

        if (hp.current <= 0) {
            hp.current = 0;
            if (opponent.selectors === 'player2') {
                game.changeOpponent();
                renderHP();
                generateLog(this, opponent, damage);
                return true;
            } else {
                game.over();
                renderHP();
                generateLog(this, opponent, damage);
                return false;
            }
        }

        renderHP();
        generateLog(this, opponent, damage);
    };

    renderHP = () => {
        const { elHP, elPrograssbar: bar, hp: { current, total } } = this;
        let percent = current / (total / 100);

        elHP.textContent = current + ' / ' + total;
        bar.style.width = percent + '%';
    };
}

export default Pokemon;