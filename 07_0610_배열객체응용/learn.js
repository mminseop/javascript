// 1. 목표 : map 함수를 사용하여 배열의 각 요소를 변환하고, 새로운 배열을 생성하는 코드를 구현할 수 있다.

// '배열을 '변형'하고 싶을 때, 가장 먼저 떠올려야 할 메서드가 바로 `map()`입니다.'

// JavaScript에서 `map()` 함수는 배열의 각 요소를 변환해 새로운 배열을 만들어낼 수 있는 강력한 도구입니다. 원본 배열은 그대로 두면서, 요소를 변형하고 싶을 때 `map()`은 최고의 선택입니다.

// 이번 학습에서는 `map()` 함수의 구조와 사용법을 익히고, 실무에서 활용할 수 있는 다양한 예시까지 함께 살펴봅니다. 

// 특히 `map()` 함수는 React에서 자주 활용되는 반복 렌더링과도 연결되므로, 꼭 짚고 넘어가세요.


// 🧩 map() 함수란?
// map() 함수는 배열의 모든 요소를 순회하며 콜백 함수를 실행한 결과를 모아 새로운 배열을 반환하는 메서드입니다.
// 이 과정에서 기존 배열은 수정되지 않고 유지됩니다.
// - 배열 내 각 요소를 변환하거나 바꾸고 싶은 경우
// - 기존 배열은 그대로 유지하고, 새로운 배열을 만들고 싶은 경우

const numbers = [1, 2, 3, 4, 5];

// map()을 사용하여 각 numbers 요소에 콜백함수를 적용한 결과값을 새로운 배열(squares)에 추가합니다.
const squares = numbers.map((number) => number ** 2);

console.log("원본 배열:", numbers); // 출력: 원본 배열: [1, 2, 3, 4, 5]
console.log("새로운 배열:", squares); // 출력: 새로운 배열: [1, 4, 9, 16, 25]

// !!! map() 함수를 사용하는 경우 원본 배열은 변경되지 않는다는 점을 꼭 기억해주세요!!!

// ㅇ 사용방법

// 기본 문법
// `map()` 함수는 `array` 배열의 요소를 순서대로 한 번씩 순회하면서 콜백 함수를 호출하고, 함수의 반환 값을 새로운 배열에 모아서 반환합니다.

// const newArray1 = array.map((element) => { // 화살표 함수 사용
//   return 변환된_값;
// });

// const newArray2 = array.map(function(element) { // 인라인 콜백 함수 사용
//     return 변환된_값;
// });

// - `array` : 원본 배열 ( *map 함수를 적용해도 변경되지 않습니다.* )
// - `element` : array 배열의 각 요소
// - `변환된_값` : array 배열의 각 요소에 대해 `function`을 실행한 결과
// - `newArray` : `변환된_값`을 모아서 반환한 새로운 배열
//     - 콜백함수가 `true`를 반환하면, 현재 요소는 필터링된 배열에 포함됩니다.

// ㅇ 사용 예시

// 1. `numbers` 배열의 모든 숫자를 2배로 변환한 새로운 배열을 생성하고 싶은 경우
const numbers1 = [1, 2, 3, 4];
const doubledNumbers = numbers1.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); 
// 출력 결과 : [2, 4, 6, 8]
// - `numbers1` : 원본 배열 ( *map 함수를 적용해도 변경되지 않습니다.* )
//     - ex. `[1, 2, 3, 4]`
// - `number` : `numbers1` 배열의 각 요소
//     - ex. `1`, `2`, `3`, `4`
// - `number * 2` : `numbers1` 배열의 각 요소에 대해 `function`을 실행한 결과
//     - ex. `2`, `4`, `6`, `8`
// - `doubledNumbers` : `*2`를 적용시킨 요소들을 모아서 반환한 배열
//     - ex. `[2, 4, 6, 8]`

// 2. fruits 배열의 모든 과일 이름 뒤에 ‘주스’ 이라는 문자열을 추가한 새로운 배열을 생성하고 싶은 경우
const fruits = ['딸기', '사과', '포도'];
const juice = fruits.map((fruit) => {
  return fruit + '주스';
});

console.log(juice); 
// 출력결과: ['딸기주스', '사과주스', '포도주스']

// 3. users배열 내 객체의 특정 속성이나 값만 추출하여 새로운 배열을 생성하고 싶은 경우 (name)
const users = [
    {id: 1, name: "김코딩"},
    {id: 2, name: "김오즈"},
    {id: 3, name: "박자바"}
];

const names = users.map((user)=> {
    return user.name;
});

console.log(names); 
// 출력결과: ['김코딩', '김오즈', '박자바']


// ## 컴포넌트를 반복 렌더링할 때

// `map()`은 JavaScript의 기본 배열 메서드입니다. 즉, '모든 JavaScript 코드에서 사용할 수 있는 표준 문법'입니다. 나중에 배울 'React 또한 JavaScript를 기반으로 만들어진 라이브러리'이기 때문에, 당연히 `map()`을 사용할 수 있습니다. 그리고 실제로 'React에서는 이 `map()` 함수를 굉장히 자주 사용합니다'.

// 특히 배열 데이터를 화면에 렌더링할 때, 각 요소를 '컴포넌트의 형태로 반복 출력'해야 하는 경우가 많은데, 이때 `map()` 함수가 매우 유용하게 쓰입니다.

// ㅇ React에서의 map 사용 예제

// import { useState } from 'react';

// function FruitList() {
//   // 과일 배열을 상태로 관리
//   const [fruits, setFruits] = useState(['사과', '바나나', '포도']);

//   return (
//     <ul>
//       {/* 배열의 각 요소에 대해 map 실행 */}
//       {fruits.map((fruit) => (
//         // 배열 fruits의 각 요소를 JSX를 사용하여 <li>로 렌더링
//         <li>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

// - `useState`는 React에서 '상태(state)'를 선언하는 함수입니다. 여기서는 `fruits`라는 배열 상태를 만들고, 초기값으로 `['사과', '바나나', '포도']`를 설정했습니다.
// - `FruitList` 함수는 하나의 '컴포넌트'입니다. 이 컴포넌트가 실행되면 `return`문 안의 JSX 코드가 브라우저에 렌더링됩니다.
// - `<ul>` 태그는 HTML의 '리스트(List)' 요소입니다. 이 안에 `<li>` 태그를 반복적으로 출력하기 위해 `map()` 함수를 사용했습니다.
// - `fruits.map((fruit) => (...))` 부분은 `fruits` 배열의 각 요소(예: '사과', '바나나', '포도')에 대해 함수를 실행합니다.
// - 함수의 반환값으로 `<li>{fruit}</li>`을 반환하므로, 각 과일 이름이 담긴 `<li>` 태그가 만들어집니다.
// - 결과적으로 이 컴포넌트를 렌더링하면 다음과 같은 HTML이 생성됩니다:

// ### 추가 설명
// - React에서는 데이터를 다룰 때 배열 형태로 구성되는 경우가 많고, 이를 기반으로 컴포넌트를 반복 출력하는 구조도 자주 사용됩니다.
// - `map()`을 사용하면 '배열의 각 요소를 컴포넌트에 연결해 화면에 쉽게 표현할 수 있습니다'.
// - 또한 React는 내부적으로 변경된 부분만 업데이트하기 때문에, `map()`을 통한 반복 렌더링은 성능 면에서도 효율적입니다.


// ### 바닐라 JavaScript 예시 (DOM 반복 생성)
// React에서는 `map()`을 사용해 컴포넌트를 반복 렌더링합니다. 그렇다면 이런 반복 렌더링은 'React에서만 가능한 것일까요?' 방법이 조금 다를 뿐, 바닐라 JavaScript에서도 '유사한 방식으로 구현할 수 있습니다'.
// 과일 이름이 담긴 배열
document.addEventListener('DOMContentLoaded', () => {
const fruits1 = ['사과', '바나나', '포도'];

// <ul> 요소를 생성
const ul = document.createElement('ul');

// 배열의 각 요소에 대해 map 실행
fruits1.map(fruit => {
  // <li> 요소를 생성
  const li = document.createElement('li');

  // <li> 요소의 텍스트를 과일 이름으로 설정
  li.textContent = fruit;

  // <li> 요소를 <ul>에 추가
  ul.appendChild(li);
});
// 최종적으로 완성된 <ul>을 body에 추가하여 화면에 렌더링
document.body.appendChild(ul);
});

// - `map`을 사용해 배열의 각 요소에 대해 `<li>` DOM 요소를 생성합니다.
// - 각 요소의 텍스트는 `fruit` 변수에서 가져온 값을 사용하여 동적으로 삽입합니다.
// - 생성된 `<li>` 요소는 `<ul>`에 추가되며, 최종적으로 이 `<ul>`을 문서의 `body`에 삽입해 화면에 렌더링합니다.


// ⚠️ `map()` 함수 사용시 주의 사항

// 1. `map()`은 항상 새로운 배열을 반환합니다.
//    - 기존 배열은 변경되지 않습니다. 반환된 배열을 변수에 저장하지 않으면 결과를 사용할 수 없습니다.
const numbers2 = [1, 2, 3];
numbers2.map(n => n * 2); // 반환은 하지만 기존 배열엔 변화 없음
console.log(numbers2); // [1, 2, 3]


// 2. 반복 함수 내부에 `return`이 없으면 `undefined`가 들어갑니다.
//    - JSX에서 사용할 때 `return`을 생략하면 원하는 결과가 나오지 않을 수 있습니다.
// fruits.map(fruit => {
//   <li>{fruit}</li>; // return이 없기 때문에 undefined
// });

// 아래처럼 고치면 의도한대로 작동합니다.
// fruits.map(fruit => {
//   return <li>{fruit}</li>;
// });


// 3. `map()`과 `forEach()`는 다릅니다.
//     - `forEach()`는 반환값 없이 단순히 반복만 수행합니다. 반면 `map()`은 각 요소를 변형한 결과를 새로운 배열로 반환합니다. 겉보기엔 유사하지만 기능과 목적이 다르므로 혼동하지 않도록 주의해야 합니다.
const numbers3 = [1, 2, 3, 4];

// map 사용: 각 요소를 2배로 변환하여 새로운 배열 반환
const doubledWithMap = numbers3.map((num) => num * 2);
console.log('map 결과:', doubledWithMap); // [2, 4, 6, 8]

// forEach 사용: 각 요소를 2배로 변환하지만 반환값이 없음
// 반환값이 없어 새 배열을 만들고 거기에 push를 해준거임.
const doubledWithForEach = [];
numbers3.forEach((num) => {
  doubledWithForEach.push(num * 2);
});
console.log('forEach 결과:', doubledWithForEach); // [2, 4, 6, 8]

// ===========================실습===============================

// 🚀 실습 예제 1: 배열의 숫자를 두 배로 만들기
const numbers10 = [1, 2, 3, 4, 5];

// numbers 배열의 각 숫자를 2배로 만든 새로운 배열을 만들어보세요.
// 선언되어 있는 doubledNumbers 변수에 새로운 배열을 할당하세요.
// let doubledNumbers = numbers.map((number) => number * 2); //

let doubledNumbers10 = numbers10.map((x)=> {
    return x * 2;
})
console.log('------------------------------------------');
// ✨ 결과 확인 : 기존 배열과 map 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers10);
console.log('map 적용 배열:', doubledNumbers10);

console.log('------------------------------------------');

// 🚀 실습 예제 2: 배열의 과일이름을 대문자로 변환하기
const fruits10 = ['apple', 'banana', 'orange'];
// fruits 배열의 과일이름를 대문자로 변환한 새로운 배열을 만들어보세요.
// 선언되어 있는 uppercasedFruits 변수에 새로운 배열을 할당하세요.
let uppercasedFruits;
// uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
uppercasedFruits = fruits10.map((x) => {
    return x.toUpperCase();
})

// ✨ 결과 확인 : 기존 배열과 map 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', fruits10);
console.log('map 적용 배열:', uppercasedFruits);

console.log('------------------------------------------');

// 🚀 실습 예제 3: 객체 배열에서 특정 속성 추출하기
const users10 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
// users 배열에서 이름만 추출하여 새로운 배열을 만들어보세요.
// 선언되어 있는 userNames 변수에 새로운 배열을 할당하세요.
// let userNames = users.map((user) => user.name);
let userNames = users10.map((x) => {
    return x.name;
})

// ✨ 결과 확인 : 기존 배열과 map 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', users10);
console.log('map 적용 배열:', userNames);

// ===================================================================================

// 2. 목표 : filter 함수를 사용하여 조건에 맞는 배열 요소만 선택하여 새로운 배열을 생성하는 코드를 구현할 수 있다.

