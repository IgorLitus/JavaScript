/* ####Задача 1

 Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
var result;
if (a + b < 4) {
result = true;
} else {
result = false;
}
*/
 
let a=2;
let b=2;

var result;
result = a + b < 4
  ? true
  : false;

console.log(result);