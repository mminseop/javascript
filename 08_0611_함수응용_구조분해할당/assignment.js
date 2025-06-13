// 1. 오류 검출하기 2
/**
 * JavaScript 8일차 과제
 * 오류 해결하기 2
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * 아래 코드를 수정하여 출력값과 기대값을 같게 만들어주세요.
 * 기대값
    학생 번호: 1001
    학생 번호: 1002
    학생 번호: 1003
    학생 번호: 1004
    학생 번호: 1005
  * 출력값
    학생 번호: 1006
    학생 번호: 1006
    학생 번호: 1006
    학생 번호: 1006
    학생 번호: 1006
 */

const studentPrinters = [];

for (let i = 0; i < 5; i++) {
  studentPrinters.push(function () {
    console.log('학생 번호:', 1001 + i);
  });
}

studentPrinters[0]();
studentPrinters[1]();
studentPrinters[2]();
studentPrinters[3]();
studentPrinters[4]();

// =================================================
// 2. 탬플릿 만들기
/**
 * JavaScript 8일차 과제
 * 템플릿 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 신입 객체는 다음과 같습니다.
  {
    name: '정디버그',
    position: '주니어 프론트엔드 개발자',
    department: '기술개발실',
    contact: {
      email: 'debug@example.com',
      phone: '010-1234-5678',
    },
    mentor: {
      name: '김개발',
      position: '시니어 프론트엔드 개발자',
      contact: {
        email: 'dev@example.com',
        phone: '010-4242-8811',
      },
    },
  }
 * - 신입 객체를 받아 안내 문구를 반환하는 함수를 만들어주세요.
  [Welcome, 정디버그님 👋]

  기술개발실의 주니어 프론트엔드 개발자로 입사하신 것을 진심으로 환영합니다!

  문의 사항이 있을 경우, 멘토 김개발(시니어 프론트엔드 개발자)에게 편하게 연락 주세요.
  📧 이메일: dev@example.com
  📱 연락처: 010-4242-8811
 */

const newEmployee = {
  name: '정디버그',
  position: '주니어 프론트엔드 개발자',
  department: '기술개발실',
  contact: {
    email: 'debug@example.com',
    phone: '010-1234-5678',
  },
  mentor: {
    name: '김개발',
    position: '시니어 프론트엔드 개발자',
    contact: {
      email: 'dev@example.com',
      phone: '010-4242-8811',
    },
  },
};

// 구조분해할당을 활용하여 매개변수에 전달된 객체에서 필요한 정보를 꺼내주세요.
const createWelcomeMessage = (
    {
        name: newbieName,
        position: newbiePosition,
        department,
        mentor: {
            name: mentorName,
            position: mentorPosition,
            contact: {
                email,
                phone
            }
        }

    }) => {
  // 여기에 코드를 작성해주세요.
    return `
        [Welcome, ${newbieName} 👋]

        ${department}의 ${newbiePosition}로 입사하신 것을 진심으로 환영합니다!

        문의 사항이 있을 경우, 멘토 ${mentorName}(${mentorPosition})에게 편하게 연락 주세요.
        
       📧 이메일: ${email}
        📱 연락처: ${phone}
    `;
};

console.log(createWelcomeMessage(newEmployee));
// 기대 출력
// [Welcome, 정디버그님 👋]
//
// 기술개발실의 주니어 프론트엔드 개발자로 입사하신 것을 진심으로 환영합니다!
//
// 문의 사항이 있을 경우, 멘토 김개발(시니어 프론트엔드 개발자)에게 편하게 연락 주세요.
// 📧 이메일: dev@example.com
// 📱 연락처: 010-4242-8811
