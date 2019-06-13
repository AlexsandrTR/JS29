//Отработка циклов

//Выведите с помощью цикла столбец чисел от 1 до 100. 

/*for (var i = 1; i <= 100; i++) {
	document.write(i + '<br>');
}*/

// Выведите с помощью цикла столбец чисел от 100 до 1

/*for (var i = 100; i >0; i--) {
	document.write(i + '<br>');
}*/

//Выведите с помощью цикла столбец четных чисел от 1 до 100
/*
for (var i = 2; i <=100; i+=2) {
	document.write(i + '<br>');
}*/

// Заполните массив 10-ю иксами с помощью цикла

/*var arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] ='x';
}
document.write(arr);*/

//Заполните массив числами от 1 до 10 с помощью цикла

/*var arr = [];
for (var i = 1; i <= 10; i++) {
	arr.push(i);
}
document.write(arr);*/

/*Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с 
помощью цикла. Дроби округляйте до двух знаков в дробной части.*/

/*var arr = [];
for (var i = 0; i <=10; i++) {
	arr.push(Math.random().toFixed(2));
	
}
document.write(arr);*/

//Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла

/*var arr = [];
for (var i = 0; i <10; i++) {
	arr.push(Math.floor(Math.random()*10));
	
}
document.write(arr);*/

/*Дан массив с числами. С помощью цикла выведите только те элементы 
массива, которые больше нуля и меньше 10-ти*/

/*var arr = [-1,32,3,24,5,16,7,8,9];

for (var i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && arr[i] < 10) {
		document.write(arr[i]);
	}
	
}*/


/*Дан массив с числами. С помощью цикла проверьте, что в нем есть 
элемент со значением 5. Как только будет найден первый такой 
элемент - выведите 'Есть' и оборвите цикл. Если такого элемента 
нет - ничего не выводите*/

/*var arr = [-1,32,3,24,5,16,7,8,9];
for (var i = 0; i < arr.length; i++) {
	if (arr[i] === 5) {
		document.write('yes');
		break;
		}
}*/

//Дан массив с числами. С помощью цикла найдите сумму элементов 
//этого массива.

/*var arr = [-1,32,3,24,5,16,7,8,9];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}
document.write(sum);*/

//Дан массив с числами. С помощью цикла найдите сумму квадратов 
//элементов этого массива.

/*var arr = [1,2,3,4,5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += arr[i]*arr[i];
}
document.write(sum);*/

//Дан массив с числами. Найдите среднее арифметическое его 
//элементов (сумма элементов, делить на количество).

/*var arr = [1,2,3,4,5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}
var resalut = sum/arr.length;

document.write(sum + '<br>');
document.write(resalut);*/



/*var a = [10,2,7,4,99,12,41];

for (var i = 0; i < a.length; i++) {
	for (var k = i; k < a.length; k++) {
		if (a[i] > a[k]) {
			var temp = a[i];
			a[i] = a[k];
			a[k] = temp;
		}
		console.log(a);
	}
}*/