let greeting = "안녕하세요!";
console.log(greeting); // "안녕하세요!"
console.log("============");

// 변수 재할당 가능
let count = 1;
count = 2;
console.log(count); // 2
console.log("============");
// ===============================================
const number = 10;
// number = 20; // Uncaught TypeError: Assignment to constant variable.
console.log(number);
// 이 에러 메시지는 "상수로 선언된 변수에 값을 다시 할당하려고 했기 때문에 오류가 났다"는 뜻입니다. 자주 등장하는 에러 메시지는 의미와 함께 기억해두면 앞으로 디버깅에 큰 도움이 됩니다.
console.log("============");

// var 키워드를 사용하지 말아야 하는 이유
// 1. 변수의 중복 선언을 허용합니다.
// 2.  선언 전에 사용할 수 있습니다.

// var / let / const 비교
// 1. var
// - 호이스팅 o
// - 초기화 시점 : 선언과 동시에 'undefined'로 초기화
// - 사용 가능 시점 : 선언 이전에도 접근 가능 (언디파인드로)
// - 함수스코프, 재선언 가능

// 2. let (변수)
// - 호이스팅 o
// - 초기화 시점 : 나중에
// - 사용 가능 시점 : 선언 이전에는 오류 (TDZ)
// - 블록 스코프, 재선언 불가

// 3. const (상수)
// - 호이스팅 o
// - 초기화 시점 : 나중에
// - 사용 가능 시점 : 선언 이전에는 오류 (TDZ)
// - 블록 스코프, 값 재할당 불가

// =========================================
// 데이터 타입 실습
// 1. number 타입 
console.log('1. number type 실습');

let binary = 0b01000001; // 2진수
let octal = 0o101;       // 8진수
let hex = 0x41;          // 16진수

// 표기법은 다르지만 값은 모두 동일
console.log(binary); // 65
console.log(octal);  // 65
console.log(hex);    // 65
console.log(binary === octal);  // true
console.log(octal === hex);     // true

console.log('--------------------');
console.log(1 === 1.0); // true
console.log(4 / 2);     // 2
console.log(3 / 2);     // 1.5

// - `Infinity`: 양의 무한대
// - `-Infinity`: 음의 무한대
// - `NaN`: 산술 연산 불가(not-a-number)
console.log('--------------------');
console.log(10 / 0);       // Infinity
console.log(10 / -0);      // -Infinity
console.log(1 * 'String'); // NaN

// =========================================
// 2. string 타입
console.log("============");
console.log('2. string type 실습');

const name = 'OZ';
const message = `안녕하세요, 저는 ${name}입니다.`; 
console.log(message); // 출력 결과: 안녕하세요, 저는 OZ입니다.

const multiLine = `이 문자열은
여러 줄로 작성할 수 있습니다.`; 
console.log(multiLine);

const age = 10;

// 템플릿 리터럴 예시
const message2 = `안녕하세요, 저는 ${name}이고, 나이는 ${age + 1}살입니다.`;
console.log(message2); // 출력 결과: 안녕하세요 저는 OZ이고, 나이는 11살입니다.


// =========================================
// 3. boolean 타입
// -  논리적 참(true)과 거짓(false)을 나타냅니다.
console.log("============");
console.log('3. boolean type 실습');

let foo = true;
console.log(foo); // true

foo = false;
console.log(foo);  // false

let isGreater = 4 > 1;
console.log(isGreater); // 출력 결과: true

if (isGreater) {
	console.log('4는 1보다 큽니다.');
} else {
	console.log('4는 1보다 크지 않습니다.');
}
// falsy 값 (false)
// - JavaScript에서는 어떤 값을 true(참)처럼, 또는 false(거짓)처럼 자동으로 판단하는 경우가 있습니다.
// 이때 false처럼 취급되는 값들을 falsy 값이라고 부릅니다.
Boolean(0);         // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
Boolean(false);     // false

// truthy 값 (true)
// falsy 값이 아닌 나머지 모든 값은 true처럼 인식됩니다.
// 이런 값을 truthy 값이라고 합니다.
Boolean(1);          // true
Boolean("hello");    // true
Boolean([]);         // true (비어 있는 배열도 true!)
Boolean({});         // true (비어 있는 객체도 true!)
Boolean(" ");        // true (띄어쓰기만 있어도 true!)

// 3가지 타입 정리
// - `number`: 모든 숫자는 실수로 처리된다. 정수와 실수의 구분이 없다.
// - `string`: 텍스트를 표현하는 타입. 작은따옴표, 큰따옴표, 백틱 모두 사용 가능하다.
// - `boolean`: 참(`true`)과 거짓(`false`)을 표현한다. 일부 값은 자동으로 false처럼 평가된다(falsy)


// ==================================================
// 학습목표 : typeof 연산자를 활용해서 값의 타입을 조회하는 방법을 기억한다.
console.log("============");
console.log('1. typeof 실습');
// typeof란?
// typeof 연산자는 typeof x에서 x의 타입을 나타내는 문자열을 반환합니다. 
let type1 = typeof(3); // 'number'
let type2 = typeof('문자열'); // '문자열'의 타입인 'string'을 반환합니다
console.log(type1, type2);

