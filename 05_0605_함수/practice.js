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

// // 여기에 코드를 작성해주세요.
// let key;
// key = 100;

// // 보기: 100 number
// console.log(`보기: ${key} ${typeof key}`);

// // 보기: true boolean
// key = true;
// console.log(`보기: ${key} ${typeof key}`);

// // 보기: 보물은 내꺼 string
// key = '보물은 내꺼'
// console.log(`보기: ${key} ${typeof key}`);

// // 보기: {} object
// key = {};
// console.log(`보기:`,key, `${typeof key}`);

// // 보기: 20 number
// key = 20;
// console.log(`보기: ${key} ${typeof key}`);

// // 보기: 보물을 내손에 넣었다! string
// key = '보물을 내 손에 넣었다!';
// console.log(`보기: ${key} ${typeof key}`);

// ==============================================
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
// console.log('======================');
// 아래 코드를 수정해주세요.
const memberName = 'Jane';
const grade = 'gold';
const points = '32000';

const bonusRate = 0.1;
const gradeLabel = grade.toUpperCase();

const bonusPoints = Number(points) * bonusRate;

// console.log(`${memberName} 님의 등급 : ${gradeLabel}`);
// console.log(`보너스 포인트 : ${bonusPoints}`);
// console.log(`총 보유 포인트 : ${Number(points) + bonusPoints}`);

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
// random = Math.floor(Math.random() * 6 + 1);
// console.log(diceArt[random]);

// 1. 수열 계산하기
/**
 * JavaScript 3일차 과제
 * 수열 계산하기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * 1부터 300까지 모든 수를 더한 결과를 출력해주세요.
 */

// 여기에 코드를 작성해주세요.

// T(n) = 1 + 2 + 3 + ... + n
// n=300일 때 값은?
// - 목표 : 반복문을 통해 수열 값 도출하기
// - 주제 : 반복문을 활용한 수열 계산
// - 요구사항 :
//     - 반복문을 활용하여 1부터 300까지 덧셈 값을 구하세요.
// - 복습할 개념 체크 리스트
//     - [ ]  반복문
let sum = 0;
for (let i = 1; i <= 300; i++) {
    sum += i;
}
// console.log(`1부터 300까지의 합: ${sum}`);

// ==============================================
// 2. 배달 주문하기
/**
 * JavaScript 3일차 과제
 * 배달 주문하기
 *
 * 출력 확인법
 * menu 변수 값을 원하는 값으로 변경 후, Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * 메뉴 변수를 변경하면 메뉴 값에 맞게 메뉴와 가격을 출력합니다.
 */

// - 떡볶이
//     - 가격: 15000원
//     - 출력: `떡볶이: 15000원`
// - 김밥
//     - 가격: 3000원
//     - 출력: `김밥: 3000원`
// - 튀김
//     - 가격: 2000원
//     - 출력: `튀김: 2000원`
// - 우동
//     - 가격: 7500원
//     - 출력: `우동: 7500원`
// - 없는 메뉴
//     - 출력: `없는 메뉴입니다.`

let menu = '밥'; // 메뉴 변수
let priceText = ''; // 메뉴에 맞는 가격 변수
// 여기에 작성해주세요.

switch(menu) {
    case '떡볶이':
        priceText = `${menu}: 15000원`;
        break;
    case '김밥':
        priceText = `${menu}: 3000원`;
        break;
    case '튀김':
        priceText = `${menu}: 2000원`;
        break;
    case '우동':
        priceText = `${menu}: 7500원`;
        break;
    default:
        priceText = '없는 메뉴입니다.';
        break;
}
// console.log(priceText);

// ==============================================
// 3. 윤년 구하기
// 2024년: 4로 나눠짐 → 윤년 ✅
// 1900년: 4로 나눠지지만 100으로도 나눠짐 → 윤년 ❌
// 2000년: 4, 100, 400 모두 나눠짐 → 윤년 ✅
// 윤년 = 4의 배수이면서, 100의 배수가 아니거나, 400의 배수인 해

/**
 * JavaScript 3일차 과제
 * 윤년 구하기
 *
 * 출력 확인법
 * year 변수 값을 원하는 값으로 변경 후, Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * year가 윤년인지 확인해주세요.
 * - 윤년인 경우 출력 값
 *  "(연도)년은 윤년입니다."
 * - 윤년이 아닌 경우 출력 값
 *  "(연도)년은 윤년이 아닙니다."
 */

let year = 2024;
// 여기에 작성해주세요.
// if ((year & 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year}년은 윤년입니다.`)
// } else console.log(`${year}년은 윤년이 아닙니다.`)

// ((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0) ? console.log(`${year}년은 윤년입니다.`) : console.log(`${year}년은 윤년이 아닙니다.`);

// ====================================================
// 4. 별 찍기 (도전과제)

