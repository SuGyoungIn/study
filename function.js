const num1 = 10;
const num2 = 3;

let result = num1 + num2;

console.log(result);

// result를 함수화 시켜보자!

function add(a, b) {
  return a + b;
}

console.log(add(num1, num2));

// 콜백함수는 매개변수 자리에 함수를 매개변수로 받게 하면 된다.

function example(callback) {
  let result = callback(10, 3);
  return callback();
  console.log(result);
}

example(add);

// 재귀함수는 반복되는게 자신이고, 멈추는 조건이 필요하다.

function factorial(num) {
  if (num < 1) {
    return 1;
  }
  console.log(num);
  return num * factorial(num - 1);
}
// 5 * (4 * ( 3 * ( 2 * ( 1 ) ) ) )

console.log(factorial(5)); // output : 120
