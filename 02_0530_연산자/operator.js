// 학습 목표
// - number 타입 값을 사용하여 간단한 연산의 예시를 들 수 있- (+, -, *, /, %)
// - Math 객체의 다양한 메서드(Math.random(), Math.floor(), Math.ceil(), Math.pow() 등)를 활용하여 난수 생성, 올림/내림, 거듭제곱 계산과 같은 수학적 연산의 사용 예시를 들 수 있다.
// - 비교 연산자(<, <=, >, >=)를 사용하여 number 타입의 값을 비교할 수 있다.동치 연산자(===)를 사용하여 두 값이 동일한지 확인할 수 있다.
// - OR연산자(||), AND연산자(&&), NOT연산자(!)의 사용 방법을 기억한다.
// - falsy한 값을 나열할 수 있다.
// - number 타입의 값을 string 타입으로, string 타입의 값을 number 타입으로 변경하는 코드를 구현할 수 있다.
// - 작은따옴표(’’), 큰따옴표(””), 백틱(``)의 사용법과 차이점을 설명할 수 있다.
// - 템플릿 리터럴을 사용하여 변수를 문자열에 효율적으로 삽입하고, 동적인 문자열을 작성할 수 있다.
// - length 프로퍼티를 사용하여 문자열의 길이를 조회하고, 사용 예시를 들 수 있다.
// ========================================================================================

// 1. 학습목표 
// number 타입 값을 사용하여 간단한 연산의 예시를 들 수 있다. (+, -, *, /, %)

// ㅇ 산술연산자의 종류
// - 덧셈 연산자 `+`
// - 뺄셈 연산자 `-`
// - 곱셈 연산자 `*`
// - 나눗셈 연산자 `/`
// - 나머지 연산자 `%`
// ========================================================================================

// 덧셈 연산자 +
let num1 = 15;
let num2 = 5;
// console.log(num1 + num2) // 출력 결과: 20
console.log(`${num1} + ${num2} = ${num1 + num2}`);

// 덧셈 연산자 `+`는 숫자끼리는 덧셈, 문자열과 함께 쓰이면 연결(concatenation)을 수행합니다.
// 예를 들어, 아래 코드에서는 `10`과 `'5'`가 문자열로 결합되어 `"105"`가 출력됩니다.
console.log(10 + '5') // 출력 결과: 105

// 뺄셈 연산자 -
num1 = 15;
num2 = 5;
// console.log(num1 - num2) // 출력 결과: 10
console.log(`${num1} - ${num2} = ${num1 - num2}`);

// 곱셈 연산자 *
num1 = 15;
num2 = 5;
// console.log(num1 * num2) // 출력 결과: 75
console.log(`${num1} * ${num2} = ${num1 * num2}`);

// 나눗셈 연산자 /
num1 = 15;
num2 = 5
// console.log(num1 / num2); // 출력 결과 : 3
console.log(`${num1} / ${num2} = ${num1 / num2}`);

// 나머지 연산자 %
// 첫 번째 숫자를 두 번째 숫자로 나눈 나머지를 구합니다.
num1 = 17;
num2 = 3;
// console.log(num1 % num2) // 출력 결과: 3
console.log(`${num1} % ${num2} = ${num1 % num2}`);
// =======================================================================

// 복합 대입 연산자
// 산술 연산과 변수 대입을 동시에 할 수 있는 축약 표현도 있습니다.
// x += 2 => x = x + 2;
// x -= 3 => x = x - 3;
// x *= 4 => x = x * 4;
// x /= 2 => x = x / 2;
// x %= 5 => x = x % 5;

let x = 10;
x += 5; // x = x + 5
x *= 2; // x = x * 2 
console.log(x); // 출력 결과: 30
// =======================================================================

// 증감 연산자
// 변수의 값을 1씩 증가하거나 감소시키고 싶을 때 사용
// ++, 1 증가, x++ 또는 ++x
// --, 1 감소, x-- 또는 --x

let count = 5;
count++ // 1증가
console.log(count); //6

count-- // 1감소
console.log(count); //5

