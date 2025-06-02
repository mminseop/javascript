// 과제!
// 1. 오류 해결하기
/**
 * JavaScript 2일차 과제
 * 오류 수정하기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 * 
 * 오류를 수정하여 이코딩을 도와주세요!
 *
 * 목표 출력
  
Jane님의 등급: GOLD
보너스 포인트: 3200P
총 보유 포인트: 35200P

 */

// 아래 코드를 수정해주세요.
const memberName = 'Jane';
const grade = 'gold';
const points = '32000';

const gradeLabel = grade.toUpperCase(); // 대문자로 만드는 코드
const bonusRate = 0.1;

const bonusPoints = Math.floor(points * bonusRate);

console.log(`${memberName}님의 등급: ${gradeLabel}`);
console.log('보너스 포인트:', bonusPoints + 'P');
console.log('총 보유 포인트:', Number(points) + bonusPoints + 'P');


// 2. 랜덤주사위
/**
 * JavaScript 2일차 과제
 * 주사위 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 주사위 숫자 diceNumber를 Math 함수를 활용하여 만들어주세요.
 * 주사위 숫자는 코드를 실행할 때마다 랜덤한 숫자로 바뀌어야합니다.
 *
 * 예시
 * 주사위 숫자 = 1;
 * 
 * 출력   
  ┌─────┐
  │     │
  │  ●  │
  │     │
  └─────┘
 */

// 여기에 코드를 작성해주세요.

const diceArt = [
  '0인 경우는 제외해주세요.',
  `
  ┌─────┐
  │     │
  │  ●  │
  │     │
  └─────┘
  `,
  `
  ┌─────┐
  │ ●   │
  │     │
  │   ● │
  └─────┘
  `,
  `
  ┌─────┐
  │ ●   │
  │  ●  │
  │   ● │
  └─────┘
  `,
  `
  ┌─────┐
  │ ● ● │
  │     │
  │ ● ● │
  └─────┘
  `,
  `
  ┌─────┐
  │ ● ● │
  │  ●  │
  │ ● ● │
  └─────┘
  `,
  `
  ┌─────┐
  │ ● ● │
  │ ● ● │
  │ ● ● │
  └─────┘
  `,
];

let diceNumber = Math.floor(Math.random() * 6) + 1;

console.log(`주사위 숫자 = ${diceNumber}`);
console.log(diceArt[diceNumber]);