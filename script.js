/*var str = 'hello';
var kid = str.charCodeAt(0);
console.log(kid);

var sf = confirm('привет');
console.log(sf);

var gh = prompt('введите имя');
	alert('приветствуем Вас, ' + gh + '!');
console.log(gh);*/


/*var num1 = +prompt('введите num1');
var num2 = +prompt('введите num2');
	alert('Сумма ' + (num1 + num2));*/
//-------------------------------------
//преобразование типа к логическому
/*var a = '';
var b = 'Hello';
console.log(!!a);
console.log(!!b);*/
//-----------------------------


/*var f='';
if(!f){
	console.log(f);
}*/


/*var g ='fsddsfsd';
console.log(+g);
console.log(typeof +g);
console.log(typeof NaN);*/

/*console.log(!!undefined);//false
console.log(!!null);//false
console.log(!!NaN);//false
console.log(!!'');//false
console.log(!!0);//false
console.log(!!5);//true
console.log(!!'krfd');//true*/


//-----------------------------
/*console.log(+undefined);
console.log(typeof null);
console.log(+null);
console.log(+'123abc');*/

//---------------------------
/*console.log(123 +'4');
console.log(12 * '2');
console.log(parseFloat('4.5', 10));*/


/*var s = 10;
var g;
g= s.toString();
console.log(typeof g);*/

//------------

/*var min = +prompt('введите число');
if(min>=0 && min<=14){
	alert('1');
}
else if (min>=15 && min<=29) {
	alert('2');
}
else if (min>=30 && min<=44) {
	alert('3');
}
else if (min>=45 && min<=60) {
	alert('4');
}
else{
	alert('error');
}*/

/*var user = 'user';
var admin = 'admin';
var userPass = '1111';
var adminPass = '2222';

var login = prompt('введите логин');
var pass = prompt('введите пароль');

if (login==user && pass==userPass){
	alert('привет пользователь');
}
else if (login==admin && pass==adminPass){
	alert('привет admin');
}
else {
	alert('bebebbeb');
}*/

/*var rtty = +prompt('введите число');
if(rtty>100){
	alert('больше');
}
else if (rtty<100) {
	alert('меньше');
}
else if (rtty==100) {
	alert('100');
}
else{
	alert('bebebbeb');
}*/

/*var x = 7;
var numb = +prompt('введите число от 1 до 10');

if(x==numb){
	alert('вы угадали!!!');
}
else if (numb<x) {
	alert('не долет!!!');
}
else if (numb>x) {
	alert('перелет!!!');
}
else{
	alert('бебебебе');
}
var answer = 7|| 1||9||" ";
alert(answer);*/

/*var admin = 'admin';
var parrol = '111';

var log = prompt("Введите логин");
	
	if (admin===log) {
		
		var par = prompt('Введите пароль');
		if (parrol===par) {
		alert('пароль правильный!');
}
	else if (parrol==="") {
		alert('пароль неведен!');
	}
	else {
		alert('пароль не правильный!');
	}
}
	else if (admin==="") {
		alert('логин неведен!');
	}
	else {
		alert('логин не правильный!');
	}*/

/*var x=1;

if (x===1) {
	alert('true');
}
else{
	alert('false');
}

 (x===1) ? alert('true') : alert('false');*/

/*var pink = prompt('введите пин!');
var card= '500';
var pin ='1111';


if (pink===pin) {
	var sum = prompt('введите суму денег!');
if (sum<50||sum>3000||sum>card||card<50) {
	alert('not');
}
else{
	var ostatok = card -sum;
	alert ('получите ' + sum + ' грн' + ' у вас осталось на счету ' + ostatok + ' грн');
}
}
else {
	alert('no');
}*/


/*var time = '17.00';
var timPock = prompt('ввидите время');
var mixS = '500';
var sum = prompt('введите сумму');


if ( timPock !== time || sum < mixS) {
	alert('вы пришли не вовремя!');
}
else {
	alert('ваша скидка 5%');
}*/

/*var count = 4;
 switch (count) {
 	case 1: 
 		document.write('1');
 		break;
 	case 4: 
 		document.write('4');
 		break;
 	default:
 		document.write('fsdsd');
 		break;
 }*/


 /*var g = +prompt('ввидите число от 1 до10');
 switch (g) {
 	case 10:
 		alert('10')
 		break;
 	case 5:
 		alert('5')
 		break;
 	case 7:
 	case 8:
 		alert('7dfds 8')
 		break;
  }*/



  /*var para = +prompt('введите от 1 до 4');
  var rezult;
  switch (para) {
  	case 1:
  		rezult = 'зима'
  		break;
  	case 2:
  		rezult = 'весна'
  		break;
  	case 3:
  		rezult = 'лето'
  		break;
  	case 4:
  		rezult = 'осень'
  		break;
  	default:
  	rezult='dffdhf';
}
alert(rezult);*/