// '배열에서 조건에 맞는 데이터만 골라내고 싶을 때, 가장 먼저 떠올려야 할 메서드가 바로 `filter()` 함수입니다.'

// JavaScript에서 `filter()` 함수는 배열의 각 요소를 검사해 조건을 만족하는 요소만 추출해 새로운 배열을 생성합니다. 원본 배열은 그대로 두면서, 원하는 값만 골라내고 싶을 때 `filter()` 함수는 최고의 선택입니다.

// 이번 학습에서는 `filter()` 함수의 구조와 사용법을 익히고, 실무에서 활용할 수 있는 다양한 예시까지 함께 살펴봅니다.

// "특히 `map()` 함수와는 목적과 반환 방식이 다르므로 차이점을 함께 정리해보세요."


// 🧩 filter() 함수란?
// filter()는 배열에서 특정 조건을 만족하는 요소만 추출하여 새로운 배열을 반환하는 메서드입니다.
// 이 과정에서 기존 배열은 수정되지 않고 유지됩니다.
//      - 배열에서 조건에 맞는 데이터 추출하고 싶은 경우
//      - 배열에서 유효하지 않은 값을 제거하고 싶은 경우
// filter() 함수를 사용하는 경우 원본 배열은 변경되지 않는다는 점을 꼭 기억해주세요! 

// ㅇ 사용방법
// `filter()` 함수는 `array` 배열의 요소를 순회하면서 콜백 함수를 사용하여 '원하는 조건에 맞는 요소들을 필터링 하는 함수'입니다. 필터링된 새로운 배열을 반환합니다. 
// - 콜백 함수가 `true`를 반환하면, 현재 요소(element)는 필터링된 배열에 포함됩니다.
// - 콜백 함수가 `false`를 반환하면, 현재 요소(element)는 필터링된 배열에 포함되지 않습니다.

// const newArray2 = array.filter(function(element) { 
//     return 필터링_조건;
// });

// const newArray1 = array.filter((element) => { // 화살표 함수 사용
//   return 필터링_조건;
// });

// - `array` : 원본 배열 ( *filter 함수를 적용해도 변경되지 않습니다.* )
// - `element` : array 배열의 각 요소
// - `필터링_조건` : array 배열의 각 요소에 대해 적용시킬 조건
    
//     📩 `return 결과`는 'true 또는 false' (boolean)여야 합니다.
    
//     - 'true'인 경우 해당 요소는 새 배열에 포함됩니다.
//     - 'false'인 경우 해당 요소는 제외됩니다.
// - `newArray` : `필터링_조건` 을 만족하는 요소들로 구성된 새로운 배열


// ## 사용 예시

// 1. `numbers` 배열에서 짝수만 필터링하고 싶은 경우
const numbers4 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers4.filter(number => {
    // 다중 조건을 결합하여 필터링
    return number % 2 === 0
});

console.log(evenNumbers); // 출력: [2, 4, 6]
// - `numbers` : 원본 배열 ( *filter 함수를 적용해도 변경되지 않습니다.* )
// - ex. `[1, 2, 3, 4, 5, 6]`
// - `number` : `numbers` 배열의 각 요소
//     - ex. `1`, `2`, `3`, `4`, `5`, `6`
// - `number % 2` : `numbers` 배열의 각 요소에 필터링 적용할 조건 (짝수)
//     - 1 (`false`), 2 (`true`), 3 (`false`), 4 (`true`), 5 (`false`), 6 (`true`)
// - `evenNumbers` : `true`를 반환하는 요소(짝수)만 모아서 반환한 배열
//     - ex. `[2, 4, 6]`


// 2. users 객체를 요소로 한 배열에서 나이가 18 이상인 사용자만 필터링하고 싶은 경우
const users2 = [
  { name: '김오즈', age: 17 },
  { name: '박코딩', age: 20 },
  { name: '권자바', age: 15 },
  { name: '이노드', age: 22 },
];

const adults = users2.filter((user) => {
	// 나이가 18세 이상인 user만 추출
	return user.age >= 18
});

console.log(adults); // 출력: [{ name: '박코딩', age: 20 }, { name: '이노드', age: 22 }]

// 3. words 문자열을 요소로 한 배열에서 단어에 'a'가 포함된 문자열만 필터링하고 싶은 경우
const words = ['apple', 'banana', 'cherry', 'date'];

// filter를 사용해 'a'가 포함된 단어만 추출
const wordsWithA = words.filter((word) => {
	return word.includes('a')
});

console.log(wordsWithA); // 출력: ['apple', 'banana', 'date']


// ## 한걸음 더 나아가기

// > 앞서 학습했던 `map` 메서드 모두 기억하시나요? 👩🏻‍🏫
// '`map`'과 '`filter`'는 배열 메서드로 자주 사용되지만, 그 목적과 동작이 다릅니다. 
// '`map`'은 '모두 변환', '`filter`'는 '선택적 추출'입니다.
// 아래에서 주요 차이점을 간단히 정리하고, 코드 예제를 통해 비교해 보겠습니다.

// 🔍 map과 filter의 주요 차이점
//  [ 특징     /    map()          / filter() ]
// - 목적 / 배열의 각 요소를 반환 / 배열의 요소중 "조건을 만족하는 요소만" 반환
// - 결과 배열 크기 / 원본배열과 동일한 개수 / 원본 배열 요소의 개수와 "작거나 같은 개수" 반환
// - 콜백 함수 반환값  / 새로운 요소 (반환된 값) / true 또는 false ( 조건 만족 여부)
// - 원본 배열 변경 여부 / 원본 배열 변경X / 원본 배열 변경X

// 💻 코드로 직접 비교해보기
// 1. 숫자로 이루어진 배열 : 2배로 변환하기(map) vs 짝수만 추출하기(filter)
// - 2배로 변환하기(map)
const numbers5 = [1, 2, 3, 4, 5];

// 각 요소를 2배로 변환
const doubled = numbers5.map((number) => number * 2);

console.log(doubled); // 출력: [2, 4, 6, 8, 10]

// - 짝수만 추출하기 (filter)
// 짝수만 추출
const evens = numbers5.filter((number) => number % 2 === 0);

console.log(evens); // 출력: [2, 4]

// 2. 문자열로 이루어진 배열 : 대문자로 변환하기(`map`) vs 글자 수가 5이상인 문자열만 추출하기 (`filter`)
// - 대문자로 변환하기(`map`)
const words1 = ['hello', 'world', 'javascript'];

// 각 문자열을 대문자로 변환
const uppercasedWords = words1.map((word) => word.toUpperCase());

console.log(uppercasedWords); // 출력: ['HELLO', 'WORLD', 'JAVASCRIPT']
// - 글자 수가 5이상인 문자열만 추출하기 (filter)
// 글자 수가 5 이상인 단어만 추출
const longWords = words1.filter((word) => word.length >= 5);

console.log(longWords); // 출력: ['hello', 'world', 'javascript']

// 3. `map`과 `filter`를 조합하여 사용해보기
// - `map`과 `filter`를 조합해 사용하면 더 복잡한 작업을 처리할 수 있습니다.
const numbers6 = [1, 2, 3, 4, 5];

// 1. 짝수만 추출 (filter)
// 2. 각 숫자를 2배로 변환 (map)
const result = numbers6
  .filter((number) => number % 2 === 0) // 짝수 추출 [2,4]
  .map((number) => number * 2);         // 2배로 변환 [4,8]

console.log(result); // 출력: [4, 8]


// ## ⚠️ `filter()` 함수 사용 시 주의 사항

// 1. `filter()` 함수는 항상 새로운 배열을 반환합니다.
// 기존 배열은 변경되지 않으며, 조건을 만족하는 요소만 모아서 새 배열로 만들어 반환합니다. 반환값을 변수에 저장하지 않으면 아무 일도 일어나지 않은 것처럼 보일 수 있습니다.
const numbers7 = [1, 2, 3];
numbers7.filter(n => n > 1); // 반환값을 저장하지 않음
console.log(numbers7); // [1, 2, 3] (변경되지 않음)

// 2. 콜백 함수는 반드시 `true` 또는 `false`를 반환해야 합니다.
// 조건을 명확하게 작성하지 않으면 `undefined`, `null`, 숫자 등 잘못된 반환값으로 인해 원하는 필터링이 되지 않을 수 있습니다.
const result2 = [1, 2, 3].filter(n => {
  n > 1; // 반환 없음 → undefined 처리됨
});
console.log(result2); // [] (모두 제외됨)

// - *** 위와 같이 중괄호 {} 안에 썼으면 return 꼭 써야 함.
// - 중괄호 없을 때는 return이 암시됨.

const result3 = [1, 2, 3].filter(n => {
  return n > 1;
});

// 3. `map()` 함수와 혼동하지 않도록 주의하세요.    
// `map()` 함수는 '모든 요소를 변환'해 새로운 배열을 만들고, `filter()` 함수는 '조건을 만족하는 요소만 추출'합니다. 반환 목적이 다르므로, 역할에 맞게 구분해서 사용해야 합니다.

// filter() 함수는 배열에서 원하는 값만 정확히 추려낼 수 있는 강력한 도구입니다. 단순한 조건부터 복잡한 조건까지 모두 적용할 수 있으며, 다른 배열 메서드와 조합해 사용할 때 더욱 유용합니다. 콜백 함수의 반환값이 true 또는 false가 되어야 한다는 점, 그리고 결과는 항상 새로운 배열로 반환된다는 점만 기억하세요!

// =====================실습=======================================
// 🚀 실습 예제 1: 숫자로 이루어진 배열에서 짝수만 필터링하기
const numbers8 = [1, 2, 3, 4, 5];

// numbers 배열에서 짝수만 필터링하여 새로운 배열을 만들어보세요.
// 선언되어 있는 evenNumbers 변수에 새로운 배열을 할당하세요.
let evenNumbers2;
evenNumbers2 = numbers8.filter((x) => {
    return x % 2 === 0;
})

console.log('------------------------------------------');
// ✨ 결과 확인 : 기존 배열과 filter 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers8);
console.log('filter 적용 배열:', evenNumbers2);

console.log('------------------------------------------');

// 🚀 실습 예제 2: 문자열 배열에서 단어에 'n'가 포함된 문자열만 필터링하고 싶은 경우
const fruits2 = ['apple', 'banana', 'orange'];
// fruits 배열의 과일이름를 대문자로 변환한 새로운 배열을 만들어보세요.
// 선언되어 있는 fruitsWithN 변수에 새로운 배열을 할당하세요.
let fruitsWithN;
fruitsWithN = fruits2.filter((x) => x.includes('n')).map((x) => {
    return x.toUpperCase();
})

// ✨ 결과 확인 : 기존 배열과 filter 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', fruits2);
console.log('filter 적용 배열:', fruitsWithN);

console.log('------------------------------------------');

// 🚀 실습 예제 3 : 객체 배열에서 나이가 18 이상인 사용자만 필터링하고 싶은 경우
const users3 = [
  { id: 1, name: '김오즈', age: 20 },
  { id: 2, name: '박자바', age: 15 },
  { id: 3, name: '변우석', age: 24 },
];
// users 배열에서 이름만 추출하여 새로운 배열을 만들어보세요.
// 선언되어 있는 adults 변수에 새로운 배열을 할당하세요.
let adults2;
adults2 = users3.filter((x) => {
    return x.age >= 18;
})
// ✨ 결과 확인 : 기존 배열과 filter 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', users3);
console.log('filter 적용 배열:', adults2);

// ====================================================================

// 3. 목표 : reduce 함수를 사용하여 배열의 요소를 누적하여 단일 값으로 축약하는 코드를 구현할 수 있다.

// '배열의 모든 값을 하나의 결과로 합치고 싶을 때, 가장 먼저 떠올려야 할 메서드가 바로 `reduce()` 함수입니다.'

// JavaScript에서 `reduce()` 함수는 배열의 각 요소를 순회하며 누적 계산을 수행해 '단 하나의 결과값'을 만들어냅니다. 합계, 평균, 최대값, 객체 변환 등 다양한 데이터 처리에 유용하게 사용됩니다.

// 이번 학습에서는 `reduce()` 함수의 기본 구조와 작동 방식, 그리고 실무에서 자주 활용되는 예시를 함께 알아봅니다.

// '앞서 배운 `map()` 함수와 `filter()` 함수로 할 수 있는 일들도 `reduce()` 함수로 모두 구현할 수 있다는 점'도 함께 짚고 넘어가세요.


