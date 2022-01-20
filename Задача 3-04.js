/*####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```

*/
f=function(x) {
  let result =''
  if (typeof x != 'number') {
     throw new Error('Тип параметру повинен бути Число')
  }
  else {
    if ((x>=1) && (x<=7)){
        switch (x) {
            case 1:
                result='Неділя';
                break;
            case 2:
                result='Понеділок';
                break;
            case 3:
                result='Вівторок';
                break;
            case 4:
                result='Середа';
                break;
            case 5:
                result='Четвер';
                break;
            case 6:
                result='П\'ятниця';
                break;
            case 7:
                result='Субота';
                break;
            }

    }
    else {
        throw new Error('Параметр повинен бути більше 1 але меньше 7')
    }
     
  }
  //console.log(result)
  return result
}
console.log(f(1)) // Воскресенье
//f(2); // Понедельник
//f(8); // Error: parameter should be in the range of 1 to 7
//f('1'); // Error: parameter type is not a Number

// Можливо через масив
let dayOfWeek=['Неділя','Понеділок','Вівторок','Середа','Четвер','П\'ятниця','Субота']
f1=function(x) {
    let result =''
    if (typeof x != 'number') {
       throw new Error('Тип параметру повинен бути Число')
    }
    else {
      if ((x>=1) && (x<=7)){
          result = dayOfWeek[x-1]
      }
      else {
        throw new Error('Параметр повинен бути більше 1 але меньше 7')
      }
    }
    return result
}
    console.log(f1(3))