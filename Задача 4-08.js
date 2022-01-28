// ####Задача 8

// Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.

// Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если на каком то уровне было найдено не число и не массив

// ```javascript
 const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)) // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)) // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)) // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)) // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)) // 3

function f(arr1){
while (arr1.some(function(i){return (Array.isArray(i))} )) {
   arr1 = arr1.flat()
}
if (arr1.some(function(i){return (typeof i != 'number')})){
// какая-то обработка
   console.log('Не всі елементи масиву Number чі Array');
   return 0
}
if (arr1.length === 0) {
    return 0
}
   
return arr1.reduce(function(sum,i){return sum+i})
}
// console.log(f(arr) )
// Еще один вариант
// function f1(arr) {
//    let arrStr=(arr.toString()).split(',')
//    let arrNew=arrStr.map(function(i){return Number(i)})
//    if (arrNew.every(function(i) {return (isNaN(i) === false) }) != true) {
// //       throw new Error('Всі елементи масиву повинні бути Number')
//        return 0
//    }
//    else {
//        return arrNew.reduce(function(sum,i){return sum+i})
//    }
// }
 // console.log(f(arr5));
