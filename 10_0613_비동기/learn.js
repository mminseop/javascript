// // 1. 목표 : 동기(Synchronous)와 비동기(Asynchronous)의 차이를 이해하고, JavaScript에서 비동기 작업을 처리하는 방법을 설명할 수 있다.

// // '"왜 어떤 코드는 순서대로 실행되고, 어떤 코드는 나중에 실행될까요?"'

// // JavaScript는 기본적으로 순차적(동기적)으로 실행되지만,

// // 브라우저가 제공하는 기능과 문법을 통해 **비동기 처리도 가능**하도록 설계되어 있습니다.

// // 이번 학습에서는 JavaScript가 어떻게 동기와 비동기를 구분하고 처리하는지,

// // 그리고 비동기 처리를 위한 네 가지 주요 방식을 함께 살펴봅니다.


// // ⏱ 동기(Synchronous)와 비동기(Asynchronous)

// // JavaScript는 싱글 스레드 언어이지만, 브라우저가 제공하는 기능을 통해 비동기 처리를 유연하게 수행할 수 있습니다. 이러한 구조 덕분에, JavaScript는 '작업을 중단하지 않고도 시간이 오래 걸리는 작업을 처리'할 수 있습니다.

// //  ㅇ 동기 실행 예시
// console.log("1. 작업 시작");

// for (let i = 1; i <= 3; i++) {
//   console.log(`2. ${i}번째 작업 실행 중`);
// }

// console.log("3. 작업 완료");
// // 📤 실행 결과
// // 1. 작업 시작
// // 2. 1번째 작업 실행 중
// // 3. 2번째 작업 실행 중
// // 4. 3번째 작업 실행 중
// // 5. 작업 완료
// // 위 코드처럼, 순서대로 실행되는 구조를 동기(Synchronous) 작업이라고 합니다.

// //  ㅇ 비동기 실행 예시
// console.log("1. 시작");

// setTimeout(() => {
//   console.log("2. 2초 후 실행");
// }, 2000);

// console.log("3. 끝");
// // 📤 실행 결과
// // 1. 시작
// // 2. 끝
// // 3. 2초 후 
// // setTimeout()은 비동기 함수로, 실행 예약만 하고 바로 다음 줄의 코드를 실행합니다. 시간이 오래 걸리는 작업을 기다리지 않고, 다음 작업으로 넘어가는 구조입니다.

// // ㅇ setTimeout() 함수
// // - setTimeout()은 일정 시간 후에 지정된 함수를 실행하도록 예약하는 Web API입니다.
// // setTimeout(콜백함수, 지연시간(ms));
// // - 첫 번째 인자: 실행할 '함수'
// // - 두 번째 인자: '지연 시간(밀리초)' — 1초는 1000ms
// // 즉, 위 예제는 2초(2000ms) 뒤에 콜백 함수를 실행하도록 예약한 것입니다.

// // 하지만 JavaScript는 이 작업이 끝날 때까지 '기다리지 않고' 곧바로 다음 줄인 `console.log("3. 끝")`을 실행합니다.

// // 이러한 실행 방식이 바로 '비동기 처리'이며, '싱글 스레드 구조에서 효율적으로 작업을 처리하기 위한 핵심 개념'입니다.


// // ⚙️ JavaScript의 비동기 처리 방식
// // ────────────────────────────────────────────────────────────────────────────
// // 방식          | 설명                               | 장점
// //               |                                    | 단점
// // ──────────────┼────────────────────────────────────┼────────────────────────
// // Web API       | 브라우저가 제공하는 비동기 기능     | [장점]
// //               |                                    | - JavaScript 외부에서 비동기 처리 가능
// //               |                                    | - 작업이 브라우저에 의해 효율적으로 관리됨
// //               |                                    | [단점]
// //               |                                    | - 흐름 제어 불가능 (콜백, Promise와 함께 써야 의미 있음)
// // ──────────────┼────────────────────────────────────┼────────────────────────
// // 콜백 함수     | 비동기 완료 후 실행할 함수 지정     | [장점]
// //               |                                    | - 구현이 간단하고 빠름
// //               |                                    | - 모든 환경에서 사용 가능
// //               |                                    | [단점]
// //               |                                    | - 중첩되면 콜백 지옥 발생
// //               |                                    | - 에러 처리 일관성 부족
// // ──────────────┼────────────────────────────────────┼────────────────────────
// // Promise       | 비동기 상태를 추적하고              | [장점]
// //               | 체계적으로 관리                    | - `.then()`, `.catch()`를 통한 가독성 향상
// //               |                                    | - 에러 전파와 흐름 제어 용이
// //               |                                    | [단점]
// //               |                                    | - 코드가 길어질 수 있음
// //               |                                    | - 직관적으로 읽기 어려운 경우도 있음
// // ──────────────┼────────────────────────────────────┼────────────────────────
// // async/await   | Promise를 동기처럼                  | [장점]
// //               | 사용할 수 있는 문법                | - 동기 코드처럼 읽기 쉬움
// //               |                                    | - 가독성과 유지보수성 뛰어남
// //               |                                    | [단점]
// //               |                                    | - `try/catch`로 에러 처리 필요
// //               |                                    | - Promise 기반 코드만 사용 가능
// // ────────────────────────────────────────────────────────────────────────────


// // 1️⃣ Web API

// // 'Web API'는 브라우저가 제공하는 '비동기 작업 전용 기능'입니다. JavaScript 엔진 외부에서 실행되므로, 'JavaScript 코드를 멈추지 않고도 비동기 작업을 처리'할 수 있습니다.
// // | Web API 종류 | 설명 | 대표적인 기능 |
// // | DOM API | HTML 요소 조작 | `document.querySelector()`, `element.classList` |
// // | 타이머 API | 지연/반복 실행 | `setTimeout()`, `setInterval()` |
// // | 네트워크 API | 서버 통신 | `fetch()`, `XMLHttpRequest` |
// // | 이벤트 API | 사용자 입력 감지 | `addEventListener()`, `event.target` |
// // | 스토리지 API | 브라우저 저장소 | `localStorage.setItem()`, `getItem()` |

// // ** API : API는 특정 기능을 사용할 수 있도록 제공되는 속성과 메서드의 집합입니다.

// // 2️⃣ 콜백 함수 (Callback Function)
// // 일부 Web API는 작업이 끝난 뒤 실행할 함수를 직접 "콜백"으로 전달해야 합니다.
// // 콜백 함수는 다른 함수의 인자로 전달되어, 특정 시점에 실행되는 함수입니다.
// function greet(name, callback) {
//   console.log(`안녕하세요, ${name}님!`);
//   callback(); // 콜백 실행
// }

// function sayBye() {
//   console.log("잘 가요! 👋");
// }

