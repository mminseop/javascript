// 1. 목표 : 객체는 프로퍼티의 집합이며, 각 프로퍼티가 키-값 쌍으로 이루어져 있다는 개념을 기억할 수 있다.

// '실생활의 사물이나 개념을 코드로 표현할 때 객체만큼 잘 어울리는 구조는 없습니다.'

// 객체는 '여러 개의 정보를 하나로 묶을 수 있는 자료형'이며, 이 정보들은 각각 '프로퍼티(property)'라고 부릅니다.
// 각 프로퍼티는 '키(key)와 값(value)의 쌍으로 구성'되어 있으며, 이 구조가 바로 객체의 핵심입니다.

// 예를 들어 사람을 객체로 표현한다면, 이름, 나이, 성별 등이 모두 키-값 쌍으로 정의되어 하나의 객체를 이룹니다.

// 이번 학습을 통해 객체의 기본 구조를 명확히 이해하고, '"객체는 키-값 쌍의 집합이다"'라는 핵심 개념을 기억해 두시기 바랍니다.


// 📦 객체(Object)
// - 0개 이상의 프로퍼티(속성)로 구성된 집합이며, 각 프로퍼티는 키(key)-값(value) 쌍으로 이루어져 있습니다.

// - 객체는 실생활의 사물이나 개념을 코드로 표현하기에 적합한 구조입니다. 예를 들어, 사람(person)이라는 객체를 만든다면 이름, 성별, 나이, 키, 몸무게 등 다양한 특성을 프로퍼티로 표현할 수 있습니다.

// 🔍 프로퍼티(속성)
// - 객체의 프로퍼티는 키(key)와 값(value)으로 이루어진 쌍입니다.
const person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20
};
// - '프로퍼티 키'
//     - 역할: 프로퍼티 값에 접근할 때 사용하는 식별자입니다.
//     - 사용 가능 타입: 빈 문자열을 포함한 모든 문자열
// - '프로퍼티 값'
//     - 역할: 해당 프로퍼티가 가지는 실제 값입니다.
//     - 사용 가능 타입: JavaScript의 모든 데이터 타입

// 하나의 객체에는 여러 개의 프로퍼티를 작성할 수 있으며, 각 프로퍼티는 쉼표(,)로 구분합니다.
// 마지막 프로퍼티 뒤에 쉼표를 생략할 수도 있고, 추가해도 에러는 발생하지 않지만 일관된 코드를 위해 생략하는 것이 일반적입니다.


// 📦 객체 생성
// - 객체는 중괄호(`{}`)를 사용하여 생성할 수 있으며, 이렇게 만드는 방식을 '객체 리터럴'이라고 부릅니다.
// - 객체는 '`프로퍼티 키: 프로퍼티 값`' 형태의 항목으로 구성되며, 여러 개의 프로퍼티를 쉼표로 구분하여 작성합니다.
const person1 = {
  name: 'Lee',
  age: 20
};

// ### 📌 프로퍼티 키에도 식별자 네이밍 규칙이 적용됩니다

// JavaScript에서 사용하는 식별자 네이밍 규칙은 변수명뿐만 아니라 '객체의 프로퍼티 키에도 동일하게 적용'됩니다.
// - '대소문자를 구분'합니다.
// - '숫자로 시작할 수 없습니다.'
// - '언더스코어(`_`)', '달러 기호(`$`)'는 사용할 수 있습니다.
// - '공백이나 특수문자'는 사용할 수 없습니다.
// - JavaScript의 '예약어'(`const`, `return`, `function` 등)는 사용할 수 없습니다.

// 네이밍 규칙을 지키면 '일관된 코드 작성이 가능하고, 오류 발생을 줄일 수 있습니다.'


// 🛠️ 객체를 생성하는 다른 방법들
// 1. 생성자 함수 사용
// `new Object()`를 사용하여 빈 객체를 생성한 뒤, 점(`.`) 표기법으로 프로퍼티를 추가할 수 있습니다.
const person2 = new Object();
person2.name = 'Lee';
person2.age = 20;

console.log(person2) // { name: 'Lee', age: 20 } 
// - 객체를 먼저 만들고, 필요한 값을 하나씩 추가하는 방식입니다.
// - 문법은 다소 길지만, 동적으로 객체를 구성할 때 유용하게 쓰입니다.

// - 2. Object.create() 사용
// `Object.create()` 메서드를 사용하면 '지정한 객체를 프로토타입으로 갖는 새 객체'를 생성할 수 있습니다.
const basePerson = {
  isHuman: true
};

const person3 = Object.create(basePerson);
person3.name = 'Lee';

console.log(person3); // { name: 'Lee', isHuman: true } 
console.log(person3.isHuman); // true (basePerson으로부터 상속받은 값)
// - 상속 기반 객체를 만들고 싶을 때 사용할 수 있는 방법입니다.
// - `객체 리터럴`보다 상대적으로 사용 빈도는 낮지만, '프로토타입 개념을 다룰 때 등장'합니다.

//  3. 동적 프로퍼티 키 사용
// 프로퍼티 키는 직접 문자열로 지정하는 방식도 있지만, 변수를 활용하여 동적으로 지정할 수 있습니다.
const keyName = '성별';
const value = '남성';
const person4 = {
	// 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
	name: 'Lee',
	// 프로퍼티 키는 age, 프로퍼티 값은 20
	age: 20,
	[keyName]: value //변수로 키를 지정할떈 [] 대괄호
}

console.log(person4) // { name: 'Lee', age: 20, 성별: '남성'
//  동적 프로퍼티 키는 나중에 사용자 입력을 활용하거나 프로퍼티 이름을 동적으로 바꿔야 할 때 매우 유용하게 사용


// ## 🧩 객체가 중요한 이유

// 1. JavaScript의 모든 것은 객체이다

// JavaScript에서는 원시값을 제외한 '함수, 배열, 날짜, 정규표현식, 에러, Math, JSON 등 거의 모든 요소가 객체'입니다.
// 이는 객체가 얼마나 중심적인 개념인지를 보여줍니다.
typeof [];        // 'object'
typeof {};        // 'object'
typeof function() {};  // 'function' (하지만 내부적으로는 객체처럼 동작함)
// 즉, JavaScript를 이해하고 활용하기 위해서는 객체에 대한 이해가 필수입니다. 객체는 단순한 데이터 저장소를 넘어서, 언어 전체를 구성하는 핵심 구조라고 볼 수 있습니다.


