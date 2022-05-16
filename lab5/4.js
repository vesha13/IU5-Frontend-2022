/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

function memoize(func) {
   /** let res;
    return f = (...args) =>
    {
        function cch(...args){res = func(...args); return (res === func(...args))}
        res = func(...args);
        let obj={
            cache: cch(arguments),
            result: res
          };
        return obj;
    };*/

    let res;
    function final(...args)
    {
        let cache= (res === func(...args));
        res = func(...args);
        let obj={
            cache: cache,
            result: res
        }
        return obj
    };
    return final
/**
    this.func =func;
    function cch(...args){res = func(...args); return (res === func(...args))}
    function result(...args) {rrr=func(...args); return rrr}
    let obj={
        cache: cch(arguments),
        result: result(this.func)
      };
      function res1(){console.log(obj);return obj};
      return res1 */

}

module.exports = memoize;