// greet("철수", sayBye);
// // 🧩 실행 흐름
// // 1. `sayBye()`는 `greet()`의 인자로 전달됨
// // 2. `greet()` 안에서 `callback()` 호출
// // 3. `sayBye()`가 호출되어 실행됨


// // 3️⃣ Promise
// // Promise는 비동기 작업의 결과를 객체 형태로 다루며, 성공 또는 실패에 따라 후속 작업을 연결(체이닝)할 수 있습니다.
// // ### 주요 상태
// // - `pending`: 대기 중
// // - `fulfilled`: 작업 성공
// // - `rejected`: 작업 실패

// // ### 주요 메서드
// // [메서드]              /       [설명]
// // then()                /   작업 성공 시 실행할 함수 등록
// // catch()               /   작업 실패 시 실행할 함수 등록
// // finally()             /   성공/실패 관계없이 실행
// // Promise.resolve()     /   즉시 성공 상태의 Promise 생성
// // Promise.reject()      /   즉시 실패 상태의 Promise 생성

// // ㅇ 예시
// // fetch("https://api.example.com/data")
// //   .then((res) => res.json())
// //   .then((data) => console.log(data))
// //   .catch((err) => console.error("에러:", err));


// // 4️⃣ async / await
// // `async/await`는 'Promise를 더 간결하게 작성할 수 있도록 도와주는 문법'입니다.
// // 코드의 가독성이 높아지고, '동기식 코드처럼 비동기 작업을 구성'할 수 있습니다.

// // ㅇ 기본문법
// async function fetchData() {
//   const res = await fetch("https://api.example.com/data");
//   const data = await res.json();
//   console.log(data);
// }
// // - `async` 함수는 항상 'Promise를 반환'합니다.
// // - `await`는 Promise가 '완료될 때까지 기다렸다가' 다음 코드를 실행합니다.
// // - 에러 처리를 위해 `try/catch`와 함께 사용하는 것이 일반적입니다.

// // ⚠️ 비동기 처리 시 주의 사항
// // 비동기 작업은 매우 강력하지만, '적절한 이해 없이 사용할 경우 예기치 않은 동작이나 디버깅 어려움'을 초래할 수 있습니다. 아래 주의사항들을 꼭 기억하세요.

// // 1. '작업 순서에 대한 착각'
// // - 비동기 작업은 '코드의 순서대로 실행되지 않을 수 있음'을 항상 인지해야 합니다.
// // - `console.log()`를 활용해 '실행 흐름을 눈으로 확인'하는 습관이 필요합니다.
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");
// // - 실행 결과는 A → C → B 순입니다. setTimeout()의 지연 시간이 0이라도 바로 실행되지 않습니다.

// // 2. 콜백 중첩 → 가독성 저하
// // doSomething((result1) => {
// //   doSomethingElse(result1, (result2) => {
// //     doAnotherThing(result2, (result3) => {
// //       console.log(result3);
// //     });
// //   });
// // });
// // 이런 형태의 코드는 콜백 지옥(Callback Hell)이라 불리며 유지보수가 매우 어렵습니다.

// // ** 콜백 지옥(Callback Hell)
// // 콜백 방식은 간단한 작업에는 유용하지만, 중첩이 많아지면 콜백 지옥(Callback Hell)이 발생해 가독성이 매우 떨어질 수 있습니다.
// // "이럴 땐 Promise나 async/await으로 리팩토링해야 합니다."

// // 3. '에러 처리를 잊지 말 것'
// // - 비동기 처리에서는 에러가 발생해도 `try/catch`'만으로 잡히지 않을 수 있습니다.'
// // - '콜백에는 명시적으로 에러 핸들러 작성', 'Promise에는 `.catch()`', '`async/await`에는 `try/catch`'로 예외 처리를 명확히 해야 합니다.
// async function loadData() {
//   try {
//     const res = await fetch("https://api.example.com");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("데이터를 불러오지 못했습니다:", err);
//   }
// }

// // 4. 'return의 위치를 신경 쓸 것'
// // - 비동기 함수 내부에서의 `return`은 비동기 결과를 외부로 넘기지 않습니다.
// function getData() {
//   setTimeout(() => {
//     return "값"; // ❌ 바깥에서 사용할 수 없음
//   }, 1000);
// }

// const result = getData();
// console.log(result); // undefined
// // 이럴 땐 Promise를 반환하거나, async/await을 활용해야 값을 제대로 받을 수 있습니다.


// // 'JavaScript의 비동기 처리 방식은 웹 개발의 핵심 개념입니다.'

// // Web API, 콜백, Promise, async/await은 각각 장단점이 있으며,

// // 프로젝트의 규모나 요구에 따라 적절히 선택할 수 있어야 합니다.

// // 특히, '비동기는 '코드가 순서대로 실행되지 않는다'는 사실을 직관적으로 이해하는 것'이 가장 중요합니다.

// // 직접 콘솔에 출력해보고, 흐름을 눈으로 익히면서 감각을 키워보세요.

// // =====================================실습================================
// // 동기적으로 실행되는 코드입니다.
// // 터미널에 node synchronous.js 명령어를 입력하여 확인해보세요.
// console.log('1. 작업 시작');

// for (let i = 0; i < 3; i++) {
//   console.log(`2. ${i}번째 작업 실행 중`);
// }

// console.log('3. 작업 완료');

// //비동기적으로 실행되는 코드입니다.
// // 터미널에 node asynchronous.js 명령어를 입력하여 확인해보세요.
// console.log('1. 비동기 작업시작');

// setTimeout(() => {
//   console.log('2. 2초 후 실행');
// }, 2000);

// console.log('3. 끝');

// // ===========================================================

// // 2. 목표 : Web API의 개념과 역할을 이해하고, Timer, Event, Fetch 등의 Web API를 활용하여 비동기 작업을 수행할 수 있다

// // "JavaScript는 싱글 스레드인데, 어떻게 동시에 여러 작업을 하는 것처럼 보일까요?"

// // 그 해답은 바로 Web API에 있습니다.

// // Web API는 브라우저가 제공하는 강력한 기능으로, JavaScript 코드의 실행을 멈추지 않고도 비동기적으로 작업을 처리할 수 있도록 도와줍니다.

// // 이번 학습에서는 Web API의 개념과 동작 구조, 그리고 대표적인 비동기 Web API인 `Timer`, `Fetch`, `Event Listener`를 활용하는 방법을 알아봅니다.


// // # ⚙️ Web API란?
// // 'Web API'는 브라우저가 JavaScript에 제공하는 기능 모음입니다. JavaScript 엔진과 별도로 실행되며, '비동기 작업을 가능하게 해주는 도구'입니다.
// // - 예: `setTimeout()`, `fetch()`, `addEventListener()` 등
// // - JavaScript가 직접 처리하지 않고 '작업을 위임'합니다
// // - 브라우저가 작업을 완료한 후, '콜백 또는 Promise'를 통해 결과를 JavaScript에 전달합니다