// # 🧩 `reduce()` 함수란?
// `reduce()`는 JavaScript 배열 메서드로, '배열'의 각 요소에 대해 주어진 '리듀서(reducer) 함수'를 실행하고, 하나의 결과값을 반환하는 함수입니다. 이 과정에서 '기존 배열은 수정되지 않고 유지'됩니다.
// - 배열에서 데이터를 가공하고 싶은 경우
// - 배열에서 데이터를 객체로 변환하고 싶은 경우

// ㅇ Reduce에 대한 추가 정보
// - `reduce()`는 Array 객체 ProtoType에 정의되어 있는 고차 함수입니다.
// - `reduce()`는 배열의 값을 한개로 감소 시키는 특징을 가지고 있습니다.
// 즉, `reduce()`는 배열의 각 요소에 대해 callback을 실행하며 단 1개의 출력 결과를 만듭니다. 그래서 "줄이다"의 의미인 reduce라는 이름을 얻었습니다.

// ** reduce()  함수를 사용하는 경우 원본 배열은 변경되지 않는다는 점을 꼭 기억해주세요!

//  ㅇ 사용 방법
// reduce() 함수는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환하는 함수입니다.
// callback : 배열의 각 요소에 대해 실행할 리듀서 함수

//   arr.reduce(callback[, initialValue])
// // 네 가지 인수를 풀어 사용하는 경우
//   arr.reduce((accumulator, currentValue, currentIndex, array) => { 
// 	return accumulator + currentValue;
// }, initialValue);

// 👩🏻‍🏫  리듀서(reducer) 함수가 무엇인가요?

// `reduce()` 메서드 자체에 가지고 있는 콜백함수입니다.

// - `initialValue` : callback의 최초 호출에서 첫번째 인수(`accumulator`)에 제공하는 값이며, "초기값이 없으면 배열의 첫번째 요소"를 사용합니다.
// - 해당 리듀서(reducer) 함수는 네 개의 인자를 가질 수 있습니다.
//     - `accumulator` :  reduce에서 정해준 초기값(`initialValue`)이 들어가고, 계산이 진행되면서 업데이트 되는 값입니다.
//         - 예를 들어, 숫자를 더하는 경우 지금까지 더한 총 합이 들어갑니다.
//     - `currentValue` : 배열에서 현재 처리할 요소입니다.
//     - `currentIndex` : 배열에서 현재 처리할 요소의 인덱스입니다.
//         - 초기값(`initialValue`)을 제공한 경우 0, 아니면 1부터 시작합니다.
//     - `array` : 원본 배열입니다.
// ** accumulator 뜻 : (어큐물레이터) 중간 산술 논리 장치 결과가 저장되는 레지스터

// 🔎  쉽게 접근해보기
// 1. 상자(`accumulator`) 를 하나 준비합니다. (이 상자는 계산 결과를 저장하는 곳입니다.)
//     1. 초기값(`initialValue`)이 존재한다면 상자의 값은 초기값으로 시작합니다.
// 2. 배열의 요소를 하나씩 돌면서(`currentValue`), 새로운 값을 상자(`accumulator`)에 더하거나 변경합니다.
// 3. 배열(`array`)의 모든 요소를 다 순회하면, 상자에 최종 결과(`accumulator`)가 남아있습니

// ## 사용 예시
// 
// 1. `numbers` 배열에서 요소의 총 합을 구하고 싶은 경우
const numbers9 = [1, 2, 3, 4, 5];

// reduce 사용
const sum = numbers9.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 초기값 0 (initialValue)

console.log("합계:", sum); // 출력: 합계: 15

// 2. numbers 배열에서 최대값을 구하고 싶은 경우
const numbers11 = [3, 5, 1, 8, 2];

// reduce 사용
const max = numbers11.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
});
// 위에처럼 초기값이 없으면
// accumulator는 배열 첫 요소,
// currentValue는 두 번째 요소부터 시작!

console.log("최대값:", max); // 출력: 최대값: 8


// ## 한 걸음 더 나아가기
// - map(),filter() 함수로 구현할 수 있는 기능들은 모두 reduce() 함수로 구현 가능합니다.

// 1. map()을 reduce()로 구현해보기
const numbers12 = [1, 2, 3, 4, 5];

// map을 사용한 방식
const doubledWithMap2 = numbers12.map((num) => num * 2);

// reduce로 동일한 결과 구현
const doubledWithReduce = numbers12.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);

console.log("map:", doubledWithMap2);      // 출력: [2, 4, 6, 8, 10]
console.log("reduce:", doubledWithReduce); // 출력: [2, 4, 6, 8, 10]

// 1. `filter()`를 `reduce()`로 구현
// - 배열 요소 중 짝수만 추출하기 (`filter()` → `reduce()`)
const numbers13 = [1, 2, 3, 4, 5];

// filter를 사용한 방식
const evenWithFilter = numbers13.filter((num) => num % 2 === 0);

// reduce로 동일한 결과 구현
const evenWithReduce = numbers13.reduce((acc, num) => {
  if (num % 2 === 0) acc.push(num);
  return acc;
}, []);

console.log("filter:", evenWithFilter);      // 출력: [2, 4]
console.log("reduce:", evenWithReduce);      // 출력: [2, 4]

// ⚠️ `reduce()` 함수 사용 시 주의 사항

// 1. 항상 초기값을 지정하는 습관을 들이세요.
// `initialValue`를 생략하면 배열의 첫 번째 요소가 초기값이 됩니다. 이 경우 빈 배열일 때 오류가 발생할 수 있으므로, 초기값은 가능한 명시하는 것이 좋습니다.
// [].reduce((acc, cur) => acc + cur); // TypeError 발생

// 2. `accumulator` 값을 반드시 반환해야 합니다.    
// `reduce()` 함수는 콜백의 반환값을 다음 순회에서 `accumulator`로 사용합니다. `return` 문이 누락되면 누적이 작동하지 않습니다.
const result1 = [1, 2, 3].reduce((acc, cur) => {
  acc + cur; // return이 없음 → undefined 반환
});
console.log(result1); // undefined 또는 에러

// 3. 단순 누적 외에도 다양한 구조로 활용할 수 있습니다.
// 반드시 숫자 계산이 아니어도 객체 누적, 문자열 연결, 배열 재구성 등으로도 확장해 사용할 수 있습니다.


// `reduce()` 함수는 배열을 단 하나의 값으로 줄이기 위한 매우 강력한 도구입니다.

// 합계나 최대값 계산뿐 아니라, 객체나 배열로의 변환 등 다양한 형태로 활용할 수 있습니다.

// 초기값 설정과 return 문 작성만 잘 챙기면, 가장 범용적이고 유연하게 사용할 수 있는 배열 메서드입니다.

// ==========================실습===========================================
// 🚀 실습 예제 1: 숫자로 이루어진 배열에서 요소의 총 합을 구하고 싶은 경우
const numbers14 = [1, 2, 3, 4, 5];

// numbers 배열에서 요소의 총 합을 구하여 결과를 반환해주세요.
// 선언되어 있는 sum 변수에 결과를 할당하세요.
let sum1;
sum1 = numbers14.reduce((acc, cur) => {
    acc = acc + cur; //1 + 2 / 3 + 3 / 6 + 4 / 10 + 5
    return acc;
});
// ✨ 결과 확인 : 기존 배열과 reduce 함수를 적용한 결과를 함께 확인해 보세요.
console.log('---------실습-----------');
console.log('기존 배열:', numbers14);
console.log('reduce 적용 결과:', sum1);

console.log('------------------------------------------');

// 🚀 실습 예제 2: 숫자로 이루어진 배열에서 최대값을 구하고 싶은 경우
const numbers15 = [42, 70, 33, 2, 88];

// numbers2 배열의 요소 중 최대값을 찾아 결과를 반환해주세요.
// 선언되어 있는 max 변수에 결과를 할당하세요.
let max1;
max1 = numbers15.reduce((acc, cur) => {
    acc = Math.max(acc, cur);
    return acc;
});

// ✨ 결과 확인 : 기존 배열과 reduce 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers15);
console.log('reduce 적용 결과:', max1);

console.log('------------------------------------------');

// 🚀 실습 예제 3 : 문자열로 이루어진 배열에서 단어 빈도수를 계산하고 싶은 경우
const words2 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// words 배열에서 word를 key, 단어 빈도수를 value로 가지는 객체를 반환해주세요.
// 선언되어 있는 wordCount 생성한 객체를 할당하세요.
// 초기값은 {} 빈 객체로 지정해주세요.
let wordCount;
wordCount = words2.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});
// ✨ 결과 확인 : 기존 배열과 reduce 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', words2);
console.log('reduce 적용 결과:', wordCount);
// =============================================================================
// 4. 목표 : 다양한 고차 함수(forEach, some, every, find, sort 등)를 나열하고, 각 함수의 사용 예시를 들 수 있다. (1)

// '배열의 요소들을 효율적으로 처리하고 싶다면 반드시 알아야 할 개념이 바로 고차 함수입니다.'

// JavaScript의 고차 함수들은 각각의 목적에 맞게 배열을 순회하고, 조건을 검사하거나, 새로운 배열을 만들거나, 하나의 결과로 요약할 수 있도록 도와줍니다. 특히 실무에서 '데이터 가공', '조건 검사', '렌더링 반복', '정렬', '검증 로직' 등 거의 모든 작업에서 사용되기 때문에 꼭 익혀두어야 합니다.

// '이번 콘텐츠에서는 `map()`, `filter()`, `reduce()` 함수 외에도 자주 사용되는 `forEach()`, `some()`, `every()`, `find()`, `sort()` 함수의 개념과 사용법을 실습 예제와 함께 정리합니다.'


// 🧩 여러 가지 고차함수들

// 배열을 다루는 데 있어 `map()`, `filter()`, `reduce()` 함수는 가장 기본적이고 자주 사용되는 고차 함수입니다. 하지만 실제 개발 현장에서는 이 세 가지 함수만으로는 부족할 때가 많습니다.

// JavaScript는 이 외에도 '특정 조건을 만족하는 요소가 있는지 확인하는 `some()`', '모든 요소가 조건을 만족하는지 검사하는 `every()`', '조건에 맞는 첫 번째 요소를 찾는 `find()`', '배열을 정렬하는 `sort()`', '배열을 단순히 순회하는 `forEach()`' 등 다양한 고차 함수를 제공합니다.

// 이러한 고차 함수들을 정확히 이해하고 적재적소에 활용할 수 있다면, '복잡한 로직도 훨씬 간결하고 직관적으로 구현'할 수 있습니다. 이번 콘텐츠에서는 자주 사용되는 고차 함수들을 한눈에 정리하고, 각각의 특징과 사용법을 실습 예제와 함께 익혀봅니다.

// ## 1️⃣ forEach 함수란?

// `forEach()` 메서드는 배열의 각 요소를 한 번씩 순회하면서 주어진 함수를 실행하는 메서드입니다. 
// 주로 배열의 요소들을 하나씩 처리해야 할 때 사용됩니다. 
// 즉, 기존 배열을 변경하지 않으며, 반환값이 없습니다.
// - 배열에서 각 요소를 출력하고 싶은 경우
// - 배열의 요소를 이용해 외부 변수에 작업을 수행하고 싶은 경우

// ㅇ 사용 방법
// `forEach()` 함수를 사용하는 경우 원본 배열은 변경되지 않는다는 점과 새로운 배열을 생성하지 않는다는 점을 꼭 기억해주세요! 
// - 반환 값은 항상     `undefined`입니다.

// '`forEach()`' 메서드는 배열의 각 요소를 순회하며 주어진 함수를 호출합니다. 주어진 함수는 '배열의 크기만큼 반복 실행'되며, '배열 요소의 개수에 따라 콜백 함수가 호출되는 횟수가 결정'됩니다.
// - 이 함수는 반환 값이 없으므로 '각 요소를 처리'하거나 '어떤 작업을 수행하는 용도'로 주로 활용됩니다.
// array.forEach((element) => { // 화살표 함수 사용
//   // 실행할 코드
// });
// array.forEach(function(element) { 
//   // 실행할 코드
// });

// - `array` : 원본 배열 ( *filter 함수를 적용해도 변경되지 않습니다.* )
// - `element` : array 배열의 각 요소
// - `실행할 코드` : array 배열의 각 요소에 대해 적용시킬 함수
//     - `return`을 사용해도 항상 `undefined`를 반환합니다.


// ✍🏻 코드예제

// 1. `numbers` 배열의 요소를 모두 출력하고 싶은 경우
const numbers16 = [1, 2, 3, 4];

numbers16.forEach((number)=> {
    console.log(number);
}); // 출력: 1 2 3 4 

// 2. prices 배열의 모든 값을 합산하고 싶은 경우
const prices = [1000, 2000, 3000];
let total = 0;