// 2. 객체는 현실 세계를 코드로 옮길 때 가장 적합한 구조이다

// 객체는 '실생활의 사물이나 개념을 코드로 표현'할 때 매우 유용합니다.
// 예를 들어 게임에서 "플레이어"를 객체로 만든다고 하면, 다음과 같이 구성할 수 있습니다:
const player = {
  name: '용사',
  level: 5,
  hp: 80,
  isAlive: true
};
// 또는 웹 서비스에서 "사용자"를 표현할 때도 다음처럼 사용할 수 있습니다:
const user = {
  id: 'user123',
  email: 'user@example.com',
  isAdmin: false
};
// 이처럼 객체는 하나의 대상이 가진 다양한 속성들을 묶어서 표현하는 데 매우 적합하며, 유지보수와 확장에도 유리한 구조입니다. 현실 세계의 어떤 대상을 코드로 설계할 때도 객체 기반의 사고는 매우 효과적입니다.


// - 3. 실무에서 다루는 대부분의 데이터는 JSON 형태다

// JavaScript로 웹 개발을 하다 보면 '서버에서 전달받는 데이터 대부분이 JSON 형식'입니다. 그리고 'JSON(JavaScript Object Notation)'은 구조적으로 JavaScript의 객체 문법과 매우 유사합니다.

// {
//   "name": "철수",
//   "age": 25,
//   "isStudent": false
// }
// - 위 데이터는 JSON 형식입니다.
// - JavaScript 객체와 생김새는 거의 똑같지만, 중요한 차이점이 하나 있습니다.
//     - JSON은 키와 값 모두 문자열로 표현되며 반드시 큰따옴표(" ")를 사용해야 합니다.
//     - 즉, `'` (작은따옴표)는 사용할 수 없고, 키도 문자열로 취급됩니다.

// 이런 JSON 데이터를 JavaScript에서는 객체로 변환해 바로 다룰 수 있습니다:
console.log('============');
const jsonData = '{"name": "철수", "age": 25, "isStudent": false}';

// 문자열(JSON) → 객체로 변환
const user1 = JSON.parse(jsonData);

console.log(user1);       // { name: '철수', age: 25, isStudent: false }
console.log(user1.name);  // '철수'

// 객체 → 문자열(JSON)로 변환
const backToJson = JSON.stringify(user1);
console.log(backToJson); // '{"name":"철수","age":25,"isStudent":false}'

// '즉, 객체 문법에 익숙해지는 것이 곧 JSON 데이터 처리 능력으로 이어지며,'
// 이는 'API 활용, 비동기 통신, 서버 응답 처리, 데이터 시각화' 등 실무의 거의 모든 영역에서 필수적인 기반이 됩니다.



// ⚠️ 객체 사용 시 주의 사항

// 1. '객체와 배열을 혼동하지 않도록 주의합니다'
//     - 객체는 키-값 쌍으로 이루어진 데이터 구조이고, 배열은 순서가 있는 리스트입니다. 형태가 비슷해 보이지만 동작 방식과 목적이 다릅니다.
    
// 2. '프로퍼티 키는 문자열로 처리됩니다.'
//     - 프로퍼티 키는 따옴표 없이 작성해도 내부적으로는 문자열로 처리됩니다. `'name'`이나 `name` 모두 같은 키로 간주됩니다.
    
// 3. '잘못된 네이밍은 오류로 이어질 수 있습니다'
//     - 공백, 특수문자, 숫자로 시작하는 프로퍼티 키는 오류를 발생시킬 수 있으니 반드시 식별자 네이밍 규칙을 지켜야 합니다.
    
// 4. '객체를 복사하거나 비교할 때 얕은 복사(shallow copy), 참조(reference)의 개념을 미리 인지해 두세요'
//     - 객체는 값이 아닌 참조로 할당되기 때문에, 복사나 비교 시 원치 않는 결과가 나올 수 있습니다. 이 부분은 이후 깊이 있게 배웁니다.


// '객체는 단순한 데이터 구조를 넘어 JavaScript의 기반을 이루는 핵심 개념입니다.'

// 객체를 다룰 줄 알면 JSON도 자연스럽게 다룰 수 있고, 나아가 함수, 배열, API, 상태관리 등 다양한 개념을 이해하는 데 큰 도움이 됩니다.
// 이번 학습을 통해 반드시 기억해야 할 핵심은 이것입니다:
// '“객체는 키-값 쌍으로 이루어진 데이터의 집합이며, JavaScript의 거의 모든 기능은 객체를 중심으로 동작한다.”'

// ===========================실습======================================
/**
 * 아래 내용에 맞는 객체를 선언해보세요.
 *
 * 코드 실행 방법
 * 아래 Terminal에 아래 코드를 작성해주세요.
 * node main.js
 */

// 색상과 길이 프로퍼티를 갖는 연필 객체를 선언해보세요.
const pencil = {
    color: 'black',
    length: 3
}
// 색상과 두께 프로퍼티를 갖는 형광팬 객체를 선언해보세요.
const highlighter = {
    color: 'red',
    thickness: 2
}
// 가로 길이와 세로 길이 프로퍼티를 갖는 지우개 객체를 선언해보세요.
const eraser = {
    width: 10,
    height: 10
}
// 크기와 모양, 그리고 내용물(연필, 형광팬, 지우개 객체를 담은 배열) 프로퍼티를 갖는 필통 객체를 선언해보세요.
const pencilCase = {
    size: 'small',
    design: 'good',
    contents: {pencil, highlighter, eraser}
    // contents: [pencil, highlighter, eraser]
}
// 각 객체를 console.log를 통해 출력해보세요.
console.log(pencil);
console.log(highlighter);
console.log(eraser);
console.log(pencilCase);
// ===================================================================

// 2. 목표 : dot notation과 bracket notation을 사용하여 객체 프로퍼티의 값을 조회하는 방법을 기억할 수 있다.

// '객체의 값을 '정확하게' 꺼내려면, 표기법부터 익혀야 합니다.'

