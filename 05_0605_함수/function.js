// 실시간 세션

// 함수 : 컴퓨터와 "동사"를 약속하는 것 <-> 변수 : 컴퓨터와 "명사"를 약속하는 것

// ㅇ 함수를 정의하는 방법
// - 변수 선언 키워드: let, const
// - 함수 선언 키워드: function
// 함수 선언 키워드와 함수를 '표현할 때' -> 함수 표현식
// 함수 선언 키워드로 함수를 '선언(정의)할 때' -> 함수 선언문

// 함수 호이스팅 : 함수를 선언하기 전에 호출해도 호출되는 현상

// 숫자 x, y와 연산 부호 operator를 입력 받아, 연산 부호에 맞는 계싼기 함수
// const calculate = function(x, y, operator) {
//     // 의사코드 (pseudo code): 코드를 쓰기 전에 인간의 언어로 어떤 식으로 동작해야 하는지 설명
    
// }

const eventHandler = () => {
	const value = 20241022 + '';
	console.log(value);
	return value;
}

const a = eventHandler
const b = eventHandler();

console.log(typeof a);
console.log(typeof b);