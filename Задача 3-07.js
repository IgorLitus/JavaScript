/*####Задача 7

Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```
*/
function getDivision(x) {
  if (typeof x != 'number') {
      throw new Error('Параметр повинен бути типу number')
  }
  if ( x <= 0) {
    throw new Error('Параметр повинен бути додатковим')
  }
  arr=[1]
  if ( x > 1 ) {
    for (i=2; i<=x; i++){
        if (x % i === 0) {
            arr.push(i) 
        }
    }
  }
  return arr
}
  
//getDivision('Content')
//getDivision(0)
console.log(getDivision(24))