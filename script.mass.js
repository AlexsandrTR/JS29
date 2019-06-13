//Задачи на приемы работы с массивами на JavaScript

/*Заполните массив следующим образом: в первый элемент 
запишите 'x', во второй 'xx', в третий 'xxx' и так 
далее.*/

/*var arr = [];
var str = 'x';
for (var i = 0; i < 10; i++) {
	arr.push(str);
	str+='x';
}
console.log(arr);*/

/*Заполните массив следующим образом: в первый элемент 
запишите '1', во второй '22', в третий '333' и так 
далее.*/

/*var arr = [];
for (var i = 1; i < 10; i++) {
	var str = '';
	for (var j = 0; j < i; j++) {
		str+=i;
	}
	arr.push(str);
}
console.log(arr);*/

/*Сделайте функцию arrayFill, которая будет заполнять 
массив заданными значениями. Первым параметром 
функция принимает значение, которым заполнять массив, 
а вторым - сколько элементов должно быть в массиве. 
Пример: arrayFill('x', 5) сделает массив 
['x', 'x', 'x', 'x', 'x'].*/

/*function arrayFill(value, length){
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}
console.log(arrayFill('x', 5));*/

/*Дан массив с числами. Узнайте сколько элементов с 
начала массива надо сложить, чтобы в сумме получилось 
больше 10-ти*/

/*function func(arr) {
	var sum = 0;
	for (var i = 0 ; i < arr.length; i++) {
		sum += arr[i];
		if (sum > 10) {
			return i + 1; //1 добавляем, т.к. нумерация с нуля
		}
	}
}

console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9]));*/

//Дан массив с числами. Не используя метода reverse 
//переверните его элементы в обратном порядке.

/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
for (var i = arr.length-1; i >= 0; i--) {
	 result.push(arr[i]);
}
console.log(result);*/

/*Дан двухмерный массив с числами, например 
[[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов 
этого массива. Массив, конечно же, может быть 
произвольным.*/

/*var arr = [
	[1, 2, 3], 
	[4, 5], 
	[6]
];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	for (var k = 0; k < arr[i].length; k++) {
		sum+=arr[i][k];
	}
}
console.log(sum);*/

/*Дан трехмерный массив с числами, например 
[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите 
сумму элементов этого массива. Массив, конечно 
же, может быть произвольным. */

/*var arr = [
	[[1, 2], [3, 4]], 
	[[5, 6], [7, 8]]
];
var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var k = 0; k < arr[i].length; k++) {
			for (var j = 0; j < arr[i][k].length; j++) {
				sum+=arr[i][k][j];
			}
		}
	}
	alert(sum);*/


 /*Сделайте функцию isNumberInRange, которая параметром 
 принимает число и проверяет, что оно больше нуля и 
 меньше 10. Если это так - пусть функция возвращает 
 true, если не так - false.*/

 /*function isNumberInRange(num){
 	if (num>0 && num<10) {
 		return alert('true');
 	}
 	else {
 		return alert('false');
 	}
 }
 isNumberInRange(10);*/

//Второй вариант - сокращенный:

/*function isNumberInRange(num) {
	return num > 0 && num < 10;
}
alert(isNumberInRange(10));*/

/*Дан массив с числами. Запишите в новый массив только 
те числа, которые больше нуля и меньше 10-ти. Для 
этого используйте вспомогательную функцию 
isNumberInRange из предыдущей задачи.*/

/*var arr = [1, 3, 5, 6, 9, 11, 15, 30];
function isNumberInRange(num){
 	return num > 0 && num < 10
  }
 var newArr = [];
 for (var i = 0; i < arr.length; i++) {
 	if (isNumberInRange(arr[i])) {
 		newArr.push(arr[i])
 	}
 }
 console.log(newArr);*/

/*Сделайте функцию getDigitsSum (digit - это цифра), 
которая параметром принимает целое число и возвращает 
сумму его цифр.*/

/*function getDigitsSum(num){
	var num = String(num);
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
		sum+= Number(num[i]);
	}
	return sum;
}
alert(getDigitsSum(123));*/

/*Найдите все года от 1 до 2019, сумма цифр которых 
равна 13. Для этого используйте вспомогательную 
функцию getDigitsSum из предыдущей задачи. */

/*function getDigitsSum(num){
	var num = String(num);
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
		sum+= Number(num[i]);
	}
	return sum;
}
for (var i = 1; i < 2019; i++) {
	if (getDigitsSum(i) == 13) {
		console.log(i)
	}
}*/

/*Сделайте функцию isEven() (even - это четный), 
которая параметром принимает целое число и проверяет:
четное оно или нет. Если четное - пусть функция 
возвращает true, если нечетное - false.*/

/*function isEven(num){
	if (num % 2 ==0) {
		return alert('true');
	}
	else {
		return alert('false');
	}
}
isEven(5);*/


/*Дан массив с целыми числами. Создайте из него 
новый массив, где останутся лежать только четные 
из этих чисел. Для этого используйте вспомогательную 
функцию isEven из предыдущей задачи.*/