// // ## 🔁 Web API의 동작 방식
// // Web API는 다음의 단계를 거쳐 '비동기적으로 JavaScript와 상호작용'합니다.

// // 1. 'JavaScript에서 Web API 호출'
// //     - `setTimeout()`, `fetch()` 등의 함수를 호출
// //     - JavaScript는 직접 실행하지 않고 Web API에 위임
// // 2. 'Web API가 작업 수행 후 콜백 등록'
// //     - 지정된 작업 수행 후, 콜백을 '콜백 큐(Callback Queue)' 또는 '마이크로태스크 큐(Microtask Queue)'에 등록
// // 3. '이벤트 루프(Event Loop)가 실행 대기'
// //     - JavaScript의 실행 스택(Call Stack)이 비어 있으면, 대기 중인 콜백을 실행 스택으로 이동
// // 4. '콜백 실행'
// //     - JavaScript가 해당 함수를 실행하면서 비동기 로직이 이어짐
// function callback() {
//   console.log("setTimeout 실행완료!");
// }

// setTimeout(callback, 2000); // Web API에 위임 → 2초 후 콜백 큐 등록
// // 이 동작 구조는 이벤트 루프(Event Loop)에 의해 지속적으로 감시되고 실행됩니다.

// // ㅇ 'Promise를 반환하는 Web API는 어떻게 동작할까요?'
// //     - `fetch()`나 `response.json()`처럼 'Promise를 반환'하는 Web API는, 후속 작업을 `.then()`에 등록합니다.
// //     - 이때 등록된 콜백은 '마이크로태스크 큐(Microtask Queue)'에 저장됩니다.
// //     - 마이크로태스크는 일반 콜백 큐보다 '우선순위가 높아 먼저 실행'됩니다.

// // ㅇ '이벤트 루프(Event Loop)'는 JavaScript가 비동기 작업을 처리하는 핵심 메커니즘입니다.

// // - 'Call Stack(콜 스택)': 현재 실행 중인 코드의 실행 위치를 추적
// // - 'Callback Queue(콜백 큐)': `setTimeout()`, `addEventListener()` 등의 콜백 함수가 대기하는 공간
// // - 'Microtask Queue(마이크로태스크 큐)': `Promise.then()`, `MutationObserver` 등 '더 빠르게 실행해야 하는 비동기 작업'이 대기하는 공간

// // '이벤트 루프는 다음의 역할을 수행합니다.'

// // 1. 콜 스택이 비어 있는지 지속적으로 확인합니다.
// // 2. 마이크로태스크 큐에 작업이 있다면 가장 먼저 꺼내서 실행합니다.
// // 3. 그다음 콜백 큐에 작업이 있다면 꺼내서 실행합니다.

// // 이 구조 덕분에 JavaScript는 '싱글 스레드 환경에서도 멈추지 않고 여러 작업을 처리'할 수 있습니다.


// // 🛠 주요 비동기 Web API 살펴보기

// // 1️⃣ 타이머 API
// // 타이머 API는 '일정 시간 후 또는 일정 시간 간격으로 실행되는 함수'를 예약합니다. 지정한 시간 동안 기다리는 것이 아니라, '예약만 하고 다음 코드를 계속 실행'합니다.

// // | 메서드 | 설명 |
// // | `setTimeout(callback, delay)` | delay(ms) 후 1회 실행 |
// // | `setInterval(callback, interval)` | interval(ms)마다 반복 실행 |
// // | `clearTimeout(id)` | 예약된 timeout 취소 |
// // | `clearInterval(id)` | 예약된 interval 취소 |
// setTimeout(() => console.log("1초 후 실행!"), 1000);
// // setInterval(() => console.log("1초마다 실행!"), 1000);

// // ✅ 타이머 중첩 예시
// // 타이머를 중첩해서 작성하면 단계별로 코드를 실행할 수 있습니다.
// console.log("시작");

// setTimeout(() => {
//   console.log("2초 후 실행");

//   setTimeout(() => {
//     console.log("추가로 2초 후 실행");
//   }, 2000);

// }, 2000);

// console.log("1번 실행 완료");

// // 📤 출력 결과
// // 1. 시작
// // 2. 1번 실행 완료
// // 3. 2초 후 실행
// // 4. 추가로 2초 후 실행


// // 2️⃣ Fetch API (네트워크 요청)
// // `fetch()`는 서버에 요청을 보내고 응답을 기다리는 동안 코드 실행을 멈추지 않도록 동작하는 Web API입니다.
// // 네트워크 응답을 기다리는 동안에도 다른 작업이 수행될 수 있도록 설계되어 있으며, '비동기 함수로 Promise를 반환'합니다.
// // | 메서드 | 설명 |
// // | `fetch(url)` | 지정한 URL로 HTTP 요청을 보냄 (Promise 반환) |
// // | `response.json()` | 응답 데이터를 JSON으로 변환 (Promise 반환) |
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())  // 응답을 JSON으로 변환
//   .then(data => console.log(data))    // 데이터를 콘솔에 출력
//   .catch(error => console.error("에러 발생:", error));
// // - `fetch()`는 서버로 데이터를 요청하고,
// // - `response.json()`을 통해 응답을 JSON으로 변환한 후,
// // - `.then()`으로 후속 작업을 연결합니다.
// // - 실패 시 `.catch()`에서 에러를 처리할 수 있습니다.

// // 3️⃣ 이벤트 리스너 (Event Listener)
// // 이벤트 리스너는 '이벤트가 발생할 때까지 대기'하다가, 발생 즉시 콜백 함수를 실행합니다. 이 동작도 비동기 방식입니다.
// // document.querySelector("button").addEventListener("click", () => {
// //   console.log("🎯 버튼 클릭!");
// // });
// // - `click`, `keydown`, `submit` 등 다양한 사용자 입력 이벤트 감지 가능
// // - 콜백 함수는 이벤트가 발생할 때마다 '자동으로 실행'


// // ⚠️ Web API 사용 시 주의 사항
// // Web API는 강력한 기능을 제공하지만, '동작 타이밍과 구조를 정확히 이해하지 않으면 예상치 못한 결과'를 초래할 수 있습니다. 아래 사항들을 기억하세요.

// // 1. setTimeout(..., 0)도 즉시 실행이 아님
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");
// // - 결과: `A → C → B`
// // - `0ms` 지연이라도 '콜백 큐에 등록되므로', 콜 스택이 비워질 때까지 실행되지 않습니다.

// // 2. Promise.then()은 콜백 큐보다 우선순위가 높음
// setTimeout(() => console.log("타이머"), 0);
// Promise.resolve().then(() => console.log("프로미스"));
// // - 결과: `프로미스 → 타이머`
// // - `then()` 내부는 '마이크로태스크 큐'에 들어가 먼저 실행됩니다.

