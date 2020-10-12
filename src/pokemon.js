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
    constructor({name, hp, type, selectors, attacks = []}) {
        super(selectors);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;

        this.renderHP();
    }

    doHit = (opponent, damage) => {
        const { hp, renderHp } = opponent;
        hp.current -= damage;

        if (hp.current <= 0) {
            hp.current = 0;
            if (opponent.selectors === 'player2') {
                game.changeOpponent();
                let newLvl = Number(this.lvl.textContent.slice(-1));
                newLvl++;
                this.lvl.textContent = 'Lv. ' + newLvl;
                renderHp();
                generateLog(this, opponent, damage);
                return true;
            } else {
                game.over();
                renderHp();
                generateLog(this, opponent, damage);
                return false;
            }
        }

        renderHP();
        generateLog(this, opponent, count);
    };

    renderHP = () => {
        const { elHP, elPrograssbar: bar, hp: { current, total } } = this;
        let percent = current / (total / 100);

        elHP.textContent = current + ' / ' + total;
        bar.style.width = percent + '%';
    };
}

export default Pokemon;