prices.forEach((price) => {
  total += price;
});

console.log(`총합: ${total}원`); // 출력 결과: 총합: 6000원

// 3. people 배열 내 객체의 특정 속성을 변경하기
const people = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35}
];

people.forEach((person) => {
    person.age += 10; 
});

console.log(people);
/* 출력:
    [
        {name: 'Alice', age: 40},
        {name: 'Bob', age: 35},
        {name: 'Charlie', age: 45}
    ]
*/


// 2️⃣ some 함수란?
// `some()` 메서드는 배열의 요소 중 하나라도 조건을 만족하면 `true`를 반환하고, 모두 조건을 만족하지 않으면 `false`를 반환하는 메서드입니다.
// 즉, 배열 내에서 특정 조건을 만족하는 요소가 존재하는지 확인할 때 사용됩니다.
// - 배열의 일부 요소가 조건을 만족하는지 확인하고 싶은 경우
// - 조건이 만족되면 작업을 중단하고 효율적으로 결과를 반환하고 싶은 경우

// !!! some() 함수를 사용하는 경우 반환 값이 불리언(boolean)이라는 점과, 조건이 충족되면 더 이상 순회하지 않는다는 점을 기억해주세요!

// ㅇ 기본 문법
// `some()` 메서드는 배열의 각 요소를 순회하며 조건을 확인합니다. 주어진 함수는 배열의 요소마다 호출되며, 조건이 만족되면 즉시 실행을 멈추고 `true`를 반환합니다.

// // 화살표 함수 사용
// array.some((element) => { 
//   // 실행할 조건 (true/false 반환)
// });

// array.some(function (element) {
//   // 실행할 조건 (true/false 반환)
// });
// - `array` : 원본 배열 ( *some 함수를 적용해도 변경되지 않습니다.* )
// - `element` : array 배열의 각 요소
// - `실행할 조건`: 각 요소가 조건을 만족하는지 확인하는 논리식
//     - 조건이 만족되면 즉시 `true` 반환, 그렇지 않으면 배열 끝까지 순회 후 `false` 반환


// ✍🏻 코드예제

// 1. `numbers` 배열의 요소 중 짝수 요소가 있는지 확인하고 싶은 경우
const numbers17 = [1, 2, 3, 4, 5];

const hasEven = numbers17.some((num) => num % 2 === 0);
console.log(hasEven); // true (2는 짝수이므로 true 반환)

const numbers18 = [1, 3, 5, 7];

const hasEven2 = numbers18.some((num) => num % 2 === 0);
console.log(hasEven2); // false (모든 요소가 홀수이므로 false 반환)

// 2. users 배열 내 유저 중 admin 권한이 있는지 확인하고 싶은 경우
const users4 = [
  { id: 1, name: "김코딩", isAdmin: false },
  { id: 2, name: "박자바", isAdmin: true },
  { id: 3, name: "최오즈", isAdmin: false },
];

const hasAdmin = users4.some((user) => user.isAdmin);
console.log(hasAdmin); // true (박자바가 관리자이므로 true 반환)


// 3️⃣ every 함수란?

// '`every()`' 메서드는 배열의 '모든 요소가 조건을 만족'하면 `true`를 반환하고, '하나라도 조건을 만족하지 않으면' `false`를 반환하는 메서드입니다.
// 즉, 배열의 요소들이 '모두 특정 조건에 부합하는지 확인'할 때 사용됩니다.
// - 배열의 모든 요소가 동일한 조건을 만족하는지 확인하고 싶은 경우
// - 데이터 검증이 필요한 경우 (ex. 값이 모두 양수인지? 유효한 값인지 등)

// !!! `every()` 함수는 배열의 모든 요소가 조건을 만족해야 `true`를 반환합니다.
// - 반환 값이 불리언(boolean)이며, 하나의 요소라도 조건을 만족하지 않으면 즉시 `false`를 반환한다는 점을 기억하세요!

// ㅇ 기본 문법
// every() 메서드는 배열의 각 요소를 순회하며 조건을 확인합니다.
// 주어진 함수는 배열의 요소마다 호출되며, 조건이 충족되지 않으면 즉시 실행을 멈추고 false를 반환합니다.
// array.every((element) => {
//   // 실행할 조건 (true/false 반환)
// });

// array.every(function (element) {
//   // 실행할 조건 (true/false 반환)
// });
// - `array` : 원본 배열 (every 함수를 적용해도 변경되지 않습니다.)
// - `element` : array 배열의 각 요소
// - `실행할 코드` : array 배열의 각 요소에 대해 적용시킬 함수
//     - `return`을 사용해도 항상 `undefined`를 반환합니다.


// ✍🏻 코드예제
// 1. `users` 배열 내 유저가 모두 성인유저인지 확인하고 싶은 경우
const users5 = [
  { id: 1, name: "김코딩", age: 18 },
  { id: 2, name: "박자바", age: 22 },
  { id: 3, name: "최오즈", age: 34 },
];

const isAdult = users5.every((user) => user.age > 19);
console.log(isAdult); // false (김코딩이 성인이 아니므로 false 반환)

// 2. score 배열 내 점수가 모두 평균이상인지 확인하고 싶은 경우
const scores = [85, 90, 78, 88];
// 평균 점수 : 60
const allPassing = scores.every((score) => score >= 60);
console.log('scores', allPassing); // true (모든 점수가 60점 이상이므로 true 반환)

// 4️⃣ find 함수란?

// '`find()`' 메서드는 배열에서 '조건을 만족하는 첫 번째 요소를 반환'하는 메서드입니다. 즉, 배열을 순회하면서 '조건을 만족하는 첫 번째 요소를 찾고 즉시 반환'합니다.
// 조건을 만족하는 요소가 없으면 `undefined`를 반환합니다.
// - 배열에서 특정 조건을 만족하는 하나의 요소를 찾고 싶은 경우
// - 요소가 존재하는지 여부를 확인하면서, 조건을 만족하는 첫 번째 항목을 가져오고 싶은 경우

// !!! '`find()`' 함수는 배열에서 '첫 번째로 조건을 만족하는 요소를 반환'합니다.
// 반환값이 요소 자체이며, '조건을 만족하는 요소가 없으면' `undefined`를 반환한다는 점을 기억하세요!
// - '조건을 만족하는 모든 요소'를 찾고 싶은 경우, `filter()`를 사용하세요.

// ㅇ 기본 문법
// `find()` 메서드는 배열의 각 요소를 순회하며 조건을 확인합니다. 조건을 만족하는 첫 번째 요소를 찾으면 해당 요소를 반환하고, 찾지 못하면 `undefined`를 반환합니다.
// array.find((element) => {
//   // 실행할 조건 
// });

// array.find(function (element) {
//   // 실행할 조건 
// });
// - `array` : 원본 배열 ( *find 함수를 적용해도 변경되지 않습니다.* )
// - `element` : array 배열의 각 요소
// - `실행할 조건` : 각 요소가 조건을 만족하는지 확인하는 논리식
//     - 첫 번째로 조건을 만족하는 요소를 찾으면 해당 '요소 반환'
//     - 조건을 만족하는 요소가 없으면 `undefined` 반환

// ✍🏻 코드예제
// 1. '조건을 만족하는 첫 번째 요소를 찾고싶은 경우'
const numbers19 = [5, 12, 8, 130, 44];

const firstLargeNumber = numbers19.find((num) => num > 10);
console.log(firstLargeNumber); // 12 (10보다 큰 첫번째 요소)

// 2. 특정 조건을 만족하는 사용자 정보를 찾고 싶은 경우
const users6 = [
  { id: 1, name: "김코딩" },
  { id: 2, name: "박자바" },
  { id: 3, name: "최오즈" },
];

const foundUser = users6.find((user) => user.name === "최오즈");
console.log(foundUser); // { id: 3, name: "최오즈" }


// 5️⃣ sort 함수란?

// '`sort()`' 메서드는 배열의 요소를 '지정된 기준에 따라 정렬'하는 메서드입니다. 기본적으로 '문자열로 정렬'되며, 숫자나 특정 조건을 기준으로 정렬하려면 '비교 함수를 제공해야 합니다.'
// 정렬 후 '원본 배열이 변경'된다는 점이 중요합니다.
// - 배열의 요소들을 오름차순 또는 내림차순으로 정렬하고 싶을 때
// - 숫자, 문자, 객체 배열을 정렬할 때

// !!! '`sort()`' 함수는 기본적으로 '문자열 기준'으로 정렬되므로, 숫자 정렬을 원할 경우 비교 함수를 제공해야 합니다. 또한, '원본 배열을 직접 변경'하므로 주의가 필요합니다. 
// '배열을 유지하려면' `slice()` '또는 `전개 연산자('...')`를 사용하여 복사한 후 정렬하세요.'

// ㅇ 기본 문법
// '`sort()`' 메서드는 배열의 요소를 정렬하며, '비교 함수를 제공하지 않으면 문자열 기준으로 정렬'됩니다.
// - 이 함수는 반환 값이 없으므로 '각 요소를 처리'하거나 '어떤 작업을 수행하는 용도'로 주로 활용됩니다.
// array.sort(); // 기본적으로 문자열 정렬

// array.sort((a, b) => {
//   // 비교 함수 (a, b 비교)
// });
// - `array` : 원본 배열 ( *sort 함수를 적용하면 변경됩니다.* )
// - `a, b`: 배열의 요소
// - `비교함수`
//     - `a - b` → 오름차순 정렬 (작은 값이 앞으로)
//         - `numbers.sort((a, b) => a - b);`
//     - `b - a` → 내림차순 정렬 (큰 값이 앞으로)
//         - `numbers.sort((a, b) => b - a);`

// ✍🏻 코드예제
// 1. `fruits` 배열의 문자열을 알파벳 순으로 정리하고 싶은 경우
const fruits3 = ["banana", "apple", "cherry"];

fruits3.sort();
console.log(fruits3); // ["apple", "banana", "cherry"] (알파벳 순 정렬) - 원본배열 변경

// 2. numbers 배열 내 숫자 요소 정렬 (비교 함수 사용)
const numbers20 = [40, 1, 5, 200];

numbers20.sort((a, b) => a - b); // 오름차순 정렬
console.log(numbers20); // [1, 5, 40, 200]

numbers20.sort((a, b) => b - a); // 내림차순 정렬
console.log(numbers20); // [200, 40, 5, 1]

// 🔍 고차함수 총정리

// 메서드     | 역할                                           | 반환값           | 주로 사용하는 경우
// ------------------------------------------------------------------------------------------------------
// map        | 각 요소를 변환하여 새로운 배열 반환             | 새로운 배열      | 배열 요소를 변환하는 경우
// filter     | 조건을 만족하는 모든 요소를 포함한 새 배열 반환 | 새로운 배열      | 조건에 맞는 요소만 필터링할 때
// reduce     | 배열을 하나의 값으로 축약 (누적 계산)           | 합산값           | 합계, 평균 등 누적 계산할 때
// forEach    | 각 요소를 순회하며 작업 수행                    | 없음 (undefined) | 단순 반복 작업이 필요할 때
// some       | 하나의 요소라도 조건 만족하면 true 반환         | true / false     | 조건 만족 요소가 있는지 확인할 때
// every      | 모든 요소가 조건 만족하면 true 반환             | true / false     | 전부 조건을 만족하는지 확인할 때
// find       | 조건을 만족하는 첫 번째 요소 반환               | 요소 / undefined | 조건에 맞는 요소 1개 찾을 때
// sort       | 배열의 요소를 정렬                              | 정렬된 배열      | 정렬이 필요할 때

// ㅇ 헷갈리기 쉬운 부가 설명
// map, filter, reduce는 새로운 배열이나 값을 만들어냄 (불변성 유지)
// forEach, sort는 원본 배열을 변경할 수 있음
// some vs every: 하나라도 맞냐 vs 전부 다 맞냐
// find는 하나 찾는 거, filter는 여러 개 뽑는 것

// 💻 코드로 직접 학습해보기

// 1. `map`과 `filter`를 조합하여 사용해보기
// - 가격 데이터에서 10% 할인된 가격이 1000원 이하인 값들만 추출하고 싶은 경우
const prices1 = [1000, 2000, 3000];
const discounted = prices1
.map((price) => price * 0.9) // [900, 1800, 2700]
.filter((price) => price <= 1000);
console.log(discounted); // [900]

// 2. `some`과 `every`를 사용하여 데이터 검증
// - `scores` 배열 내 요소 중 80점보다 낮은 점수가 있는지 확인
// - `scores` 배열 내 요소가 모두 60점 이상인지 확인
const scores2 = [85, 90, 78];
console.log(scores2.some((score) => score < 80)); // true (78이 80보다 작음 : true)
console.log(scores2.every((score) => score >= 60)); // true (모든 요소가 60이상 : true)


