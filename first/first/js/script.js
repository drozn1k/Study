// На підставі значень в змінних та їх типів, обчислити кількість років особи якщо вона живе у 2030 році. Вивести результат в консоль в форматі:
// У (рік) році (ІМ'Я) (прізвище) буде мати вік (обчислене число) років 
// (рік), (ІМ'Я), (прізвище), (обчислене число) виводити через змінні формату ${}
// let yearBorn = "1984"; 
// let num = parseInt(yearBorn); // Зробив текст числом
// const currentYear = 2030; 
// let fullName = 'Вязовська арина Сергіївна'; // правильне ім'я Марина
// let age = currentYear - num; // Рахує скільки буде років у 2030 році

// let name = fullName.substring(10, 15);
// let secondName = fullName.substring(0, 9);
// let upper = name.toUpperCase();

// let resultElement = document.getElementById('result');
// resultElement.textContent = `У ${currentYear} році ${upper} ${secondName} буде мати вік ${age} років.`;

// console.log(`У ${currentYear} році ${upper} ${secondName} буде мати вік ${age} років. `)


// function calculateAge() {
//     let yearBorn = document.getElementById("yearBorn").value;
//     let num = parseInt(yearBorn);

//     let currentYear = 2030;

//     let fullName = document.getElementById("fullName").value;

//     let age = currentYear - num;

//     let name = fullName.substring(10, 15);

//     let resultElement = document.getElementById('result_form');
//     resultElement.textContent = `У ${currentYear} році ${fullName} буде мати вік ${age} років.`;
// }

// Напишіть програму, яка отримує у змінну х число від користувача.
// Перевіряє чи є введені дані числом.
// Виводить повідомлення в консоль залежно від результату перевірки та значення змінної:

// Якщо x не є числом, вивести "використано некоректний формат".
// Якщо x більше 10, вивести "x більше 10".
// Якщо x менше 10, вивести "x менше 10".
// Якщо x дорівнює 10, вивести "x дорівнює 10".

// EXERSISE 1
function whatNumber() {
let x = document.getElementById("x").value;
if (!x || isNaN(x)) {
   alert("Ви ввели некоректно, спробуйте ще раз тільки число");
} else if (x > 10) {
    alert(x + " більше 10");
} else if (x < 10) {
    alert(x + " менше 10");
} else {
    alert(x + " дорівнює 10");
}
}

// EXERSISE 2
function sumNumbers(){
let a = parseInt(document.getElementById("a").value);
let b = parseInt(document.getElementById("b").value);
let result = a + b;
if (!a, !b || isNaN(a, b)) {
    alert("Ви ввели некоректно, спробуйте ще раз тільки число");
}
else{
    alert("Сума чисел: " + result);
}
}

// EXERSISE 3
function pairNumber(){
let ex3 = parseInt(document.getElementById("ex3").value)
if (!ex3 || isNaN(ex3)){
    alert("Ви ввели некоректно, спробуйте ще раз тільки число");
}
else if (ex3 % 2 === 0){
    alert("Число парне");
}
else{
    alert("Число  не парне"); 
}
}

// EXERSISE 4

