/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnConvert = document.getElementById("btn-convert");
let convertEl = document.getElementById("convert");
let convertedMultiply = [];
let convertedDivide = [];
const feet = document.getElementById("feet");
const liters = document.getElementById("liters");
const kilograms = document.getElementById("kilograms");


btnConvert.addEventListener("click", function(){
    // console.log(convertEl.value);
    const unit = [
        3.281,
        0.264,
        2.204,
    ];

    for (let i = 0; i < unit.length; i++) {
        convertedMultiply.push(unit[i] * convertEl.value);
        convertedDivide.push(unit[i] / convertEl.value);
        // console.log(converted[0]);
    }
    feet.textContent = `${convertEl.value} meters = ${convertedMultiply[0].toFixed(2)} feet| ${convertEl.value} feet = ${convertedDivide[0].toFixed(2)} meters`;

    liters.textContent = `${convertEl.value} liters = ${convertedMultiply[0].toFixed(2)} gallon| ${convertEl.value} gallon = ${convertedDivide[0].toFixed(2)} liters`;

    kilograms.textContent = `${convertEl.value} kilograms = ${convertedMultiply[0].toFixed(2)} pound| ${convertEl.value} pound = ${convertedDivide[0].toFixed(2)} kilograms`;

    convertEl.value = "";
});



