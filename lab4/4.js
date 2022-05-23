/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    let newstr = arr.toString();
let b=[];

    const strCopy = newstr.split(',');
    if (strCopy == "")
    {return b;}
    else{
    for(let i=0; i<strCopy.length; i++){
        if (Number.isInteger(parseInt(strCopy[i])) === true){
            b.push(parseInt(strCopy[i]));
        }
        else{ b.push(strCopy[i]);}
    }
    return b}
}

module.exports = get1DArray;