/*var matns = +prompt('введите число от 1 до 12');

if (matns===12 || matns<=2 && matns>0) {
	alert('зима');
} 
else if (matns>=3 && matns<=5) {
	alert('весна');
}
else if (matns>=6 && matns<=8) {
	alert('лето');
}
else if (matns>=9 && matns<=11) {
	alert('осень');
}
else{
	alert('ffhdfhd');
}*/

/*var str= 'fghjk';
if (str[0]=='f') {
	alert('yes');
}
else {
	alert('no');
}

(str[0]=='f') ? alert('yes'): alert('no');*/

//калькулятор switch
/*var x = +prompt('введите любое число x');

var diya = prompt('введите любое арифметическое действие +, -, *, /, %');
var y = +prompt('введите любое число y');
var rezult
switch (diya) {
	case '+':
		rezult = x+y;
		break;
	case '-':
		rezult = x-y;
		break;
	case '*':
		rezult = x*y;
		break;
	case '/':
		rezult = x/y;
		break;
	case '%':
		rezult = x%y;
		break;
	default:
		rezult='ошибка';
		break;
}
alert('Ваш результат ' + rezult);*/

/*var brauzer = prompt('введите браузер');*/

/*var caunt = 0;
document.write(caunt + "<br>");

while (caunt<4) {
	debugger;
	document.write(caunt);
	caunt++;
}
document.write("<br>");
document.write(caunt);*/

/*var i =4;
while (i) {
	document.write(i);
	i--;
}
document.write("<br>");
document.write(i);*/

/*var caunt = 0;
 	do {
 		document.write(caunt);
 		caunt++;
 }
	while (caunt<4);*/

/*var caunt = 4;
 	do {
 		document.write(caunt);
 		caunt++;
 }
	while (caunt<4);*/

/*var caunt = 4;
 	while (caunt<4) {
 		document.write(caunt);
 		caunt++;
 }*/
	
/*var caunt = 0;
 	while (++caunt<4) {
 		document.write(caunt);
 }		

 var caunt = 0;

 	while (caunt++ < 4) {
 		debugger;
 		document.write(caunt);
 }	*/

 /*for(var i =0; i<4; i++){
 	debugger;
 	document.write(i);
 }*/

 //прерывание бесконечного цикла

 /*var x = 1, y = 1;
 while (x>0 && y>0) {
 	var num = +prompt('Ввидите число');
 	if (num === 5){
 		break;
 	}
 	document.write(num);
 }*/

/*for (var i = 1; i < 5; i++) {
	debugger;
	document.write('До континио' + i + '<br>');
	if (i%2==0) {
		continue;
	}
	document.write('после континио' + i + '<br>');
}*/

/*for (var i = 1; i <= 5; i++) {
	
	if(i==5){
		document.write(i +'.');
		continue;
	}
	document.write(i +',');
}*/
/*var sum = 0;
for (var i = 0; i <=100; i++) {
	document.write(i);
	sum +=i; 
}
document.write('<br>' + sum);*/

/*var moz = prompt('введите браузер');
if (moz =='Mozilla' || moz == 'Firefox' || moz =='mozilla' 
	|| moz == 'firefox'	) {
	alert('Вас приветствует ' + moz);
}*/

/*const n = 3;
var a = 1;
for (var i = 0; i <= 10; i++) {
	a= n *i;
	document.write( n + '*' + i + '=' + a +'<br>');
}*/

/*var a  = +prompt('введите диапазон  1 ');
var b  = +prompt('введите диапазон  2 ');
if ( a > b || a === b) {
	alert('ошибка');
}
else {
	for (var i = a; i <= b; i++) {
	if (i%2==0) {
		document.write(i + '<br>');
		}
	if (b%2!==0) {
		b = b-1;
		}
	}

}*/

/*var x = 3;
while (x != pol) {
	var pol = +prompt('введите число');
	if (x===pol) {
		alert('угадали');
	}
	else{
		alert('не угадали');
	}
}*/

/*var a  = +prompt('введите диапазон  1 ');
var b  = +prompt('введите диапазон  2 ');

var rusult = 0;

for (var i = a; i <= b; i++) {
	rusult +=i;
}
alert(rusult);*/

