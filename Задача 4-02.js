// ####Задача 2

// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```

const arr = [1,2,3];
function filter(arr, fn) {
    if (Array.isArray(arguments[0]) != true) {
        throw new Error('Перший аргумент повинен бути масивом')
      }
      
      if ((typeof (arguments[1])) !='function'){
        throw new Error('Другий аргумент повинен бути функцією')
        }
    let outArr=[]
    for (j=0; j < arr.length; j++ ) {
        if ( fn(arr[j],j,arr) ) {
            outArr.push(arr[j])
        }
    }
    return(outArr)
}
let newArr
newArr = filter(arr,function(item,i,arr){ return item %2 === 0})
console.log(newArr);