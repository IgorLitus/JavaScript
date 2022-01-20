/*
Задача-1
####Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/
function f(x){
    let result
    if (typeof x === 'number'){
       result = x*x*x
    }
    else {
        throw new Error('Параметер повинен бути числом')
    }
    return result
}
console.log(f(3.14159265))