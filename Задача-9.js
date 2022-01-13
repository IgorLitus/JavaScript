/*#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
*/

var arr = [1,2,3,4,5,6];
let a
let n=arr.length-1
for (j=n ; j>0 ;j-- ){
    for (i=0 ; i<j; i++) {
        if (arr[i]<arr[i+1]){
            a=arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = a
        }
    }
}
console.log(arr)