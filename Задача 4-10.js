// ####Задача 10

// Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив

// ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ```
console.log(reverse([3,2,1]))

function reverse(arr){
    arrNew = []
    for (i=0; i<arr.length; i++){
       arrNew.unshift(arr[i])
    }
    return arrNew
}