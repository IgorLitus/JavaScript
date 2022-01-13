/*####Задача 7

Написать код который посчитает сумму всех четных элементов в массиве.

```js
var arr = [1,2,3,4];
*/
var arr = [1,2,3,4];
let sum=0 
for (i of arr) {
  if (i%2==0) {
    sum=sum+i
  }
}
console.log(sum)    