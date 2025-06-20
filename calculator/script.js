// 4단계 구현 필수 요구사항
// ㅇ 변수명 맞추기 (firstOperand, secondOperand, operator)
// 첫 입력 > firstOperand 저장
// 연산자 입력 > operator 저장(여기서 firstOperand의 값을 secondOperand 옮기고 firstOperand 초기화 하시는게 편한 것 같아요)
// 연산자 입력 받은 후 입력하면 다시 firstOperan 저장

// ㅇ연산자 버튼 누를떄마다 firstOperand 값, operator 값 콘솔 출력

// ㅇ calculate 함수 구현
// 꼭 매개변수로 firstOperand, secondOperand, operator 값을 받아서 처리

// ===========================================================
// 저는 어제 태정 강사님께서 실시간세션에서 보여주신 것 처럼,

// 현재 입력하는 값이 연산자 클릭 전인지 후인지 상태를 알기 편하게 하기 위해
// flag 변수를 적용하여 이게 false면 연산전 숫자 입력 상태, true면 연산자를 입력 후 새 숫자 입력상태로 나눠서 했습니다. 이게 좀 생각하기 편하더라고요..!

// 방금 전체적인 구현 시 필수요구조건에 대해 간략하게 설명 드렸는데 혹시 글로 보내드리면 더 편하실 수도 있어서 이렇게 보내드립니다..!

// 오늘 마지막 프로젝트 날인데, 정말 고생 많으셨고 남은 시간 다들 화이팅 입니다~!

const numberButtons = document.querySelectorAll('.number'); //숫자버튼
const operatorButtons = document.querySelectorAll('.operator'); //연산버튼
const equalButton = document.querySelector('.equlBtn'); // = 버튼
const display = document.querySelector('.display'); // 디스플레이
const functionBtn = document.querySelectorAll('.function'); // 펑션버튼

let firstOperand = '';   //현재 입력 값
let operator = ''; //연산자
let secondOperand = '' // 이전 값? (연산자 입력 받으면 first 초기화 후 second 저장)
let isNewInput = false;    // true면 새 숫자 입력 시작 상태


// 화면 업데이트
function updateDisplay() {
     display.textContent = firstOperand || secondOperand || 0; // 우선순위 순 : 입력 중인 값 > 이전 값 >  0 표시

     if (display.textContent === 'error') {
        setTimeout(() => {
            reset();
            display.textContent = 0;
        }, 1000); // 1초 뒤 초기화
    }
 }

// 초기화
function reset() {
    firstOperand = '';
    operator = '';
    secondOperand = ''
    isNewInput = false;
}

// function버튼 분기처리
function getFunctionBtn(btn) {
    if (btn === 'C') {
        reset();
        updateDisplay();
    } else if (btn === '←' && firstOperand !== '') {
        firstOperand = firstOperand.slice(0, -1); //마지막 글자 제거
        updateDisplay();
    }
}

// 계산
function calculate(first, second, op) {
    const num1 = parseFloat(second);
    const num2 = parseFloat(first);
  
    let result = 0;

    switch (op) {
        case '+': 
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2; 
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'error';
            break;
        case '%':
            result = num1 % num2;
            break;
        default: 
            break;
    }

    // 소수점 정리
    if (typeof result === 'number') {
        result = parseFloat(result.toFixed(2)); // 소수점 2자리 까지만
    }

    firstOperand = result.toString(); // 계산한 값을 문자열로 변환해서 저장
    secondOperand = '';
    operator = '';
    updateDisplay();
}

// 숫자 버튼
numberButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === '0' && !firstOperand) return; // 0 중복 입력 방지

        // 새로 입력해야 하는 상태면 초기화하고 입력 시작 (true일 떄)
        if (isNewInput !== false) {
            secondOperand = firstOperand; // 이전 숫자 저장
            firstOperand = ''; // 현재 숫자 리셋
            isNewInput = false; // 새 입력 시작
        }

        if (value === '.' && firstOperand.includes('.')) return; // 소수점 중복 입력 방지
        if (value === '.' && firstOperand === '') firstOperand = '0'; // '.'으로 시작 시 '0.'으로 변환

        firstOperand += value;
        updateDisplay();
    });
});

// 연산자 버튼
operatorButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (firstOperand === '') return;

        // 이전에 입력된 secondOperand랑 operator가 둘다 있다면 계산 먼저
        if (secondOperand !== '' && operator !== '') {
            calculate(firstOperand, secondOperand, operator);
        } else {
            secondOperand = firstOperand; // 계산 전 상태라면 현재 입력값을 secondOperand로 저장
        }

        operator = btn.textContent === 'x' ? '*' : btn.textContent;
        isNewInput = true;  // 다음 숫자 입력을 위해 flag 설정

        console.log('First Operand: ', firstOperand);
        console.log('operator: ', operator);
    });
});

// = 버튼 클릭시
equalButton.addEventListener('click', () => {

    if (firstOperand === '' || secondOperand === '' || operator === '') return; // 하나라도 빈 값이면 종료
    calculate(firstOperand, secondOperand, operator);
})

// function 버튼 클릭시
functionBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;
        getFunctionBtn(value);
    })
})