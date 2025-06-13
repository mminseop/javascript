/**
 * 1.계산기 만들기
 * 
 * JavaScript 6일차 과제
 * 계산기 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 사칙연산이 가능한 계산기 함수를 만들어주세요.
 *  - num1, num2, operator 매개변수를 받아 다음과 같이 계산해주세요.
 *    - operator: `+`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 + num2`
 *    - operator: `-`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 - num2`
 *    - operator: `*`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 * num2`
 *    - operator: `/`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 / num2`
 *      - 0으로 나눌 경우는 0이 저장되게 해주세요.
 */

const calculateData = {
	view: 0, // 계산기 화면에 보이는 숫자
	history: 0 // 이전 계산 숫자
}

function calculator(num1, num2, operator) {
  // 연산자에 맞는 연산 결과를 반환하는 함수를 만들어주세요.
  if (operator === '+') {
    calculateData.history = calculateData.view;
    calculateData.view = num1 + num2;
    return num1 + num2;
  } else if (operator === '-') {
    calculateData.history = calculateData.view;
    calculateData.view = num1 - num2;
    return num1 - num2;
  } else if (operator === '*') {
    calculateData.history = calculateData.view;
    calculateData.view = num1 * num2;
    return num1 * num2;
  } else if (operator === '/') {
    calculateData.history = calculateData.view;
    (num2 !== 0) ? calculateData.view = num1 / num2 : calculateData.view = 0;
    return num1 / num2;
  } else return '연산은 +, -, *, / 만 가능합니다.';
}

// 계산기 테스트용 출력 코드
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(1, 2, '+');
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 1, '-');
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 2, '*');
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 1, '/');
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);

// =========================================================
// 2. 할 일 목록 관리하기
/**
 * JavaScript 6일차 과제
 * 할 일 목록 만들기
 *
 *
 * 요구사항
 * - Todos는 할 일들이 들어가는 객체입니다.
 * - Todos에는 다음과 같은 형태로 할 일들이 들어갑니다.
  {
    '첫번째': { todo: '운동하기', finished: false },
    '두번째': { todo: '청소하기', finished: false },
    '세번째': { todo: 'JavaScript 공부하기', finished: false },
    '네번째': { todo: 'HTML/CSS 복습하기', finished: false }
  }
 * - 함수를 활용하여 할 일 목록 관리 함수를 만듭니다.
 *    - 할 일 목록 추가 함수
 *    - 할 일 목록 삭제 함수
 *    - 할 일 목록 완료 함수
 */

const Todos = {};

// 함수를 완성해주세요.

// 할 일 목록 추가 함수
function addTodo(todoId, todo) {
    Todos[todoId] = {
        todo,
        finished: false
    }
}
addTodo('첫번쨰', '운동하기');
addTodo('두번쨰', '청소하기');
addTodo('세번쨰', 'JavaScript 공부하기');
addTodo('네번쨰', 'HTML/CSS 복습하기');

console.log(Todos);
// 할 일 목록 삭제 함수
function deleteTodo(todoId) {
    delete Todos[todoId];
}
deleteTodo('첫번쨰');
console.log(Todos);
// 할 일 목록 완료 함수
function finishTodo(todoId) {
    Todos[todoId].finished = true;
}
finishTodo('두번쨰');
console.log(Todos);

// =============================================================
// 3. 큐 자료구조 만들기(난이도: ⭐⭐) - 도전 과제

// ## 이번 과제는 **도전과제**입니다.

// 이번 과제에서는 자료구조란 무엇이며, 그 중 큐(Queue)라는 자료구조를 이해하고 객체를 활용하여 큐를 구현해주세요.


// 📦 자료구조란?

// '자료구조(Data Structure)'는 데이터를 효율적으로 저장하고, 필요할 때 빠르게 가져와 사용할 수 있도록 구성한 데이터 저장 방식입니다.

// 자료구조는 로직을 수행할 때, 빠르고 작은 용량으로 처리하기 위해 많이 사용됩니다.
// > 📌 대표적인 자료구조: 배열(Array), 스택(Stack), 큐(Queue), 트리(Tree) 등


// ⏪ 큐(Queue)

// '큐(Queue)'는 데이터를 먼저 넣은 순서대로 먼저 꺼내는 선입선출 (FIFO, First In First Out)방식으로 동작합니다.

// 예를 들면, 편의점과 마트 등에서 먼저 진열한 물품을 가장 먼저 꺼낼 수 있도록 진열하거나, 식당 웨이팅 시 먼저 기다린 사람들이 먼저 들어가는 방식입니다.

// 큐의 핵심은 '앞(front)에서 꺼내고, 뒤(rear)에서 넣는다.' 이며, 핵심을 이해하려면 큐가 동작하는 과정을 살펴볼 필요가 있습니다.

// 1. 뒤(rear)에서 데이터 추가
//     - 뒤에서 데이터를 추가하는 방법은 총 2가지 과정을 진행합니다.
//         1. 뒤(rear) 위치에 데이터를 저장합니다.
//         2. 뒤(rear) 위치에 + 1 을 통해 다음 저장위치를 가리킵니다.

// 2. 앞에서 데이터 제거
//     - 앞에서 데이터를 제거하는 방법은 총 2가지의 과정을 진행합니다.
//         1. 앞(front) 위치에 있는 데이터를 `delete` 키워드를 통해 삭제합니다.
//         2. 앞(front) 위치에 + 1을 통해 다음으로 삭제할 위치를 가리킵니다.

// 3. 가장 앞의 값 확인
//     - 앞(front) 위치에 있는 데이터를 확인합니다.

// 4. 큐가 비어있는지 확인
//     - 큐가 비어있는지는 앞(front)의 위치와 뒤(rear)의 위치를 체크하면 확인할 수 있습니다.
//         - 큐가 비어있지 않을 때: 앞(front)가 뒤(rear)보다 왼쪽에 있음
//         - 큐가 비어있을 때: 앞(front)와 뒤(rear)의 위치가 같음

// ## 객체를 활용한 큐 만들기

// 큐를 구현하는데에는 배열, 객체를 사용하는 등 다양한 방식이 있지만, 이번 과제에서는 객체를 활용하여 큐를 구현해봅시다.

// 큐는 총 4가지의 기능을 가지고 있습니다.

// 1. `enqueue`: 뒤(rear)에서 데이터 추가
// 2. `dequeue`: 앞(front)에서 데이터 제거
// 3. `peek`: 가장 앞의 값 확인
// 4. `isEmpty`: 큐가 비어있는지 확인


/**
 * JavaScript 6일차 과제
 * 큐 자료구조 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 큐의 4가지 기능을 각각의 함수로 만들어 큐를 구현해주세요.
    - 기능 1. `enqueue` : 뒤(rear)에서 데이터 추가
    - 기능 2. `dequeue`: 앞(front)에서 데이터 제거
    - 기능 3. `peek`: 가장 앞의 값 확인
    - 기능 4. `isEmpty`: 큐가 비어있는지 확인
 */

// 여기에 작성해주세요.
const queue = {};
let front = 0;
let rear = 0;

function enqueue(data) {
    queue[rear] = data;
    rear++;
}
enqueue('data1');
enqueue('data2');
console.log(queue);