// ++x vs x++의 차이
// ++x: 값을 먼저 1 증가시키고 그 결과를 반환합니다
// x++: 값을 먼저 반환한 뒤, 나중에 1 증가시킵니다
// 이 차이는 값을 바로 사용하는 상황에서만 중요하며, 단순히 값을 증가시킬 때는 둘 다 같은 결과를 냅니다.
x = 5;

console.log(++x); // 6 (x를 먼저 증가 → 그 값을 출력)
console.log(x);   // 6

x = 5;

console.log(x++); // 5 (x를 먼저 출력 → 그다음 증가)
console.log(x);   // 6

// 연산자 우선순위 : 곳셈과 나눗셈이 덧셈과 뺼셈보다 먼저 계산
// - 연산자끼리 우선순위가 다르면 우선순위 높은 것 먼저 계산
// - 우선순위가 같으면 결합 방향에 따라 계산 순서가 결정됨
// - 명확한 계산 순서를 원하면 괄호 `()`를 사용하자!
console.log(50 + 10 / 5 + 2); // 50 + 2 + 2 → 출력 결과: 54
console.log((50 + 10) / (8 + 2)); // 60 / 10 → 출력 결과: 6
// 우선순위 예시
console.log('================================');
console.log(3 + 4 * 2); // 3 + (4 * 2) → 11
console.log((3 + 4) * 2); // (3 + 4) * 2 → 14

let a = 2;
a **= 3; // a = a ** 3 → 8 (**는 거듭제곱 연산자, 2의 3제곱 = 8)
console.log(a);
console.log('================================');
// ==============================================================

// 2. 학습목표
// Math 객체의 다양한 메서드(Math.random(), Math.floor(), Math.ceil(), Math.pow() 등)를 활용하여 난수 생성, 올림/내림, 거듭제곱 계산과 같은 수학적 연산의 사용 예시를 들 수 있다.

// Math 객체 - 숫자 계산을 위한 기능들이 미리 정리된 JavaScript의 기본 도구입니다.
// JavaScript에는 우리가 직접 만들지 않아도 사용할 수 있는 내장 객체들이 있습니다. 이 객체들은 프로그램을 만들 때 자주 쓰이는 기능을 담고 있어, 별도의 설정 없이 언제든 사용할 수 있습니다. 
// Math 객체는 그중 하나로, 숫자와 관련된 다양한 기능들을 포함하고 있습니다. 복잡한 수학 계산도 Math 객체의 메서드를 활용하면 아주 간단하게 처리할 수 있습니다.

// 객체란?
// 여러 값을 하나로 묶어 놓은 덩어리라고 볼 수 있습니다. 객체에는 다양한 정보와 기능이 담길 수 있는데, 그 구성요소를 속성(또는 프로퍼티)라고 부릅니다. 각 속성은 이름(키)과 값(value)으로 이루어져 있으며, 이 개념은 이후 본격적으로 배울 예정입니다. 지금은 "객체는 다양한 기능이나 데이터를 묶어놓은 구조" 정도로만 가볍게 이해하고 넘어가도 괜찮습니다

// Math 메서드
// 메서드는 객체가 가지고 있는 기능(함수)입니다. Math 객체의 메서드는 모두 Math.메서드이름() 형태로 사용하며, 숫자를 계산해주는 역할을 합니다.

// Math.random()
//  - 0 이상 1 미만의 숫자를 무작위로 반환합니다. 즉, 실행할 때마다 매번 다른 소수값이 출력됩니다.
// console.log(Math.random()) // 출력 예시: 0.5668689883160865 
// console.log(Math.random()) // 출력 예시: 0.8819052071000923
// console.log(Math.random()) // 출력 예시: 0.0781936370960119

// 예를 들어, 0 이상 10 미만의 숫자를 만들고 싶다면 아래처럼 10을 곱하면 됩니다.
console.log(Math.random() * 10) // 출력 예시: 7.522055818079993

// Math.floor(x) (내림)
// - `x`보다 작거나 같은 수 중에서 가장 큰 정수를 반환합니다. 
// console.log(Math.floor(5.95));  // 출력 결과: 5
// console.log(Math.floor(45.05)); // 출력 결과: 45
// console.log(Math.floor(-1.6));  // 출력 결과: -2

