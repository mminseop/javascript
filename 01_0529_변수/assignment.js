console.log("1번과제");
console.log(`
고양이
 /\\_/\\ 
( o.o ) 
 > ^ <
 
토끼
 (\\_/)
 ( •_•)
 />🌹
 
강아지
 /^ ^\\
/ 0 0 \\
V\\ Y /V
 / - \\
 |    \\
 || (__)
 
병아리
(•ө•)
(   )>
 " "

오리
<(' )
 (   )
  ^^
`);
console.log("============");

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
key = 100;

// 보기: 100 number
console.log(`보기: ${key} ${typeof key}`);

// 보기: true boolean
key = true;
console.log(`보기: ${key} ${typeof key}`);

// 보기: 보물은 내꺼 string
key = '보물은 내꺼'
console.log(`보기: ${key} ${typeof key}`);

// 보기: {} object
key = {};
console.log(`보기: ${key} ${typeof key}`);

// 보기: 20 number
key = 20;
console.log(`보기: ${key} ${typeof key}`);

// 보기: 보물을 내손에 넣었다! string
key = '보물을 내 손에 넣었다!';
console.log(`보기: ${key} ${typeof key}`);