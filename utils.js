export const random = (num) =>  Math.ceil(Math.random() * num);

export function generateLog(firstPerson, secondPerson, damage) {

    const {name: firstPersonName,  hp :{ current: current, total: total}}  = firstPerson;
    const {name: secondPersonName} = secondPerson;


    function generateDamageLog(){
        return `${damage}, ${current}/${total}`;
    }

    function renderLog(){
        const $logs = document.querySelector('#logs');
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

};
