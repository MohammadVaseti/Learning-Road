// coding challenge #1

// data 1
const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`mark BMI is ${markBMI} and greater than john BMI ${johnBMI}`);
} else {
  console.log(`john BMI ${johnBMI} is greater than mark BMI ${markBMI}  `);
}

// data 2

const markHeight2 = 1.88;
const markWeight2 = 95;

const johnHeight2 = 1.76;
const johnWeight2 = 85;

const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

if (markBMI2 > johnBMI2) {
  console.log(`mark BMI is ${markBMI2} and greater than john BMI ${johnBMI2}`);
} else {
  console.log(`john BMI ${johnBMI2} is greater than mark BMI ${markBMI2}  `);
}

// challenge 2

if (markBMI > johnBMI) {
  console.log(`mark bmi ${markBMI} is greater`);
} else {
  console.log(`john bmi ${johnBMI}is greater`);
}

const age = 18;
console.log(age == "18");

console.log(typeof NaN);
