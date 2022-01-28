// ####Задача 6

// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);


const arr = [1,2,3];
const acc = 0;

function reduceRight(arr, fn, acc){
    if (Array.isArray(arguments[0]) != true) {
        throw new Error('Перший аргумент повинен бути масивом')
      }
      
    if ((typeof (arguments[1])) !='function'){
      throw new Error('Другий аргумент повинен бути функцією')
    }

    let result=acc
    if ((typeof arguments[2] ==='number' ) || (typeof arguments[2] === 'string')) {
        for ( i = arr.length-1; i >= 0 ; i-- ) {
            result = fn(result,arr[i],i,arr)
            }
    }
    else{
        throw new Error('Третій аргумент повинен бути числом або строкою')
    }
    
    return result
}
let a = reduceRight(arr, function(acc, item, i, arr){ return acc+item}, acc)
 console.log(a)
