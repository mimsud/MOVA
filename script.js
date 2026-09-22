const addBtn = document.getElementById("addBtn");

const num1 = document.querySelector('input[placeholder="عدد اول"]');
const num2 = document.querySelector('input[placeholder="عدد دوم"]');

addBtn.addEventListener("click", function() {

    const number1 = Number(num1.value);
    const number2 = Number(num2.value);
    const result = number1 + number2;
    alert(result);

});