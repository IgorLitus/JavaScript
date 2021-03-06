/*
####Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/
var  f = function (){
    let sum=0
    for (x of (arguments)) {
    if (typeof x === 'number'){
        sum=sum+x
    }
    else {
     throw new Error('Всі параметри повинні бути числом')
    }
    }
   console.log('Сума аргументів',sum)
    return sum
}
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number