/*var sum = 0;
var count = 0;
var midle;
while (a!==0) {
	var a  = +prompt('введите число ');
	sum+=a;
	count++;
}
alert(sum);
alert(count -=1);
alert(sum/count);*/

/*function hi(){
	alert('hello');
}
hi();

var hi = function(){
	alert('hello2');
}
hi();

hi = 1;
hi();*/

/*var hi = function(){
	var a = 'hfhdfj';
	alert(a);
}
hi();
alert(a);*/

/*var name ='ggdfh';
var a;
function hi(){
	a = 'tutureu' + name;
	var b = 'qwwe';
	alert(b);
}
hi();
alert(a);
alert(b);*/

/*var name ='ggdfh';
function hi(){
	name = '2gfdgdf';
	var b = 'qwwe';
	alert(b);
}
hi();
alert(name);*/

/*var name ='ggdfh';
function hi(){
	var name = '2gfdgdf';
	alert(name);
}
hi();
alert(name);*/

/*function sum ( x, y){
	var rt = x+y
	return rt;
}
var a = sum(5,8);
alert(a);*/

/*function sum ( x, y ){
	x = x || 0; // x = 5 || 0
	//x = undefined || 0
	y = y || 0;
	var rt = x+y
	return rt;
}
var a = sum(5,8);
alert(a);*/

/*function hi(name, name2){
	if (name2 === undefined) {
		name2 = ' пока';
	}
	name = name + ' сказал';
	document.write(name + name2);
}
hi( "вася", " привет "+ '<br>');
hi( "вася");*/

/*function max(a, b){
	a = a || 0;
	b = b || 0;
	if (a>b) {
		return a;
	}
	else if (a<b) {
		return b;
	}
	else {
		return 'gdfh';
	}
}
var bol = max(7,5);
bol*=2;
alert(bol);*/

/*function grade(x, n){//возведение в степень
	x = x || 1;
	n = n || 1;
	var rez = 1;
	for (var i = 1; i <= n; i++) {
		 rez *= x; 
	}
	return rez;
}
alert(grade(2, 3));*/

/*function fact(a){
	var rez = 1;
	for (var i = 1; i <= a; i++) {
		rez *=i;
		
	}
	return rez;
}
var res = fact(5);
alert(res);*/

/*var max = 50;
var rez = Math.round(Math.random()*max);
alert(rez);*/

//var x = +prompt('введите число');
/*if (isNaN(x)) {
	alert('не число');
}
else{
	alert('число');
}*/


/*if (typeof x === 'number') {
	alert('число');
}
else{
	alert('не число');
}*/

/*alert(+'ggdg');
alert(typeof NaN);*/

			// Масивы

/*var arr = [5, 'ggg',[6]];

//alert(arr[0]);
arr[0] = 1;
//alert(arr);

var a = 1;
var b = 1;
console.log(a===b);
var arr2 = [1];
var arr3 = [1];
console.log(arr2===arr3);//false
console.log([]===[]);
console.log([]);

var arr4 = arr3;
console.log(arr4===arr3); //true

var arrr = [];
var d = 5;
arrr[0] = d;


arrr[100] = 100;
console.log(arrr);*/

/*var arr = ['0', '1', '2'];
arr.pop();
arr.push('8');
arr.shift();
arr.unshift('12');
//console.log(arr.length);
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	var f = +arr[i];
	sum += f;
	document.write(arr[i]);
}
alert(sum);*/

/*var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

for (var i = arr.length; i >= 0; i--) {
	if (arr[i]%2==0) {
		document.write(arr[i]);
	}
}*/

/*var books = ['JS', 'PHP', 'HTML', 'CSS'];

for (var i = 0; i < books.length; i++) {
	//document.write(i+1);
	document.write((i+1 + '. ') + books[i] + '<br>');

}
books.length = 2;
alert('У нас в магазине ' + books.length +' книги');
alert(books);*/

/*var color = ['blue', 'red'];
color.push('black');
color[color.length-2] = 'yellow';
color.shift();
color.unshift('pink', 'green');
document.write(color);*/

/*var numbers = [1,2,3,4,5,6,7,8,9];

for (var i = 0; i < numbers.length; i++) {
	var g = (Math.floor(Math.random()*numbers.length))
	document.write([g]);
}*/

/*var  arr = [];//заполнение массива
for (var i = 0; i < 3; i++) {
	arr[i] = prompt('введите');
}
document.write(arr + '<br>');*/

