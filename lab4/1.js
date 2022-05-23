/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let change = [];
    let be =[];
    let c =[];
    let removed=[];
    let myarr=arr;
    let b=0;
    let narr= arr.map((x) => x.toUpperCase().split('').sort().join(""));
 while(narr.length>0){
      c= narr[0];
      removed.push(myarr[0]);
      for (let i=0; i<narr.length;i++){
      if (c === narr[i]){
        if (i !=0){
        narr.splice(i,1);
        removed.push(myarr[i]);
        myarr.splice(i,1);
        console.log(removed);
        } }
      }
      narr.splice(0,1);
      myarr.splice(0,1);
      change[b]= removed;
      b++;
      removed=[];
    }
        return change

}

module.exports = getAnagramms;
