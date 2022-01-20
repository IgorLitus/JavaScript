/*
####Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно содержать проверку входных параметров,
 потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
*/
var  f = function (a,b,c){
    let result=0
     if ((typeof a === 'number') && (typeof b === 'number') && (typeof c === 'number')){
        result=(a-b)/c
    }
    else {
     throw new Error('Всі параметри повинні бути типу Number')
    }
//    console.log(result)
    return result
}

console.log(f(9,3,2)) // 3
f('s',9,3) // Error: all parameters type should be a Number