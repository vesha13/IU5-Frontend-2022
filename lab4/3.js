/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let b=1;
    let arr =[];
    let narr =[];
   for(let i=0; i<str.length; i++)
   {arr[i]=str[i];}
    for (let key in arr){
        if (arr[key]===arr[key-1])
        {
             b++;
             if( key == arr.length-1){ narr.push(b);}
        }
        else{
            if(b!=1){
                narr.push(b);}
            narr.push(arr[key]);
            b=1;
        }
    }

    return narr.join('')
}

module.exports = rle;
