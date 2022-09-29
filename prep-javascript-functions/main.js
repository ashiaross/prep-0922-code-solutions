function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(4, 4);
console.log('Add Two Numbers Exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('Convert Hours to Minutes Exercise: ', convertHoursToMinutesResult);

function getGreeting(name) {
  return name;
}

var getGreetingResult = getGreeting('Tim');
console.log('Get Greeting Result Exercise: ' + 'Hello ' + getGreetingResult + '!');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('Add and Multiply by 5 Exercise: ', addAndMultiplyBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('Subtract Two Numbers Exercise: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('Get Circle Circumference Exercise: ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('Get Full Name Exercise: ', getFullNameResult);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('Cube Exercise: ', cubeResult);