// // 3. 무한 루프 `setInterval()` 주의
// // - 종료 조건 없는 `setInterval()`은 메모리 누수와 성능 저하를 유발할 수 있습니다.
// // - 반드시 `clearInterval()`로 종료 조건을 제어하세요.

// // 4. 이벤트 리스너 중복 등록 주의
// // element.addEventListener("click", handler);
// // 여러 번 실행되면 중복 등록되어 의도치 않게 여러 번 실행될 수 있음
// // - 한 번만 실행되도록 하려면 `{ once: true }` 옵션을 사용하거나,`
// // removeEventListener()`로 명시적으로 제거해야 합니다.


// // 'Web API는 JavaScript가 비동기적으로 작동할 수 있게 해주는 핵심 동력입니다.'

// // 타이머, 네트워크 요청, 사용자 이벤트 감지 등 대부분의 비동기 동작은 Web API를 통해 이루어집니다.

// // 👉 Web API를 제대로 이해하면

// // ✔️ 실행 순서를 예측할 수 있고,

// // ✔️ 비동기 흐름의 버그를 줄일 수 있으며,

// // ✔️ 더욱 안정적이고 반응성 높은 프로그램을 만들 수 있습니다.

// // ==============================실습=========================

// //setTimeout을 중첩해서 작성했을 때 코드 동작을 살펴보세요.
// console.log('1.시작');

// setTimeout(() => {
//   console.log('2초 후 실행');

//   setTimeout(() => {
//     console.log('⏳ 추가로 3초 후 실행');
//   }, 3000);
// }, 2000);

// console.log('1번 실행 완료');

// // ======================================================================

// // 3. 목표 : Promise의 개념과 동작 흐름을 이해하고, 사용법을 설명할 수 있다. 

// // '비동기 작업이 많은 현대 웹 개발에서 `Promise`는 필수 개념입니다.'

// // `Promise`를 이해하면 `콜백 지옥`을 벗어나 깔끔하고 읽기 쉬운 코드를 작성할 수 있으며, 나아가 `async/await` 구문을 이해하는 기반이 됩니다. 

// // 이번 학습에서는 `Promise`의 구조, 사용법, 그리고 각 메서드의 의미를 정확히 파악해 보겠습니다.


// // 💡 Promise란?
// // `Promise`는 JavaScript에서 '비동기 작업을 효율적으로 처리하기 위해 사용되는 객체'입니다.
// // 이 객체는 비동기 작업의 상태인 `pending`, `fulfilled`, `rejected`를 추적하며, 상태에 따라 적절한 후속 작업을 처리할 수 있도록 다양한 메서드를 제공합니다.
// // | 메서드 | 설명 |
// // | `then()` | 비동기 작업이 성공(`fulfilled`)했을 때 실행할 함수 지정 |
// // | `catch()` | 비동기 작업이 실패(`rejected`)했을 때 실행할 함수 지정 |
// // | `finally()` | 성공/실패 여부와 관계없이 실행 |
// // | `Promise.resolve()` | 즉시 `fulfilled` 상태의 Promise 생성 |
// // | `Promise.reject()` | 즉시  `rejected` 상태의 Promise 생성 |

// // ❓Promise를 사용하는 이유
// // 기존에는 Web API의 비동기 작업에 '콜백 함수를 직접 전달'해야 했습니다. 하지만 작업이 많아질수록 코드가 복잡해지기 시작합니다.

// // 🧨 콜백 헬(CallBack Hell)
// // 콜백 함수가 반복적으로 중첩되면 코드의 흐름을 이해하기 어려워지고, 유지보수도 까다로워집니다.
// // 이를 흔히 '콜백 헬(CallBack Hell)'이라 부릅니다.
// asyncTask("1", () => {
//   asyncTask("2", () => {
//     asyncTask("3", () => {
//       // ...
//     });
//   });
// });
// // - 콜백이 중첩되면 '가독성이 떨어지고 유지보수가 어려워집니다'
// // - 어디서 문제가 발생했는지 추적하기 힘듭니다

// // ㅇ 극단적인 CallBack Hell 예시코드
// function asyncTask(taskName, callback) {
//   setTimeout(() => {
//     console.log(`${taskName} 완료!`);
//     callback();
//   }, 500);
// }

// // 콜백 지옥 시작 🚨
// asyncTask("작업 1", () => {
//   asyncTask("작업 2", () => {
//     asyncTask("작업 3", () => {
//       asyncTask("작업 4", () => {
//         asyncTask("작업 5", () => {
//           asyncTask("작업 6", () => {
//             asyncTask("작업 7", () => {
//               asyncTask("작업 8", () => {
//                 asyncTask("작업 9", () => {
//                   asyncTask("작업 10", () => {
//                     console.log("모든 작업 완료!");
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // ✅ Promise로 구조 개선
// // Promise를 사용하면 '콜백을 중첩하지 않고', `.then()`과 `.catch()`를 통해 '후속 작업을 깔끔하게 연결'할 수 있습니다.
// asyncTask("1")
//   .then(() => asyncTask("2"))
//   .then(() => asyncTask("3"))
//   .catch((err) => console.error("에러 발생:", err));
// // - `.then()`을 사용하면 '비동기 작업의 흐름을 순차적으로 표현'할 수 있습니다
// // - `.catch()`를 통해 '에러를 한 곳에서 일관되게 처리'할 수 있습니다

// // 🔁 Promise의 동작 흐름
// // `Promise`는 기본적으로 `pending` 상태에서 시작되며, 작업이 완료되면 `fulfilled` 또는 `rejected` 상태로 전환됩니다. 이 두 상태를 통틀어 'settled(처리 완료)' 상태라고 부릅니다.
// // - `pending` : 아직 작업이 완료되지 않은 상태(대기 중)
// // - `fulfilled` : 작업이 성공적으로 완료된 상태
// // - `rejected` : 작업이 실패한 상태
// // - `.then()`과 `.catch()`는 작업이 완료되면 실행됩니다
// // - 이 메서드들은 새로운 Promise를 반환하며, '체이닝(Promise chaining)'이 가능합니다

// // ❓ '비동기 작업을 순차적으로 수행하는 것이 왜 중요한가요? '
//     // 비동기 작업 간의 '의존성' 때문입니다. 
    
//     // 아래 예시 상황을 살펴봅시다. 
    
//     // > "사용자가 로그인을 해야, 유저 데이터를 불러오고,
//     // > 유저 데이터를 불러와야 화면에 정보를 표시할 수 있습니다."
    
//     // 이때 작업을 순차적으로 처리하지 않으면,
    
//     // - 로그인도 되기 전에 유저 데이터를 가져오려고 시도하거나,
//     // - 데이터가 준비되지 않은 상태에서 화면에 정보를 띄우려고 하게 됩니다.
    