// 코드로 사물을 만들 수 있다면, 이제는 그 사물을 '어떻게' 사용할 수 있는지도 알아야 합니다. 객체는 실생활의 사물을 코드로 표현한 것이기 때문에, 객체를 제대로 사용할 줄 알아야 현실 세계의 상황을 코드로 풀어낼 수 있습니다.

// 이번 학습에서는 'dot notation과 bracket notation을 사용하여 객체 프로퍼티 값을 조회하는 방법'을 익힙니다. 어떤 상황에서 어떤 표기법을 써야 하는지 기억해두면, '데이터를 다루는 기본기가 훨씬 단단해집니다.'


// # 🏠 객체 프로퍼티 사용법

// 선언된 객체의 프로퍼티는 프로퍼티 키(key)를 통해 값(value)을 조회할 수 있습니다.
// 프로퍼티 값을 조회하는 방법은 두 가지입니다.
// - 마침표(`.`) 표기법(dot notation)
// - 대괄호(`[]`) 표기법(bracket notation)

// 1️⃣ '마침표(`.`) 표기법'

// 가장 간단한 접근 방식으로, `객체.프로퍼티이름` 형식으로 사용합니다. '키가 고정되어 있을 때' 주로 사용하며, 가독성이 좋아 일반적으로 가장 많이 사용됩니다.
const person5 = {
  name: '김오즈',
};

console.log(person5.name); // 김오즈

// 2️⃣ '대괄호(`[]`) 표기법'

// `객체["프로퍼티키"]` 형태로 사용하며, '프로퍼티 키를 문자열로 작성'해야 합니다. 이 방식은 '변수로 키를 다룰 때' 유용하게 사용됩니다.
const person6 = {
  name: '김오즈',
};

console.log(person6["name"]); // 김오즈

const key = "name";
console.log(person6[key]); // 김오즈

// 문자열로 작성하지 않은 경우
// console.log(person6[name]); // ReferenceError: name is not defined

// console.log("name" in window);  // true 또는 false (브라우저에선 이미 있을 수 있음)
// console.log(window.name);       // 값 확인
// 콘솔에서는 이런 경우에도 undefined처럼 보일 수 있지만, 실제 코드 실행 시 오류가 날 수 있으므로 주의해야 합니다.


// 🚨 객체에 존재하지 않는 프로퍼티 키를 조회한 경우

// JavaScript에서는 존재하지 않는 키로 객체에 접근해도 '에러가 발생하지 않고 `undefined`가 반환'됩니다. 이 점은 편리하지만, 실수로 잘못된 키를 접근할 경우에도 에러 없이 넘어가므로 '디버깅 시 주의가 필요합니다.'
const person7 = {
  name: '김오즈'
};
console.log('--------------');
console.log(person7["age"]); // undefined
console.log(person7.age);     // undefined


// 🧮 객체 프로퍼티 간 연산

// 객체 안에 있는 숫자 값들을 활용해 계산을 수행하는 것은 매우 일반적인 작업입니다.
// 학생의 점수를 계산하거나, 제품의 가격을 합산하는 등의 실무 상황에서도 자주 사용됩니다.
const student = {
  name: '김오즈',
  score1: 85,
  score2: 92,
};

const total = student.score1 + student.score2;
const average = total / 2;

console.log(`총점: ${total}`);    // 총점: 177
console.log(`평균: ${average}`);  // 평균: 88.5
// 객체에서 값을 꺼내는 것만이 목적이 아니라,
// 그 값을 활용해 새로운 정보를 계산하는 것도 객체 사용의 핵심입니다.


// ✅ 조건문에서 객체 프로퍼티 사용

// 객체의 값은 조건문에서도 자주 활용됩니다. 예를 들어 사용자의 권한이 `true`인지 확인해 동작을 분기할 수 있습니다.
const user2 = {
  username: 'oz_dev',
  isAdmin: true,
};

if (user2.isAdmin) {
  console.log('관리자 권한이 있습니다.');
} else {
  console.log('일반 사용자입니다.');
}
// 객체 프로퍼티의 값이 boolean인 경우, 조건문과의 결합이 매우 직관적이고 유용합니다.


// 💼 객체 안의 객체 조회

// 실무에서는 단일 객체가 아니라, 객체 안에 또 다른 객체가 들어 있는 구조도 흔하게 사용됩니다.
// 이럴 때는 '대괄호 표기법과 변수 사용'이 특히 유용합니다.
const products = {
  itemA: { name: '노트북', price: 1200000 },
  itemB: { name: '마우스', price: 25000 },
  itemC: { name: '모니터', price: 330000 },
};

const key1 = 'itemB';
const selected = products[key1];

console.log(`${selected.name}의 가격은 ${selected.price}원입니다.`); // 마우스의 가격은 25000원입니다.
// 객체를 동적으로 관리하려면 이런 방식의 중첩 객체 구조와 키 변수화에 익숙해지는 것이 중요합니다.


//  ❗ 존재하지 않는 프로퍼티와 연산하면?
// - 객체에 없는 값을 불러와 연산에 사용하면 `undefined`와의 연산이 되어 `NaN`이 발생할 수 있습니다.
const item = {
  price: 1000,
};

const totalPrice = item.price - item.discount;

console.log(totalPrice); // NaN
// 이처럼 존재하지 않는 프로퍼티를 실수로 사용했을 때 undefined는 조용히 연산을 망치기 때문에, 방어 코드 작성이 필수입니다. ?? 연산자를 활용하면 값이 null이나 undefined인 경우에 기본값을 설정할 수 있습니다.
const totalPriceSafe = item.price - (item.discount ?? 0);

console.log(totalPriceSafe); // 1000


// '🦧 원시 래퍼 객체(Primitive Wrapper Object)'

// *이 내용은 심화 주제이므로 꼭 이해하지 않고 넘어가셔도 괜찮습니다.*

// JavaScript에서는 문자열이나 숫자처럼 보이는 '원시값(primitive value)'도 '점(`.`) 표기법'으로 속성이나 메서드를 사용할 수 있습니다. 예를 들어 아래와 같은 코드가 가능합니다:
console.log("hello".length); // 5
// 이처럼 원시값인 문자열에서 .length를 사용할 수 있는 이유는, JavaScript가 내부적으로 원시값을 일시적으로 객체처럼 다루도록 처리하기 때문입니다. 이때 생성되는 일시적인 객체를 원시 래퍼 객체(Primitive Wrapper Object)라고 부릅니다.

