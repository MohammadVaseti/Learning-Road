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

// challeng 3

// dolphins 96 108 89
// koalas 88 91 110

// data1
// const dolphinsAve = (96 + 108 + 89) / 3;
// const koalasAve = (88 + 91 + 110) / 3;

// bonus 1
// const dolphinsAve = (97 + 112 + 101) / 3;
// const koalasAve = (109 + 95 + 123) / 3;

// bonuse 2
const dolphinsAve = (97 + 112 + 101) / 3;
const koalasAve = (109 + 95 + 106) / 3;

console.log(dolphinsAve, koalasAve);

if (dolphinsAve > koalasAve && dolphinsAve >= 100) {
  console.log(`dolphins are winner ${dolphinsAve}`);
} else if (koalasAve > dolphinsAve && koalasAve >= 100) {
  console.log(`koalas are winner ${koalasAve}`);
} else if (dolphinsAve >= 100 && koalasAve >= 100 && dolphinsAve == koalasAve) {
  console.log(`the match was draw`);
} else {
  console.log(`no team wins`);
}

// switch case practice

const day = 10;

switch (day) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;

  default:
    console.log("none");
    break;
}

// challenge 4
// tip values 275 , 40 , 430
const bill = 430;

const afterCondition =
  bill >= 50 && bill <= 300
    ? console.log(
        `bill value is ${bill} , the tip is 15% , the final is ${
          (bill * 15) / 100
        } `
      )
    : console.log(
        `bill value is ${bill} , the tip is 20% , the final is ${
          bill + (bill * 20) / 100
        } `
      );
