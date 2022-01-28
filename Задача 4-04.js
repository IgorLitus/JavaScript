// ####Задача 4

// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});



const arr = [1,2,3];
function some(arr, fn){
    if (Array.isArray(arguments[0]) != true) {
        throw new Error('Перший аргумент повинен бути масивом')
      }
      
    if ((typeof (arguments[1])) !='function'){
      throw new Error('Другий аргумент повинен бути функцією')
    
    }
    for (j=0; j < arr.length; j++ ) {
        if ( fn(arr[j],j,arr)) {
            return true
        }
    }
    return false
}

if (some(arr, function(item, i, arr) {return item<=1}) ) {
    console.log('Умови виконано')
}
else {
    console.log('Умови не виконано')
}