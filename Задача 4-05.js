// ####Задача 5

// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);



const arr = [1,2,3];
const acc = 0;

function reduce(arr, fn, acc){
    if (Array.isArray(arguments[0]) != true) {
        throw new Error('Перший аргумент повинен бути масивом')
      }
      
    if ((typeof (arguments[1])) !='function'){
      throw new Error('Другий аргумент повинен бути функцією')
    }

    let result=acc
    if ((typeof arguments[2] ==='number' ) || (typeof arguments[2] === 'string')) {
        for (i=0; i < arr.length; i++ ) {
            result = fn(result,arr[i],i,arr)
            }
    }
    else{
        throw new Error('Третій аргумент повинен бути числом або строкою')
    }
    
    return result
}

console.log(reduce(arr, function(acc, item, i, arr){ return acc+item}, acc))
