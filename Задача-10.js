/*#### Задача 10

Отсортировать массив по возрастанию.

```javascript
*/

console.log(reverse([3,2,1]))

function reverse(arr){
  if (Array.isArray(arr)) {
      if (arr.length === 0) {
        throw new Error( 'Масив не може бути пустим')
      }
    arrNew = []
    for (i=0; i<arr.length; i++){
       arrNew.unshift(arr[i])
    }
    return arrNew
  }
  else {
      throw new Error('Параметер повинен бути Масив')
  }
}