// ** Math.random()의 결과를 정수로 출력하고 싶다면 Math.floor()와 함께 사용하면 됩니다.
// 아래는 0이상 10미만의 정수를 랜덤
console.log(Math.floor(Math.random() * 10)); // 출력 예시: 2

// 1부터 6까지의 정수를 무작위로 반환하는 주사위 함수
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice()); // 예시 출력: 4
console.log(rollDice()); // 예시 출력: 1
console.log(rollDice()); // 예시 출력: 6
// - `Math.random()` → 0 이상 1 미만의 소수값 생성
// - `Math.random() * 6` → 0 이상 6 미만의 소수값으로 범위 확장
// - `Math.floor(...)` → 소수점 아래 버림 (0, 1, 2, 3, 4, 5 중 하나)
// - `+ 1` → 1부터 6까지 정수값 완성

// > 💡 이 구조는 랜덤 정수 범위 만들기에 자주 사용되며
// 예: Math.floor(Math.random() * (최댓값 - 최솟값 + 1)) + 최솟값 형태로 일반화할 수 있어요.

// Math.ceil(x) (올림)
// - x보다 크거나 같은 수 중에서 가장 작은 정수를 반환합니다
console.log(Math.ceil(5.95));  // 출력 결과: 6
console.log(Math.ceil(45.05)); // 출력 결과: 46
console.log(Math.ceil(-1.6));  // 출력 결과: -1

// Math.pow(x, y)
// x의 y제곱을 반환합니다.
console.log(Math.pow(2, 3));   // 출력 결과: 8
console.log(Math.pow(2, -1));  // 출력 결과: 0.5

// Math.abs(x)
// - x의 절대값을 반환합니다.
// x가 음수라면 -x를 반환하고 양수라면 x를 반환합니다. 따라서 결과는 항상 양수 혹은 0입니다. 

// 이외에 다양한 Math 객체
// - Math.round(x) : 반올림
// - Math.trunc(x) : 소수점을 제거하고 정수 부분만 반환
// - Math.max(a, b, ...) : 전달한 값중 가장 큰 수 반환
// - Math.min(a, b, ...) : 전달한 값중 가장 작은 수 반환
// - 더 많은 객체는 mdn 문서 참고
// =============================================================================

// 3. 비교 연산자(<, <=, >, >=)를 사용하여 number 타입의 값을 비교할 수 있다.

// 비교 연산자
//  a > b : a가 b보다 큼
//  a < b : a가 b보다 작음
//  a >= b : a가 b보다 크거나 같음
//  a <= b : a가 b보다 작거나 같음
//  a === b : a와 b의 값과 타입이 같음
//  a !== b : a와 b의 값과 타입이 다름
//  a == b : a와 b의 값이 같음 (사용 비추천)
//  a != b : a와 b의 값이 다름 (사용 비추천)
console.log(0 == '0');          // true → 숫자와 문자열을 같다고 판단
console.log(false == 0);        // true → false가 숫자 0과 같다고 판단
console.log(null == undefined); // true → 완전히 다른 타입인데 같다고 판단
console.log('==============');
// boolean 타입 - 참인지 거짓인지 반환
a = 5;
let b = 10;
console.log(a > b);  // 출력 결과: false
console.log(a < b);  // 출력 결과: true
console.log(a >= b); // 출력 결과: false
console.log(a <= b); // 출력 결과: true

let passingScore = 60;
let studentScore = 75;

let isPassing = studentScore >= passingScore;
console.log(isPassing); // 출력 결과: true

// =======================================================

//  4.동치 연산자(===)를 사용하여 두 값이 동일한지 확인할 수 있다.

// 동치 연산자 (===, !==)
// 두 값이 정확히 같은지 비교할 때 === 연산자를 사용합니다. 
// 이 연산자는 값과 타입이 모두 같을 때만 true를 반환합니다. 
// 반대로 !== 연산자는 값이나 타입 중 하나라도 다르면 true를 반환합니다.
console.log('=================');
console.log(1 === 1);           // true (숫자와 숫자, 값도 같음)
console.log('1' === 1);         // false (문자열과 숫자, 타입 다름)
console.log(true === 1);        // false (불리언과 숫자, 타입 다름)
console.log(false === 0);       // false
console.log(null === undefined); // false