typeof ''               // "string"
typeof 1                // "number"
let nan2 = typeof NaN              // "number"
typeof true             // "boolean"
typeof undefined        // "undefined"
typeof Symbol()         // "symbol"
typeof null             // "object"
typeof []               // "object"
typeof {}               // "object"
typeof new Date()       // "object"
typeof /test/gi         // "object"
typeof function () {}   // "function"
typeof 123n             // "bigint"

console.log('NaN의 데이터타입 : '+nan2);

// typeof와 JavaScript 기본 타입의 불일치
// typeof 연산자는 대체로 JavaScript 데이터 타입과 일치하지만, 몇 가지 예외적인 경우가 있습니다.

// typeof 연산자로 null 을 연산하면 null이 아닌 object를 반환합니다. 이것은 JavaScript 초창기 버그로 기존 코드에 영향을 줄 수 있기 때문에 아직까지 수정되지 못하고 있습니다.
// 따라서 null 타입을 확인할 때는 typeof 연산자 대신 일치 연산자 (===)를 사용하는 것이 좋습니다.
let foo2 = null;
console.log(typeof foo2); // 출력 결과 : object


// NaN (Not-A-Number)
// NaN은 "Not-A-Number"의 약자로, 숫자가 아님을 나타내지만 typeof로 확인하면 number로 반환됩니다.
typeof NaN // "number"

// NaN은 number 타입 값 중 하나로, 수학 연산이 실패했을 때 발생합니다.
console.log(0 / 0);        // NaN
console.log(parseInt('a')); // NaN

// isNaN() 메서드를 이용하여 값이 숫자인지 아닌지를 확인할 수 있습니다.
// NaN은 자기 자신과도 같지 않은 특별한 값이므로, NaN === NaN 비교는 false를 반환합니다. 
// 따라서, 값이 NaN인지 확인할 때는 isNaN()을 사용하는 것이 좋습니다.
console.log(NaN === NaN); // false
console.log(isNaN(NaN));  // true

// BigInt 타입 (ES2020 추가)
// BigInt 타입은 ES2020에서 도입된 새로운 숫자 타입으로, 아주 큰 정수를 다룰 때 사용됩니다. n을 숫자 뒤에 붙이거나 BigInt() 생성자를 사용하여 만들 수 있습니다.
let big1 = typeof 123n             // "bigint"
let big2 = typeof BigInt(123) // "bigint"
console.log(big1, big2);


// 배열 (Array)
let foo3 = []; // 배열
console.log(typeof foo3); // 출력 결과: object
// 배열은 typeof 연산자로  object를 반환합니다. 
// 배열인지 확인하려면 Array.isArray() 메서드를 사용하는 것이 더 적합합니다.
console.log(Array.isArray(foo3));

// typeof 연산자를 선언되지 않은 변수에 사용하면, 일반적으로 발생하는 ReferenceError 대신 undefined를 반환합니다.
// undeclared 식별자를 선언한 적이 없다.
console.log(typeof undeclared); // 출력 결과: undefined

// ==================================================
// 학습목표 : null과 undefined의 차이점을 설명할 수 있다.
// `null`과 `undefined`는 모두 '값이 없음'을 나타내지만, 의미와 사용되는 상황은 다릅니다.
// 코드를 정확하고 의도에 맞게 작성하려면, 언제 `null`을 쓰고 언제 `undefined`가 나오는지 구분할 수 있어야 합니다.
console.log("============");

// 1. undefined
// `undefined`는 값이 할당되지 않은 변수를 나타냅니다.
// 즉, 개발자가 변수를 선언했지만 값을 할당하지 않으면 JavaScript는 자동으로 `undefined`를 할당합니다.
let x; // 변수를 선언했지만 초기화하지 않음
console.log(x); // undefined
// undefined의 타입은 undefined입니다. typeof undefined의 결과도 “undefined"입니다.
console.log(typeof undefined); // 출력 결과: "undefined"

// 2. null
// 반면, `null`은 개발자가 어떤 변수에 의도적으로 값이 없음을 나타낼 때 사용합니다.
let y = null; // y는 현재 아무 값도 가리키지 않음을 명시적으로 선언
console.log(y); // null

// null의 타입은 object입니다.
console.log(typeof null); // 출력 결과: "object"

// > `undefined`는 “아직 아무것도 정해지지 않았어요”
// > `null`은 “아무것도 없다고 제가 정했어요”
// null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용해야 합니다.

// ==============================================
// 2번 과제
/**
 * JavaScript 1일차 과제
 * 보물 상자열기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 보물 상자를 열기 위해 아래와 같은 순서대로 console.log를 이용하여 Terminal에 출력해야합니다.
 * 출력 내용이 주어진 내용과 같도록 변수 key값을 변경하고, typeof를 활용하여 보기와 똑같이 출력해주세요.
 *
 * 예시
 * 보기: string
 * key = "보물";
 * console.log(typeof key);
 * 출력: string
 */

// 여기에 코드를 작성해주세요.
let key;
// 보기: 100 number

// 보기: true boolean

// 보기: 보물은 내꺼 string

// 보기: {} object

// 보기: 20 number

// 보기: 보물을 내손에 넣었다! string