// - 원시값이란?
    // JavaScript에서 원시값(primitive value)은 다음과 같이 다섯 가지입니다.
    // ## number, string, boolean, null, undefined ##
    // 이 값들은 공통적으로 변경이 불가능(immutable)하다는 특징을 가집니다.

let greeting = "안녕";
greeting[0] = "하";
console.log(greeting); // 여전히 "안녕"
// 위 예제처럼 문자열의 일부를 바꾸려고 해도 '원시값 자체는 변하지 않습니다'. 값을 바꾸고 싶다면 '새로운 문자열을 만들어야 합니다'.
// 가끔 원시값도 바뀌는 것처럼 보이는데, 사실은 '변수에 저장된 값이 새 값으로 재할당되는 것'입니다.
let x = 5;
x = 10;
// 이건 5라는 값을 수정한 게 아니라, 변수 x에 10이라는 새로운 원시값을 다시 저장한 것입니다. 원시값은 항상 불변하며, 수정되지 않습니다.

// 즉, `"hello".length`를 실행할 때 다음과 같은 과정이 '순식간에 자동으로' 일어납니다.

// 1. 문자열 `"hello"`가 일시적으로 `String` 객체로 변환됩니다
// 2. `length` 속성을 읽어 `5`를 반환합니다
// 3. 일시적으로 만들어졌던 `String` 객체는 즉시 사라집니다

// 이 모든 과정은 눈에 보이지 않게 처리되며, '원시값도 마치 객체처럼 사용할 수 있게 해줍니다.'

// 이처럼 JavaScript는 원시값을 일시적으로 객체처럼 다루는 유연한 방식 덕분에 간단한 문법으로도 풍부한 기능을 사용할 수 있습니다.

// 비록 이 과정이 눈에 보이지는 않지만, 이해하고 나면 JavaScript의 작동 방식이 훨씬 선명하게 보일 것입니다.


// ⚠️ 객체 프로퍼티 조회 시 주의 사항

// 1. '마침표 표기법은 식별자 규칙을 따르는 키에만 사용 가능'
    
//     - 띄어쓰기나 하이픈(-)이 포함된 키는 마침표 표기법으로 접근할 수 없습니다.
    
// 2. '대괄호 표기법은 반드시 문자열 형태로 사용해야 함'
    
//     - 따옴표 없이 작성하면 변수로 인식되어 `ReferenceError`가 발생합니다.
    
// 3. '존재하지 않는 키로 접근해도 오류가 나지 않음'
    
//     - 없는 키를 조회하면 `undefined`를 반환하므로, 실수한 경우라도 에러 없이 지나갈 수 있습니다. 항상 값이 있는지 확인하는 습관이 필요합니다.
    
// 4. '변수를 키로 활용하려면 반드시 대괄호 표기법 사용'
    
//     - 마침표 표기법은 변수명을 키로 인식하지 않고, 키 이름 자체로 접근하려 하기 때문에 항상 `undefined`가 반환됩니다.


// '객체는 JavaScript에서 데이터를 구조화하고 표현하는 데 핵심적인 도구입니다.'
// 이번 학습을 통해 '객체에 저장된 값을 '정확히 꺼내는 방법''을 익히셨다면, 앞으로 더 복잡한 데이터 구조를 다룰 때도 훨씬 자신감 있게 접근할 수 있습니다.

// '표기법만 바르게 익혀도 오류는 줄고, 코드의 가독성과 유지보수성은 훨씬 좋아집니다.'

// ======================실습=============================
/**
 * 객체를 선언하고, 객체 내부 프로퍼티를 .표기법과 []표기법을 이용하여 호출해보세요.
 *
 */

// 브랜드, 색상, 최대시속, 탑승 인원 프로퍼티를 갖는 자동차 객체를 만들어주세요.
const carObj = {
    brand: 'hyundai',
    color: 'red',
    maxSpeed: 100,
    passenger: 5
}
const pas = 'passenger';
// .표기법과 []표기법을 이용하여 각 프로퍼티를 출력해보세요.
console.log(carObj.brand);
console.log(carObj.color);
console.log(carObj.maxSpeed);
console.log(carObj.pas);
console.log(carObj["brand"]);
console.log(carObj["color"]);
console.log(carObj["maxSpeed"]);
console.log(carObj[pas]);
// 정답코드
// const speed = 'max-speed';
// console.log('브랜드: ' + car.brand);
// console.log('색상: ' + car.color);
// console.log('최대시속: ' + car['max-speed']);
// console.log('최대시속: ' + car[speed]);
// console.log('탑승인원: ' + car['passenger']);
// console.log('탑승인원: ' + car.passenger);
// ============================================================================

// 3. 목표 : dot notation과 bracket notation의 차이와 주의할 점(예: bracket notation에서는 변수를 키로 사용할 수 있다는 점)을 이해하고, 각 방법에 대한 사용 예시를 들 수 있다.

// 'dot notation과 bracket notation의 차이를 이해하고, 상황에 따라 적절히 사용하는 능력은 객체를 다룰 때 반드시 필요한 기본기입니다.'

// 이번 학습을 통해 각 표기법의 특징과 사용 예시를 익히셨다면, 이제는 실무에서 마주치는 다양한 객체 구조도 더 유연하게 다룰 수 있습니다.

// 특히 bracket notation에서는 변수를 키로 사용할 수 있다는 점을 꼭 기억해두세요.

// '작지만 중요한 차이가 코드를 더 유연하고 견고하게 만듭니다.'

// # 🔖 객체의 프로퍼티 사용 방식의 차이

// 객체 내부 프로퍼티에 접근할 수 있는 방법은 두 가지입니다. 
// 바로 '마침표 표기법(dot notation)'과 '대괄호 표기법(bracket notation)'입니다. 
// 두 방식의 차이를 이해하고, 어떤 상황에 어떤 방식이 적절한지 판단할 수 있어야 실무에서 객체를 더욱 유연하게 다룰 수 있습니다.

// 1️⃣ 키가 JavaScript의 식별자 규칙을 따르는가?

