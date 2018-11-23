console.log('This is a functions script');

// syntax:
// function func_name(optional-params) {
    
// }

function add1() {
    let num1 = 150;
    let num2 = 50;
    let sum = num1 + num2;
    console.log(sum);
}
// add1();

function add2(num1,num2) {
    let sum = num1 + num2;
    console.log(sum);
}

add2(150, 50);

add2(250, 50);

add2(350, 50);

// function addition() {
//     let num_1 =parseInt(document.getElementById('num1').value);
//     let num_2 = parseInt(document.getElementById('num2').value);
//     let total = num_1 + num_2;
//     console.log('This function fetches user input and calculates total');
//     console.log(total);
// }

function math(num1, num2) {
    console.log('This is a closure: add and multiply');
    let sum = num1 + num2;
    console.log(sum);
    function multi() {
        let prod = num1 * num2;
        console.log("The product of is : "+prod);
    }
    multi();
}
math(180, 90);


(function () {
    let button = document.getElementById('calculate');
    button.addEventListener('click', function () {
        let value1 = document.getElementById('num1').value;
        let value2 = document.getElementById('num2').value;
        let added_value = parseInt(value1) + parseInt(value2);
        console.log('Added values from anonymous function');
        console.log(added_value);
    });
}())