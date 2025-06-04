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
for (let i = 0; i<weeklyReadingList.length; i++) {
    for (let j = 0; j<weeklyReadingList[i].length; j++) {
        console.log(`${i+1}주차 ${j+1}일차 책 : ${weeklyReadingList[i][j]}`);
    }
}
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

// 여기에 코드를 작성해주세요.
for (list of customerList) {
    if (list.includes('신규')) {
        newCustomers.push(list);
    }
}
console.log(newCustomers);


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
// console.log(wardrobe);
for (let top of wardrobe[0]) {
    for (let bottom of wardrobe[1]) {
        for (let shoes of wardrobe[2]) {
            cordination.push([`상의 : ${top}`, `하의 : ${bottom}`, `신발 : ${shoes}`]);
        }
    }
}

console.log(cordination);
