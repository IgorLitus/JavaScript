// ####Задача 1

// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// forEach(arr, function(item, i, arr) {});


const arr = [1,2,3];

function forEach(arr,fn){
  if (Array.isArray(arguments[0]) != true) {
    throw new Error('Перший аргумент повинен бути масивом')
  }
  
  if ((typeof (arguments[1])) !='function'){
    throw new Error('Другий аргумент повинен бути функцією')
    }
  for (j=0; j < arr.length; j++ ) {
    fn(arr[j],j,arr)
   }
}

forEach(arr,function(item,i,arr) {arr[i] = item * 2  })
console.log(arr)