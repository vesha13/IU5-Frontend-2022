/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {

    function summ(...args){
        if (args.length < f.length){
            res= (...newargs) => summ.apply(this, args.concat(newargs));}
        else
         {res= f(...args)}
        return res
    }

    return summ

}

module.exports = curry;