//     // 이러한 상황은 결국 에러나 잘못된 정보를 사용자에게 보여주게 됩니다.

// // - ❓ '어차피 순차적으로 수행할거면 동기적(synchronous)으로 처리하면 되지 않나요?'
//     // 동기적(synchronous)으로 처리를 해버리면 '하나의 작업이 끝날 때까지 시스템 전체가 멈춰버리기 때문'에 비동기로 작업을 수행해야 합니다. 
    
//     // 다시 위의 예시 상황을 살펴봅시다. 
    
//     // > "사용자가 로그인을 해야, 유저 데이터를 불러오고,
//     // > 유저 데이터를 불러와야 화면에 정보를 표시할 수 있습니다."
    
//     // 만약 유저 데이터를 불러오는 동안, 사용자가 클릭도, 스크롤도, 그 어떤 작업도 하지 못하고 기다려야 한다면
    
//     // 사용자 경험이 매우 나빠질 것입니다.
    
//     // 따라서 '작업 간의 순서를 지키면서도, 사용자가 기다리는 동안 다른 일을 할 수 있도록 비동기적(asynchronous)인 처리를 사용하는 것입니다.'

// // ㅇ ✍️ Promise 작성하기
// // resolove() 호출
// // - .then()의 첫번쨰 인자(콜백) 실행
// // reject() 호출
// // - .catch()의 첫번쨰 인자(콜백) 실행
// // - .then()의 두번쨰 인자(콜백 실행)

// // 🔧 직접 생성하는 방법
// // Promise는 다음 두 가지 방식으로 정의할 수 있습니다.

// // 1. 직접 Promise 객체 생성
// // const myPromise = new Promise((resolve, reject) => {
// //   if (성공 조건) {
// //     resolve("성공!");
// //   } else {
// //     reject("에러 발생");
// //   }
// // });
// // // new 키워드를 사용해서 Promise 객체를 생성하고, myPromise라는 변수에 저장했습니다. 

// // //Promise 객체를 직접 생성한 경우
// // myPromise.then(result => console.log(result));
// // - `new Promise()`로 직접 객체를 생성하고 변수에 저장합니다
// // - 호출 시 `.then()`을 사용해 결과를 처리합니다

// // 2. 함수가 Promise를 반환
// // function myAsyncTask() {
// //   return new Promise((resolve, reject) => {
// //     if (성공 조건) {
// //       resolve("성공!");
// //     } else {
// //       reject("에러 발생");
// //     }
// //   });
// // }
// // // new 키워드로 Promise 객체를 생성하고, myPromise라는 함수의 return 값으로 반환하였습니다. 

// // //함수가 Promise를 반환하는 경우 
// // myAsyncTask().then(result => console.log(result));
// // - Promise를 반환하는 함수를 정의하고 호출 시 `.then()`을 연결합니다
// // - 실무에서는 '함수 형태가 재사용성과 유지보수 측면에서 더 유리'합니다


// // ☑️ resolve와 reject
// // Promise 내부에서는 작업의 결과에 따라 `resolve()` 또는 `reject()`를 호출합니다.
// // ㅇ resolve(value)
// // - 작업이 성공했음을 나타냅니다. 상태는 fulfilled로 변경되고 .then()이 실행됩니다
// // ㅇ reject(error)
// // - 작업이 실패했음을 나타냅니다. 상태는 rejected로 변경되고 .catch() 또는 .then()의 두 번째 콜백이 실행됩니다

// // resolve()는 반드시 호출해야 Promise가 완료됩니다. 호출하지 않으면 상태는 계속 pending으로 남습니다
// // reject()는 선택적이며, 오류 처리 로직이 필요할 때 사용합니다

// // 🚀 .then(), .catch(), .finally() 사용법

// // ▶️ `.then()` 메서드
// // `.then()`은 Promise가 `fulfilled` 상태가 되었을 때 실행할 후속 작업을 정의하는 메서드입니다. 두 개의 콜백 함수를 전달인자로 받을 수 있으며, 각각 작업이 성공하거나 실패했을 때 실행됩니다.
// myPromise.then(
//   (result) => {
//     console.log("성공:", result);
//   },
//   (error) => {
//     console.error("실패:", error);
//   }
// );
// // - 첫 번째 전달인자: 작업이 성공했을 때 실행 (`resolve()` 호출 시)
// // - 두 번째 전달인자: 작업이 실패했을 때 실행 (`reject()` 호출 시, 선택 사항)

// // 하지만 실무에서는 실패 처리를 `.then()`의 두 번째 전달인자로 처리하기보다는, ''`.catch()`를 사용하는 방식이 더 권장됩니다.''

// // `.catch()`를 사용하면 체이닝 도중 어디서 오류가 발생하든 '한 곳에서 일괄적으로 처리할 수 있어' 코드의 가독성과 유지보수성이 뛰어납니다. 성공과 실패 로직이 분리되기 때문에 흐름도 명확하게 표현됩니다.

// // 또한 `.then()`은 항상 새로운 Promise를 반환합니다. 이 특성 덕분에 여러 비동기 작업을 '순차적으로 연결하는 체이닝 구조'를 손쉽게 만들 수 있습니다.

// // 그리고 `.then()` 내부에서 예외가 발생하더라도 해당 에러는 자동으로 다음 `.catch()`로 전달됩니다. 따라서 각 `.then()`마다 개별적으로 에러 처리를 하지 않아도 되고, '전체 흐름을 안정적으로 제어할 수 있습니다.'
// myPromise
//   .then((result) => {
//     console.log("성공:", result);
//     throw new Error("중간에서 에러 발생!");
//   })
//   .catch((error) => {
//     console.error("모든 에러는 여기서 처리됨:", error.message);
//   });

// // 이처럼 `.then()` 내부에서 발생한 예외까지도 `.catch()`에서 처리할 수 있으므로, '비동기 코드의 안정성과 일관성을 확보하는 데 매우 효과적입니다.'

// // 아래는 함수로 전달인자를 나누어 사용하는 예시입니다.
// myPromise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log("결과:", result);
// }

// function onRejected(error) {
//   console.error("실패:", error);
// }
// // - `resolve()`가 호출되면 `onFulfilled()`가 실행됩니다.
// // - `reject()`가 호출되면 `onRejected()`가 실행됩니다.
// // - `.catch()`와 함께 사용할 경우, `onRejected()`는 생략 가능합니다.

// // ❗ .catch() 메서드
// myPromise
//   .then((result) => {
//     console.log("결과:", result);
//   })
//   .catch((error) => {
//     console.error("catch에서 처리:", error);
//   });
// // - `reject()`로 전달된 에러는 물론
// // - `.then()` 내부에서 발생한 예외도 처리할 수 있습니다
// const myPromise = new Promise((resolve, reject) => {
//   reject("에러 발생!");
// });

