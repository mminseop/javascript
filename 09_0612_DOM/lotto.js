/* 
  아래 코드는 강의 영상에서 완성한 코드입니다.
  다음 기능을 추가한 후 제출하세요.

  요구 사항: '추첨' 버튼을 누른 후, '다시' 버튼을 누르지 않은 채 '추첨' 버튼을 또 눌러도 새롭게 번호가 추가되어야 합니다.
*/

// 요소 선택 및 상수 선언
const todaySpan = document.querySelector('#today');
const numbersDiv = document.querySelector('.numbers');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');
const lottoNumbers = [];
const colors = ['orange', 'skyblue', 'red', 'purple', 'green'];
const today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `;

// paintNumber 함수
function paintNumber(number) {
  const eachNumDiv = document.createElement('div');
  eachNumDiv.classList.add('eachnum');
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function () {
    // 이미 lottoNumbers가 가득 차 있을 때(길이가 6일 때)
  if (lottoNumbers.length === 6) {
    lottoNumbers.splice(0);
    numbersDiv.innerHTML = '';
  }

  while (lottoNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNumber(ran);
    }
  }
});

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function () {
  lottoNumbers.splice(0, 6);
  numbersDiv.innerHTML = '';
});

const arr = [10, 20, 30, 40, 50];
const res = arr.reduce((acc, val) => {
    return [...acc, val, ...acc];
}, []);
console.log(res);

// ===============스택에 대해서================

// const stack = [];

// function push(item) {
//     stack.push(item);
// }

// function peek() {
//     // return stack[stack.length - 1];
//     return stack.at(-1);
// }

// function pop() {
//     stack.pop();
// }

// function isEmpty() {
//     return stack.length === 0;
// }

// const arr = ['마법사의돌', '비밀의 방', '아즈카반의 죄수', '불의 진', '불사조 기사단', '혼혈왕자', '죽음의 성물'];

// for (let item of arr) {
//     push(item)
// }

// // console.log(stack);
// pop();
// console.log(peek());
// pop();
// console.log(peek());
// push('트와일라잇');
// console.log(peek());

// ===============큐에 대해서================
// const queue = [];
// let start = 0;
// let end = 0;

// function enqueue(item) {
//     queue.push(item);
//     end++;
// }

// function dequeue(item) {
//     delete queue[start];
//     start++;
// }

// function isEmpty() {
//     return end === start;
// }

// // 앞 값 확인
// function front() {
//     return queue[start];
// }
// enqueue('월요일');
// enqueue('화요일');
// enqueue('수요일');
// enqueue('목요일');
// console.log(front());
// dequeue();
// console.log(front());
// dequeue();
// dequeue();
// console.log(front());
// console.log(isEmpty());
// dequeue();
// console.log(isEmpty());