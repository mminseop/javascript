// var a = 1;
// console.log(a);

// let count = 1;
// count = 'dddd';
// console.log(count);
// console.log(typeof count);

// =========================================

// let x = 1;
// if (x === 1) {
//     let x = 2;
//     console.log(x); // 2
// }
// console.log(x); // 1

// ========================================
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // 같은 변수!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2; // 다른 변수
    console.log(x); // 2
  }
  console.log(x); // 1
}
varTest();
letTest();

var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined

function init() {
  var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() {
    // displayName() 은 내부 함수이며, 클로저다.
    console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
init();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
// console.log(makeAdder(5)(2));
console.log(add10(2)); // 12

// function go(n) {
//   // 이 n은 매개변수 n
//   console.log(n); // Object {a: [1,2,3]}

//   for (let n of n.a) {
//     // ReferenceError
//     console.log(n.a[0]);
//     console.log(n);
//   }
// }

// go({ a: [1, 2, 3] });

// var a = 1;
// var b = 2;

// if (a === 1) {
//   var a = 11; // 전역 변수
//   let b = 22; // if 블록 변수

//   console.log(a); // 11
//   console.log(b); // 22
// }

// console.log(a); // 11
// console.log(b); // 2

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // Expected output: Array [30, 40, 50]

// if(true) {
//     let { a, ...others } = { a: 1, b: 2, c: 3 };
//     console.log(typeof a);
//     console.log(typeof others);
//     console.log(others.b);
//     // a: 1, others: { b: 2, c: 3 }
// }

// let arr1 = [1, 2, 3, 4, 5];
// let obj1 = {a: 'test1',
//     b: 'test2',
//     c: 100,
// }


var input;
function doThis() {
    console.log('dddddd');
}
function doThat() {
    console.log('fffffffffff');
}
if (input === undefined) {
  doThis();
} else {
  doThat();
}
var n = null;
console.log(n * 32); // 콘솔에 0 으로 로그가 남음 (null은 수치 맥락으로 0, boolean에선 false)

/**
 * Example 2
 */
// undefined 값을 반환함.
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

// /* 함수 선언 */

// foo(); // "bar"

// function foo() {
//   console.log("bar");
// }

// /* 함수 표현식 */

// baz(); // TypeError: baz is not a function

// var baz = function () {
//   console.log("bar2");
// };

let funcTest = function(x) {
  return x * 2;
};


// // 오류가 발생합니다
// function f() {}
// let f = 5;

// // // 역시 오류가 발생합니다
// // function f() {
// //   const g = 5;
// //   var g;

// //   //statements
// // }

const MY_OBJECT = { key: "value" };
console.log(MY_OBJECT); //value
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT); //ortherValue

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];


let name='이름';
const user = {
  name: "Kim",
  sayHi: () => {
    console.log(this.name);
  }
};
user.sayHi(); // undefined