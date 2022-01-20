/*
####Задача 5

Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`. Создайте из него новый массив, где останутся лежать только положительные числа `[1, 2, 3, 7]`. 
Создайте для этого вспомогательную функцию `isPositive(-3)`, которая параметром будет принимать число и возвращать true, если число положительное, 
и false — если отрицательное. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

*Для добавление нового элемента в конец массива используйте метод push*

```js
// Пример использования функции isPositvie()
isPositive(-3) // вернет false
isPositive(3) // вернет true
isPositive('s') // Error: parameter type is not a Number

// Пример использования метода push
var arr = [8];
*/


function isPositive(x){
    let result=false
    if (x>0){
        result = true
    }
    return result
}
let arr_in=[1, 2, -4, 3, -9, -1, 7]
let arr_out=[]
for (i=0; i<arr_in.length; i++){
   if (isPositive(arr_in[i])) {
       arr_out.push(arr_in[i])
   }
}
console.log(arr_out)
console.log(arr_out.length)
