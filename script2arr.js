/*Задачи на основы работы
с массивами и объектами*/

/*Дан массив с элементами 
'Привет, ', 'мир' и '!'.
Необходимо вывести на экран 
фразу 'Привет, мир!'.*/

/*var arr = ['Привет, ', 'мир', '!'];
alert(arr[0] + arr[1] + arr[2]);*/

/*Решим немного другую задачу: 
дан массив с элементами 'Привет, ',
'мир' и '!'. Необходимо записать 
в переменную text фразу 'Привет, 
мир!', а затем вывести на экран 
содержимое этой переменной.*/

/*var arr = ['Привет, ', 'мир', '!'];
var str = arr[0] + arr[1] + arr[2]; 
//в переменной text теперь лежит строка 'Привет, мир!'
alert(str);*/

/*Дан массив ['Привет, ', 'мир', '!'].
Необходимо записать в нулевой элемент
этого массива слово 'Пока, ' (то 
есть вместо слова 'Привет, ' будет 'Пока, ').*/

/*var arr = ['Привет, ', 'мир', '!'];
arr[0] = 'Пока, '; //перезапишем нулевой элемент массива
alert(arr); //посмотрим на массив и убедимся в том, что он изменился*/

/*Создайте массив arr = ['a', 'b', 'c']. 
Выведите его на экран с помощью функции alert.*/

/*var arr = ['a', 'b', 'c'];
alert(arr);*/

/*С помощью массива arr из предыдущего
номера выведите на экран содержимое 
первого, второго и третьего элементов.*/

/*var arr = ['a', 'b', 'c'];
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);*/

/*Создайте массив arr = ['a', 'b', 'c', 'd'] 
и с его помощью выведите на экран строку 
'a+b, c+d'.*/

/*var arr = ['a', 'b', 'c', 'd'];
alert(arr[0] + '+' + arr[1] + ',' 
	+ arr[2] + '+' + arr[3]);*/

/*Создайте массив arr с элементами 2, 5, 3, 9.
Умножьте первый элемент массива на второй,
а третий элемент на четвертый. Результаты 
сложите, присвойте переменной result. 
Выведите на экран значение этой переменной*/

/*var arr = [2, 5, 3, 9];
var result = arr[0] * arr[1] + arr[2] * arr[3];
alert(result);*/

//Объекты (ассоциативные массивы)

/*Создайте ассоциативный массив 
(объект) заработных плат obj. 
Выведите на экран зарплату Пети и Коли.*/

/*var obj = {
	'Коля':'1000', 
	'Вася':'500', 
	'Петя':'200'
};
alert(obj['Коля']); //выведет 1000
alert(obj['Петя']); //выведет 200*/

/*Создайте объект obj. Выведите на 
экран элемент с ключом 'c' двумя 
способами: через квадратные скобки 
и как свойство объекта:
var obj = {a: 1, b: 2, c: 3};*/

/*var obj = {a: 1, b: 2, c: 3};
alert(obj['c']);
alert(obj.c');*/

/*Создайте объект с днями недели. 
Ключами в нем должны служить номера 
дней от начала недели (понедельник - 
первый и т.д.). Выведите на экран 
текущий день недели.*/

/*var obj = {
	1: 'пн',
	2: 'вт',
	3: 'ср',
	4: 'чт',
	5: 'пят',
	6: 'сб',
	7: 'вс'

};
alert(obj[3]);*/

/*Пусть теперь номер дня недели 
хранится в переменной day, например 
там лежит число 3. Выведите день 
недели, соответствующий значению 
переменной day. Скрыть решение.*/

/*var obj = {
	1: 'пн',
	2: 'вт',
	3: 'ср',
	4: 'чт',
	5: 'пят',
	6: 'сб',
	7: 'вс'

};
var day = 3;
alert(obj[day]);*/

//Способы создания массива

/*Создайте массив arr с элементами
1, 2, 3, 4, 5 двумя различными способами.*/

/*Первый способ создать массив - 
объявить его через [ ]:*/
//var arr = [1, 2, 3, 4, 5];

/*Второй способ создания массива -
это поступить таким образом:*/

/*var arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;*/

//Многомерный массив

/*Дан многомерный массив arr:
var arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};
Выведите с его помощью слово 'голубой'.*/

/*Решение: так как массив многомерный 
(в нашем случае двухмерный), то нам
придется написать несколько квадратных
скобок подряд. Поясню это по шагам. 
Давайте сделаем так:

alert(arr['ru']);
В этом случае результатом будет массив 
['голубой','красный', 'зеленый'], 
который является частью нашего многомерного
массива. Чтобы вывести слово 'голубой',
необходимо дописать еще одну квадратную 
скобку с ключом, соответствующим этому 
элементу (у него нет явного ключа 
- значит его ключ 0):

alert(arr['ru'][0]); //выведет 'голубой'
Выведем теперь слово 'красный':

alert(arr['ru'][1]); //выведет 'красный'
Выведем 'red':

alert(arr['en'][1]); //выведет 'red'*/

/*Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. 
Выведите на экран цифру 4 из этого массива.*/

/*var obj = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
alert(obj[1] [0]);*/

/*Дан объект {js:['jQuery', 'Angular'], 
php: 'hello', css: 'world'}. 
Выведите с его помощью слово 'jQuery'.*/

/*var obj = {
	js:['jQuery', 'Angular'], 
	php: 'hello', 
	css: 'world'
};
alert(obj['js'][0]);*/

/*Создайте двухмерный массив. 
Первые два ключа - это 'ru' и 'en'. 
Пусть первый ключ содержит элемент, 
являющийся массивом названий дней 
недели по-русски, а второй - по-английски. 
Выведите с помощью этого массива 
понедельник по-русски и среду по английски
(пусть понедельник - это нулевой день).*/

/*var obj = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en': ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
};
alert(obj['ru'] [0]);
alert(obj['en'] [2]);*/

/*Пусть теперь в переменной lang хранится 
язык (она принимает одно из значений или
'ru', или 'en' - либо то, либо то), а в
переменной day - номер дня. Выведите 
словом день недели, соответствующий 
переменным lang и day. То есть: если, 
к примеру, lang = 'ru' и day = 3 - то 
выведем 'среда'.*/

/*var arr = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en': ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
};
var lang = 'ru';
var day = 3;
alert(arr[lang][day]);*/


