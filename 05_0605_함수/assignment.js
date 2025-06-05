// 1. 주사위 만들기 2
/**
 * JavaScript 5일차 과제
 * 주사위 만들기 2
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 랜덤 주사위 숫자 diceNumber를 만드는 rollingDice 함수를 만들어주세요.
 * 주사위 숫자는 함수를 호출할 때마다 랜덤한 숫자로 바뀌어야합니다.
 * rollingDice 함수 안에 diceArt를 넣어주세요.
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

// rollingDice 함수
function rollingDice() {
    // diceArt를 rollingDice 함수 안에 넣어주세요.
    const diceArt = [
        '0인 경우는 제외해주세요.',
        `
        ┌─────┐
        │          │
        │    ●    │
        │          │
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
    let randomNum = (Math.floor((Math.random() * 6 + 1)));
    return diceArt[randomNum];
}

console.log(rollingDice());

// ==============================================================
// 2.윤년 구하기 2
/**
 * JavaScript 5일차 과제
 * 윤년 구하기 2
 *
 * 출력 확인법
 * year 변수 값을 원하는 값으로 변경 후, Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * year를 매개변수로 받아 윤년인지 확인하는 함수를 만들어주세요.
 * - 윤년인 경우 출력 값
 *  "(연도)년은 윤년입니다."
 * - 윤년이 아닌 경우 출력 값
 *  "(연도)년은 윤년이 아닙니다."
 * 함수를 호출하여 결과를 확인해주세요.
 */

// 여기에 작성해주세요.
function leapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? `${year}년은 윤년입니다.` : `${year}년은 윤년이 아닙니다.`; 
}
console.log(leapYear(1900));

// ===============================================================
// 3. 카페 주문하기
/**
 * JavaScript 5일차 과제
 * 카페 주문하기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 점심값을 매개변수로 받아 살 수 있는 1800원 커피 수를 반환하는 함수를 만들어주세요.
 */

// 여기에 작성해주세요.
function countCoffee(price) {
    if (typeof price !== "number") {
        return "숫자만 입력해주세요";
    } else if (price <= 0) {
        return "양의 정수만 입력해주세요";
    }
    const total = 96000;
    const coffeePrice = 1800;

    if (price > total - coffeePrice ) {
        return '커피 살 돈이 남지 않았습니다';
    }
    const money = total - price;
    return Math.floor(money / coffeePrice) + '잔';
}

console.log(countCoffee(90000));