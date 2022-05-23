/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let a=0;
    let b = true;
    if (str.length&2===0){
        a=str.length/2;
    }
    else{
        a=str.length/2-1/2;
    }
    top:
    for (let i=0; i<a; i++)
    {
        if (str[i].toUpperCase()!=str[str.length-i-1].toUpperCase()){
            b=false
            break top;
        }

    }
    return b;
}

module.exports = isPalindrome;
