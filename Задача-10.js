/*#### Задача 10

Отсортировать массив по возрастанию.

```javascript
*/

var arr = [6,5,4,3,2,1];
let a;
let n=arr.length-1;
for (j=n ; j>0 ;j-- ){
    for (i=0 ; i<j; i++) {
        if (arr[i]>arr[i+1]){
            a=arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = a
        }
    }
}
console.log(arr)