// myPromise
//   .then((result) => {
//     console.log("결과:", result);
//   })
//   .catch((error) => {
//     console.error("catch에서 처리:", error); // "catch에서 처리: 에러 발생!"
//   });
// // 이처럼 .catch()는 후속 체인 전체의 오류를 한 번에 처리할 수 있기 때문에, 실무에서는 가장 많이 사용되는 방식입니다.
// // - 🔍`.then(onFulfilled, onRejected)`와 `.catch(onRejected)`의 차이점
//     // `.then()`의 두 번째 인자로 오류 처리 함수를 넘길 수도 있지만, `.catch()`를 사용하는 방식이 더 명확하고 안전합니다.
// // | 구분 | `.then(onFulfilled, onRejected)` | `.catch(onRejected)` |
// // | 처리 위치 | `.then()`에서만 처리 가능 | 전체 체인에서 발생한 오류를 처리 |
// // | 예외 처리 범위 | `reject()`만 처리 | `reject()` + `.then()` 내부 예외까지 처리 |
// // | 가독성 | 성공/실패 로직이 섞임 | 실패 로직을 별도로 분리해 더 깔끔함 |
// // | 실무 권장도 | X | ✅ |
// const myPromise = new Promise((resolve, reject) => {
//   resolve("성공!");
// });

// myPromise
//   .then(
//     (result) => {
//       console.log("결과:", result);
//       throw new Error("then 내부에서 에러 발생!"); // ❌ 예외 발생
//     },
//     (error) => {
//       console.error("then의 onRejected에서 처리:", error); // 실행되지 않음 🚫
//     }
//   )
//   .catch((error) => {
//     console.error("catch에서 처리:", error.message); // 실행됨 ✅
//   });
// // - `.then()`의 두 번째 인자인 `onRejected`는 `reject()`에 의해 발생한 에러만 처리할 수 있습니다.
// // - 반면 `.catch()`는 `reject()`와 `.then()` 내부의 예외 모두 처리합니다.
// // - 또한 체인 도중 `.catch()` 이전의 `.then()`에서 예외가 발생하면, 자동으로 `.catch()`로 전달되어 실행됩니다.

// // 실무에서는 대부분 .catch()를 사용합니다
// // 구분    /   .then() 두 번째 전달인자    /   .catch()
// // 처리 위치   / .then() 내부에서만 처리   /    모든 오류를 한 곳에서 처리
// // 가독성      /   에러가 분산됨           /   코드가 깔끔하게 정리됨
// // 체인 처리   / 중간에 에러 나면 복잡     /   체인 마지막에 하나만 둬도 

// // 📦 `.finally()` 메서드
// // `.finally()`는 `Promise`의 성공(`fulfilled`) 또는 실패(`rejected`) 여부와 상관없이 항상 실행되는 메서드입니다.
// // 비동기 작업이 끝난 뒤 '공통적으로 처리해야 할 정리 작업'이 있다면, 이 메서드를 활용하면 좋습니다.
// myPromise
//   .then((result) => {
//     console.log("결과:", result);
//   })
//   .catch((error) => {
//     console.error("에러:", error);
//   })
//   .finally(() => {
//     console.log("작업 종료"); // 항상 실행됨
//   });

// // ✅ `.finally()`의 특징
// // - `.then()` 또는 `.catch()` 이후에 실행됩니다
// // - `resolve()`나 `reject()`와 상관없이 '항상 실행'됩니다
// // - '매개변수를 받지 않기 때문에 결과 값에는 접근할 수 없습니다'
// promise.finally(callback);

// // 📌 언제 사용하면 좋을까?
// // - 로딩 애니메이션 제거
// // - 파일, DB 연결 해제
// // - 공통 리소스 정리 등
// //     '성공/실패와 무관하게 무조건 실행돼야 하는 코드'를 처리할 때 유용합니다
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("성공!");
//   }, 1000);
// });

// myPromise
//   .then((result) => {
//     console.log("결과:", result);
//   })
//   .catch((error) => {
//     console.error("실패:", error);
//   })
//   .finally(() => {
//     console.log("작업 완료!"); // 성공이든 실패든 실행됨
//   });

// //   🔒 주의할 점
// // - `.finally()`는 단순히 후처리를 위한 용도로만 사용되며, `resolve`나 `reject`의 '값에는 접근할 수 없습니다'
// // - '실제로 후속 로직에서 결과 값이 필요하다면 `.then()`이나 `.catch()`에서 처리해야 합니다'

// // ⚠️ 사용 시 주의사항

// // - `Promise`는 '즉시 실행'되는 함수입니다
// //     → 생성과 동시에 실행되므로, 내부에 비동기 로직이 포함돼 있다면 '타이밍을 잘 제어'해야 합니다

// // - `.then()`은 항상 새로운 `Promise`를 반환합니다
// //     → 이를 활용해 '연속적인 작업(체이닝)'을 구성할 수 있지만, '의도하지 않은 체인 누락'에 주의해야 합니다

// // - `.catch()`는 반드시 하나는 붙이는 습관을 들이세요
// //     → 오류가 발생해도 `.catch()`가 없으면 오류가 전파되지 않거나 콘솔에만 출력되어 '디버깅이 어려워질 수 있습니다'

// // - `.finally()`는 후처리에만 사용하고, '결과 값에 접근할 수 없다는 점'을 기억하세요
// //     → 데이터 핸들링은 `.then()` 또는 `.catch()`에서 처리해야 합니다

// // - '`Promise`는 예외를 자동으로 처리하지 않습니다'
// //     → `throw`나 예상하지 못한 에러는 `.catch()` 또는 `try/catch`로 꼭 처리해야 합니다


// // 'Promise는 단순한 비동기 도구를 넘어, 코드의 흐름을 명확하게 설계할 수 있도록 도와주는 도구입니다.' 

// // `.then()`과 `.catch()`, `.finally()`의 특성을 잘 이해하고 체이닝 구조를 통해 비동기 로직을 깔끔하게 정리해보세요. 이 개념을 잘 익혀두면 `async/await` 문법도 훨씬 자연스럽게 이어서 학습할 수 있습니다.
// // '이제 비동기 코드도 자신 있게 다뤄볼 차례입니다!'

// // =======================================실습=========================================
// // Promise를 반환하는 함수 asyncFunction()을 완성하세요.
// function asyncFunction() {
//   // new 키워드로 Promise를 생성 후 반환합니다.
//   //resolve()를 호출하여 'asyncFunction 실행!'을 반환합니다.
//   return new Promise((resolve) => {
//     resolve('asyncFunction 실행!');
//   });
// }

// // asyncFunction()을 호출한 후, then() 체이닝으로 다음 작업을 작성하세요.
// asyncFunction().then((data) => {
//   console.log(data);
// });
// // resolve()에서 전달받은 값을 출력하세요.

// // =====================================================================