/*var arr = ['a', 'b', 'c', 'd'];

function num(arr, elem){
	if (arr.indexOf){ //проверка если метод поддерживается
		return (arr.indexOf(elem));
	}
	for (var i = 0; i < arr.length; i++) {
		
		if (arr[i] === elem) {
			return i;
		}
		
	}
	return -1;
		
}

var ss = num(arr, 'c');
document.write(ss);
document.write(arr);*/




/*var a = [1,23,3];
for (var i = 0; i < a.length; i++) {
	console.log(i);
	console.log('elem ' + a[i]);
}

var arr = [1,23,3];
var obj = {key1: 1, key2: 2};

var user = {
	name: 'Alex',
	age: 25
}
for(var key in user){
	console.log('ключи ' + key);
	console.log(user[key]);
}

console.log(user.name);
console.log(user['name']);*/

/*var arr = [
	{
		name: 'Vasya',
		age: 25,
		id: 88
	},
	{
		name: 'Katya',
		age: 44,
		id: 66
	}
];

for (var i = 0; i < arr.length; i++) {
	for(var key in arr[i]){
		console.log(key);
		console.log(arr[i][key]);

	}priv(arr[i]);
}

function priv(obj){
	document.write('привет '+ obj['name'] +'<br>');
}


console.log(arr[0]);
console.log(arr[1]['name']);
console.log(arr[1].name);*/

/*var arr = [1,3,6,5];
var newArr = [];
var a = 1;
a+='*';
document.write(a);
for (var i = 0; i < arr.length; i++) {
	newArr[i] = arr[i] +'*';

}
document.write(arr + '<br>');
document.write(newArr+ '<br>');
//item = arr[i] обращение к текущему элементу
//index = i - индекс элемента
//array = arr - массив

arr.forEach(function(item, index, array){
	array[index] = item + '*';

});
//document.write(arr);

arr.forEach(function(item){
	
	console.log(item);
});*/


/*const arr = [1,2,3];
const arr1 = [];
for (var i = 0; i < arr.length; i++) {
	arr1.push(arr[i]);
}
document.write(arr1 + '<br>');

arr1[0]= 5;
document.write(arr1);*/

/*задан массив имен искать в нем определенное имя
и удалять если оно стоит в начале массива*/


/*var arr = ['Алекс','Таня','Андрей','Вася','Лариса','Иван'];

var name = prompt('введите имя');
if (name ===arr[0]){
		arr.shift();
	}
document.write(arr);*/

/*var listType=prompt("Введите '1' - если маркированный список, '2' - если нумерованный список");
if (listType=='1')
	document.write("<ul>")
else if (listType=='2')
	document.write("<ol>")
else {
	alert("Введите правильный тип");
	exit;
	}
var kolvo=prompt("Введите количество пунктов");
kolvo=parseInt(kolvo);
for (var i=1; i<=kolvo; i++)
	document.write("<li></li>");
if (listType=='1')
	document.write("</ul>")
else if (listType=='2')
	document.write("</ol>");*/



/*var listType=prompt("Введите '1' - текстовое поле, '2' - кнопка, '3' -  radio (переключатель)");
	if (listType=='1')
	document.write("<input type='text'>")
else if (listType=='2')
	document.write("<input type='button'>")
else if (listType=='3')
	document.write("<input type='radio'>")
else {
	alert("Введите правильный тип");
	
	}*/

/*var arr = [];
for (var i = 0; i < 3; i++) {
	var a = prompt('введите страну');
	arr.push(a);
	document.write(arr[i]+ '<br>');
}*/

// есть массив с объектами, нужно вывести марку, модель и год выпуска
   /* var cars = [
        {
            name: 'bmw',
            model: 'x5',
            year: '2010'
        },
        {
            name: 'mercedes',
            model: 'clk',
            year: '2012'
        },
        {
            name: 'таврия',
            model: 'славута',
            year: '1986'
        }
    ];
   for (var i = 0; i < cars.length; i++) {
   	/*for(var a in cars[i]){

   		console.log(a+": " +cars[i][a]);
   	}
   	document.write('name '+": " +cars[i]['name'] +
   		'model '+": " +cars[i]['model']  +
   		'year '+": " +cars[i]['year'] +'<br>');

   }*/