/**
 * JavaScript 3일차 과제
 * 별 찍기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 반복문을 활용하여 콘솔에 별을 출력해주세요.
 * - 변수 n에 맞춰 출력해주세요.
 */

let n = 5;

// 여기에 작성해주세요.

// for (let i = 1; i <= n; i++) {
//     let star = '';
//     let space = '';
//     for (let j = 1; j <= n-i; j++) {
//         space += ' ';
//     }

//     for (let k = 1; k <= 2*i-1; k++) {
//         star +='*';
//     }
//     console.log(space, star);
// }

// for (let i = 1; i <= n; i++) {
//     let star = "";
//     let space = "";

//     for (let k = 1; k <= n-i; k++) {
//         space += "공";
//     }
//     for (let j=1; j <= 2*i-1; j++) {
//         star += "*";
//     }
//     console.log(space, star);
// }

// 5. 소수 판별하기
/**
 * JavaScript 3일차 과제
 * 소수 판별하기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - n이 소수인 경우 (n)는/은 소수 , 소수가 아닌 경우 (n)는/은 소수가 아님 을 출력합니다.
 */

n = 1;
// 소수를 판별하는 변수
let isPrime = true;
// 여기에 작성해주세요.

if (n < 2) {
    console.log(`${n}은 2보다 작아 소수가 아닙니다.`);
} else {
    for (let i = 2; i <= n-1; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${n}은 소수입니다.`);
    } else {
        console.log(`${n}은 소수가 아닙니다.`);
    }
}

// 1. 주간 독서 이벤트 준비

/**
 * JavaScript 4일차 과제
 * 주간 독서 이벤트 준비
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 주어진 중첩 배열을 순회하며 주차별 독서 목록을 출력해주세요.
 */

// 주차별 독서 목록
const weeklyReadingList = [
  ['자바스크립트 입문', 'HTML 마스터', 'CSS 레이아웃'],
  ['프론트엔드 면접', '웹 보안 입문', '알고리즘 기초'],
  ['Git 사용법', '리액트 기초', '비동기 처리'],
  ['Next.js 개념', 'TypeScript 시작', '상태관리 패턴'],
];

// 여기에 코드를 작성해주세요.
// for (let i = 0; i < weeklyReadingList.length; i++) {
//     for (list of weeklyReadingList[i]) {
//         console.log(`${i+1}주차 ${i+1}일차 책 : ${list}`);
//     }
// }
// 정답코드?
// for (let i = 0; i<weeklyReadingList.length; i++) {
//     for (let j = 0; j<weeklyReadingList[i].length; j++) {
//         console.log(`${i+1}주차 ${j+1}일차 책 : ${weeklyReadingList[i][j]}`);
//     }
// }

/** 출력 예시
1주차 1일차 책: 자바스크립트 입문
1주차 2일차 책: HTML 마스터
1주차 3일차 책: CSS 레이아웃
2주차 1일차 책: 프론트엔드 면접
2주차 2일차 책: 웹 보안 입문
2주차 3일차 책: 알고리즘 기초
3주차 1일차 책: Git 사용법
3주차 2일차 책: 리액트 기초
3주차 3일차 책: 비동기 처리
4주차 1일차 책: Next.js 개념
4주차 2일차 책: TypeScript 시작
4주차 3일차 책: 상태관리 패턴 
 */

// =======================================================

// 2. 신규 고객 선별하기

/**
 * JavaScript 4일차 과제
 * 신규 고객 선별하기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - includes() 함수를 이용하여 “신규” 라는 문자열이 포함된 요소를 찾아 새로운 newCustomers 배열을 만들어주세요.
 */

const newCustomers = [];

// 고객 목록
const customerList = [
  '신규 - 오콘솔',
  '기존 - 이코딩',
  '신규 - 이수열',
  '기존 - 박오즈',
  '신규 - 최열심',
  '기존 - 신정열',
];

// 여기에 코드를 작성해주세요
for (list of customerList) {
    if (list.includes('신규')) {
        console.log(list);
        newCustomers.push([list]);
    }
}
console.log(newCustomers);
console.log(newCustomers.length);

// ===============================================
// 3. 봄 옷 고르기

/**
 * JavaScript 4일차 과제
 * 봄 옷 고르기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 아래 2차원 배열을 순회하면서 만들 수 있는 모든 코디 경우의 수를 담은 cordination 배열 만들어주세요.
 */

const cordination = [];

// 옷장
const wardrobe = [
  ['반팔', '후드티', '셔츠'],
  ['슬랙스', '청바지', '테니스치마'],
  ['구두', '단화', '스니커즈'],
];

// 여기에 코드를 작성해주세요.
for (top of wardrobe[0]) {
    for (bottom of wardrobe[1]) {
        for (shoes of wardrobe[2]) {
            cordination.push([top, bottom, shoes]);
        }
    }
}
// console.log(cordination);
// console.log(cordination.length);