// 3. `find`과 `sort` 사용해보기
// - 특정 조건에 맞는 데이터 찾기(`find`)와 정렬(`sort`)
const users7 = [{ id: 1, name: "김코딩" }, { id: 2, name: "박자바" }];
const foundUser2 = users7.find((user) => user.name === "김코딩");
console.log(foundUser2); // { id: 1, name: "김코딩" }

const sortedUsers = users7.sort((a, b) => a.id - b.id);
console.log(sortedUsers); // [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]

// ⚠️ 고차 함수 사용 시 주의 사항

// 1. 각 고차 함수의 반환값이 다릅니다.
// - `map()`, `filter()`는 '새로운 배열'을 반환합니다.
// - `reduce()`는 '하나의 값'을 반환합니다.
// - `forEach()`는 '반환값이 없습니다'.
// - `some()`, `every()`는 '불리언값'을 반환합니다.
// - `find()`는 '요소 또는 undefined'를 반환합니다.
// - `sort()`는 '원본 배열 자체를 변경'하며 정렬된 배열을 반환합니다.

// 2. 반복 목적이 다르면 적절한 고차 함수를 선택하세요.
// - 단순 순회는 `forEach()`
// - 조건 검사에는 `some()` / `every()`
// - 하나의 결과 계산은 `reduce()`
// - 요소 변환은 `map()`
// - 조건 추출은 `filter()`
// - 특정 요소 찾기는 `find()`
// - 정렬은 `sort()`

// 3. `sort()` 함수는 원본 배열을 변경합니다.
// 배열을 유지하고 싶다면 `slice()`로 복사하거나 전개 연산자(`[...arr]`)를 활용하세요.


// ! '고차 함수는 배열을 선언형 방식으로 처리할 수 있도록 도와주는 강력한 도구입니다.! '
// 각 함수는 반환값과 목적이 다르기 때문에, 상황에 맞게 선택하는 것이 중요합니다.
// 기초 개념을 정확히 이해하고 예제처럼 실습을 반복해보면 고차 함수는 개발자의 손에 익숙한 무기가 됩니다.

// ================================실습=========================================
// 🚀 실습 예제 1: forEach 메서드를 사용하여 과일의 이름을 모두 출력하세요.
const fruits4 = ['apple', 'banana', 'orange'];

// ✅ 이 곳에 코드를 작성해주세요.
fruits4.forEach((x) => {
    console.log(x);
})
// forEach는 반환값이 없기 때문에 변수에 할당하지 않습니다.
// ✨ 결과 확인 : 기존 배열과 forEach 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', fruits4);
console.log('------------------------------------------');

// 🚀 실습 예제 2: some 메서드를 사용하여 미성년자인 나이가 있는지에 대한 결과를 확인하세요.
const ages = [15, 28, 22, 33];

// 선언되어 있는 isMinor 변수에 결과를 할당하세요.
let isMinor;
isMinor = ages.some((x) => {
    return x <= 19;
})
// ✨ 결과 확인 : 기존 배열과 some 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', ages);
console.log('some 적용 결과(미성년자인 유저가 있나요?):', isMinor);

console.log('------------------------------------------');

// 🚀 실습 예제 3 : every 메서드를 사용하여 user가 모두 성인인지 확인하세요.
const users8 = [
  { id: 1, name: '김코딩', age: 23 },
  { id: 2, name: '박자바', age: 28 },
  { id: 3, name: '최오즈', age: 30 },
];

// 선언되어 있는 allAdult 변수에 결과를 할당하세요.
let allAdult;
allAdult = users8.every((x) => {
    return x.age >= 19;
})
// ✨ 결과 확인 : 기존 배열과 every 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', users);
console.log('every 적용 결과(모든 유저가 성인 유저인가요?):', allAdult);

console.log('------------------------------------------');

// 🚀 실습 예제 4 : find 메서드를 사용하여 가격이 800원 이상인 상품의 데이터를 반환하세요.
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 700 },
];

// 선언되어 있는 expensiveProduct 변수에 결과를 할당하세요.
let expensiveProduct;
expensiveProduct = products.find((x) => {
    return x.price > 800;
})
// // ✨ 결과 확인 : 기존 배열과 find 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', products);
console.log('find 적용 결과:', expensiveProduct);

console.log('------------------------------------------');

// 🚀 실습 예제 5 : sort 메서드를 사용하여 배열 내 숫자 요소를 오름차순으로 정렬하세요.
const numbers21 = [5, 2, 9, 1, 3];

// ✅ 이 곳에 코드를 작성해주세요.
numbers21.sort((a,b) => a - b);
// ✨ 결과 확인 : 기존 배열과 sort 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers21, '(원본 배열이 변경됨)');
console.log('sort 적용 결과:', numbers21);
// =================================================================================

// 5. 목표 : map과 forEach의 차이를 설명할 수 있으며, 각각의 사용 목적과 적합한 상황을 이해할 수 있다.

// '`map()`과 `forEach()`는 모두 배열을 순회하는 고차 함수지만, 목적과 반환값이 전혀 다릅니다.'

// 어떤 함수를 써야 할지 고민된다면, 내가 '새로운 배열을 만들고 싶은지,' 아니면 '단순히 요소를 반복하며 어떤 작업을 하고 싶은지'를 먼저 떠올려야 합니다. 이번 콘텐츠에서는 두 함수의 개념과 차이점, 그리고 어떤 상황에서 어떤 함수를 써야 하는지를 명확하게 구분해봅니다.

// 🧩 map()과 forEach()의 차이점이 무엇인가요?

// `map()` 함수와 `forEach()` 함수는 모두 '배열의 요소를 하나씩 순회하며 콜백 함수를 실행'한다는 공통점이 있습니다. 하지만 실제로는 사용 목적과 반환값의 차이가 크기 때문에 '혼동하지 않고 구분해서 사용하는 것이 중요'합니다.
// - `map()` 함수는 '배열의 각 요소를 변환하여 새로운 배열을 반환'합니다.
// - `forEach()` 함수는 '단순 반복 작업에 사용되며, 반환값이 없습니다'. 새 배열을 생성하지도 않습니다.


// 🔎 한눈에 차이점 비교해보기

// 구분               | map()                                      | forEach()
// -----------------------------------------------------------------------------------------------
// 반환값             | 새로운 배열 반환 (원본 배열 변경 없음)         | undefined (반환값 없음)
// 사용 목적          | 배열 요소를 변환하여 새로운 배열 만들 때 사용  | 단순 반복 작업 (출력, API 요청 등) 수행 시 사용
// 원본 배열 변경 여부| 원본 배열을 변경하지 않음                    | 원본을 직접 변경하진 않지만, 부수 효과 발생 가능
// 체이닝 가능 여부   | 가능 (새 배열 반환하므로 체이닝 가능)         | 불가능 (undefined 반환되므로 체이닝 불가)

// 💻 코드 예제로 학습해보기

// 1. `map()`은 새로운 배열을 반환
const numbers22 = [1, 2, 3, 4];

// map()을 사용하여 각 요소를 2배로 변환한 새로운 배열 생성
const doubled2 = numbers22.map((num) => num * 2);

console.log(doubled2); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (원본 배열 변경되지 않음)

// 2. forEach()는 반환값이 undefined
const numbers23 = [1, 2, 3, 4];

const doubled3 = numbers.forEach((num) => {
  return num * 2; 
});

console.log(doubled3); // undefined
console.log(numbers23); // [1, 2, 3, 4] (원본 배열 변경되지 않음)
// ** forEach()는 단순히 배열을 순회하면서 실행할 코드 블록을 수행하지만, 새로운 배열을 생성하지 않습니다.
const numbers24 = [1, 2, 3, 4];

numbers.forEach((num) => {
  console.log(num * 2); // 각각 2, 4, 6, 8 출력
});

console.log(numbers24); // [1, 2, 3, 4] (원본 배열 변경되지 않음)


// 🧐 언제 사용해야 하나요?

// 1. '`map()` 을 사용하는 경우'
//     - 배열의 각 요소를 변환하여 '새로운 배열이 필요한 경우'
//     - 기존 배열을 변경하지 않고 '새로운 데이터를 가공하는 경우'
//     - 체이닝(`map().filter().reduce()`)을 사용해야 할 경우
    
//     '예제. 가격에 세금을 적용해야 하는 경우'
const prices2 = [100, 200, 300];

// 10% 세금 추가한 새로운 배열 생성
const pricesWithTax = prices2.map((price) => price * 1.1);

console.log(pricesWithTax); // [110, 220, 330]
console.log(prices2); // [100, 200, 300] (원본 유지)

// 2. '`forEach()` 를 사용하는 경우'
//     - 반환값이 필요없고, '단순 반복 작업'을 수행하는 경우
//     - API 호출, DOM 조작, 콘솔 출력 등 부수효과(side effect)가 필요한 경우
//     - 배열 요소를 기반으로 '외부 변수에 영향을 주는 작업이 필요한 경우'
    
//     '예제. 가격 총 합 구하기 (외부 변수 변경, side effect)'
const prices3 = [100, 200, 300];
let total2 = 0; // 외부 변수

prices3.forEach((price) => {
  total2 += price;
});

console.log(total2); // 600

// ⚠️ `map()`과 `forEach()` 사용 시 주의할 점
// 1. `map()`은 항상 '새로운 배열'을 반환합니다. 이 배열을 저장하지 않으면 생성된 결과는 사라집니다.
// 2. `forEach()`는 반환값이 없으므로 '값을 저장하거나 체이닝이 불가능'합니다.
// 3. `forEach()`는 주로 '콘솔 출력, 외부 함수 호출, 상태 변경' 같은 부수효과가 필요한 작업에 적합합니다.


// 📌`map()`과 `forEach()`는 이름은 비슷해 보여도, 사용 목적이 완전히 다릅니다.
// '데이터를 변환해 새 배열이 필요하다면 `map()`', '단순히 반복 작업을 수행하고 싶다면 `forEach()`'를 사용하세요.
// 두 함수의 차이를 명확히 이해하면, 불필요한 실수를 줄이고 더 효율적인 코드를 작성할 수 있습니다.

// =================================실습====================================
// ✨ 각 코드를 보고 map()과 forEach() 중 적합한 메소드를 사용하여 구현해주세요.
// 🚀 실습 예제 1: 배열의 각 숫자를 2배로 변환하여 새로운 배열을 반환해주세요.
const numbers25 = [2, 4, 6];

let doubled4;
doubled4 = numbers25.map((x) => {
    return x * 2;
})
// forEach는 반환값이 없기 때문에 변수에 할당하지 않습니다.
// ✨ 결과 확인 : 기존 배열과 메서드를 적용한 결과를 함께 확인해 보세요.
console.log('================================================');
console.log('기존 배열:', numbers25);
console.log('메서드 적용 결과:', doubled4);
console.log('------------------------------------------');

// 🚀 실습 예제 2: 배열의 각 요소를 콘솔에 출력해주세요.
const names2 = ['변우석', '최우식', '김오즈'];

// ✅ 이 곳에 코드를 작성해주세요.
names2.forEach((x) => {
    console.log(x);
});
// ✨ 결과 확인 : 기존 배열과 메서드를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', names2);
console.log('------------------------------------------');

// 🚀 실습 예제 3 : 학생 점수의 평균을 계산하여 결과를 반환해주세요.
const scores3 = [80, 90, 100];

// 선언되어 있는 total 변수에 점수의 총 합을 할당하세요.
let total3 = 0;

// 선언되어 있는 average 변수에 점수의 평균값을 할당하세요.
let average;
scores3.forEach((x) => {
    total3 += x;
})
average = total3 / scores3.length;
// ✨ 결과 확인 : 기존 배열과 메서드를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', scores3);
console.log('메서드 적용 결과:', average);
console.log('------------------------------------------');

// ========================================================================

// 6. 목표 : 배열 복사를 위해 spread syntax와 slice를 사용하여 새로운 배열을 생성하는 코드를 구현할 수 있다.

// '배열을 복사할 때는 원본 데이터를 직접 수정하지 않도록 주의해야 합니다.'

// JavaScript에서는 `=` 연산자를 사용하면 배열의 '참조값만 복사'되기 때문에, 원본 배열이 의도치 않게 변경될 수 있습니다. 이를 방지하려면 '새로운 배열을 생성하는 방식의 복사'가 필요합니다.