// дан объект с массивами. вывести все данные
    /*var cars = {
        name: ['bmw', 'mercedes', 'таврия'],
        model: ['x5', 'clk', 'славута'],
        year: ['2010', '2012', '1986']
    };

	for (var i = 0; i < cars.name.length; i++) {
		for(var a in cars){
			console.log(cars[a][i]);
		}

		//console.log(cars.name[i], cars.model[i], cars.year[i]);
	}
*/

/*var arr = [
        [1, 2, 3, 4, 5],
        [8, 2, 3, 4],
        [9, 2, 3, 4, 5, 6, 7],
        [5],
        []
];
var a;
var min = 100;
	for (var i = 0; i < arr.length; i++) {
		a = arr[i].length;
		
		if (min>a) {
			min = a;
		}
		/*for (var j = 0; j < arr[i].length; j++) {
			console.log(arr[i][j]);
		}
	}
console.log(min);*/	


/*var arr = [[1, 2, 3],
	[4, 5]];
 
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    arr[i][j] /= 2;
  }
}
 
console.log(arr[0]); 
console.log(arr[1]); */

/*var human = {
        male: {
            height: 180,
            weight: 80,
            hairColor: 'brown',
            eyeColor: 'green'
        },
        female: {
            height: 170,
            hairColor: 'red',
            eyeColor: 'grey'
        }
    };
/*Object.defineProperty(human.female, '_weight', {
	enumerable:true,// false чтобы не выводилось на экран
	value: 60,
	wtitable:true //чтобы нельзя было изменить const
});
for (var a in human){
	console.log(a);
	for (var b in human[a]){
		console.log(b+ ':' + human[a][b]);
	}
}

Object.defineProperty(human.female, 'weight', {
	set: function(value){
		//устанавливаем в приватную переменную свойтво weight
		this._weight = value;
	},
	get: function(){
		//возращаем изменненное значение свойтва - 30
		return this._weight - 30;
	}
});
human.female.weight = 80;
console.log(human.female.weight);*/

/*Object.defineProperty(human.female, '_weight', {
        enumerable: false,
        value: 60,
        writable: true
    });

    for(var gender in human) {
    //console.log('gender', gender);
    console.log(gender + ': ');
        for(var property in human[gender]){
            console.log(property + ': ' + human[gender][property]);
        }
    }

    // делаем функции для set и get,
    Object.defineProperty(human.female, 'weight', {
        set: function(value) {
            // устанавливаем в приватную переменную свойство weight
            this._weight = value; 
        },
        get: function () {
            // возвращает значение свойства - 30
            return this._weight - 30; 
        }
    });
    
    human.female.weight = 80;
    console.log(human.female.weight);

    human.male.weight = 100;
    var f = Object.freeze(human.male);
    human.male.weight = 70;
    console.log(human.male.weight);*/

// есть массив объектов. вывести 2 студента - их имена и фамилии /
    
 /*   var data = [
        {
            name: 'Vasya',
            surname: 'Pupkin',
            type: 'student'
        },
        {
            name: 'Petya',
            surname: 'Vasechkin',
            type: 'teacher'
        },
        {
            name: 'Maksim',
            surname: 'Maksimov',
            type: 'student'
        },
        {
            name: 'Ignat',
            surname: 'Ignatenko',
            type: 'teacher'
        },
        {
            name: 'Foma',
            surname: 'Fomin',
            type: 'teacher'
        },
        {
            name: 'Sergey',
            surname: 'Seregin',
            type: 'student'
        },
        {
            name: 'Foma',
            surname: 'Pupkin',
            type: 'teacher'
        },
        {
            name: 'Foma',
            surname: 'Fomin',
            type: 'teacher'
        },
        {
            name: 'Sergey',
            surname: 'Seregin',
            type: 'student'
        }
    ];
var caunter = 0;
/*for (var i = 0; i < data.length; i++) {
	if ( data[i].type == 'student'&& caunter<2) {
		caunter++;
		console.log(data[i]);
	}
	
}
var i = 0;
while (caunter<2) {
	if (data.length==i) {
		break;//проверка на пустой массив и бесконечный цикл
	}
	if ( data[i].type == 'student'){
		console.log(data[i]);
		caunter++;
	}
	i++;
}*/


/*var color = {
	red: 'red',
	black: 'black',
	blue:'blue'
};

color.green = 'green';
console.log(color);
delete color.green;
console.log(color);*/

/*var user = {
        name: 'vasya',
        surname: 'pupkin',
        age: '50',
        options: {
            recieveMessages: false,
            recieveEmails: false
        }
};
user.options.recieveMessages = true;

delete user.options.recieveEmails;
console.log(user);
for(var a in user){
	if (typeof user[a] !='object') {
		console.log(user[a]);
	}
	else{
		for(var b in user[a]){
		console.log(user[a][b]);
	}
	}
}*/


