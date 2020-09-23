const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

const charForSearch = prompt('Какую букву ищем?');

function countLetterInString(str, letter) {
    let count = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            count += 1;
        }
    }
    return count;
}

function getRow(firstRow, secondRow) {

    const firstRowCount  = countLetterInString(firstRow,  charForSearch);

    const secondRowCount = countLetterInString(secondRow, charForSearch);

    if (firstRowCount === 0 && secondRowCount === 0) {
        alert("Вхождений не найдено");
        return '';
    }

    return firstRowCount > secondRowCount ? firstRow : secondRow;
}

alert(getRow(firstRow, secondRow)); // мама мыла раму