// 특히 'React에서는 상태(state)가 객체나 배열처럼 참조 자료형일 경우, 불변성(immutability)을 유지하며 관리하는 것이 필수적'입니다. 상태를 직접 변경하지 않고 새로운 배열을 만들어 처리해야 '렌더링이 정확히 동작하고 예측 가능한 상태 관리가 가능'해집니다.

// 이번 학습에서는 'spread syntax와 `slice()` 메서드를 활용해 배열을 안전하게 복사하는 방법'을 살펴봅니다. '불변성을 지키는 배열 조작의 핵심 기법'이므로 반드시 익혀두세요.

// # '💕 배열 복사 (spread syntax vs slice)'
// JavaScript에서 배열을 복사할 때는 'spread syntax'나 '`slice()`' 메서드를 자주 사용합니다. 배열을 직접 할당(`=`)하면 '실제 값이 복사되는 것이 아니라, 같은 참조(메모리 주소)를 공유'하게 됩니다. 즉, 두 변수는 '동일한 배열을 가리키게 되며', 한 쪽에서 변경이 발생하면 '다른 쪽에도 그대로 영향을 미칩니다'. 이러한 부작용을 방지하려면, '반드시 별도의 복사 방식'을 사용해 새로운 배열을 만들어야 합니다.

const original = [1, 2, 3];  // 원본 배열
const copy = original;        // 직접 할당 (=) -> 같은 참조값(메모리 주소)를 공유

copy.push(4); // copy에 4를 추가

console.log(original); // [1, 2, 3, 4] (동일하게 4가 추가되었음)
console.log(copy);     // [1, 2, 3, 4] (동일하게 4가 추가되었음)

// - original 변수에는 실제 데이터 `[1,2,3]` 이 저장되는 것이 아닌 메모리 주소(참조값)이 저장됩니다.
// - `const copy = original`  해당 코드를 실행하면 배열의 데이터가 아닌 메모리 주소가 복사됩니다.
// - 따라서 `copy`를 수정하는 경우, 같은 메모리를 공유하는 `original`도 영향을 받게 됩니다.

//  즉, 배열을 직접 할당하면 새로운 배열을 생성하는 것이 아닌, 같은 배열을 가리키는 또 다른 변수를 만든 것 과 같습니다.

// spread syntax(전개 구문)

// 'spread syntax'는 '배열, 객체, 문자열 등 반복 가능한(iterable) 값들을 하나하나 풀어서(전개해서) 새로운 값으로 구성할 때 사용하는 문법'입니다. 특히 배열 복사, 배열 합치기, 함수 인자 전달 등에서 자주 사용되며, 코드의 간결함과 가독성을 크게 높여줍니다.

// 1️⃣ 배열 합치기

// 두 개 이상의 배열을 '하나로 합치고 싶을 때', spread syntax는 가장 간결하고 직관적인 방법입니다.
const arr1 = [1, 2];
const arr2 = [3, 4];

// spread syntax를 이용한 배열 병합
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]
// - 기존 배열을 변경하지 않고 '새로운 배열을 생성'합니다.

// - 중간에 다른 값을 삽입하는 것도 가능합니다.
const mergedWithValue = [...arr1, 99, ...arr2];
console.log(mergedWithValue); // [1, 2, 99, 3, 4]

// 2️⃣ 배열에 요소 추가하기
// 배열 앞이나 중간, 끝에 '요소를 간편하게 추가'할 때도 spread syntax를 사용합니다.
const numbers26 = [2, 3, 4];

// 배열 앞에 요소 추가
const frontAdded = [1, ...numbers26];
console.log(frontAdded); // [1, 2, 3, 4]

// 배열 중간에 요소 삽입
const midAdded = [1, ...numbers26, 5];
console.log(midAdded); // [1, 2, 3, 4, 5]
// - 원본 배열을 변경하지 않으면서 새로운 배열을 생성할 수 있어 불변성을 유지할 수 있습니다.

// 3️⃣ 함수 인자 전달 (Spread Arguments)
// 함수의 인자로 배열을 전달할 때, '각 요소를 개별 인자처럼 분리해서 전달'하고 싶을 때 spread syntax를 사용할 수 있습니다.
const values = [10, 20, 30];

function sum2(a, b, c) {
  return a + b + c;
}

console.log(sum2(...values)); // 60
// - 배열을 하나하나 꺼내서 `sum(values[0], values[1], values[2])`처럼 작성하지 않아도 됩니다.
// - 매개변수 개수가 많거나 동적으로 구성되는 경우에 특히 유용합니다.

// 4️⃣ 문자열을 배열로 변환
// 문자열은 반복 가능한(iterable) 자료형이기 때문에, spread syntax를 사용하면 '각 문자를 배열 요소로 분리'할 수 있습니다.
const word = 'hello';

const characters = [...word];
console.log(characters); // ['h', 'e', 'l', 'l', 'o']
// - `split('')`과 같은 메서드 없이도 '간단하게 문자 배열을 만들 수 있습니다.'
// - 이 방식은 '이모지나 유니코드 문자'까지도 정확하게 분리할 수 있다는 장점이 있습니다.

// 5️⃣ 객체 복사 및 병합 (ES2018+)

// spread syntax는 배열뿐 아니라 '객체의 복사와 병합'에도 사용할 수 있습니다.
// 이는 특히 'React의 상태 업데이트나 객체 상태 관리'에서 매우 자주 사용됩니다.
const user = { name: '김코딩', age: 28 };

// 객체 복사 및 속성 수정
const updatedUser = { ...user, age: 29 };

console.log(updatedUser); // { name: '김코딩', age: 29 }
console.log(user);        // { name: '김코딩', age: 28 } (원본 변경 없음)

// 기존 속성을 덮어쓰거나, 새로운 속성을 추가할 수 있습니다.
const withJob = { ...user, job: '개발자' };
console.log(withJob); // { name: '김코딩', age: 28, job: '개발자' }


// ## 배열을 복사하는 두 가지 방법 ##

// 1️⃣ 'spread syntax를 사용한 배열 복사'
// 'spread syntax'는 배열의 요소를 전개(spread)해 새로운 배열, 객체, 함수 인자 등을 구성할 수 있도록 도와주는 '다목적 문법'입니다. 그중 하나의 대표적인 활용 사례가 '배열 복사'입니다.
// ㅇ 기본 문법
// const newArray = [...originalArray]

// ㅇ 예시 코드
const numbers27 = [1, 2, 3, 4, 5];

// Spread Syntax를 사용하여 배열 복사
const copiedNumbers = [...numbers27];

console.log(copiedNumbers); // [1, 2, 3, 4, 5]
console.log(numbers27 === copiedNumbers); // false (서로 다른 배열) - 같은 데이터가 들어있지만, 참조값이 다름

// spread syntax는 원본 배열을 전개해 새로운 배열을 구성하는 방식이기 때문에, 원본 배열은 전혀 변경되지 않습니다. 결과적으로, 복사된 배열을 자유롭게 수정할 수 있으며 React 같은 환경에서는 상태를 불변하게 관리하는 데 필수적입니다.

// 2️⃣ slice()를 사용한 배열 복사
// `slice()`는 배열의 특정 구간을 잘라내어 새로운 배열을 반환하는 메서드이지만, '인수를 생략하면 배열 전체를 복사하는 기능'으로도 사용할 수 있습니다.
// ㅇ 기본 문법
// const newArray = originalArray.slice();

// ㅇ 예시 코드
const number = [1, 2, 3, 4, 5];

// slice()를 사용하여 배열 복사
const copiedNumbers2 = numbers.slice()
console.log(copiedNumbers2); // [1, 2, 3, 4, 5]
console.log(numbers === copiedNumbers2); // false

// slice()도 spread syntax처럼 새로운 배열을 반환하기 때문에 원본 배열을 절대 변경하지 않습니다.

// 💻 코드로 직접 확인해보기
const original2 = [1, 2, 3];

const copied1 = [...original2];    // spread syntax
const copied2 = original2.slice(); // slice()

copied1.push(4);
copied2.push(5);

console.log(original2); // [1, 2, 3] (원본 배열 유지)
console.log(copied1); // [1, 2, 3, 4] (새로운 배열)
console.log(copied2); // [1, 2, 3, 5] (새로운 배열)
// 💡 이처럼 spread syntax와 slice() 모두 기존 배열을 복사하여 새로운 배열을 생성합니다. 
// 원본을 보호하고, 예기치 않은 참조 오류를 방지하려면 항상 복사 여부를 의식하며 코드 작성이 필요합니다.



// 💡얕은 복사(Shallow Copy) vs 깊은 복사(Deep Copy)💡
// 이 내용은 심화 주제이므로 꼭 이해하지 않고 넘어가셔도 괜찮습니다.

// JavaScript에서 배열(Array)이나 객체(Object)처럼 참조 타입(reference type) 데이터를 복사할 때, 우리가 사용하는 대부분의 방법은 모두 얕은 복사(shallow copy)입니다.

// 즉, 표면적으로는 복사된 것처럼 보이지만, 실제로는 중첩된 내부 구조까지 완전히 복제되는 것은 아닙니다.

// 1️⃣ JavaScript의 복사는 언제나 얕은 복사입니다

// JavaScript에서 배열이나 객체를 복사할 때 사용하는 대표적인 방식인 'spread syntax', `slice()`, `Object.assign()` 등은 '모두 얕은 복사'를 수행합니다.
// 얕은 복사란, '최상위 수준의 값들만 복사'하고, 내부에 중첩된 객체나 배열은 '원본과 동일한 참조(메모리 주소)를 공유'하는 방식입니다.
const original3 = [1, 2, [3, 4]];
const shallowCopy = [...original3];

console.log(original3[2] === shallowCopy[2]); // true (같은 참조 공유)

shallowCopy[2][0] = 999;

console.log(original3);       // [1, 2, [999, 4]] ❗
console.log(shallowCopy);    // [1, 2, [999, 4]]

// 얕은 복사는 '1차원까지는 안전하게 복사'됩니다. 하지만 배열 안에 배열, 객체 안에 객체처럼 '중첩된 구조'에서는 내부 참조는 여전히 공유되기 때문에, '복사본을 수정했을 때 원본도 함께 변경되는 문제'가 발생할 수 있습니다.

// 이러한 현상은 실수로 원본 데이터를 변경하게 되는 '예기치 않은 부작용의 원인'이 될 수 있습니다.

// 다만 'React와 같은 상태 관리 환경에서는 얕은 복사만으로도 대부분의 경우 불변성을 충분히 유지할 수 있으며', 필요한 경우에만 부분적으로 중첩 구조를 복사하는 방식이 일반적으로 사용됩니다.

// 2️⃣ 깊은 복사(Deep Copy)

// 중첩된 구조까지 '완전히 분리된 복사본을 만들고 싶을 때' 사용하는 것이 바로 '깊은 복사(Deep Copy)'입니다.
// 깊은 복사는 단순히 참조만 복사하는 것이 아니라, '중첩된 객체나 배열까지 재귀적으로 완전히 새로운 메모리에 복사'합니다.
const original4 = [1, 2, [3, 4]];

const deepCopy = JSON.parse(JSON.stringify(original4));

deepCopy[0] = 100;
deepCopy[2][0] = 999;

console.log(original4);   // [1, 2, [3, 4]] ✅ 변경 없음
console.log(deepCopy);   // [100, 2, [999, 4]]
// 이제 original과 deepCopy는 완전히 독립된 상태가 되어, 어떤 변경도 서로에게 영향을 주지 않습니다.

// 3️⃣ 하지만 JavaScript는 기본적으로 깊은 복사를 지원하지 않습니다
// 깊은 복사는 JavaScript가 '내장 기능으로 제공하는 것이 아닙니다.' 그래서 개발자들은 다음과 같은 '우회적인 방법'을 사용해야 합니다.
// 방법                          | 특징                            | 주의사항
// ---------------------------------------------------------------------------------------------
// JSON.parse(JSON.stringify(obj)) | 가장 간단한 방식                  | undefined, function, Symbol 등은 손실됨
// structuredClone(obj)            | 최신 브라우저 지원                | 사용 가능 브라우저 확인 필요
// lodash의 _.cloneDeep()          | 라이브러리 기반 깊은 복사         | 외부 의존성 필요
// 사용자 정의 재귀 함수            | 완전한 커스터마이징 가능           | 직접 구현 필요, 복잡도 높음

// - `JSON.parse(JSON.stringify(obj))`는 '함수, undefined, 순환 참조(circular reference)'를 제대로 처리하지 못합니다.
// - `structuredClone()`은 '브라우저 호환성 이슈'가 있습니다.
// - 라이브러리를 사용하거나 직접 재귀 함수를 짜야 하는 경우는 '복잡도와 성능 비용'이 따릅니다.