// 객체의 프로퍼티 키는 JavaScript 식별자(identifier) 규칙을 따르는 경우에만 마침표(`.`) 표기법으로 접근할 수 있습니다. 이 규칙은 다음과 같습니다:
// - '알파벳(A–Z, a–z)', '숫자(0–9)', '밑줄(`_`)', '달러 기호(`$`)'만 사용할 수 있음
// - '숫자로 시작할 수 없음'
// - '공백이나 특수문자(-, %, ! 등)' 사용 불가
// - '예약어는 사용 불가' (예: `class`, `function`, `return` 등)

// 이 규칙을 따르는 키는 마침표 표기법과 대괄호 표기법 모두 사용 가능합니다.
// 하지만 규칙을 따르지 않는 경우에는 "반드시 대괄호 표기법을 사용하고 문자열로 작성해야" 합니다.
console.log('==========');
const person8 = {
  name: '김오즈',
  gender: '남성',
  'is-start': true,
};

console.log(person8.name);        // 김오즈
console.log(person8["is-start"]); // true

// ❌ 마침표 표기법은 오류 발생
// console.log(person.is-start); // ReferenceError: start is not defined

// 🧾 실무에서 식별자 규칙을 지키지 않는 키가 필요한 이유

// JavaScript 객체는 '자유롭게 문자열을 키로 사용할 수 있는 구조'를 가지고 있기 때문에, 실무에서는 다음과 같은 상황에서 규칙을 지키지 않는 키가 자주 등장합니다:

// 1. 'HTML 속성을 그대로 객체로 표현해야 할 때'
//     - HTML의 `data-*`, `aria-*` 속성은 하이픈(`-`)이 포함되어 있어 `.` 표기법으로 접근할 수 없습니다.
const element = {
  "data-user-id": "oz123",
  "aria-label": "설명 텍스트",
};

console.log(element["data-user-id"]);  // oz123
console.log(element["aria-label"]);    // 설명 텍스트

// 2. 'CSS 속성을 JavaScript 객체로 다룰 때'
//     - CSS 스타일 속성도 대부분 하이픈이 포함된 형태이며, 이를 JavaScript에서 다룰 경우 대괄호 표기법을 사용해야 
// 합니다.
const style = {
  "font-size": "16px",
  "margin-top": "20px",
};

console.log(style["font-size"]);  // 16px
console.log(style["margin-top"]); // 20px

// 3. 'API 또는 JSON 응답을 그대로 사용할 때'
//     - 백엔드 시스템이나 외부 API에서 전달받는 데이터는 JavaScript 네이밍 규칙을 고려하지 않고 구성되는 경우가 많습니다.
const userData = {
  "user-name": "oz_dev",
  "1stPlace": true,
  "is-active": false,
};

console.log(userData["user-name"]);  // oz_dev
console.log(userData["1stPlace"]);   // true
console.log(userData["is-active"]);  // false
// 이러한 예외 상황 때문에 JavaScript에서는 마침표 표기법만 익히는 것으로는 충분하지 않으며,
// '대괄호 표기법의 활용법도 반드시 함께 익혀야 합니다.'


// 2️⃣ 키를 변수로 사용해야 하는가?

// 실무에서는 '데이터 구조가 반복되거나', '동적으로 키 이름이 정해지는 상황'이 자주 발생합니다. 예를 들어 특정 키를 입력받거나, 공통 키를 여러 객체에 적용해야 하는 경우입니다. 이런 경우 '프로퍼티 키를 변수로 저장해두고', 그 변수를 이용해 객체에 접근해야 합니다.

// ✅ 마침표 표기법은 변수 사용 불가

// 마침표 표기법은 `person.name`처럼 '정적인 키'에만 사용할 수 있습니다. `person.key`처럼 작성하면, 자바스크립트는 'key'라는 이름의 '직접적인 프로퍼티'로 인식하기 때문에 원하는 동작이 나오지 않습니다.
const person9 = {
  name: '김오즈',
  gender: '남성',
};

const key2 = 'name';

console.log(person9.key2);    // undefined ('key'라는 키 없음)
console.log(person9[key2]);   // 김오즈 (key 변수의 값인 'name' 키로 접근

// ✅ 대괄호 표기법은 변수 사용 가능

// 대괄호 표기법은 변수에 저장된 문자열을 '키로 해석'하기 때문에, '동적으로 키가 결정되는 상황에 매우 유용합니다.')
const car = {
  color: 'red',
  brand: 'BMW',
  maxSpeed: 400,
  used: false,
};

const carKey1 = 'color';
const carKey2 = 'maxSpeed';

console.log(car[carKey1]); // red
console.log(car[carKey2]); // 400

console.log(car.carKey1); // undefined (key1이라는 키 없음)
console.log(car.carKey2); // undefined
console.log('===================');

// ✅ 실무 예시: 여러 객체에서 동일한 키로 데이터 조회

// 예를 들어 여러 기업 객체에서 `members`라는 공통 키의 값을 모아야 할 때,
// '키 이름을 변수로 저장하고 대괄호 표기법으로 접하면 코드가 훨씬 깔끔해집니다.
const Samsung = {
  location: '대한민국',
  companySize: '대기업',
  companySubject: '반도체',
  members: 127769,
};

const Apple = {
  location: '미국',
  companySize: '대기업',
  companySubject: '전자제품',
  members: 164000,
};

const Naver = {
  location: '대한민국',
  companySize: '대기업',
  companySubject: '온라인 검색',
  members: 4311,
};

const Google = {
  location: '미국',
  companySize: '대기업',
  companySubject: '온라인 검색',
  members: 182502,
};

// 공통 키를 변수로 저장
const propertyKey = 'members';

// 대괄호 표기법으로 모든 객체에서 같은 키로 데이터 조회
const BigTechMembers = [
  Samsung[propertyKey],
  Apple[propertyKey],
  Naver[propertyKey],
  Google[propertyKey],
];

console.log(BigTechMembers); // [127769, 164000, 4311, 182502]


// ⚠️ 객체 프로퍼티 접근 시 주의 사항

// 1. '마침표 표기법은 정적인 키에만 사용 가능'
//    - 마침표 표기법은 변수, 공백, 특수문자가 포함된 키에는 사용할 수 없습니다. 키가 고정된 문자열이고 JavaScript 식별자 규칙을 따를 때만 사용해야 합니다.
    
