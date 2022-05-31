/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */

function capitalize(str) {
    let b = "";
    b+= str[0].toUpperCase();
    for (let i=0; i < str.length-1; i++){
        if (str[i] === " " ){
            b+= str[i+1].toUpperCase();
        }
        else {b+=str[i+1];}
    }
    return b;
}

module.exports = capitalize;
