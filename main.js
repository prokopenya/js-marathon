/*************#1**************/

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

/*************#2**************/

function formattedPhone(phone) {
    if (phone.length === 10){
        return '+7 '+ 
               '('  + 
               phone.charAt(0) + 
               phone.charAt(1) + 
               phone.charAt(2) + 
               ') '+
               phone.charAt(3) + 
               phone.charAt(4) + 
               phone.charAt(5) + 
               '-' +
               phone.charAt(6) + 
               phone.charAt(7) + 
               '-' +
               phone.charAt(8) + 
               phone.charAt(9);
    } 
    else if (phone.length === 11 && phone.startsWith('8')) {
        return '+7 '+ 
               '('  + 
               phone.charAt(1) + 
               phone.charAt(2) + 
               phone.charAt(3) + 
               ') '+
               phone.charAt(4) + 
               phone.charAt(5) + 
               phone.charAt(6) + 
               '-' +
               phone.charAt(7) + 
               phone.charAt(8) + 
               '-' +
               phone.charAt(9) + 
               phone.charAt(10);
    }
    else if (phone.length === 12 && phone.startsWith('+7')) {
        return phone.charAt(0) +
               phone.charAt(1) +
               ' (' + 
               phone.charAt(2) + 
               phone.charAt(3) + 
               phone.charAt(4) + 
               ') '+
               phone.charAt(5) + 
               phone.charAt(6) + 
               phone.charAt(7) + 
               '-' +
               phone.charAt(8) + 
               phone.charAt(9) + 
               '-' +
               phone.charAt(10) + 
               phone.charAt(1);
    } 
    else {
        alert('Недопустимый формат номера');
        return '';
    }
}

console.log(formattedPhone('211234567')); // +7 (123) 456-78-90