// 2. '대괄호 표기법은 키를 문자열 또는 변수로 작성해야 함'
//    - 대괄호 안에 따옴표 없이 작성하면 변수로 인식되며, 해당 변수가 선언되지 않은 경우 `ReferenceError`가 발생할 수 있습니다. 키가 문자열인지, 변수인지 정확히 구분해서 사용해야 합니다.
    
// 3. '존재하지 않는 키를 조회해도 오류가 발생하지 않음'
//    - 객체에 해당 키가 존재하지 않는 경우, JavaScript는 오류를 발생시키지 않고 `undefined`를 반환합니다. 키 오타나 잘못된 접근을 사전에 방지하려면 조건문이나 `in` 연산자 등을 활용하는 것이 좋습니다.
    
// 4. '변수를 키로 사용할 때는 반드시 대괄호 표기법 사용'
//    - 마침표 표기법은 `person.key`처럼 '변수명이 아닌 문자열 그대로의 키'를 찾기 때문에 원하는 값이 반환되지 않습니다. 변수로 접근하려면 `person[key]`처럼 대괄호 표기법을 사용해야 합니다.
    
// 5. '실무 데이터는 대부분 대괄호 표기법이 필요할 수 있음'
//    - API, HTML 속성, CSS 스타일 등에서는 식별자 규칙을 따르지 않는 키가 빈번하게 등장합니다. 이러한 데이터 구조를 다룰 때는 반드시 대괄호 표기법을 사용할 수 있어야 합니다.


// '객체 프로퍼티 조회 방식은 단순한 문법 차이가 아니라, 데이터에 어떻게 접근하고 관리하느냐에 대한 전략입니다.'

// - '키가 정적인가, 동적인가'
// - '네이밍 규칙을 따르는가'
// - '변수로 키를 관리할 필요가 있는가'

// 이 기준에 따라 적절한 표기법을 선택해야 합니다.

// ========================실습=====================================
/**
 * 주어진 대기업 객체를 이용해서 대기업 인원수 평균을 구해보세요.
 *
 * 요구사항
 * - 반복문을 사용해주세요.
 * - 평균을 구하는 함수를 만들고, 객체를 전달인자로 받아서 사용해주세요.
 * - 객체 프로퍼티 키를 담은 변수를 전달인자로 받아 객체에서 값을 가져올 때 사용해주세요.
 *
 */

// const BIG_TECH_COMPANIES = require('./data.js'); //브라우저에서 require 오류로 주석

// 여기에 코드를 작성해주세요.
// const objKey = 'members';

// function bigTechAvg(obj, objKey) {
//     let sum = 0;
//     console.log(obj);
//     for (let i=0; i<obj.length; i++) {
//         sum += obj[i][objKey];
//     }
//     avg = sum / obj.length;
//     return avg;
// }
// const techAvg = bigTechAvg(BIG_TECH_COMPANIES, objKey);
// console.log(techAvg);
// 정답: 349000

// 아래는 정답 코드..
// // 대기업 데이터
// const BIG_TECH_COMPANIES = require('./data.js');

// // 평균을 구하는 함수, 전달인자: 대기업 정보가 담긴 배열, 객체 프로퍼티 키
// function average(objectList, objectKey) {
//   let allMembers = 0; // 모든 인원 수를 저장할 변수
//   // 반복문을 통한 데이터 탐색(0 ~ 대기업 데이터의 개수 - 1)
//   for (let i = 0; i < objectList.length; i++) {
//     // 대기업의 인원수를 allMembers 변수에 더하기
//     allMembers += objectList[i][objectKey];
//   }

//   // 평균을 위해 모든 대기업 인원 수에서 대기업 수만큼 나누어서 반환
//   return allMembers / objectList.length;
// }

// // 프로퍼티 키로 사용할 변수
// const members = 'members';

// // 평균 함수를 호출하고, 반환값을 answer 변수에 저장
// const answer = average(BIG_TECH_COMPANIES, members);

// // 정답: 349000
// console.log(answer); // 349000

// =====================================================================================


// 4. 목표 : 객체 프로퍼티를 추가, 변경, 삭제하는 방법을 설명할 수 있다.

// '객체를 자유롭게 다루려면 '조회'뿐 아니라 '추가', '변경', '삭제'까지 할 수 있어야 합니다.'

// 객체는 실생활의 사물을 코드로 표현한 것입니다. 실제 사물은 시간이 지나면서 새로운 특징이 생기거나 기존의 특성이 바뀌기도 합니다. 그렇다면 JavaScript 객체에도 새로운 정보를 추가하거나 기존 값을 바꾸고, 필요 없는 내용을 제거할 수 있을까요?

// 이번 학습에서는 '객체의 프로퍼티를 추가하고, 변경하고, 삭제하는 방법'을 익힙니다.

// 이 과정을 정확하게 이해하면, '정적인 데이터를 동적으로 제어하는 능력'이 생깁니다.


// 🧭 객체 프로퍼티 조작하기
// 객체는 선언 이후에도 자유롭게 구조를 바꿀 수 있습니다. 이 유연함 덕분에 JavaScript에서는 객체에 '프로퍼티를 추가하고, 값을 수정하고, 필요할 때 삭제'하는 일이 매우 빈번하게 발생합니다. 아래 표를 통해 객체 프로퍼티를 다루는 기본 방식을 먼저 확인해보세요.

// | 기능            |                  설명            |                  예시                    |
// | 프로퍼티 추가 | 객체에 존재하지 않는 키에 값을 할당 | `object.newKey = "value"` |
// | 프로퍼티 값 수정 | 기존 키에 새로운 값을 할당 | `object.key = "newValue"` |
// | 프로퍼티 삭제 | `delete` 연산자를 사용해 키 제거 | `delete object.key` / `delete object["key"]` |


//  1️⃣ 프로퍼티 추가

// 객체에 존재하지 않는 프로퍼티 키에 프로퍼티 값을 할당하면 객체에 프로퍼티가 동적으로 생성되고 프로퍼티 값이 할당됩니다.
// . 표기법을 활용한 프로퍼티 추가
const person10 = {
  name: '김오즈',
}
person10.age = 32;  // age 프로퍼티 추가
console.log(person10); // {name: "김오즈", age: 32}

// [] 표기법을 활용한 프로퍼티 추가
const person11 = {
  name: '김오즈',
}
person11['age'] = 32;  // age 프로퍼티 추가
console.log(person11); // {name: "김오즈", age: 32}