/*var user2 = {
        name: 'vasya',
        surname: 'pupkin',
        age: 50,
        getFullName: function(){
            // this - это ссылка на текущий объект
            console.log(this.name + ' ' + this.surname);
        },
       getAge: function() {
            alert(this.age);
       }
};

user2.age = 37;
user2.getAge();
user2.getFullName();
//если такой ключ есть и он является функции, то вызываем функции
if (user2.getFullName && user2.getFullName instanceof Function) {
	user2.getFullName();

}

user2.getUserInfo = function(){
	console.log(this.name + ' ' + this.surname + ' ' + this.age);
}

if (user2.getUserInfo && user2.getUserInfo instanceof Function) {
	user2.getUserInfo();
}
//console.log(user2);*/


/*var user3 = {
        name: 'vasya',
        surname: 'pupkin',
        age: 50,
        getFullName: function(){
            // this - это ссылка на текущий объект
            console.log(this.name + ' ' + this.surname);
        },
        getUserInfo: function(){
            return this.name + ' ' + this.surname + ' ' + this.age;
        },
        appearance: {
            height: 172,
            hairColor: 'gray-haired',
            eyeColor: 'blue'
        },
        characterTraits: ['kind', 'smart', 'strong', 'resourceful']
    };

 if (user3.getUserInfo && user3.getUserInfo instanceof Function) {
	user3.getUserInfo();
}
console.log(user3.getUserInfo());

for (var a in user3.appearance){
	console.log(a +':' + user3.appearance[a]);
}

for (var i = 0; i < user3.characterTraits.length; i++) {
	console.log(user3.characterTraits[i]);
}*/

// вывести информацию о каждом пользователе. удалить одного
    // пользователя и добавить нового пользователя.
   /* var users = [
        {
            name: 'Vasya',
            surname: 'Pupkin',
            age: 51
        },
        {
            name: 'Petia',
            surname: 'Vasechkin',
            age: 15
        },
        {
            name: 'Fedor',
            surname: 'Ivanov',
            age: 25
        }
    ];

 for (var i = 0; i < users.length; i++) {
 	for (var a in users[i]){
 		console.log(a + ':' + users[i][a]);
 	}
 }
 /*users.pop();
 
 users.unshift({name: 'dfgfgf', surname: 'eeeeeee'});
 console.log(users);

 users.splice(0, 1);
console.log(users);


users.push({
            name: 'gfgfg',
            surname: 'gfgf',
            age: 28
        })

users.splice(3, 0, {
            name: 'aswedg',
            surname: 'qqqqqq',
            age: 34
        }, {
            name: 'aswedg',
            surname: 'qqqqqq',
            age: 34
        })

users.splice(-1, 1);

users[users.length] = {
            name: 'aswedg',
            surname: 'qqqqqq',
            age: 74
        }
console.log(users);*/


/*var test = {
            key1: [1, 2, 3],
            key2: [4, 5, 6, 7],
            key3: [8, 9],
            key4: [10]
        };

 for (var a in test){
 	for (var i = 0; i < test[a].length; i++) {
 		console.log(test[a][i]);
 	}
 	
 }*/


 /*const employee = {
        name: 'John',
        phone: '+7 (765) 000-98-34',
        company: 'Opera Software',
        email: 'john@opera.com',
        duties: ['Frontend', 'Optimization', 'Testing'],
        obj: {}
 };

 for (var a in employee){
 	console.log(a + ':' + employee[a]);
 }

 var keys = Object.keys(employee);
 for (var i = 0; i < keys.length; i++) {
 	console.log(keys[i]);
 }*/
 
 /*var codes = {
  "+7": "Россия",
  "+38": "Украина",
  "+1": "США"
};

for (var a in codes) {
  var value = codes[a];
  a = +a; // ..если нам нужно именно число, преобразуем: "+7" -> 7

  alert( a + ": " + value ); // 7, 38, 1 во всех браузерах
}*/






var sum = 0;
function sumChislo(){
	for (var i = -1000; i <=1000; i++) {
		//console.log(i);
		var j = i.toString()
		if (j[j.length - 1] =='7' ||j[j.length - 1] =='3' 
			||j[j.length - 1] =='2' ) {
			sum +=i;
		//console.log(i);
		}
	
	}
}
sumChislo();
console.log(sum);


