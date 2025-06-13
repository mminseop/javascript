// 1. 목표 : 함수 표현식을 화살표 함수로 변경하여 동일한 동작을 하는 코드를 구현할 수 있다.

// '함수 표현식을 화살표 함수로 변경할 수 있는 능력은 JavaScript의 함수 선언 방식에 대한 정확한 이해에서 출발합니다.'

// 화살표 함수는 기존의 `function` 키워드를 대체할 수 있는 '간결한 문법'을 제공하지만, 동작 방식에는 중요한 차이가 있습니다.

// 특히 `this`, `arguments`, `new` 키워드 사용에 있어서 '제한이 있기 때문에', 단순히 문법만 줄이기보다는 '사용 목적에 맞게 선택하는 것이 핵심'입니다.

// 이번 학습에서는 함수 표현식과 화살표 함수의 차이를 이해하고, '동일한 동작을 유지하면서 화살표 함수로 변환하는 방법'을 익히게 됩니다.


// ✅ 함수 표현식을 화살표 함수로 변형하기
// 함수 표현식은 함수를 변수에 할당하는 방식입니다. 이 표현식은 화살표 함수로 간단히 변환할 수 있습니다.
// 함수 표현식
const hello = function(name) {
  return `안녕하세요, ${name}님!`;
}

// 화살표 함수로 변형
const helloArrow = (name) => {
  return `안녕하세요, ${name}님!`;
}

console.log(helloArrow("변우석")); // 안녕하세요, 변우석님!
// - `function` 키워드를 생략하고 `=>`를 사용하면 같은 동작의 '화살표 함수'로 변경됩니다.
// - 여기서는 `return`과 `{}`를 그대로 유지했기 때문에 기존 함수와 완전히 동일한 결과를 반환합니다.

// ✨ 화살표 함수의 다양한 축약 형태
// 화살표 함수는 이외에도 다양한 축약 형태가 존재합니다.

// 1. 매개변수가 하나일 때 → 괄호 생략 가능
const hello1 = name => `Hello ${name}!`;
console.log(hello1("혜리")); // Hello 혜리!
// - 매개변수가 한 개일 때는 괄호를 생략할 수 있습니다.

// 2. 매개변수가 없을 때 → 괄호는 생략 불가
const sayHello = () => "Hello!";
console.log(sayHello()); // Hello!
// - '매개변수가 없다면 괄호는 반드시 써야 합니다.'
// - `()`는 아무 인자도 받지 않겠다는 의미이며, 생략하면 문법 오류가 발생합니다.
// - 본문이 한 줄이므로 `return`과 중괄호는 생략 가능합니다.

// 3. 매개변수가 여러 개일 때 → 괄호 필수
const add = (a, b) => a + b;
console.log(add(3, 5)); // 8
// - '매개변수가 두 개 이상일 때는 괄호를 생략할 수 없습니다.'
// - 마찬가지로 본문이 한 줄이므로 `return`과 `{}` 생략 가능.
// - 이 형태는 숫자 계산, 문자열 결합 등 간단한 연산에 자주 사용됩니다.

// 4. 본문이 한 줄일 때 → return과 중괄호 생략 가능
const square = num => num * num;
console.log(square(4)); // 16
// - `return num * num;`처럼 동작합니다.
// - 단순한 계산 로직일 경우, 이렇게 축약하면 가독성과 작성 속도가 모두 좋아집니다.
// - 여러 줄의 코드가 필요한 경우에는 반드시 `{}`와 `return`을 써야 합니다.

// 5. 객체를 반환할 때 → 소괄호로 감싸야 함
const getUser = () => ({ name: "김코딩", age: 29 });
console.log(getUser()); // { name: '김코딩', age: 29 }
// - 객체 리터럴 `{}`은 JavaScript에서 '코드 블록'으로 인식되기 때문에,
// - 반환하려는 '객체를 괄호로 감싸야' `return` 없이도 반환이 가능합니다.
// - 만약 괄호로 감싸지 않으면 `undefined`를 반환하거나 오류가 발생합니다.
// ⚠️ () => { name: "김코딩" } → 객체를 반환하지 않고 단순 코드 블록으로 해석됩니다!


// 🏹  화살표 함수에서 `this`는 다르게 동작합니다
// 화살표 함수는 기존의 함수 표현식과는 달리, "고유한 `this`를 가지지 않습니다."

// 1️⃣ 함수 표현식에서의 this
const user = {
  name: "김코딩",
  greet: function () {
    console.log(`안녕하세요! 저는 ${this.name}입니다.`);
  }
};

user.greet(); // 안녕하세요! 저는 김코딩입니다.
// - 일반적인 함수 표현식에서는 `this`가 '해당 메서드를 호출한 객체(user)'를 가리킵니다.
// - 즉, `user.greet()`에서의 `this`는 `user`를 참조합니다.

// 2️⃣ 화살표 함수에서의 this
const user2 = {
  name: "김코딩",
  greet: () => {
    console.log(`안녕하세요! 저는 ${this.name}입니다.`);
  }
};

user2.greet(); // 안녕하세요! 저는 undefined입니다. ❗
// - 화살표 함수는 `this`를 "자신이 정의된 상위 스코프의 `this`"를 그대로 사용합니다.
// - `greet()`는 `user` 객체의 속성으로 정의되어 있지만, 화살표 함수는 자신만의 `this`를 가지지 않기 때문에 `this`는 `user` 객체가 아니라, 해당 함수가 '정의된 시점의 상위 스코프(this)'를 따릅니다. 이 경우 상위 스코프는 전역이므로 `this.name`은 `undefined`가 됩니다.
// - 결과적으로 `this.name`은 `undefined`가 됩니다. ==> window.name (상위 스코프 window)가 됨