//  2️⃣ 프로퍼티 값 변경

// 존재하는 프로퍼티 키에 프로퍼티 값을 할당하면 기존 값 대신 할당된 값으로 프로퍼티 값이 변경됩니다.
// . 표기법을 활용한 프로퍼티 값 수정
const person12 = {
  name: '김오즈',
}

person12.name = '박코딩'; // name 프로퍼티 값 수정

console.log(person12); // {name: "박코딩"}

// [] 표기법을 활용한 객체 프로퍼티 값 변경
const person13 = {
  name: '김오즈',
}

person13['name'] = '박코딩'; // name 프로퍼티 값 수정

console.log(person13); // {name: "박코딩"}

// ### 💡 객체 프로퍼티 키를 변경할 수는 없나요?
// - 객체 프로퍼티 키를 변경하고 싶을 경우, 이전 내용을 ""삭제 후"" 새로운 프로퍼티를 추가해야합니다.
// 기존 내용 삭제
const person14 = {
  name: '김오즈',
}
delete person14.name;
// 새로운 프로퍼티 추가
person14.fullName = '김오즈'; 

console.log(person14); // {fullName: "김오즈"}

//  3️⃣ 프로퍼티 삭제

// 객체 프로퍼티를 삭제하기 위해서는 `delete` 연산자를 사용해야 합니다.
const person15 = {
  name: '김오즈',
  age: 32,
}

delete person15.age;  // age 프로퍼티 삭제

console.log(person15); // {name: "김오즈"}
// delete 연산자 뒤에 오는 내용은 객체 프로퍼티 값에 접근할 수 있어야하며, . 표현식과 [] 표현식 모두 사용 가능합니다.
const person16 = {
  name: '김오즈',
  age: 32,
}

delete person16.age; // age 프로퍼티 삭제
delete person16['name']; // name 프로퍼티 삭제

console.log(person16); // {}

// ⚠️ 객체 프로퍼티 추가, 변경, 삭제 시 주의 사항
// 1. 존재하지 않는 키를 `delete` 하더라도 에러는 발생하지 않고, 단순히 무시됩니다.
// 2. `delete` 연산자는 객체의 프로퍼티에만 사용해야 하며, 변수 자체나 다른 값에는 사용하지 않습니다.
const person17 = {
  name: '김오즈',
  age: 32,
};

delete person17.weight; // 존재하지 않는 키 → 무시됨
delete person17['height']; // 존재하지 않는 키 → 무시됨

console.log(person17); // {name: "김오즈", age: 32}


// '객체는 생성 이후에도 자유롭게 형태를 바꿀 수 있는 유연한 구조입니다.'

// 이번 학습을 통해 객체에 새로운 속성을 더하고, 기존 값을 수정하거나 제거하는 방법을 익히셨다면

// 실무에서 마주치는 복잡한 데이터 구조도 더 능동적으로 다룰 수 있습니다.

// ====================실습=======================================
/**
 * 사서가 되어 책 정보를 만들고, 수정해주세요.
 *
 * 요구사항
 * - book 객체에 책정보를 넣어주세요.
 *   - 정보
 *    - 이름: 어린 왕자
 *    - 저자: 앙투안 드 생텍쥐페리
 *    - 평점: 5
 *    - 출판사: 인디고
 *    - 가격: 10620
 * - book 객체에 가격을 12000으로 수정해주세요.
 * - book 객체에 출판사를 삭제하고, 다음 내용을 추가해주세요.
 *    - 원제: Le Petit Prince
 */
let book = {};
console.log('=====================');
// 여기에 코드를 작성해주세요.
book.name = '어린 왕자';
book['author'] = '앙투안 드 생텍쥐페리';
book.rating = 5;
book.publisher = '인디고';
book.price = 10620;
console.log(book);

// book 객체에 가격을 12000으로 수정
book.price = 12000;
console.log(book);

// book 객체에 출판사를 삭제
delete book['publisher'];

//  원제: Le Petit Prince 추가
book['원제'] = 'Le Petit Prince';
console.log(book);

// ==============================================================

// 5. 목표 : for...in 문과 Object 메서드(Object.keys, Object.values, Object.entries)를 활용하여 객체의 프로퍼티를 반복적으로 조회하는 방법을 이해하고 사용할 수 있다.

// "객체 안의 모든 값을 꺼내 쓰려면 반복의 방식부터 이해해야 합니다."

// 객체는 구조가 다양하고 유연하기 때문에, 그 안의 프로퍼티를 하나씩 꺼내서 사용하는 일이 매우 잦습니다. 이때 반복문과 메서드를 적절히 사용하면 훨씬 효율적으로 객체를 다룰 수 있습니다.

// 이번 학습에서는 "`for...in` 문과 `Object.keys`, `Object.values`, `Object.entries` 메서드를 활용하여 객체의 프로퍼티를 순회하고 키와 값을 조회하는 방법"을 익힙니다.


// 📚 객체의 프로퍼티를 순회하는 다양한 방법

// 객체는 단순히 값을 저장하는 그릇이 아니라, 여러 데이터를 효율적으로 관리하고 반복적으로 처리할 수 있는 구조입니다. 객체 내부의 프로퍼티를 전부 조회하고 싶을 때는 반복문이나 전용 메서드를 활용해야 합니다.
// 이번 학습에서는 `for...in` 문을 통해 객체의 모든 키를 순회하는 방법과, `Object.keys`, `Object.values`, `Object.entries`를 활용하여 **키, 값, 키-값 쌍**을 배열 형태로 다루는 방법까지 함께 익힙니다.


//  📍 in 연산자

// 반복문을 통해 객체를 순회하기 위해서는 먼저 `in` 연산자를 이해해야합니다. 
// `in` 연산자는 연산자 왼쪽에 작성된 속성이, 오른쪽 객체에 존재하는지를 확인합니다. 해당 속성이 객체에 있으면 `true`를, 없으면 `false`를 반환합니다.
// - key in object
const person18 = {
  name: '김오즈',
  address: 'Seoul'
};

console.log('name' in person18);  // true
console.log('address' in person18);  // true
console.log('age' in person18);  // false

// 🔍 for...in 문

