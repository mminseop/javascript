// 1. 직원 관리하기
/**
 * JavaScript 7일차 과제
 * 직원 관리하기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 직원 명단(staffList)은 객체로 이루어져있으며, 각 프로퍼티는 직원ID: 직원정보로 구성되어 있습니다.
 * - 새로운 직원이 들어오면 직원ID를 이전 번호에 이어서 추가하며, 새로운 객체로 반환하여 staffList에 저장하는 함수를 만들어야 합니다.
 * - spead문법(...)을 활용하여 작성해야합니다.
 */
// 새로 들어오는 직원이 받을 id
let newStaffId = 1004;

// 직원 명단
let staffList = {
  1000: { name: '최오즈', age: '42', phoneNumber: '010-2244-7462' },
  1001: { name: '이코딩', age: '29', phoneNumber: '010-2290-0292' },
  1002: { name: '이수열', age: '24', phoneNumber: '010-1248-1632' },
  1003: { name: '오콘솔', age: '24', phoneNumber: '010-3122-2203' },
};
// 새로운 직원을 추가하여 새로운 직원 명단을 만드는 함수
function addNewStaff(newStaff) {
    let newStaffList = {};
    // 여기에 코드를 작성해주세요.
    newStaffList = {...staffList, [newStaffId++]: newStaff};
    return newStaffList;
}

// 새로 들어올 10명의 직원 정보
const newStaff = [
  { name: '오로그', age: '24', phoneNumber: '010-3122-2203' },
  { name: '김개발', age: '27', phoneNumber: '010-4721-1830' },
  { name: '이자스', age: '22', phoneNumber: '010-8354-6722' },
  { name: '박코딩', age: '25', phoneNumber: '010-9243-1567' },
  { name: '정디버그', age: '29', phoneNumber: '010-2417-8831' },
  { name: '최함수', age: '23', phoneNumber: '010-3820-4502' },
  { name: '한프론트', age: '26', phoneNumber: '010-9432-9120' },
  { name: '노자바', age: '21', phoneNumber: '010-6482-3305' },
  { name: '유인덱스', age: '28', phoneNumber: '010-5117-7614' },
  { name: '문서열', age: '24', phoneNumber: '010-1032-2841' },
];

// 10명의 직원이 들어올 때, 자동으로 새로운 직원 명단을 만드는 코드

// 여기에 코드를 작성해주세요.
newStaff.forEach((x) => {
    staffList = addNewStaff(x);
})
console.log(staffList);

// ===========================================
// 2. 마왕 물리치기
/**
 * JavaScript 7일차 과제
 * 마왕 물리치기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - reduce() 함수를 사용하여 해결해주세요.
 * - pattern은 마왕의 공격 패턴을 담은 배열입니다.
 *    - '[공격]'이라는 문자열이 포함된 경우, 방어를 해야하기에 마왕을 공격할 수 없습니다.
 *    - 마왕의 공격 패턴이 0일 때 마왕을 공격할 수 있습니다.
 * - 마왕을 공격할 때는, 박오즈가 주사위를 굴려 공격합니다. 주사위는 10, 20, 30, 40, 50 60 중 랜덤하게 나오며, 주사위 숫자에 맞춰 마왕을 공격할 수 있습니다.
 * - 마왕의 체력(HP)은 총 100입니다.
 * - 모든 패턴을 순회할 때, 박오즈가 마왕을 쓰러뜨렸는지 확인하는 문자열을 출력해주세요.
    - 마왕이 쓰러졌을 때: `‘박오즈는 강했다.’`
    - 마왕을 쓰러뜨리지 못했을 때: `‘박오즈는 보물에 생을 바쳤다.’`
 */

// 공격할 수 있는 데미지 배열
const dice = [10, 20, 30, 40, 50, 60];

// 마왕의 공격 패턴이 담긴 배열
const pattern = [
  '[공격] 뿔 찌르기',
  '[공격] 박치기',
  0,
  '[공격] 불 뿜기',
  0,
  '[공격] 꼬리 휘두르기',
  0,
];

// 마왕 체력
let LuciferHP = 100;

// 마왕이 쓰러졌는지 확인하는 변수
let isLuciferAlive = true;

// dice 배열에서 랜덤하게 값을 가져오는 함수
function getAttackDamage() {
  const randomDice = Math.floor(Math.random() * dice.length);
  return dice[randomDice];
}

// 마왕과의 대결: 마왕의 패턴에 따라 공격하는 함수를 작성해주세요.
LuciferHP = pattern.reduce((acc, cur) => {
  console.log(`패턴 : ${cur}`);
  if (acc > 0) {
    if (cur === 0) {
      const dmg = getAttackDamage();
      acc -= dmg;
      acc = Math.max(0, acc); // 체력 음수 방지
      if (acc === 0) isLuciferAlive = false;
      console.log(`공격력 : ${dmg} / 마왕체력 : ${acc}`);
      return acc;
    }
  } else if (acc <= 0) {
    isLuciferAlive = false;
    return 0;
  }
  return acc;
}, LuciferHP);

// reduce() 함수에 의해 반환된 LuciferHP가 0보다 작으면 isLuciferAlive를 false로 설정해주세요.

// 마왕을 쓰러뜨렸는지 확인하는 코드
if (isLuciferAlive) {
  console.log('박오즈는 보물에 생을 바쳤다.');
} else {
  console.log('박오즈는 강했다.');
}

// ============================================================================
// 3. 스텍 구조
/**
 * JavaScript 7일차 과제
 * 스택 자료구조 만들기
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

// 스택 만들기
const stack = [];

// 스택에 데이터 추가
function stackPush(newValue) {
  stack.push(newValue);
}

// 스택에서 데이터 삭제
function stackPop() {
  if (stack.length === 0) {
    return 'stack is empty';
  }
  return stack.pop();
}

// 스택의 가장 마지막 데이터 확인
function stackPeek() {
  if (stack.length === 0) {
    return 'stack is empty';
  }
  return stack[stack.length - 1];
}

// 스택이 비어있는지 확인
function stackIsEmpty() {
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log('============start===========');
console.log(stack);
stackPush('HTML');
console.log('============push===========');
console.log(stack);
stackPush('CSS');
console.log('============push===========');
console.log(stack);
stackPush('JAVASCRIPT');
console.log('============push===========');
console.log(stack);
stackPush('REACT');
console.log('============push===========');
console.log(stack);

console.log('============pop===========');
console.log(stackPop(), stack);
console.log(`peek is ${stackPeek()}`);
console.log(`stack is empty? ${stackIsEmpty()}`);
console.log('============pop===========');
console.log(stackPop(), stack);
console.log(`peek is ${stackPeek()}`);
console.log(`stack is empty? ${stackIsEmpty()}`);
console.log('============pop===========');
console.log(stackPop(), stack);
console.log(`peek is ${stackPeek()}`);
console.log(`stack is empty? ${stackIsEmpty()}`);
console.log('============pop===========');
console.log(stackPop(), stack);
console.log(`peek is ${stackPeek()}`);
console.log(`stack is empty? ${stackIsEmpty()}`);
console.log('============end===========');