// 즉, JavaScript에서 중첩된 구조를 안전하게 복사하는 것은 간단한 일이 아니며, 상황에 따라 적절한 도구와 방법을 선택해야 합니다.

// ⚠️ 배열 복사 시 주의 사항

// 1. '직접 할당(`=`)은 복사가 아닙니다.'
//  - `const copy = original`처럼 작성하면, 복사된 것처럼 보이지만 '같은 참조값을 공유'하는 것입니다. 복사본을 수정하면 원본도 함께 변경됩니다.
    
// 2. 'spread syntax와 `slice()`는 얕은 복사만 수행합니다.'
//  - 최상위 배열 요소는 새로운 참조로 분리되지만, 내부에 중첩된 배열이나 객체는 '여전히 원본과 동일한 참조를공유'합니다. 이로 인해 중첩된 값을 직접 수정하면 원본 데이터가 의도치 않게 변경될 수 있습니다. 다만, 'React처럼 상태를 불변하게 관리하는 환경에서는 얕은 복사로도 충분한 경우가 많으며', 꼭 필요한 부분만 선택적으로 복사하는 것이 일반적인 방식입니다.
    
// 3. '깊은 복사는 JavaScript에서 기본적으로 제공되지 않습니다.'
//  - `JSON.parse(JSON.stringify())` 방식이 흔히 쓰이지만, '함수나 undefined, Symbol, 순환 참조'를 제대로 처리하지 못합니다. 신중하게 상황에 맞는 방법을 선택해야 합니다.


// '!! JavaScript에서 배열이나 객체를 복사할 때, 얕은 복사로도 충분한 경우가 대부분입니다.'!! 

// `spread syntax`나 `slice()`는 중첩되지 않은 1차원 구조에서는 불변성을 지키기에 전혀 문제가 없습니다.
// React 같은 상태 관리 환경에서도 '!! 항상 깊은 복사가 필요한 건 아니며'!! , 대개의 경우 얕은 복사만으로도 안정적인 상태 업데이트가 가능합니다.
// 다만, '!! 중첩된 참조형 데이터가 포함된 구조'!! 에서 내부 값까지 안전하게 분리하고 싶다면, 그때는 깊은 복사를 고려해야 합니다.
// 즉, '!! 깊은 복사는 예외적인 상황에서만 신중하게 사용'!! 하면 됩니다.

// ===========================================실습=============================
// 🚀 실습 예제 1: Spread Syntax를 사용하여 배열을 복사하세요.
const arr = [10, 20, 30];

// 선언되어 있는 copied1 변수에 결과를 할당하세요.
let copied3;
copied3 = [...arr];
console.log('------------------------------------------');
console.log('원본 배열 :', arr);
console.log('복사 배열 :', copied3);

// ✨ 결과 확인 : 기존 배열과 복사한 배열을 === 연산자를 사용하여 결과를 확인해보세요.
console.log('일치 확인 결과:', arr === copied1);
console.log('------------------------------------------');

// 🚀 실습 예제 2: slice()를 사용하여 배열을 복사하세요.
const arr3 = ['apple', 'banana', 'grape'];

// 선언되어 있는 copied2 변수에 결과를 할당하세요.
let copied4;
copied4 = arr3.slice();
console.log('원본 배열 :', arr3);
console.log('복사 배열 :', copied4);

// ✨ 결과 확인 : 기존 배열과 복사한 배열을 === 연산자를 사용하여 결과를 확인해보세요.
console.log('일치 확인 결과:', arr3 === copied4);
console.log('------------------------------------------');

// 🚀 실습 예제 3 : 주어진 배열을 깊은 복사를 통해 복사해주세요.
const arr4 = [
  [1, 2],
  [3, 4],
];

// 선언되어 있는 copied3 변수에 결과를 할당하세요.
// 복사한 배열의 [0][1]에 있는 요소의 값을 100으로 변경하세요.
let copied5 = JSON.parse(JSON.stringify(arr4));
copied5[0][1] = 100;

console.log('원본 배열:', arr4);
console.log('깊은 복사 배열 :', copied5);

// ✨ 결과 확인 : 기존 배열과 복사한 배열을 === 연산자를 사용하여 결과를 확인해보세요.
console.log('일치 확인 결과:', arr4 === copied5);
console.log('------------------------------------------');
// ===============================================================================

// 7. 목표 : 객체를 복사하는 방법으로 spread syntax와 Object.assign()을 나열할 수 있다.

// JavaScript에서 객체를 다룰 때, 같은 참조를 공유하지 않도록 주의해야 합니다.

// 객체는 참조 타입이기 때문에 `=` 연산자를 사용하면 같은 객체를 가리키는 또 다른 변수가 만들어지는 것일 뿐, 새로운 객체가 생성되는 것은 아닙니다. 이 상태에서 하나의 변수를 수정하면 원본 객체도 함께 변경되는 문제가 발생할 수 있습니다.

// 이를 방지하려면 spread syntax (`...`) 또는 `Object.assign()` 을 활용해 객체의 값을 복제한 새로운 객체를 생성해야 합니다.

// # '객체 복사하기'
// JavaScript에서 객체(Object)를 복사할 때는 'Spread Syntax (`...`)'와 '`Object.assign()`'을 자주 사용합니다. 이 두 방법은 '얕은 복사(Shallow Copy)'를 수행하며, '중첩된 객체(Deep Copy)는 별도의 처리'가 필요합니다.

// 1️⃣  Spread Syntax(전개 구문)를 사용한 객체 복사
// spread syntax는 '객체 내부의 속성들을 하나하나 꺼내어 새로운 객체를 구성할 때 사용'합니다.
// 이 방식을 사용하면 '원본 객체와 동일한 속성을 가진 새로운 객체를 만들 수 있으며', 추가 속성을 덧붙이거나 일부 값을 변경할 때도 유용하게 사용할 수 있습니다.

// ㅇ 기본문법
// const newObject = { ...originalObject };

// ㅇ 예시코드
const original5 = { name: "Alice", age: 25 };

// Spread Syntax를 사용하여 객체 복사
const copied = { ...original5 };

copied.age = 30; // 복사된 객체 수정

console.log(original5); // { name: "Alice", age: 25 } (원본 유지)
console.log(copied);   // { name: "Alice", age: 30 } (복사된 객체)

// 💡 'Spread Syntax는 원본 객체과 다른 새로운 객체를 생성하므로, 원본 객체를 변경하지 않습니다.'

// spread syntax는 '객체 복사 외에도 여러 기능'에 활용됩니다. 예를 들어, '두 객체를 합치거나', '특정 속성을 덮어쓰기', '함수의 매개변수로 객체를 전달할 때 일부 값만 분리해 사용'하는 경우에도 자주 사용됩니다. 이 방식은 '새로운 객체를 생성'하지만, '내부 중첩 객체는 원본과 참조를 공유'합니다

// 1. 두 객체 합치기
const user2 = { name: "Alice", age: 25 };
const job = { title: "Developer", company: "OZ" };

const userProfile = { ...user2, ...job }; // 두 객체를 하나로 합치기

console.log(userProfile); // { name: "Alice", age: 25, title: "Developer", company: "OZ" }

// 2. 특정 속성 덮어쓰기
const user3 = { name: "Alice", age: 25 };

const updatedUser2 = { ...user3, age: 30 }; // age를 덮어쓰기

console.log(updatedUser2); // { name: "Alice", age: 30 }

// 3. 함수 매개변수로 객체 일부 분리
const user4 = {
  name: "Alice",
  age: 25,
  location: "Seoul",
};

function introduce({ name, location }) {
  console.log(`${name} lives in ${location}`);
}
// 객체를 인자로 받되, 그 안에서 name과 location만 꺼내서 사용하겠다는 뜻
// 즉, user4 객체 전체를 받는 게 아니라, 거기서 필요한 속성만 골라 씀
introduce({ ...user4 }); // "Alice lives in Seoul"


// 2️⃣ Object.assign()을 사용한 객체 복사
// Object.assign()은 하나 이상의 객체를 병합하는 데 사용하는 메서드입니다. 하지만 첫 번째 인자로 빈 객체 ({})를 넣으면, 결과적으로 빈 객체를 기반으로 한 새로운 객체를 만들 수 있기 때문에 복사 용도로도 자주 사용됩니다.

// ㅇ 기본문법
// const newObject = Object.assign({}, originalObject);
// - 첫 번째 인자인 빈 객체 `{}`에 두 번째 객체의 프로퍼티들이 복사되며, 새로운 객체가 생성됩니다.
// - 병합 순서에 따라 이후 객체의 속성이 앞의 속성을 덮어씁니다.

// ㅇ 예시코드
const original6 = { name: "Alice", age: 25 };

// Object.assign()을 사용하여 객체 복사
const copied6 = Object.assign({}, original6);

copied6.name = 'Jake'
copied6.age = 30; // 복사된 객체 수정

console.log(original6); // { name: "Alice", age: 25 } (원본 유지)
console.log(copied6);   // { name: "Jake", age: 30 } (복사된 객체)

// 💡 Object.assign()은 복사를 위해 설계된 메서드는 아니지만, 빈 객체를 첫 번째 인자로 전달하는 방식으로 복사처럼 사용할 수 있습니다. 이때도 객체가 중첩된 경우 내부 값은 새로 만들어지지 않고 원본 객체와 같은 참조를 공유하므로 주의가 필요합니다.

// ㅇ Object.assign()를 사용한 객체 병합
const defaults = { theme: "light", fontSize: 14 };
const userSettings = { fontSize: 16 };

// 병합: defaults의 값 위에 userSettings가 덮어씀
const settings = Object.assign({}, defaults, userSettings);

console.log(settings); // { theme: "light", fontSize: 16 }

// 💻 코드로 직접 확인해보기
const post = { 
	title: "JavaScript 객체 복사", 
	description : '객체 복사에 대해 정리하는 글입니다.',
	likes: 25 
};

// Spread Syntax를 사용하여 객체 복사
const post1 = { ...post };
// Object.assign()을 사용하여 객체 복사
const post2 = Object.assign({}, post);

post1.title = 'JavaScript 배열 복사'
post1.description = '배열 복사에 대해 정리하는 글입니다.'

post2.title = 'JavaScript 얕은 복사'
	post2.description = '얕은 복사에 대해 정리하는 글입니다.'

console.log(post); // (원본 유지) { title: "JavaScript 객체 복사", description : '객체 복사에 대해 정리하는 글입니다.',likes: 25 };
console.log(post1); // (복사된 객체) { title: "JavaScript 배열 복사", description : '배열 복사에 대해 정리하는 글입니다.',likes: 25 };
console.log(post2); // (복사된 객체) { title: "JavaScript 얕은 복사", description : '얕은 복사에 대해 정리하는 글

// ## 한 걸음 더 나아가기

// 1️⃣ 얕은 복사란?
// 객체 복사를 위해 자주 사용하는 `...` 또는 `Object.assign()`은 '최상위 프로퍼티 수준까지만 새로운 객체로 분리'하고, 그 안에 포함된 객체는 '같은 참조를 공유'합니다. 이와 같은 현상을 '얕은 복사'라고 합니다.
const original7 = {
  name: "김코딩",
  address: { city: "서울 특별시" }
};

const copy1 = { ...original7 };
const copy2 = Object.assign({}, original7);

copy1.address.city = "고양시";
copy2.address.city = "부산 광역시";

console.log(original7.address.city); // "부산 광역시" ❗ (copy1, copy2 둘 다 영향을 줌)
// spread syntax와 Object.assign() 모두 중첩된 값은 같은 참조를 공유하므로, 완전히 독립적인 복사를 원할 경우에는 적절하지 않습니다.

// 2️⃣ 깊은 복사가 필요한 경우

// '내부까지 완전히 분리된 복사본을 만들고 싶은 경우'에는 깊은 복사(Deep Copy)를 사용해야 합니다. JavaScript는 기본적으로 깊은 복사를 지원하지 않기 때문에 '개발자가 직접 구현하거나 외부 도구를 활용해야 합니다.'

// JSON 방식 사용
const original8 = {
  name: "Alice",
  address: { city: "New York" }
};

const deepCopy3 = JSON.parse(JSON.stringify(original8));

deepCopy3.address.city = "Los Angeles";

console.log(original8.address.city); // "New York" (원본 변경 없음)
console.log(deepCopy3.address.city); // "Los Angeles"

// // structuredClone 사용 (최신 브라우저) 브라우저 호환되나 확인 필요
// const deepCopy = structuredClone(original);