// ⚠️ 중요! 참조 타입의 비교는 다르게 동작합니다
//  - object, array, function과 같은 참조 타입은 값을 비교하는 방식이 다릅니다. 다음 예제를 보세요:
// console.log('=================');
// console.log([] === []); // false 오류떠있어서 주석처리
// 이유는 두 배열이 서로 다른 메모리 주소에 존재하기 때문입니다. 
// JavaScript는 참조 타입을 비교할 때 값이 아닌 참조(주소)를 비교합니다.
//  💡 이 개념은 객체와 배열을 다룰 때 매우 중요하며, 이후 참조 타입의 비교 단원에서 더 자세히 배울 예정입니다.

// ==, != 안쓰는 ㅣㅇ유
// ==(느슨한 동등 연산자)와 !=(느슨한 부등 연산자)도 존재합니다. 
// 이 연산자들은 값만 비교하고 타입은 무시하기 때문에, 의도치 않은 결과를 만드는 경우가 많습니다.
console.log('=================');
console.log('' == 0);             // true
console.log(false == 0);          // true
console.log(null == undefined);   // true
console.log([] == 0);             // true

console.log('' != 0);             // false
console.log(false != 0);          // false
console.log(null != undefined);   // false
// ==============================================================

// 5. 목표 : OR연산자(||), AND연산자(&&), NOT연산자(!)의 사용 방법을 기억한다.

// 논리 연산자 - `&` (AND), `||` (OR), `!` (NOT)
// - 여러 개의 조건을 조합해서 true또는 false를 판단하는 데 사용하는 연산자입니다.

// AND (&&) 연산자
// - x && y에서 x와 y가 모두 true일 때만 결과가 true
console.log('===============');
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

console.log('===============');
console.log('hello' && 123);     // 123 (둘 다 truthy → 마지막 값 반환)
console.log(0 && 'world');       // 0 (0은 falsy → 바로 반환)
console.log(true && 'JavaScript'); // 'JavaScript' (둘 다 truthy)
console.log(null && 'hi');       // null (null은 falsy)

let userName = '';
console.log(userName && '로그인 완료'); // '' → falsy → 결과: ''

// OR (||) 연산자 
// - x || y에서 x와 y 중 하나라도 true이면 결과가 true가 됩니다.
console.log('=======================');
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// 아래 코드에서 hour의 값이 9이므로, hour < 10은 true입니다. hour > 19는 false이지만 
// || 연산자는 하나라도 true이면 전체 결과가 true가 되므로 '영업시간이 아닙니다.'가 출력됩니다.
let hour = 9;
if (hour < 10 || hour > 19) {
  console.log('영업시간이 아닙니다.');
}

console.log('hello' || 123);  // 'hello' (왼쪽이 truthy → 그대로 반환)
console.log('' || 123);       // 123 (왼쪽이 falsy → 오른쪽 반환)
console.log(0 || false);      // false (0은 falsy → 오른쪽 반환)
console.log(null || '기본값'); // '기본값' (왼쪽이 falsy → 오른쪽 반환)

userName = '';
let displayName = userName || '익명 사용자';
console.log(displayName); // 출력: '익명 사용자'

// NOT (!) 연산자
// - 논리 부정 연산자로, 어떤 값이 true면 false, false면 true를 반환합니다.
// 즉, 참 → 거짓, 거짓 → 참으로 바꿉니다.
// - `!값` → 값을 부정한 결과 (`true`/`false`)
// - `!!값` → 값을 Boolean 값으로 변환 (부정의 부정)
console.log('============================');
console.log(!true);   // false
console.log(!false);  // true

let isLoggedIn = false;
if (!isLoggedIn) {
  console.log('로그인이 필요합니다.');
}


// 논리 연산자 요약표
// ||, OR, 모두 falsy여야 false (하나라도 truthy이면 true)
// &&, AND, 모두 truthy 여야 true (하나라도 falsy이면 false)
// !, NOT, true를 false, false를 true로 변환
// =========================================================