/*var arr = [1,2,3,4,5,6,7,8,9];
	function isEven(num){
	return num % 2==0;
}
var newArr = [];
for (var i = 0; i < arr.length; i++) {
	if(isEven(arr[i])) {
		newArr.push(arr[i])
	}
}
console.log(newArr);*/

/*Сделайте функцию getDivisors, которая параметром 
принимает число и возвращает массив его делителей 
(чисел, на которое делится данное число).*/

/*function getDivisors(num){
	var arr = [];
	for (var i = 1; i <= num; i++) {
		if (num % i ==0) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(getDivisors(12));*/

//Пересечение массивов
 /*реализуйте функцию getIntersection, которая 
 параметрами будет принимать два массива и 
 возвращать массив элементов, которые есть и в 
 одном, и во втором массиве (это называется 
 пересечение массивов). К примеру, 
 getIntersection([1, 2, 3], [2, 3, 4]) должно 
 вернуть [2, 3].*/

 /*Решение: переберем один из переданных массивов 
 (не имеет значения какой) с помощью цикла. В цикле 
 воспользуемся функцией inArray, которую мы с вами 
 разработали выше. С ее помощью будем проверять, есть 
 ли текущий элемент одного массива во втором. Если 
 есть - записываем его в массив с результатом. Вот 
 решение:*/

/*function inArray(value, arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == value) {
			return true;
		}
	}

	return false;
}


 function getIntersection(arr1, arr2) {
	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		if(inArray(arr1[i], arr2)) {
			result.push(arr1[i]);
		}
	}

	return result;
}

alert(getIntersection([1, 2, 3], [2, 3, 4])); */

/*Задача: реализуйте функцию getGreatestCommonDivisor, 
которая параметрами будет принимать два числа и 
возвращать наибольший общий делитель (НОД) этих двух 
чисел. К примеру, для чисел 12 и 18 НОД равен 6.

Решение: используем разработанные нами функции. С 
помощью getDivisors найдем массив делителей одного 
и второго числа, а с помощью getIntersection - 
получим массив общих делителей. Останется просто 
взять максимальный из общих делителей - и получим 
результат:*/

/*function inArray(value, arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == value) {
			return true;
		}
	}

	return false;
}
function getDivisors(num) {
	var result = [];

	for (var i = 1; i <= num; i++) {
		if(num % i == 0) {
			result.push(num);
		}
	}

	return result;
}
function getIntersection(arr1, arr2) {
	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		if(inArray(arr1[i], arr2)) {
			result.push(arr1[i]);
		}
	}

	return result;
}
function getGreatestCommonDivisor(num1, num2) {
	var divisors = getIntersection(getDivisors(num1), 
	getDivisors(num2)); // ['2', '3', '6']
	
	return Number(Math.max.apply(null, divisors));
}

alert(getGreatestCommonDivisor(12, 18));*/

/*Дана строка. Сделайте заглавным первый символ 
каждого слова этой строки. Для этого сделайте 
вспомогательную функцию ucfirst, которая будет 
получать строку, делать первый символ этой строки 
заглавным и возвращать обратно строку с заглавной 
первой буквой.*/

/*var str ='abcde abcde abcde';
var newArr = [];

var arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
	newArr.push(ucfirst(arr[i]));
}

var newStr = newArr.join(' ');
alert(newStr);

function ucfirst(str) {
	return str[0].toUpperCase() + str.substr(1);
}*/

/*Дана строка вида 'var_text_hello'. Сделайте из него 
текст 'varTextHello'.*/

/*var str = 'var_text_hello';
var arr = str.split('_');
for (var i = 1; i < arr.length; i++) {
	arr[i] = ucfirst(arr[i]);
}
str= arr.join('');
function ucfirst(str) {
	return str[0].toUpperCase() + str.substr(1);
}
alert(str);*/

/*Сделайте функцию inArray, которая определяет, есть 
в массиве элемент с заданным текстом или нет. Функция 
первым параметром должна принимать текст элемента, а 
вторым - массив, в котором делается поиск. Функция 
должна возвращать true или false.*/

/*function inArray(str, arr){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]===str) {
			return true;
		}
	}
		return false;
}
var str = 'яблоко';
var arr = ['банан', 'яблоко', 'персик'];
console.log(inArray(str, arr));*/

//Дана строка, например, '123456'. Сделайте из 
//нее '214365'.

/*str = '123456';
arr = str.split('');
for(var i = 0; i < arr.length; i++) {
  if(i % 2 !== 0) {
    var b = arr[i - 1];
    arr[i - 1] = arr[i];
    arr[i] = b;
  }
}
str = arr.join('')
console.log(str)*/


/*function func(arr) {
	alert(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}
func([1,5,8,7,4,12,3,4]);*/

/*function arrCall(arr, n) {
  if (n < arr.length) { 
    console.log(arr[n])
    return arrCall(arr, n + 1);
  } 
}

let arr = [1, 2, 3, 4];
arrCall(arr, 0);*/