// ####Задача 9

// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число

// ```javascript
// arrayFill('x',5); // [x,x,x,x,x]
let arrNew=[]

arrNew=arrayFill(2,2)
console.log(arrNew);

function arrayFill(st,ln){
   if  (typeof(arguments[1])=== 'number') {
    if ((typeof(arguments[0])=== 'number') || (typeof(arguments[0])=== 'string') || (typeof(arguments[0])=== 'object') ){
      arrFn=[]
      for (i=1; i<=ln;i++){
          arrFn.push(st)
      }
      return arrFn
    }
    else {
        throw new Error('Перший параметер повинен бути число, строка, об\'єкт чи масив')
    }
  }
  else {
    throw new Error('Другий параметер повинен бути число')
  }
}