// 6. 목표 : falsy한 값을 나열할 수 있다.

// JavaScript의 falsy 값
// - `false`
// - `0` (숫자 0)
// - `-0` (음수 0)
// - `0n` (BigInt의 0)
// - `''` (빈 문자열)
// - `null`
// - `undefined`
// - `NaN`
// 위의 값들을 제외한 모든 값은 truthy이며, 조건에서 모두 참(true)으로 평가됩니다.

// falsy와 truthy 확인 방법
// - 값을 Boolean 타입으로 변환할 때는
// Boolean() 함수나 논리 부정 연산자(!)를 두 번 사용하는 !!를 쓸 수 있습니다.

// falsy 값 예시
console.log('======================');
console.log(!!0);            // false
console.log(!!'');           // false
console.log(!!null);         // false
console.log(!!undefined);    // false
console.log(!!NaN);          // false

// truthy 값 예시
console.log(!!123);          // true
console.log(!!'Hello');      // true
console.log(!!{});           // true
console.log(!![]);           // true

isLoggedIn = null;
isLoggedIn && console.log('로그인 성공!'); // 출력되지 않음 (isLoggedIn이 falsy)

isLoggedIn = '사용자';
isLoggedIn && console.log('로그인 성공!'); // 출력 결과: '로그인 성공!'

function greet(name) {
  name = name || '손님'; // name이 falsy한 경우 기본값 '손님'으로 설정
  console.log(`안녕하세요, ${name}님!`);
}

greet('');     // 출력 결과: 안녕하세요, 손님님!
greet('철수');  // 출력 결과: 안녕하세요, 철수님!
// ===================================================

// 7. 목표 : number 타입의 값을 string 타입으로, string 타입의 값을 number 타입으로 변경하는 코드를 구현할 수 있다.

// - 함수: 특정 작업을 수행한 후 결과를 반환하는 코드 블록, `String(x)`처럼 사용합니다.
// - 메서드: 특정 객체(값)에 속해 있는 함수, `x.toString()`처럼 특정 값에 붙어서 사용합니다.

// string 타입 변환
// - number 타입의 값을 string 타입으로 변환하는 방법은 크게 세 가지가 있습니다.
// String() 함수 (명시적 변환 가능, 추천)
// toString() 메서드
// 문자열 연결(+) 연산자)

// toString() 메서드는 String() 함수와 다르게 null이나 undefined에 사용할 경우 오류가 발생합니다.
// → 이러한 차이 때문에, 일반적으로는 안전하게 변환하려면 String()을 사용하는 것을 권장

// number 타입 변환
// - `Number()` 함수 호출
// - `parseInt()`, `parseFloat()` 함수 사용
// - `+`, `*` 산술 연산자 사용
// =============================================================================================

// 8. 목표 : 작은따옴표(’’), 큰따옴표(””), 백틱(``)의 사용법과 차이점을 설명할 수 있다.

// string - 작은따옴표', 쌍따옴표"
// 문자열 연결 연산자 - '+' 사용
// `(백틱) 사용 - 템플릿 리터럴, ${}로 변수 삽입 편함

// escape 문자 정리 (\ 사용)
// \' - 작은 따옴표
// \" - 큰 따옴표
// \\ - 역슬래시
// \n - 줄바꿈
// \t - 수평 탭
// =========================================================

// 9. 목표 - 템플릿 리터럴을 사용하여 변수를 문자열에 효율적으로 삽입하고, 동적인 문자열을 작성할 수 있다.

name = "오즈";
age = 20;

console.log("안녕하세요, " + name + "님은 " + age + "살입니다."); // 출력: 안녕하세요, 오즈님은 20살입니다.
// 위와같이 너무 불편함 (+ 연결 연살자 사용시)

// 변수 삽입
name = "오즈";
console.log(`안녕하세요, ${name}님!`); // 출력: 안녕하세요, 오즈님!

// 계산식 삽입
a = 5;
b = 3;
console.log(`${a} + ${b} = ${a + b}`); // 출력: 5 + 3 = 8