// 🔍 왜 이런 일이 생길까요?
// 화살표 함수는 생성될 때 자신만의 `this`, `arguments`, `super`, `new.target`을 생성하지 않으며, 대신 자신이 정의된 위치의 상위 스코프에서 이 값들을 그대로 가져와 사용합니다.
// 즉, 아래처럼 함수 안에서 중첩된 함수로 사용할 때는 오히려 '장점'이 될 수 있습니다.
const user3 = {
  name: "김코딩",
  hobbies: ["코딩", "산책", "커피"],
  showHobbies: function () {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name}의 취미: ${hobby}`);
    });
  }
};

user3.showHobbies();
// 김코딩의 취미: 코딩
// 김코딩의 취미: 산책
// 김코딩의 취미: 커피

// - `forEach()` 안에서의 `this`는 상위 함수인 `showHobbies()`의 `this`, 즉 `user`를 그대로 참조합니다.
// - 이처럼 콜백 함수 내부에서 상위 함수의 this를 그대로 사용해야 할 때, 화살표 함수는 매우 유용합니다. 이런 경우에는 굳이 bind()나 self = this 같은 우회를 사용할 필요가 없습니다.

// ✅ 화살표 함수와 this 요약 정리
// | 구분 | 함수 표현식 | 화살표 함수 |
// | --- | --- | --- |
// | this | 호출한 '객체'를 참조 | 정의 당시의 '상위 스코프'를 참조 |
// | 사용 예시 | 객체의 메서드 정의에 적합 | 콜백 함수, 중첩 함수, 짧은 함수에 적합 |
// | 주의할 점 | 동적으로 바뀔 수 있음 | 객체 메서드로 사용 시 예기치 않은 동작 발생 가능 |

// 아래는 위 내용 정리
// 1. this
// - function 함수      : 호출한 객체를 참조
// - 화살표 함수 (=>)   : 정의된 시점의 상위 스코프의 this를 참조

// 2. 적합한 용도
// - function 함수      : 객체의 메서드, 일반적인 함수 정의
// - 화살표 함수 (=>)   : 콜백 함수, 중첩 함수, 간단한 로직 처리

// 3. 주의할 점
// - function 함수      : 호출 방식에 따라 this가 동적으로 바뀔 수 있음
// - 화살표 함수 (=>)   : 객체의 메서드로 사용 시 this가 원하는 객체를 참조하지 않을 수 있음 (예기치 않은 동작 발생 가능

// ⚠️ 화살표 함수 사용 시 주의사항
// 화살표 함수는 간결한 문법으로 인해 자주 사용되지만, 몇 가지 주의해야 할 점도 함께 기억해야 합니다.

// 1. '자신만의 `this`를 가지지 않습니다.'
//     - 화살표 함수는 호출된 시점이 아닌, '정의된 시점의 상위 스코프의 `this`를 그대로 사용'합니다.
//     - 따라서 객체의 메서드로 사용할 경우, 의도한 `this`가 바인딩되지 않을 수 있습니다.
// 2. '`arguments` 객체가 없습니다.'
//     - 화살표 함수는 `arguments` 객체를 제공하지 않습니다.
//     - 여러 개의 인자를 다루어야 하는 함수에서는 `rest parameter(...args)`를 사용하는 것이 좋습니다.
// 3. '`new` 키워드와 함께 사용할 수 없습니다.'
//     - 화살표 함수는 '생성자 함수로 사용할 수 없습니다.'
//     - `new ArrowFunction()`처럼 생성하면 에러가 발생합니다.
// 4. '메서드 정의에는 적합하지 않습니다.'
//     - 객체의 메서드는 일반 함수 표현식으로 정의하는 것이 안전합니다.
//     - 화살표 함수를 메서드로 사용하면 `this`가 객체를 가리키지 않아 '예기치 않은 동작'이 발생할 수 있습니다.
// 5. '객체 리터럴 반환 시 괄호로 감싸야 합니다.'
//     - 중괄호 `{}`는 코드 블록으로 해석되므로, 객체를 반환하려면 소괄호 `()`로 감싸야 합니다.


// "화살표 함수는 짧고 간결한 함수 정의에 유용합니다."

// 하지만 객체의 메서드, 생성자 함수, `this`를 동적으로 활용해야 하는 상황에서는 일반 함수 표현식이 더 적절합니다.
// 각 상황에 따라 적합한 함수 선언 방식이 다르다는 점을 기억하세요.
// '코드가 간결한 것보다 동작이 명확한 것이 더 중요합니다.'

// ===================================실습==================================
// 📌 함수 표현식으로 작성되어 있는 코드를 화살표 함수로 변경하세요.
// 🚀 실습 예제 1
const double = function (num) {
  return num * 2;
};

let doubleArrow = (num) => num * 2;

// ✨ 결과 확인
console.log('------------------------------------------');
console.log('✨ 표현식 함수 작동 결과 :', double(3));
console.log('✨ 화살표 함수 작동 결과 :', doubleArrow(3));
console.log('------------------------------------------');

// 🚀 실습 예제 2
const isEven = function (num) {
  return num % 2 === 0;
};

// 선언되어 있는 isEvenArrow 변수에 결과를 할당하세요.
// const isEvenArrow = (num) => {
//     return num % 2 === 0;
// }
const isEvenArrow = (num) => num % 2 === 0;

// ✨ 결과 확인
console.log('✨ 화살표 함수 작동 결과 :', isEvenArrow(6));
console.log('------------------------------------------');

// 🚀 실습 예제 3 (함수 내부에 여러줄의 코드가 있는 경우)
const greet = function (name) {
  const message = `Hello, ${name}!`;
  return message;
};

// 선언되어 있는 greetArrow 변수에 결과를 할당하세요.
let greetArrow = (name) => {
    const message = `Hello, ${name}!`;
    return message;
}

// ✨ 결과 확인
console.log('✨ 화살표 함수 작동 결과 :', greetArrow('카리나'));
console.log('------------------------------------------');

// 🚀 실습 예제 4 (매개변수가 여러 개인 경우)
const getUser1 = (name, age) => {
  return { name, age };
};

// 선언되어 있는 getUserArrow 변수에 결과를 할당하세요.
let getUserArrow = (name, age) => ({name, age});


// ✨ 결과 확인
console.log('✨ 화살표 함수 작동 결과 :', getUserArrow('카리나', 25));
console.log('------------------------------------------');
// =====================================================================

// 2. 목표 : 함수 스코프와 블록 스코프의 차이를 이해하고, 전역 변수의 문제점을 설명할 수 있다.

// JavaScript에서 '스코프(Scope)'란, '변수에 접근할 수 있는 범위'를 의미합니다.

// 변수를 어디서 선언하느냐에 따라 코드 전체에서 접근 가능한지, 특정 구간에서만 사용할 수 있는지가 결정됩니다.

// 특히 '전역 변수는 모든 곳에서 접근이 가능한 대신 위험 요소도 많기 때문에', 지역 스코프와의 차이를 명확히 이해하고 적절히 사용하는 것이 중요합니다


// ✅ 스코프(Scope)란?

// 스코프(Scope)란 변수의 접근 가능 범위를 의미하며, 변수 선언 방식 (`var`, `let`, `const`)에 따라 다르게 동작합니다. JavaScript에서는 '함수 스코프'와 '블록 스코프'가 존재합니다.
// - `var`로 선언된 변수: '함수 스코프'
// - `let`, `const`로 선언된 변수: '블록 스코프'

// 1️⃣ 함수 스코프 (Function Scope)
// `var`로 선언된 변수는 '함수 스코프'를 가집니다. 함수 내부에서 선언된 변수는 함수 외부에서 접근할 수 없습니다.
function testFunction() {
	var message = "Hello, Function Scope"
	console.log(message) // ✅ 함수 내부에서는 변수 message에 접근 가능
}

testFunction(); // "Hello Function Scope"
// console.log(message); // 🚨 오류 발생 (ReferenceError:message is not defined)
// - `var` 로 선언된 변수 `message`는 함수 내부에서만 유효합니다.
// - 이 변수는 함수 내부에서만 유효하며, 함수 밖에서는 참조할 수 없습니다.

// 2️⃣ 블록 스코프 (Block Scope)
// `let` , `const` 로 선언된 변수는 '블록 스코프'를 가집니다. 
// `{}`(중괄호) 블록 내부에서만 유효하며, 블록을 벗어나면 접근할 수 없습니다.
{
	let message = "Hello, Block Scope"
	console.log(message); // "Hello, Block Scope"
}
// console.log(message) // 🚨 오류 발생
// - `let` 으로 선언된 `message`는 `{}` 블록 내부에서만 접근이 가능합니다.
// - 블록 밖에서는 `message`에 접근할 수 없으며, 접근 시 오류가 발생합니다.

// 3️⃣ 함수 스코프 vs 블록 스코프
// 1. 적용 대상
// - 함수 스코프     : var
// - 블록 스코프     : let, const

// 2. 유효 범위
// - 함수 스코프     : 함수 내부에서만 유효
// - 블록 스코프     : 중괄호({}) 블록 내부에서만 유효

// 3. 사용 예제
// - 함수 스코프     : var message = 'Hello';
// - 블록 스코프     : const message = 'Hello';

// 4. 코드 안정성
// - 함수 스코프     : 낮음 (예상치 못한 변수 호이스팅 등)
// - 블록 스코프     : 높음

// 5. 권장 여부
// - 함수 스코프     : ❌ 지양
// - 블록 스코프     : ✅ 권장

function scopeExample() {
  var functionScope = "함수스코프";
  let blockScope = "블록스코프";
  const alsoBlockScope = "블록스코프2";

  if (true) {
    var functionScopeInsideBlock = "함수스코프(if블록 내)";
    let blockScopeInsideBlock = "블록 스코프(if블록 내)";
    const alsoBlockScopeInsideBlock = "블록 스코프2(if블록 내)";
  }

  console.log(functionScope); // 함수스코프
  console.log(blockScope); // 블록스코프
  console.log(alsoBlockScope); // 블록스코프2
  console.log(functionScopeInsideBlock); // 함수스코프(if블록 내)
//   console.log(blockScopeInsideBlock); // 🚨 오류 발생 (ReferenceError)
//   console.log(alsoBlockScopeInsideBlock); // 🚨 오류 발생 (ReferenceError)
}
scopeExample();
// - `var`로 선언된 변수는 '함수 전체에서 접근 가능'합니다. `functionScopeInsideBlock`은 if 블록 안에서 선언했지만, 함수 전체에서 접근됩니다.
// - `let`, `const`는 '블록 스코프'를 가지므로, if 블록을 벗어나면 접근할 수 없습니다. `blockScopeInsideBlock`, `alsoBlockScopeInsideBlock`은 블록 외부에서 참조할 수 없습니다.


// 🌍 전역 변수란?
// JavaScript에서 '전역 변수(Global Variable)'란, '어디에서든 접근 가능한 변수'를 의미합니다.
// - '함수 바깥에서 선언된 변수'는 전역 변수로 간주됩니다.
// - 전역 변수는 '모든 함수, 모든 블록 내부에서도 접근'할 수 있기 때문에 편리해 보일 수 있지만, 실제로는 많은 문제를 일으킬 수 있습니다.

let globalVar = "Hello, world!";

function sayHello2() {
  console.log(globalVar); // 함수 내부에서도 접근 가능
}

sayHello2();
console.log(globalVar); // 외부에서도 접근 가능
//  전역 변수는 프로그램 전체에서 공유되는 값이기 때문에, 다른 코드가 실수로 다른 곳에서 값을 변경할 위험이 있습니다. 따라서 작은 실수 하나가 전체 프로그램의 동작을 예기치 않게 바꿀 수 있는 위험 요소가 됩니다.

// ⚠️ 전역 변수를 사용할 때 발생하는 문제들
// 전역 변수 선언
let status = "정상";

// 로그인 상태를 변경하는 함수
function login() {
  status = "로그인됨"; // 전역 변수 변경
}

// 오류 메시지를 처리하는 함수
function showError() {
  if (status === "정상") {
    console.log("오류 없음");
  } else {
    console.log("로그인 상태에서 오류 발생!");
  }
}

// 동작 흐름
showError();   // 오류 없음
login();       // 전역 변수 변경
showError();   // 로그인 상태에서 오류 발생! ❗

// 1️⃣ 의도치 않은 값 변경
// - `login()`에서 전역 변수 `status`를 수정하면서, `showError()`의 실행 결과까지 바뀌었습니다.
// - '전역 변수를 사용하는 함수들은 외부 상태에 따라 동작이 예측되지 않게 됩니다'

// 2️⃣ 코드의 독립성과 재사용성 저하
// - `login()`과 `showError()`는 겉보기에는 독립적인 함수처럼 보이지만, 내부적으로는 '같은 전역 변수(status)를 공유'하고 있습니다.
// - 이로 인해 '함수를 다른 곳에서 재사용하거나 테스트할 때도 예기치 않은 결과가 발생'할 수 있습니다.

// 3️⃣ 디버깅과 유지보수의 어려움
// - 코드가 많아질수록 `status`가 '언제, 어디서, 왜 바뀌었는지 추적하는 것이 매우 어려워집니다.'
// - 전역 변수의 이름이 흔한 단어일수록(예: `status`, `value`, `data`) '다른 코드와의 충돌 가능성도 커집니다.'
// - 나중에는 누가 바꿨는지 모른 채 "왜 오류가 발생하는지 알 수 없는 코드"가 되기 쉽습니다.

// '전역 변수는 편리하지만 위험합니다.'
// 모든 코드에서 접근 가능하다는 특징은 오히려 '예상치 못한 변경과 충돌'의 가능성을 높입니다.
// 전역 변수는 꼭 필요한 경우가 아니라면 지양하고, '항상 지역 변수나 함수 매개변수를 통해 상태를 관리하는 방식'을 우선 고려하세요.

// ===========================실습====================================
// 🚨 주어진 코드에서 발생하는 오류를 해결하세요.
// 1️⃣ 변수 중에 접근할 수 없는 변수를 반환하려는 코드가 있습니다.
// 2️⃣ 문제가 발생하는 부분을 해결하여 결과를 확인하세요.

function scopeExample2() {
  var functionScope = '함수스코프';
  let blockScope = '블록스코프';
  const alsoBlockScope = '블록스코프2';

  if (true) {
    var functionScope2 = '함수스코프2';
    let blockScope2 = '블록 스코프2';
    const alsoBlockScope2 = '블록 스코프2';
  }

  console.log(functionScope);
  console.log(blockScope);
  console.log(alsoBlockScope);
  console.log(functionScope2);
//   console.log(blockScope2);
//   console.log(alsoBlockScope2);
}
// console.log(functionScope);
scopeExample2();
// =============================================================

// 3. 목표 : 구조분해할당을 사용하여 배열의 요소를 개별 변수로 분리하는 방법을 기억할 수 있다.

// 'JavaScript에서 데이터를 다룰 때, 필요한 값을 빠르게 꺼내서 변수에 저장하는 것은 매우 중요합니다.'

// 특히 배열은 인덱스로 접근하는 방식이 직관적이지 않고, 코드의 가독성을 해칠 수 있습니다.

// 이때 '구조분해할당'을 활용하면 배열이나 객체의 값을 '더 간결하고 명확하게 분리하여 변수로 할당'할 수 있습니다.

// 이번 학습에서는 '배열을 중심으로 구조분해할당을 사용하는 다양한 방법'을 익혀 코드의 가독성과 생산성을 동시에 높이는 방법을 배워봅니다.


// ✅ 구조분해할당이란?
// JavaScript에서 '구조분해할당(Destructuring Assignment)'은 배열이나 객체에서 원하는 값을 '개별 변수에 간결하게 할당할 수 있는 문법'입니다.
// 전통적인 방식으로 배열의 값을 변수에 담을 경우, 인덱스를 일일이 지정해야 했지만, 구조분해할당을 사용하면 훨씬 직관적으로 값을 추출할 수 있습니다.

// ㅇ 기존방식
const user4 = ['카리나', 25, 'seoul'];

const name = user4[0];
const age = user4[1];
const address = user4[2];

console.log(name, age, address); // "카리나 25 seoul"
// 인덱스로 각각 접근하는 경우 코드가 길어지고 가독성이 떨어집니다.

// ㅇ 구조분해할당을 사용하는 경우
const user5 = ["카리나", 25, "seoul"];

// 구조분해할당 사용
const [name2, age2, address2] = user5;

console.log(name2);    // "카리나"
console.log(age2);     // 25
console.log(address2); // "seoul"
// 배열의 요소를 [] 를 사용하여 개별 변수로 분리할 수 있습니다. 코드가 짧아지고, 가독성이 좋아집니다.


// 1️⃣ 배열의 요소를 순서대로 변수에 할당하기
const user6 = ["카리나", 25, "seoul"];

// 구조분해할당 사용
const [name3, age3, address3] = user6;

console.log(name3);    // "카리나"
console.log(age3);     // 25
console.log(address3); // "seoul"
// - 배열 요소의 순서에 따라 변수에 할당됩니다.
// - `[]`를 사용하여 왼쪽에 변수들을 나열하면, 배열의 각 값이 자동으로 매칭됩니다.

// 2️⃣ 특정 요소만 선택적으로 추출하기
const user7 = ["윈터", 20, "busan"];

// 두 번째 값(age)은 무시하고 name과 address만 할당
const [name4, , address4] = user7;

console.log(name4);    // "윈터"
console.log(address4); // "busan"
// - 필요 없는 값은 쉼표(`,`)로 건너뛸 수 있습니다.
// - 유용하게 필요한 정보만 추출할 수 있어 가독성이 높아집니다.

// 3️⃣ 나머지 요소를 배열로 받기 (...rest)
const colors = ["red", "green", "blue", "yellow", "purple"];

// 앞의 두 요소만 변수로 받고, 나머지는 배열로 저장
const [first, second, ...others] = colors;

console.log(first);  // "red"
console.log(second); // "green"
console.log(others); // ["blue", "yellow", "purple"]
// - `...`을 붙이면 나머지 요소들을 하나의 배열로 받을 수 있습니다.
// - 이때 `...`은 항상 '마지막 변수에만 사용'할 수 있습니다.

// 4️⃣ 함수 반환값을 구조분해로 바로 받기
function getUserInfo() {
  return ["김코딩", 25, "개발자"];
}

// 반환된 배열을 구조분해로 분리
const [name5, age5, job5] = getUserInfo();

console.log(name5); // "김코딩"
console.log(age5);  // 25
console.log(job5);  // "개발자"
// - 함수가 배열을 반환할 때, 중간 변수 없이 곧바로 필요한 값만 꺼낼 수 있습니다.
// - 복잡한 데이터 구조를 다룰 때 매우 유용합니다.

// 5️⃣ 변수의 값을 쉽게 바꾸기 (스왑)
let a = 1;
let b = 2;

// 구조분해를 활용한 값 교환
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
// - 구조분해할당은 '두 변수의 값을 바꾸는 작업'을 매우 간단하게 만들어줍니다.
// - 중간 변수(`temp`) 없이도 값 교환이 가능합니다.

// 6️⃣ 기본값을 설정하여 안전하게 할당하기
// 구조분해할당 시, 배열에 존재하지 않는 요소를 변수에 할당하면 자동으로 `undefined`가 됩니다. 이때 '기본값(Default Value)'을 설정해 두면, 값이 없을 경우에도 '에러 없이 원하는 기본값으로 처리'할 수 있습니다.
const arr = [5];

// y는 값이 없기 때문에 기본값 0이 적용됨
const [x = 0, y = 0] = arr;

console.log(x); // 5
console.log(y); // 0
// - `arr[0]`은 5이므로 `x`에는 5가 들어갑니다.
// - `arr[1]`은 존재하지 않기 때문에 `y`는 기본값인 0을 할당받습니다.

// ⚠️ 구조분해할당 사용 시 주의할 점

// - 구조분해할당은 "배열의 순서를 기준으로 값이 할당"됩니다. 순서를 정확히 파악하고 있어야 원하는 변수에 올바른 값이 들어갑니다.
const user8 = ["이름", 20, "주소"];
const [address6, age6, name6] = user8;

console.log(address6); // "이름" ❗ 원래 기대한 값이 아님

// - 해당 인덱스에 값이 없으면 undefined가 할당됩니다.
const arr2 = [1];
const [a1, b1] = arr2;

console.log(a1); // 1
console.log(b1); // undefined ❗

// - 이 문제를 방지하려면 기본값을 설정하는 것이 좋습니다.
const [x1 = 0, y1 = 0] = [5];
console.log(x1); // 5
console.log(y1); // 0

// - 기본값은 undefined인 경우에만 적용됩니다. null, 0, false 등 값은 있지만 falsy한 값일 경우에는 기본값이 적용되지 않습니다.
const values = [null, undefined];
const [a2 = 1, b2 = 2] = values;

console.log(a2); // null ❗ 기본값 적용되지 않음
console.log(b2); // 2 ✅ 기본값 적용됨

// - ...rest 문법은 항상 배열의 마지막에만 사용 가능합니다. 중간에 쓰면 문법 오류가 발생합니다.
// 잘못된 예시 ❌
// const [first, ...middle, last] = [1, 2, 3, 4]; // SyntaxError

// - 구조분해할당은 원본 배열의 값을 수정하지 않으며, 단순히 값을 복사해오는 방식입니다. 원본을 변경하려면 별도로 작업이 필요합니다.

// 구조분해할당은 단순히 배열을 분해하는 것을 넘어서, '가독성', '생산성', '에러 방지' 측면에서 매우 유용한 문법입니다.
// 처음에는 낯설 수 있지만, '반복해서 사용하다 보면 가장 많이 쓰게 되는 문법 중 하나'가 됩니다.

// ===============================실습=========================================
// 🚀 실습 1: 기본적인 배열 구조분해할당
const fruits = ['사과', '바나나', '오렌지', '망고'];
// fruits 배열에서 첫 번째와 두 번째 요소를 변수로 분리해보세요
let [apple, banana] = fruits;

//✨ 결과 확인
console.log('첫 번째 과일:', apple);
console.log('두 번째 과일:', banana);
console.log('------------------------------------------');

// 🚀 실습 2: 건너뛰기와 나머지 요소 가져오기
// fruits 배열에서 첫 번째 요소는 건너뛰고, 두 번째 요소와 나머지를 가져와보세요
let [, second2, ...remainingFruits] = fruits;

//✨ 결과 확인
console.log('두 번째 과일:', second2);
console.log('나머지 과일들:', remainingFruits);
console.log('------------------------------------------');

// 🚀 실습 3: 기본값 설정하기
const colors2 = ['빨강', '파랑'];
// colors 배열을 구조분해할당하면서 없는 세 번째 값의 기본값을 '초록'으로 설정해보세요
const [red, blue, green = '초록'] = colors2;

//✨ 결과 확인
console.log('설정된 색상들:', red, blue, green);
console.log('------------------------------------------');

// 🚀 실습 4: 변수 값 교환하기
let number1 = 100;
let number2 = 200;
// number1과 number2의 값을 구조분해할당을 사용해서 교환해보세요
[number1, number2] = [number2, number1];

//✨ 결과 확인
console.log('교환된 값:', number1, number2);
console.log('------------------------------------------');

// 실습 5: 중첩 배열 구조분해할당
const coordinates = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// coordinates의 두 번째 좌표에서 x, y값을 각각 변수로 분리해보세요
const [, [x2, y2]] = coordinates;

//✨ 결과 확인
console.log('첫 번째 좌표의 x값:', x2);
console.log('첫 번째 좌표의 y값:', y2);
console.log('------------------------------------------');
// ===================================================================

// 4. 목표 : 구조분해할당을 사용하여 객체의 프로퍼티를 개별 변수로 분리하는 방법을 기억할 수 있다.

// 배열 구조분해할당을 통해 요소를 변수로 간단히 분리하는 방법을 익히셨다면, 이제 '객체 구조분해할당'으로 한 단계 더 나아가 봅시다.

// 순서를 기반으로 값을 추출하는 배열과는 달리 객체는 '프로퍼티 키'를 기준으로 값을 추출합니다.

// 이번 콘텐츠에서는 객체 구조분해할당의 다양한 활용 방법을 실전 예제와 함께 익혀봅니다.


// ✅ 구조분해할당이란?
// 배열뿐만 아니라 '객체도 구조분해할당 문법을 사용하여' 각 프로퍼티의 값을 '간결하게 변수에 할당'할 수 있습니다. 객체는 배열과 달리 순서가 아닌 '프로퍼티 키'를 기준으로 값을 분리합니다.

// ㅇ 기존방식
const user9 = {
	name : '김코딩',
	age : 30,
	job: '개발자'
}

const name7 = user9.name;
const age7 = user9.age;
const job7 = user9.job;

console.log(name7, age7, job7); // "김코딩" 25 "개발자"

// ㅇ 구조분해할당을 사용하는 경우
const user10 = {
  name8: "김코딩",
  age8: 30
};

const { name8, age8, job8 = "디자이너" } = user10;

console.log(job8); // "디자이너"

// 1️⃣ 기본값 설정하기
// 객체에 특정 프로퍼티 키가 없는 경우, `undefined` 대신 '기본값을 설정'할 수 있습니다.
const user11 = {
  name9: "김코딩",
  age9: 40
};

const { name9, age9, job9 = "디자이너" } = user11;

console.log(age9, job9); // "디자이너"
// - user 객체에는 job이 없지만, 기본값 "디자이너"가 설정되어 있어 undefined가 아닌 값으로 처리됩니다.

// 2️⃣ 변수 이름 변경하기
// 객체 구조분해 시 변수명을 프로퍼티 키와 다르게 지정하고 싶다면 `:`(콜론)을 사용합니다.
const user12 = {
  name10: "김코딩",
  age10: 30
};

const { name10: userName, age10 } = user12;

console.log(userName); // "김코딩"
// name이라는 프로퍼티 키를 userName이라는 변수에 할당한 예시입니다.

// 3️⃣ 중첩 객체 구조분해
// 객체 내부에 또 다른 객체가 있는 경우, 중첩된 구조도 한 번에 분해할 수 있습니다.

const user13 = {
  name: "김코딩",
  address: {
    city: "Seoul",
    country: "Korea"
  }
};

const { 
    address: { city, country}
} = user13;

console.log(city);    // "Seoul"
console.log(country); // "Korea"
// - 중첩 구조는 `프로퍼티 키 체계`를 그대로 따라가며, 필요한 값을 꺼낼 수 있습니다.
// - 중첩된 프로퍼티도 구조적으로 분리하여 '직접 접근할 필요 없이 사용할 수 있습니다.'

// 4️⃣ 함수 매개변수에서 구조분해하기
// 함수 인자로 객체를 받을 때, 함수 선언부에서 바로 구조분해하면 코드가 더 간결해집니다.
const user14 = {
  name: "김코딩",
  age: 30
};

// 구조분해할당을 사용한 매개변수 처리
function printUserInfo({ name, age }) {
  console.log(`이름: ${name}, 나이: ${age}`);
}

printUserInfo(user14);
// 인자에서 바로 필요한 프로퍼티를 구조분해하여 사용하므로 user.name, user.age처럼 다시 꺼낼 필요가 없습니다.

// ⚠️ 객체 구조분해 시 주의할 점
// - '존재하지 않는 프로퍼티 키'를 구조분해하면 `undefined`가 됩니다. 필요한 경우 기본값을 설정해 주세요.
// - 변수 이름이 실제 프로퍼티 키와 '일치해야 자동 할당'됩니다. 다르게 쓰고 싶다면 반드시 `:`로 별도 지정해야 합니다.
// - '중첩 구조에서 일부만 꺼낼 때'는 내부 객체가 존재하는지 먼저 확인하는 것이 안전합니다.
// const user15 = {};
// const { profile } = user15;
// console.log(profile.name); // 🚨 오류 (profile이 undefined이므로 name에 접근 불가)
// 위처럼 접근하면 오류가 발생하므로 profile이 있는지 먼저 확인하거나 선택적 체이닝 (?.)을 사용하세요.

// 배열 구조분해할당이 '순서'를 기준으로 한다면, 객체 구조분해는 '프로퍼티 키 이름'이 기준입니다.
// 가독성과 유지보수에 도움이 되는 강력한 문법이니, 중첩 구조나 함수 인자에서도 적극적으로 활용해보세요!
// ========================실습=================================
// 🚀 실습 1: 기본 객체 구조분해할당
const student = {
  id: '1',
  nameStd: '홍길동',
  scores: {
    math: 90,
    english: 85,
    science: 95,
  },
};

// student 객체에서 id와 name을 구조분해할당으로 가져오기
const {id, nameStd } = student;

//✨ 결과 확인
console.log('학생 정보:', id, nameStd);
console.log('------------------------------------------');

// 🚀 실습 2: 중첩 객체 구조분해할당
// scores 객체 안의 math와 english 점수만 가져오기
const {
    scores:{ math, english }
} = student;

//✨ 결과 확인
console.log('수학점수:', math);
console.log('영어점수:', english);
console.log('------------------------------------------');

// 🚀 실습 3: 새로운 변수명으로 할당하기
const product = {
  id: 'P001',
  name15: '노트북',
  price: 1200000,
};

// name을 productName라는 새로운 변수명으로 할당
// price를 productPrice라는 새로운 변수명으로 할당
const { price:productPrice, name15:productName} = product;

//✨ 결과 확인
console.log('제품 가격:', productPrice);
console.log('제품명:', productName);
console.log('------------------------------------------');

// 🚀 실습 4: 기본값과 함께 사용하기
const config = {
  theme: 'dark',
  fontSize: 14,
};

// 존재하지 않는 프로퍼티에 기본값 설정하기 language, timeout)
const {
    theme, fontSize, language='ko', timeout='10'
} = config;

//✨ 결과 확인
console.log('설정값:', theme, fontSize, language, timeout);
console.log('------------------------------------------');
// =====================================================================

// 5. 목표 : 중첩 구조의 배열과 객체를 구조분해할당하여 값을 추출하는 예시를 들 수 있다.

// '배열과 객체의 구조분해할당은 단순히 1차원 데이터에만 적용되는 문법이 아닙니다.' 

// 실제로는 '배열 안에 객체가 있거나, 객체 안에 배열이 있는 복잡한 중첩 구조'를 자주 마주하게 되는데요.

// 이번 학습에서는 이러한 '중첩 구조의 배열과 객체에서 구조분해할당을 사용하는 다양한 예시'를 익혀, 더 복잡한 데이터에서도 원하는 값을 깔끔하게 추출하는 방법을 배워봅니다.


// ## '중첩 구조의 배열과 객체를 구조분해할당하여 값 추출하기'
// 배열과 객체의 구조분해할당에 익숙해졌다면, 이제는 '배열 안의 객체', '객체 안의 배열', 혹은 '중첩된 객체 구조'처럼 조금 더 복잡한 구조에도 구조분해할당을 적용할 수 있어야 합니다. 중첩된 구조는 API 응답이나 복잡한 데이터 모델에서 자주 등장하는 형태이며, 이때 구조분해할당을 활용하면 '불필요한 코드 없이 원하는 값을 바로 꺼내어 사용할 수 있습니다.'

// 1️⃣ 중첩 배열(Nested Array)에서 값 추출하기
{
    const numbers = [1, [2, 3], 4];
    // 첫 번째 값은 1
    // 두 번째 값은 배열이므로, 내부 요소 2와 3을 각각 분해
    // 네 번째 값은 4
    const [first, [second, third], fourth] = numbers;
    
    console.log(first);  // 1
    console.log(second); // 2
    console.log(third);  // 3
    console.log(fourth); // 4
}
// - 배열 안에 또 다른 배열이 포함된 경우, 구조분해할당으로 내부 요소까지 분리할 수 있습니다.
// - 중첩된 위치에 맞춰 `[]`를 반복 사용하면, 손쉽게 원하는 값을 추출할 수 있습니다

// 2️⃣ 중첩 객체(Nested Object)에서 값 추출하기
{
    const user = {
        name: "김코딩",
        address: {
            city: "서울특별시",
            country: "대한민국"
        }
    };

    // address 객체 내부의 프로퍼티 키를 바로 구조분해
    const { name, address: { city, country } } = user;

    console.log(name);    // "김코딩"
    console.log(city);    // "서울특별시"
    console.log(country); // "대한민국"
    // - 객체 안의 객체도 구조분해할당으로 바로 접근할 수 있습니다.
    // - 이처럼 '프로퍼티 키를 중첩된 형태로 분리'하면, 별도로 중간 객체를 저장하지 않아도 됩니다.
}

// 3️⃣ 배열 안의 객체에서 값 추출하기
{
    const students = [
        { name: "김코딩", scores: [80, 90, 85] },
        { name: "박해커", scores: [95, 80, 100] }
    ];

    // 첫 번째 학생의 이름과 첫 번째 점수
    const [{ name: firstName, scores: [firstScore] }] = students;

    console.log(firstName);   // "김코딩"
    console.log(firstScore);  // 80

    // 두 번째 학생의 이름과 세 번째 점수
    const [, { name: secondName, scores: [, , thirdScore] }] = students;

    console.log(secondName);  // "박해커"
    console.log(thirdScore);  // 100
    // - 배열 안의 객체 구조까지 한 번에 분해할 수 있습니다.
    // - 중첩된 배열도 함께 분해하면, 다차원 구조도 간결하게 다룰 수 있습니다.
}

// 4️⃣ 함수 매개변수에서 중첩 구조 바로 분해하기
{
    const user = {
      name: "김코딩",
      address: {
        city: "서울특별시",
        country: "대한민국"
      }
    };
    
    // 함수 매개변수에서 구조분해 적용
    function printUserInfo({ name, address: { city, country } }) {
      console.log(`${name}은 ${country} ${city}에 거주하고 있습니다.`);
    }
    
    printUserInfo(user); // 출력: 김코딩은 대한민국 서울특별시에 거주하고 있습니다.

// - 함수 인자로 객체를 받을 때도 구조분해할당을 사용할 수 있습니다.
// - 필요한 프로퍼티만 골라서 바로 사용할 수 있어 '코드 가독성과 유지보수성'이 올라갑니다.
}

// 🔍 실전 활용: API 응답에서 중첩 구조 추출하기
// 실제 API 응답은 다음과 같이 중첩된 객체나 배열로 구성된 경우가 많습니다.
{
    const response = {
      data: {
        user: {
          name: "김코딩",
          profile: {
            email: "kim@example.com",
            location: {
              city: "서울",
              country: "대한민국"
            }
          }
        }
      }
    };

    // 구조분해할당을 활용한 추출
    const {
      data: {
        user: {
          name,
          profile: {
            email,
            location: { city, country }
          }
        }
      }
    } = response;
    console.log(name);    // "김코딩"
    console.log(email);   // "kim@example.com"
    console.log(city);    // "서울"
    console.log(country); // "대한민국"
    // - 중첩된 JSON 응답에서도 원하는 데이터를 깔끔하게 추출할 수 있어 API 처리 코드가 훨씬 간결해집니다.
    // - 불필요한 중간 변수 선언 없이 바로 사용할 수 있어 유지보수도 쉬워집니다.
}

// ⚠️ 중첩 구조 분해 시 주의할 점
// - 구조가 예상과 다를 경우 `undefined`가 할당될 수 있으므로, 반드시 구조를 먼저 확인한 후 사용해야 합니다.
// - 깊은 구조를 분해할 때는 가독성이 떨어질 수 있으므로 '적절한 깊이까지만 구조분해'를 활용하고, 나머지는 별도 변수에 할당하는 방법도 고려해보세요.


// ㅇ '중첩된 배열과 객체에서도 구조분해할당은 매우 유용하게 사용됩니다.'
// 특히 API 응답 처리, 복잡한 상태 객체 다루기, 다차원 데이터 가공 등 실무에서 자주 사용되며, '필요한 값만 빠르게 추출할 수 있는 강력한 문법'입니다.
// 처음엔 익숙하지 않을 수 있지만, 자주 연습해보며 구조를 읽는 눈을 길러보세요!

// =======================실습============================================
{
// ✅ console.log 내에 존재하는 변수를 사용하여 값을 할당해주세요.
// 🚀 실습 1: 중첩 배열 구조분해할당
const coordinates = [
  [1, 2],
  [3, 4],
  [5, [6, 7]],
];

// 첫 번째 좌표의 x, y값과 3번째 두번쨰 좌표 [6,7] 추출하세요.
const [[x1, y1], , thirdCoord] = coordinates;

// ✨ 결과 확인
console.log('첫 번째 좌표:', x1, y1);
console.log('세 번째 두번째 좌표:', thirdCoord);
console.log('------------------------------------------');

// 세 번째 좌표의 중첩된 두 번째 값(7)을 추출하세요.
const [, , [, [, nestedValue]]] = coordinates;
console.log('중첩된 값:', nestedValue); // 7
console.log('------------------------------------------');

// 🚀 실습 2: 중첩 객체 구조분해할당
const company = {
  name: '테크컴퍼니',
  location: {
    country: '한국',
    city: '서울',
    address: {
      street: '테헤란로',
      zipCode: '12345',
    },
  },
  employees: {
    development: {
      frontend: ['김개발', '이프론트'],
      backend: ['박서버', '최디비'],
    },
    design: ['정디자인'],
  },
};

// 회사 위치 정보 추출하세요. (서울 테헤란로)
const {
    location: {
        city,
        address: {
            street
        }
    }
} = company;

// const {
//    name,
//    location:{
//     country,
//     city,
//     address: {
//         street,
//         zipCode
//     }
//    },
//    employees: {
//     development:{
//         frontend,
//         backend1
//     },
//     design
//    }
// } = company;

// ✨ 결과 확인
console.log('회사 위치:', city, street);
console.log('------------------------------------------');

// 첫번째 프론트엔드 개발자와 백엔드 개발자 모두를 추출하세요.
const {
    employees: {
        development: {
            frontend: [firstFrontend],
            backend
        }
    }
} = company;

// ✨ 결과 확인
console.log('첫 번째 프론트엔드 개발자:', firstFrontend);
console.log('백엔드 개발자들:', backend);
console.log('------------------------------------------');
// 🚀 실습 3: 배열과 객체가 혼합된 구조
const schoolData = {
  name: '한국고등학교',
  classes: [
    {
      name: '1반',
      students: [
        { id: 1, name: '김학생' },
        { id: 2, name: '이학생' },
      ],
    },
    {
      name: '2반',
      students: [
        { id: 3, name: '박학생' },
        { id: 4, name: '최학생' },
      ],
    },
  ],
};

// 1반의 첫 번째 학생 정보(id, name) 추출하세요.
const {
    classes: [
        {
            students: [firstStudent]
        }
    ]
} = schoolData;

// ✨ 결과 확인
console.log('1반 첫 번째 학생:', firstStudent);
console.log('------------------------------------------');
// 2반의 모든 학생의 정보(id, name)를 추출하세요.
const {
    classes: [
        ,
        {
            students: secondClassStudents
        }
    ]
} = schoolData;

// ✨ 결과 확인
console.log('2반 학생들:', secondClassStudents);
console.log('------------------------------------------');
}