// // 4. 목표 : async/await의 개념과 사용법을 이해하고, Promise와의 차이를 설명할 수 있다.

// // '복잡한 비동기 흐름을 더 읽기 쉽게 만들고 싶으신가요?'

// // `async/await` 문법을 사용하면 복잡한 `.then()` 체이닝 없이도 '동기 코드처럼 깔끔하게 비동기 로직을 작성'할 수 있습니다. 지금부터 그 구조와 사용법을 하나씩 살펴보겠습니다!


// // 💡 async/await란?

// // `async/await`는 Promise 기반의 비동기 코드를 '더 직관적이고 동기 코드처럼 작성'할 수 있도록 도와주는 문법입니다.

// // - 비동기 작업을 수행하는 함수 앞에 `async` 키워드를 붙이면, 해당 함수는 '항상 Promise를 반환'합니다.
// // - 함수 내부에서 Promise를 반환하는 작업 앞에 `await`을 붙이면, 해당 작업이 완료될 때까지 '기다렸다가 다음 줄을 실행'합니다.

// // 즉, `.then()` 체이닝 없이도 '비동기 흐름을 직관적으로 제어'할 수 있어 가독성이 크게 향상됩니다.

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();
// // - `fetchData()`는 Promise를 반환하는 비동기 함수입니다.
// // - Promise를 반환하는 Web API인 `fetch()` 는 `await` 키워드와 함께 사용합니다.
// // - `fetch()` 의 작업이 끝나면 다음 작업인 `response.json()`이 시작됩니다.
// // - `response.json()`이 끝나면 `console.log(data)` 가 실행됩니다.

// // 🔁 Promise와 async/await 비교하기
// // 같은 동작을 Promise 체이닝과 async/await 방식으로 비교해보겠습니다.

// // ✅ Promise 체이닝 방식
// function fetchData() {
//   return new Promise((resolve) => {
//     resolve("데이터 가져오기 완료!");
//   });
// }
// fetchData().then(console.log);

// // ✅ async/await 방식
// async function fetchData() {
//   return "데이터 가져오기 완료!";
// }

// async function getData() {
//   const result = await fetchData();
//   console.log(result);
// }
// getData();

// // ### 비교 포인트
// // - `async` 키워드를 사용하면 함수가 자동으로 Promise를 반환합니다.
// // - `await`을 사용하면 `.then()` 없이도 결과를 변수에 직접 담을 수 있습니다.
// // - '비동기 코드를 동기 코드처럼 작성할 수 있어' 가독성과 유지보수성이 향상됩니다.

// // 🔒 try-catch-finally로 흐름 제어하기
// // 📌 Promise 체이닝 방식
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log("성공:", data);
//   })
//   .catch(error => {
//     console.error("에러 발생:", error);
//   })
//   .finally(() => {
//     console.log("요청 종료");
//   });
  
// // 📌 async/await + try-catch-finally 방식
// async function fetchData() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("성공:", data);
//   } catch (error) {
//     console.error("에러 발생:", error);
//   } finally {
//     console.log("요청 종료");
//   }
// }

// // ㅇ 핵심 요약
// // | 구분 | Promise 체인 방식 | async/await + try-catch-finally |
// // | 구조 | `.then()` `.catch()` `.finally()` 체이닝 | 코드 블록으로 분리 |
// // | 가독성 | 중첩이 생길 수 있음 | 동기 코드처럼 읽힘 |
// // | 예외 처리 | `.catch()`에서만 처리 | `catch` 블록에서 처리 |
// // | 후처리 | `.finally()` 사용 | `finally` 블록에서 처리 |

// // - `try`블록 : 비동기 요청 및 응답 처리 등 정상적으로 실행될 코드를 작성
// // - `catch` 블록 : `try` 블록에서 예외가 발생했을 때 실행할 코드를 작성
// // - `finally` 블록 : 오류 발생 여부와 관계없이 항상 실행될 코드를 작성

// // ⚠️ `try-catch-finally`는 `async/await` 전용 문법이 아니라, JavaScript의 기본 예외 처리 구문입니다. 다만, `await`과 함께 사용할 때 '가독성과 명확성이 뛰어나기 때문에 권장'됩니다.

// // 🧪 async/await 실전 예시

// // 1️⃣ 외부 API 호출 후 데이터 가공
// async function getUserName(userId) {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const user = await response.json();
//     return `${user.name}님의 이메일은 ${user.email}입니다.`;
//   } catch (error) {
//     return "사용자 정보를 가져오는 데 실패했습니다.";
//   }
// }
// getUserName(5).then(console.log);

// // - 사용자의 ID를 전달받아 외부 API에서 사용자 정보를 받아오고, 특정 포맷으로 가공해서 반환합니다.
// // - 예외가 발생하더라도 `try-catch`를 통해 안정적으로 처리합니다.

// // 2️⃣ 연속된 비동기 작업 처리
// async function saveAndNotify(data) {
//   try {
//     const saveResponse = await fetch("/api/save", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await saveResponse.json();

//     await fetch(`/api/notify?id=${result.id}`);
//     console.log("저장 및 알림 전송 완료!");
//   } catch (err) {
//     console.error("저장 또는 알림 과정에서 문제가 발생했습니다.");
//   }
// }
// // - 데이터를 먼저 저장한 후, 저장된 ID를 기반으로 알림을 전송하는 연속된 비동기 흐름입니다.
// // - `.then()` 없이도 '작업 순서를 명확하게 표현'할 수 있어 가독성이 높아집니다.

// // 3️⃣ 로딩 상태 UI와 함께 사용하는 경우
// async function loadDataWithLoadingUI() {
//   setLoading(true); // 로딩 UI 표시
//   try {
//     const response = await fetch("/api/data");
//     const data = await response.json();
//     renderData(data);
//   } catch (e) {
//     showError("데이터 로딩 실패");
//   } finally {
//     setLoading(false); // 무조건 실행되는 후처리
//   }
// }
// // - 비동기 요청 전후로 UI 상태를 변경해야 할 때 `.finally()`는 매우 유용합니다.
// // - 로딩 애니메이션 제어, 버튼 비활성화/활성화 등의 상황에서 자주 사용됩니다.


// // ## ⚠️ async/await 사용 시 주의사항
// // - `await`은 반드시 `async` 함수 안에서만 사용할 수 있습니다.
// // - `await`은 Promise가 '해결될 때까지 블로킹'되므로, 성능에 영향을 줄 수 있는 반복문에서는 신중하게 사용해야 합니다.
// // - 여러 비동기 작업을 병렬로 처리하려면 `Promise.all()`과 함께 사용하는 것이 효율적입니다.
// // - 항상 `try-catch` 블록과 함께 사용하여 예외를 안전하게 처리하는 습관을 들이세요.
// // - `finally` 블록은 공통 리소스 정리나 상태 초기화 등 '결과와 무관한 후처리에만 사용하는 것이 좋습니다.'