// 함수 호출 결과 삽입
function getGreeting(name) {
  return `반갑습니다, ${name}님!`;
}

const user = "은별";
console.log(`${getGreeting(user)} 오늘도 좋은 하루 되세요.`); // 출력: 반갑습니다, 은별님! 오늘도 좋은 하루 되세요.

// 조건문 삽입
const score = 85;
console.log(`당신은 ${score >= 60 ? "합격" : "불합격"}입니다.`); // 출력: 당신은 합격입니다.

// 중첩된 표현식 활용
name = "오즈";
let items = 3;
let price = 1000;

console.log(`${name}님, 총 결제 금액은 ${items * price}원입니다.`); // 출력: 오즈님, 총 결제 금액은 3000원입니다.

// =================================================================================
// 연습!!

// 1. 아래 코드의 "오즈" 부분을 변수 name을 사용하여 출력하도록 수정하세요.
name = '오즈';
console.log('안녕하세요, ' + name + '님!');

// 2. 아래 코드에서 숫자를 직접 입력하는 대신 변수를 사용하여 동적인 결과가 출력되도록 수정하세요.
a = 10;
b = 7;
console.log(a, '+', b, '=', a + b);

// 3. 다음 getGreeting 함수가 반환하는 값을 활용하여 출력하세요.
function getGreeting(name) {
  return '안녕하세요, ' + name + '님!';
}
console.log(getGreeting('은별'));

// 4. 아래 코드의 score 값에 따라 60점 이상이면 "합격", 미만이면 "불합격"을 출력하도록 작성하세요.(삼항 연산자 사용)
let score1 = 55;
console.log(`당신은 ${score1 >= 60 ? '합격' : '불합격'}입니다.`);

// 5. 템플릿 리터럴을 사용해 다음 문장을 여러 줄로 출력하세요.
console.log(`안녕하세요!
오늘도 좋은 하루 보내세요.
행복한 하루 되길 바랍니다.
`);
// ===================================================================

// 10. 목표 : length 프로퍼티를 사용하여 문자열의 길이를 조회하고, 사용 예시를 들 수 있다.

// length 프로퍼티
// `length`는 문자열의 전체 길이(글자 수) 를 반환하는 프로퍼티입니다.
// 띄어쓰기, 특수문자, 줄바꿈 문자 등도 모두 1글자로 취급됩니다.
console.log('=================');
let text = "Hello, OZ!";
console.log(text.length); // 출력 결과: 10

// 문자열이 비어 있는지 확인
let input = "";
if (input.length === 0) {
  console.log("입력값이 없습니다.");
}

// 비밀번호가 일정 길이 이상인지 확인
let password = "abc123";
if (password.length < 8) {
  console.log("비밀번호는 최소 8자 이상이어야 합니다.");
}

// 마지막 문자 추출
let word = "JavaScript";
let lastChar = word[word.length - 1];
console.log(lastChar); // 출력 결과: "t"

// 실습
// 1. 아래 코드에서 text 변수에 저장된 문자열의 길이를 출력하세요.
console.log('---실습1---');
const text1 = '안녕하세요 오즈님!';
console.log(text1.length);

// 2. 아래 checkInput 함수는 input이 빈 문자열인지 확인하는 함수입니다.
// if 조건문 안을 완성하여 빈 문자열이면 "입력값이 없습니다."를 출력하도록 만드세요.
function checkInput(input) {
  if (input.length === 0) {
    console.log("입력값이 없습니다.");
  } else {
    console.log("입력값: " + input);
  }
}
console.log('---실습2---');
checkInput("");   // 출력: 입력값이 없습니다.
checkInput("OZ"); // 출력: 입력값: OZ

// 3. if 조건문 안을 완성하여 password가 8자 미만이면 "비밀번호는 최소 8자 이상이어야 합니다."를 출력하세요.
let password2 = "abc123";
if (password2.length < 8) {
    console.log('---실습3---');
    console.log("비밀번호는 최소 8자 이상이어야 합니다.");
}

// 4. 아래 word 문자열의 마지막 글자를 출력하세요.
let word3 = "JavaScript";
console.log(word3[word3.length - 1]);