// 3️⃣ 깊은 복사를 위한 대표적인 방법
// 방법                             /            특징            /       주의할 점
// JSON.parse(JSON.stringify(obj))  /  가장 간편한 방식   / undefined, function, Symbol 등은 손실
// structuredClone(obj)          /      최신 브라우저 지원 / 일부 환경에서 미지원
// _.cloneDeep(obj) (lodash)    /   안정적인 깊은 복사     / 외부 라이브러리 필요
// 사용자 정의 재귀 함수        /   세밀한 제어 가능     / 복잡하고 오류 가능성 있음


// ⚠️ 객체 복사 시 주의 사항

// 1. '직접 할당은 복사가 아닙니다.'
//     `const copy = original`처럼 작성하면, 실제 데이터가 아닌 '같은 객체를 가리키는 또 하나의 변수'가 생성됩니다.
//     이 상태에서 `copy`를 수정하면 `original`도 함께 변경됩니다.
    
// 2. 'Spread Syntax와 `Object.assign()`은 새로운 객체를 생성하지만, 내부 구조까지 분리하지는 않습니다.'
//     즉, '중첩된 객체나 배열은 여전히 같은 참조를 공유'하기 때문에, 복사한 객체의 내부를 수정하면 '원본에도 영향을 줄 수 있습니다.'
    
// 3. '깊은 복사는 기본적으로 지원되지 않으며, 신중하게 사용해야 합니다.'
//     `JSON.parse(JSON.stringify())`, `structuredClone()`, `lodash.cloneDeep()` 등을 활용할 수 있지만, 각각의 방식에는 한계가 존재합니다.
//     특히 순환 참조나 특수 자료형을 포함한 객체에서는 문제가 발생할 수 있으므로 '반드시 상황에 맞는 방법을 선택'해야 합니다.


// 'JavaScript에서 객체를 복사할 때는 단순히 동일한 값을 가지는 것만으로는 복사가 아닙니다.'

// '진짜 복사란 원본과 분리된 새로운 객체를 만드는 것'이며, 이를 통해 참조 충돌 없이 독립적인 상태를 유지할 수 있습니다.

// 실제로는 대부분의 상황에서 `...` 또는 `Object.assign()`을 활용한 '얕은 복사면 충분'합니다.

// 특히 React처럼 상태의 불변성이 중요한 환경에서도, 얕은 복사로도 충분히 안전하고 효율적인 상태 관리를 할 수 있습니다.

// 다만, 중첩된 객체를 다룰 때는 '내부 참조가 공유되지 않는지 꼭 확인'해야 하며, 필요한 경우에만 '깊은 복사를 고려하는 것이 바람직한 전략'입니다.

// =========================================실습======================================
// 🚀 실습 예제 1: Spread Syntax를 사용하여 객체를 복사하세요.
const personTest = { name: '박서준', age: 20 };

// 선언되어 있는 copiedPerson 변수에 결과를 할당하세요.
let copiedPerson2;
copiedPerson2 = {...personTest};
console.log('------------------------------------------');
console.log('원본 객체 :', personTest);
console.log('복사 객체 :', copiedPerson2);

// ✨ 결과 확인 : 기존 객체와 복사한 객체에 대해 === 연산자를 사용한 결과를 확인해보세요.
console.log('일치 확인 결과:', personTest === copiedPerson2);
console.log('------------------------------------------');

// 🚀 실습 예제 2: Object.assign()를 사용하여 객체를 복사하세요.
const car = { brand: 'BMW', model: 'MINI COOPER' };

// 선언되어 있는 copiedCar 변수에 결과를 할당하세요.
let copiedCar;
copiedCar = Object.assign({}, car);
console.log('원본 객체 :', car);
console.log('복사 객체 :', copiedCar);

// ✨ 결과 확인 : 기존 객체와 복사한 객체에 대해 === 연산자를 사용한 결과를 확인해보세요.
console.log('일치 확인 결과:', car === copiedCar);
console.log('------------------------------------------');

// 🚀 실습 예제 3 : 주어진 객체를 깊은 복사를 통해 복사하세요.
const userTest = { name: '카리나', address: { city: '서울특별시' } };

// 선언되어 있는 copiedUser 변수에 결과를 할당하세요.
let copiedUser;
copiedUser = JSON.parse(JSON.stringify(userTest));
// 복사한 객체의 city값을 '부산광역시'로 변경하세요.
copiedUser.address.city = '부산광역시';

console.log('원본 객체:', userTest);
console.log('깊은 복사 객체 :', copiedUser);

// ✨ 결과 확인 : 기존 객체와 복사한 객체에 대해 === 연산자를 사용한 결과를 확인해보세요.
console.log('일치 확인 결과:', userTest === copiedUser);
console.log('------------------------------------------');

// ========================================================

// 8. 목표 : 객체의 메서드는 객체의 프로퍼티로 함수가 할당된 형태임을 이해하고, 배열 메서드는 배열 객체의 프로토타입에 정의된 함수를 호출하는 것임을 설명할 수 있다

// JavaScript에서 '메서드'란 단순한 함수가 아니라, '객체의 속성으로 정의된 함수'를 말합니다. 즉, 어떤 함수가 '객체 안에 포함되어 있다면' 우리는 그것을 '메서드'라고 부릅니다.

// 이 개념을 바탕으로 배열 메서드를 이해하면 더 명확합니다. 배열도 객체이며, 배열 전용 메서드는 JavaScript가 미리 정의해 둔 `Array.prototype`이라는 공통 구조에서 '상속받아 사용하는 함수들'입니다.

// 객체 메서드는 '‘내가 만든 객체에 직접 정의한 함수’', 배열 메서드는 '‘JavaScript가 배열용으로 제공한 공통 함수’라는 점을 기억하세요.


// 🛠️ 메서드 이해하기

// JavaScript에서 함수는 '값'입니다. 따라서 함수도 변수나 객체의 속성에 할당될 수 있습니다. 이때 '객체의 속성으로 할당된 함수'를 '메서드'라고 부릅니다.
const user25 = {
  name: "김코딩",
  sayHello: function () {
    console.log(`안녕하세요! 저는 ${this.name}입니다.`);
  }
};

user25.sayHello(); // "안녕하세요! 저는 김코딩입니다."
// - `sayHello`는 `user` 객체의 프로퍼티입니다.
// - 이 프로퍼티의 값이 함수이므로 '메서드(method)'라고 부릅니다.
// - 메서드 내부에서 `this`는 자신이 속한 객체를 가리킵니다.
// 📌 즉, 메서드는 함수지만 '‘객체 안에 있는 함수’'라는 점이 핵심입니다

// ## 다양한 메서드 선언 방식

// 1. 기본 함수 표현식으로 선언
const person20 = {
  name: "홍길동",
  greet: function () {
    console.log(`저는 ${this.name}입니다.`);
  }
};

person20.greet(); // "저는 홍길동입니다."
// - `greet`는 `function` 키워드를 이용해 함수로 선언된 메서드입니다.
// - 전통적인 방식으로 대부분의 코드에서 사용 가능합니다.
// - `this.name`을 통해 객체의 프로퍼티에 접근할 수 있습니다.

// 2. ES6 메서드 축약 문법
const person21 = {
  name: "홍길동",
  greet() {
    console.log(`저는 ${this.name}입니다.`);
  }
};

person21.greet(); // "저는 홍길동입니다."
// - `function` 키워드 없이도 객체 내부에 함수를 정의할 수 있는 '축약 문법'입니다.
// - ES6 이후 많이 사용되며, 문법이 간결해져 가독성이 높아집니다.
// - 동작 방식은 기본 함수 표현식과 동일합니다.

// 3. 동적으로 메서드 추가하기
const car2 = {
  brand: "현대"
};

car2.start = function () {
  console.log(`${this.brand} 자동차가 출발합니다.`);
};

car2.start(); // "현대 자동차가 출발합니다."
// - 객체 생성 이후, 나중에 '속성으로 함수를 할당'해서 메서드를 추가할 수도 있습니다.
// - 유연하게 객체의 동작을 정의하거나 동적으로 기능을 추가할 때 자주 사용됩니다.
// - `this.brand`는 `car` 객체를 가리킵니다.

// 4. 화살표 함수로 메서드를 정의하면?
const dog = {
  name: "바둑이",
  bark: () => {
    console.log(`저는 ${this.name}입니다.`);
  }
};

dog.bark(); // "저는 undefined입니다." ❗
// - 화살표 함수는 '고유한 `this`를 가지지 않습니다.'
// - `this`는 상위 스코프의 문맥을 따르기 때문에, `dog.name`이 아닌 외부 `this.name`을 참조합니다.
// - 객체 메서드는 'function 키워드 또는 축약형 메서드로 정의'하는 것이 안전합니다.


// -> 생성자 함수
//    - JavaScript에서 '생성자 함수(Constructor Function)'는 객체를 생성하기 위한 특별한 함수입니다. 
//     - `new` 키워드를 사용하면, 해당 함수는 새로운 객체를 만들고 그 객체를 'this'로 바인딩하여 초기화합니다.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const userPerson = new Person("김코딩", 25);
console.log(userPerson); // { name: "김코딩", age: 25 }
// - `Person`은 생성자 함수입니다.
// - `new Person()`을 호출하면 새로운 객체가 생성되고, `this`는 그 새 객체를 가리킵니다.
// - 생성자 함수 이름은 보통 '대문자로 시작'합니다 (관습적으로).

// 📌 배열도 사실은 `Array`라는 생성자 함수로부터 만들어집니다.
const array10 = [1, 2, 3];              // 배열 리터럴 방식
const array20 = new Array(1, 2, 3);     // 생성자 함수 방식

console.log(array10); // [1, 2, 3]
console.log(array20); // [1, 2, 3]
// 두 방식 모두 같은 배열을 생성하지만, 내부적으로는 모두 new Array()가 호출된 것과 동일한 동작입니다.


// ## 배열 메서드란?

// JavaScript에서 배열은 'Array라는 생성자 함수로부터 만들어진 객체'입니다. 
// 즉, `[]`로 만든 배열도 사실은 `new Array()`로 생성된 '객체(Object)'입니다.

// 이 배열 객체는 Array.prototype이라는 프로토타입 객체에 정의된 메서드들을 상속받아 사용할 수 있습니다.
const numbers30 = [1, 2, 3, 4];

// 배열 메서드 map() 사용
const doubled30 = numbers30.map((num) => num * 2);

console.log(doubled30); // [2, 4, 6, 8]
// - `map()` 메서드는 `numbers` 배열에 직접 정의된 것이 아닙니다.
// - 대신 `Array.prototype.map`에 정의된 함수를 '상속받아 사용하는 구조'입니다.
// - 따라서 JavaScript의 모든 배열은 `map()`, `forEach()`, `filter()`와 같은 메서드를 공통적으로 사용할 수 있습니다.


// ## '배열을 객체처럼 확인해 보고 싶다면?'

// JavaScript에서 배열은 사실 `Array`라는 생성자 함수로 만들어진 '객체(Object)'입니다. 콘솔에서 배열을 **객체 형태로 확인**하고 싶다면, 크롬 개발자도구에서 `console.dir()`을 사용해 보세요.
const array50 = [1, 2, 3];

console.dir(array50);
// console.dir(arr)을 사용하면 배열의 내부 구조와 함께 속성과 프로토타입 체인까지 확인할 수 있습니다. 
// [[Protytype]]이라고 되어 있는 부분의 토글을 열어서 확인해 보세요.

// - 이를 통해 배열이 객체처럼 동작하며, `length`, `map()`, `forEach()`, `filter()` 등의 **메서드와 프로퍼티**를 포함하고 있음을 직접 확인할 수 있습니다.
// - 각각의 메서드에 대한 정보도 확인이 가능합니다.

// ⚠️ 주의 사항

// 1. 모든 함수가 메서드는 아닙니다.
    
//   - 함수가 객체의 속성으로 할당되었을 때만 메서드라고 부릅니다.
    
//   - 단순히 정의된 함수는 메서드가 아닙니다.
    
// 2. 화살표 함수는 메서드 정의에 적합하지 않습니다.
    
//   - 화살표 함수는 자체적인 `this`를 가지지 않기 때문에, 객체 내부 메서드에서 `this`를 사용할 경우에는 `function` 키워드나 축약형 메서드 선언을 사용해야 합니다.
    
// 3. 배열의 메서드는 배열 객체에 직접 정의되어 있지 않습니다.
    
//   - `map()`, `filter()`, `forEach()` 같은 메서드는 `Array.prototype`에 정의되어 있으며, 배열은 이를 상속받아 사용하는 구조입니다.
    
// 4. 객체와 배열은 모두 참조형 자료입니다.
    
//   - 메서드를 활용해 값을 변경할 경우, 원본 객체나 배열에 영향을 줄 수 있으므로 주의해야 합니다.