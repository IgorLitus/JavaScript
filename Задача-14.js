/*#### Задача 14

Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
 Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.
*/
// Через while
var n=1000;
var num=0;
while (n>50) {
    n=n/2;
    num++
}
console.log('За ',num,' итераций результат меньше 50.  n = ', n)

// Через цикл эффектней
n=1000
for(num=0;n>50;++num) {
     n=n/2
}
console.log('Через цикл num =', num)

// через do while
num=0
n=1000
do {
   n=n/2
   num++
}
while (n>50)
console.log('Через do while num = ',num)
