// На підставі значень в змінних та їх типів, обчислити кількість років особи якщо вона живе у 2030 році. Вивести результат в консоль в форматі:
// У (рік) році (ІМ'Я) (прізвище) буде мати вік (обчислене число) років 
// (рік), (ІМ'Я), (прізвище), (обчислене число) виводити через змінні формату ${}
let yearBorn = "1984"; 
let num = parseInt(yearBorn); // Зробив текст числом
const currentYear = 2030; 
let fullName = 'Вязовська арина Сергіївна'; // правильне ім'я Марина
let age = currentYear - num; // Рахує скільки буде років у 2030 році

let name = fullName.substring(10, 15);
let secondName = fullName.substring(0, 9);
let upper = name.toUpperCase();

let resultElement = document.getElementById('result');
resultElement.textContent = `У ${currentYear} році ${upper} ${secondName} буде мати вік ${age} років.`;

console.log(`У ${currentYear} році ${upper} ${secondName} буде мати вік ${age} років. `)


function calculateAge() {
    let yearBorn = document.getElementById("yearBorn").value;
    let num = parseInt(yearBorn);

    let currentYear = 2030;

    let fullName = document.getElementById("fullName").value;

    let age = currentYear - num;

    let name = fullName.substring(10, 15);

    let resultElement = document.getElementById('result_form');
    resultElement.textContent = `У ${currentYear} році ${fullName} буде мати вік ${age} років.`;
}