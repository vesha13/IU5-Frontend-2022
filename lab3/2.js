/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */

function getMinMax(str) {
    let b= "";
    let max=0;
    let min=0;
    for(let i=0; i < str.length; i++){
        if ((!isNaN(Number(str[i]))) || (str[i]==='-')|| (str[i]==='.')  ){
            b+=str[i];
        }
        else {
            if(parseFloat(b) < min){
                min= b;
            }
            else if(parseFloat(b)> max){
                max=b;
            }
        b="";
        }
    }
    let obj = {
        max: parseFloat(max),
        min: parseFloat(min),
    }
   return  obj
}

module.exports = getMinMax;
