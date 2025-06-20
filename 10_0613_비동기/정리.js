// ✅ 1. Web API란? (타이머, 이벤트, fetch 등)
// 브라우저가 제공하는 비동기 기능들을 의미해요. 자바스크립트 자체엔 없고, 브라우저가 제공.

// 💡 개념:
// JavaScript 엔진은 싱글 스레드라서 한 번에 한 작업만 가능해요.

// 하지만 브라우저(Web API)는 대신 어떤 작업을 비동기적으로 실행해주고, 완료되면 콜백을 JS에게 알려줘요.

// 🛠 대표적인 Web API 예:
// 기능	설명
// setTimeout	일정 시간 후에 콜백 실행
// addEventListener	클릭/입력 등 이벤트 감지 후 콜백 실행
// fetch	서버에 HTTP 요청 보내고 결과 비동기적으로 받기


console.log("시작");

setTimeout(() => {
  console.log("3초 뒤 실행!");
}, 3000);

console.log("끝");

// ✅ 2. Promise란?
// 비동기 작업의 성공/실패 상태를 추적하고, 완료 시점에 맞춰서 .then, .catch로 후속 작업을 이어주는 객체.

// 💡 왜 필요할까?
// 콜백은 중첩이 많아지면 코드가 복잡해져요. → 이를 개선하기 위해 체이닝 가능한 Promise를 도입.

const promise = fetch("https://api.example.com/data");

promise
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("에러 발생:", error));

// 📌 동작 흐름:
// fetch() 실행 → 즉시 Promise 반환

// 비동기 작업 중 (대기 상태)

// 완료되면 .then() 실행

// 실패하면 .catch() 실행

// ✅ 3. async/await 이란?
// Promise를 동기 코드처럼 보이게 해주는 문법.
// 코드 가독성이 훨씬 좋아져요.

async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("에러 발생:", err);
  }
}
getData();

// 🔍 특징:
// await은 Promise가 끝날 때까지 기다림

// try/catch로 에러 처리 가능 → 가독성, 유지보수 뛰어남

// ✅ 4. fetch + Promise / async/await 통합 정리

// ✅ fetch + Promise 방식:
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("에러:", err));

// ✅ fetch + async/await 방식:
async function fetchData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("에러:", err);
  }
}

// 🧠 마무리 요약 그림으로 정리

//      [JS 코드] 
//          |
//          ↓
//  [Web API (Timer, Event, fetch)]
//          |
//          ↓ (완료되면)
//      [Callback → Promise → async/await]
//          ↓
//      [결과 처리 + 후속 작업]

// 콜백큐 보단 마이크로테스크 큐가 우선순위가 높음
// setTimeout() = 콜백큐
// promise.then() = 마이크로테스크 큐