// // `async/await`는 Promise 기반 비동기 처리를 더 직관적으로 구성할 수 있는 강력한 도구입니다.

// // 이 개념을 확실히 익혀두면 나중에 `for await...of`, `Promise.all()`, `AbortController` 등 고급 비동기 패턴도 자연스럽게 이해할 수 있습니다.

// // 이제는 비동기 코드도 더 이상 두렵지 않습니다! 💪

// // =====================실습============================
// // 아래 코드는 .then()을 사용한 비동기 처리 방식입니다.
// // async/await를 사용하여 수정해보세요!

// // asyncFunction()를 Promise를 반환하는 함수로 수정하세요.
// function asyncFunction() {
//   return new Promise((resolve) => resolve('asyncFunction 실행!'));
// }

// // main()에서 async/await를 사용하여 asyncFunction()을 호출하고 데이터를 출력하도록 수정하세요.
// async function main() {
//   // asyncFunction().then((data) => {
//   //   console.log(data);
//   // });
//   const data = await asyncFunction();
//   console.log(data);
// }

// main();
// // ==================================================================

// // 5. 목표 : fetch()를 활용하여 데이터를 비동기적으로 요청하고, Promise 및 async/await과 함께 사용할 수 있다.

// // 🌐 fetch() 메서드란?
// // fetch()는 비동기 네트워크 요청을 수행하는 Web API 메서드입니다. 클라이언트가 서버로부터 데이터를 가져오거나 서버에 데이터를 보낼 때 사용합니다.

// // 📦 `fetch()` 메서드의 반환값은 어떻게 생겼을까?
// // `fetch()`는 실행과 동시에 `Promise<Response>` 객체를 반환합니다.
// // 이 Promise는 `pending` 상태로 있다가, 요청이 성공적으로 완료되면 `fulfilled` 상태가 되며, 결과로 `Response` 객체를 반환합니다.
// // `Response` 객체에는 다음과 같은 정보가 포함되어 있습니다:
// // - `ok`: 상태 코드가 200~299일 경우 `true`를 반환
// // - `status`: HTTP 상태 코드 (예: 200, 404, 500 등)
// // - `headers`: 응답 헤더 정보
// // - `body`: 응답 본문 (ReadableStream 형태, 바로 사용 불가)


// // 🚀 fetch() 사용법

// // ✉️ 기본 구조
// // `fetch()`는 두 개의 '전달인자'를 받을 수 있습니다:
// // - `resource`: 요청할 URL (문자열 또는 URL 객체)
// // - `options`: HTTP 요청 방식, 헤더, 요청 본문 등 (선택)
// fetch(resource);
// fetch(resource, options);

// // 💬 예시
// // 단순 GET 요청
// fetch("https://api.example.com/data");

// // POST 요청
// fetch("https://api.example.com/data", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ key: "value" }),
// });

// // 🔍 API 요청 URL이란?

// // API 요청 URL은 서버에 데이터를 요청할 때 사용하는 주소입니다. API 요청 URL은 '프로토콜, 도메인, 엔드포인트, 쿼리 스트링'으로 구성되며, API 명세서에서 확인할 수 있습니다. 필요한 응답에 따라 적절한 엔드포인트를 사용하여 API 요청을 보내면, 서버로부터 원하는 데이터를 받을 수 있습니다.
// // 백엔드에서 자체적으로 구성한 API URL이 있으며, 별도로 자유롭게 사용할 수 있는 외부 API도 존재합니다.
// // 백엔드 API는 내부 시스템에서 필요한 데이터와 기능을 제공하며, 외부 API는 오픈 데이터, 서드파티 서비스, 또는 공공 API 등을 활용할 때 사용됩니다.

// // 📕 API 요청 URL을 구성하는 요소

// // API 명세서에서 URL 구조와 파라미터를 확인할 수 있습니다.
// // - 프로토콜: `https://`
// // - 도메인: `api.example.com`
// // - 엔드포인트: `/data`
// // - 쿼리스트링: `?id=1` 등

// // 🧰 참고할 수 있는 오픈 API 예시
// // - [🌤️ OpenWeather](https://openweathermap.org/api)
// // - [🐱 PokeAPI](https://pokeapi.co/)
// // - [🐶 Dog API](https://dog.ceo/dog-api/)

// // 🔄 응답 처리 방법

// // `fetch()`는 네트워크 요청을 보내고 응답을 받을 수 있도록 도와주는 **비동기 함수**입니다. 이 함수는 `Promise<Response>` 객체를 반환하며, 바로 사용할 수 있는 데이터가 아닌 **응답(Response) 객체**를 전달해줍니다.

// // 응답 데이터는 우리가 자주 사용하는 **JavaScript 객체나 배열이 아닌, Raw 데이터(본문)** 상태이기 때문에 **적절한 형식으로 변환해주는 작업이 반드시 필요**합니다. 대부분의 REST API는 JSON 형식으로 응답을 주기 때문에, `response.json()` 메서드를 사용하여 **JSON 객체로 파싱(변환)**해야 합니다.

// // ❓ JSON 변환은 어떻게 하나요?
// // `response.json()` 메서드는 응답 본문을 **JSON 형식의 JavaScript 객체로 변환**하는 기능을 합니다.
// // 하지만 이 과정도 비동기적으로 동작하므로, **`Promise`를 반환**합니다.
// // 따라서 다음과 같은 방식으로 처리해주어야 합니다:

// // 📌 .then() 체이닝으로 처리하기
// fetch('https://api.example.com/data')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("서버 응답:", data);
//   });
// // - `fetch()`는 `Response` 객체를 반환합니다.
// // - `.json()` 메서드를 호출하여 해당 응답을 'JSON 형식으로 변환'합니다.
// // - 이 역시 `Promise`를 반환하므로 `.then()`을 사용해 다음 작업을 연결합니다.

// // 📌 async/await 방식으로 처리하기
// async function fetchData() {
//   const response = await fetch('https://api.example.com/data');
//   const data = await response.json();
//   console.log("서버 응답:", data);
// }

// // - `await fetch(...)`를 통해 `Promise`가 완료될 때까지 기다립니다.
// // - 이어서 `await response.json()`으로 본문을 JSON 객체로 파싱합니다.
// // - '동기 코드처럼 읽히는 구조'이기 때문에 가독성이 매우 뛰어납니다.

// // | 항목 | 설명 |
// // | `fetch()` | 서버에 요청을 보내고 응답을 받는 Web API |
// // | 반환값 | `Promise<Response>` 객체 |
// // | `.json()` | 응답 본문을 JSON 객체로 변환하는 메서드 (Promise 반환) |
// // | 처리 방식 | `.then()` 또는 `await`를 통해 다음 작업을 연결 |

// // =====================실습====================================