// `for(초기값; 조건식; 증감식)` 형태의 전통적인 반복문은 배열이나 숫자 기반의 반복에는 적합하지만, 객체의 프로퍼티를 순회하기에는 적합하지 않습니다.
// 객체의 모든 프로퍼티를 순회할 때는 `for...in` 문을 사용합니다. 이때 객체의 각 프로퍼티 키가 순서대로 변수에 할당되며, 해당 키를 통해 값을 조회할 수 있습니다.
// 객체의 각 프로퍼티 키를 하나씩 꺼내어 변수에 담고 반복 실행합니다

// for (const key in 객체) {
//   // key: 현재 순회 중인 프로퍼티의 이름 (문자열 형태)
//   // 객체[key]: 해당 키에 대응되는 프로퍼티의 값

//   // 예: 콘솔에 키와 값을 출력해보기
//   console.log(key, 객체[key]);
// }
const person19 = {
  name: '김오즈',
  gender: '남',
  address: 'Seoul',
  age: 20,
  favorite: '코딩'
}

for (const objectKey in person19) {
  console.log(`프로퍼티 키: ${objectKey}, 프로퍼티 값: ${person19[objectKey]}`);
}

/** 출력 예시
 * 프로퍼티 키: address, 프로퍼티 값: Seoul
 * 프로퍼티 키: age, 프로퍼티 값: 20
 * 프로퍼티 키: favorite, 프로퍼티 값: 코딩
 * 프로퍼티 키: gender, 프로퍼티 값: 남
 * 프로퍼티 키: name, 프로퍼티 값: 김오즈
 */

// 🧰 Object 메서드를 활용한 순회

// 객체를 순회할 수 있는 방법은 `for...in` 외에도 `Object`에서 제공하는 메서드를 사용하는 방식이 있습니다.
// 보다 명확하게 키 또는 값을 다루고 싶을 때는 `Object.keys`, `Object.values`, `Object.entries`를 사용하는 것이 좋습니다.

// 1️⃣ Object.keys(obj)
// - 객체의 '모든 키(key)'를 배열로 반환합니다.
const user3 = {
  name: '김오즈',
  age: 32,
};

console.log(Object.keys(user3)); // ['name', 'age']

// 2️⃣ Object.values(obj)
// - 객체의 '모든 값(value)'을 배열로 반환합니다.
console.log(Object.values(user3)); // ['김오즈', 32]

// 3️⃣ Object.entries(obj)
// - 객체의 '키-값 쌍'을 배열의 형태로 반환합니다.
// - 각각의 요소는 `[key, value]` 형태의 배열입니다.
console.log(Object.entries(user3)); // [['name', '김오즈'], ['age', 32]]

// 이를 사용하면 for...of 문으로도 객체 순회가 가능합니다.
for (const [key, value] of Object.entries(user3)) {
  console.log(`${key} : ${value}`);
}


// ⚠️ 객체를 순회할 때 주의 사항

// 1. '객체의 순회 순서는 항상 일정하지 않을 수 있습니다.'
//    - 대부분의 브라우저는 선언 순서를 유지하지만, 키가 숫자인 경우 자동으로 정렬되어 먼저 출력됩니다.
// 2. 'for...in은 상속된 속성까지 포함해서 순회'합니다.
//    - 프로토타입 체인을 통해 물려받은 속성까지 순회 대상에 포함될 수 있으므로 주의가 필요합니다.
console.log('============');
const parent = { job: '개발자' };
const child = Object.create(parent);
child.name = '김오즈';

for (const key in child) {
  console.log(key); // name, job
}
// - 내가 만든 obj의 자체 속성만 순회하고 싶을 때, 상속된 키가 섞이면 문제가 생김
// - 이런 상황에서는 꼭 hasOwnProperty를 써야 합니다.
for (const key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(key); // name
  }
}

// 3. 'Object.keys, Object.values, Object.entries는 상속된 프로퍼티는 포함하지 않습니다.'
//    - 따라서 보다 정확하고 안전하게 자기 자신의 프로퍼티만 순회하려면 Object 메서드를 사용하는 것이 좋습니다.


// '객체 순회는 객체를 읽고 활용하는 가장 기본적인 능력입니다.'

// `for...in` 문은 간단하고 직관적이지만, 상속된 프로퍼티까지 순회된다는 점을 반드시 기억해야 합니다.
// 보다 안전하고 명확하게 다루고 싶을 때는 `Object.keys`, `Object.values`, `Object.entries`를 활용하세요.
// 이 세 가지 메서드는 배열 형태로 결과를 반환하므로, `for...of`, `forEach`, 배열 메서드 등과도 자유롭게 결합할 수 있어 실무에서 매우 유용하게 쓰입니다.

// ===========================실습==============================
/**
 * Todo 리스트 출력하기
 *
 * 주어진 객체 `Todos` 객체에 들어있는 할 일 목록을 콘솔창에 출력해주세요.
 *
 * 요구사항
 *
 *   - Todos 객체는 키-값 형태로 되어 있으며, 프로퍼티 키는 날짜값이, 프로퍼티 값은 할 일이 들어 있습니다.
 *   - 콘솔에 "0000-00-00 할 일 목록" 형태로 콘솔에 출력해주세요.
 */
const Todos = {
  '2025-02-27': '회의 자료 준비하기',
  '2025-02-28': '프로젝트 코드 리뷰',
  '2025-03-01': '책 한 챕터 읽기',
  '2025-03-02': '집 청소하기',
  '2025-03-03': '운동 1시간 하기',
  '2025-03-04': '개인 프로젝트 작업',
  '2025-03-05': '친구와 저녁 약속',
  '2025-03-06': '영화 감상',
  '2025-03-07': '주간 업무 정리',
  '2025-03-08': '가족과 나들이',
};

// 여기에 코드를 작성해주세요.
for (list in Todos) {
    console.log(`${list} : ${Todos[list]}`);
}
console.log('2.================')
for (const [key, value] of Object.entries(Todos)) {
    console.log(key, value);
}

console.log('3.정답코드===============')
// 반복문을 통해 Todos 객체에서 프로퍼티 키(todo) 가져오기
for (const todo in Todos) {
  // 프로퍼티 키를 통해 프로퍼티 값을 가져오고, 콘솔에 출력할 문자열 만들기
  const log = `${todo} ${Todos[todo]} `;
  // 콘솔에 문자열 출력
  console.log(log);
}