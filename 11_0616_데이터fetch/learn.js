// 1. 목표 : HTTP 요청/응답 메시지의 역할과 구조에 대해 설명할 수 있다. 

// 'HTTP 요청과 응답은 어떻게 구성될까요?'

// 클라이언트가 서버와 데이터를 주고받을 때 사용하는 프로토콜이 바로 HTTP입니다. 이때 데이터를 주고받는 단위는 모두 "HTTP 메시지"라는 형식으로 전달되며, 요청과 응답 모두 정해진 구조를 따릅니다.

// 이번 학습에서는 HTTP 메시지의 구성 요소와 역할을 살펴보고, 실제 `fetch()` 코드와 연결해서 이해할 수 있도록 정리합니다.


// 📡 HTTP 요청/응답 메시지의 역할과 구조
// 앞에서 `fetch()`를 사용하여 서버와 데이터를 주고받는 방법을 배웠습니다. 이때, 클라이언트와 서버가 원활하게 데이터를 주고받으려면 'HTTP(HyperText Transfer Protocol)'를 따라야 합니다.
// HTTP는 '웹에서 데이터를 주고받기 위한 통신 규칙(프로토콜)'입니다. 즉, 클라이언트와 서버가 정보를 주고받기 위한 형식(요청/응답 구조, 헤더, 상태 코드 등)을 정의합니다.


// ## HTTP 메시지

// HTTP를 통해 주고받는 모든 데이터는 HTTP 메시지라고 하며, 크게 두 가지로 나뉩니다.
// - 요청(Request): 클라이언트가 서버에 전달하는 메시지. 서버의 동작을 유도합니다.
// - 응답(Response): 서버가 클라이언트의 요청에 대해 보내는 결과 메시지입니다.

// 이 요청과 응답 메시지는 공통된 네 가지 구성 요소를 가집니다.
// 1. Start Line: 요청의 목적과 경로, 사용되는 HTTP 버전을 명시
// 2. Headers: 요청에 대한 부가 정보
// 3. Empty Line: 헤더와 본문을 구분하는 빈 줄
// 4. Body: 서버에 전달할 데이터 (선택적)


// 📨 HTTP 요청 메시지 구조

// ㅇ Start Line
// 요청 메시지의 첫 줄은 'start line'이라고 하며, 아래 형식으로 구성됩니다.
// <HTTP 메서드> <요청 타겟> <HTTP 버전></HTTP>

// 예시)
// POST /api/register HTTP/1.1

// - HTTP 메서드: 클라이언트가 서버에 어떤 동작을 요청하는지를 나타냅니다. 대표적으로 `GET`, `POST`, `PUT`, `DELETE` 등이 있습니다.
// - 요청 타겟: 요청 대상 리소스의 경로를 의미하며, 보통 URL의 경로(`/api/users`) 또는 전체 URL이 포함됩니다.
// - HTTP 버전: 요청에 사용되는 HTTP 프로토콜의 버전으로, 일반적으로 `HTTP/1.1` 또는 `HTTP/2`가 사용됩니다.

// ㅇ Headers
// 요청 헤더는 클라이언트가 서버에 부가 정보를 전달할 때 사용됩니다. 일부는 브라우저나 라이브러리가 자동으로 추가하고, 일부는 개발자가 직접 설정합니다.

// 예시)
// Content-Type: application/json
// Authorization: Bearer abcdefg123456

// | 헤더 | 설명 | 예시 |
// | `Host` | 요청을 보내는 서버의 도메인 | `Host: example.com` |
// | `User-Agent` | 요청을 보낸 클라이언트 정보 (브라우저, OS 등) | `User-Agent: Mozilla/5.0` |
// | `Accept` | 클라이언트가 받을 수 있는 응답 타입 | `Accept: application/json` |
// | `Content-Type` | 요청 본문의 데이터 형식 | `Content-Type: application/json` |
// | `Authorization` | 인증 정보 (JWT, API 키 등) | `Authorization: Bearer abc123` |

// ㅇ Empty Line
// '헤더와 본문 사이에는 반드시 빈 줄 한 줄'이 들어갑니다. 이 줄이 없으면 본문(body)이 없는 것으로 간주됩니다.

// ㅇ Body (선택)
// 요청 본문은 서버로 전달할 실제 데이터를 담는 영역입니다. 주로 `POST`, `PUT`, `PATCH` 요청에서 사용되며, 데이터의 구조는 'API 명세서'를 참고해야 합니다.

// 📩 HTTP 응답 메시지 구조
// 서버는 클라이언트의 요청에 대해 응답 메시지를 보냅니다. 응답 메시지도 요청과 동일한 네 가지 요소로 구성됩니다.

// ㅇ Status Line
// 응답의 상태를 나타냅니다.
// <HTTP 버전> <상태 코드> <상태 메시지></상태>

// 예시)
// HTTP/1.1 201 Created  ← 회원가입 성공 시 리소스가 생성되었음을 의미
// - 'HTTP 버전': 사용된 HTTP 프로토콜 버전
// - '상태 코드': 요청 처리 결과를 나타내는 숫자
// - '상태 메시지': 상태 코드에 대한 간략한 설명

// ㅇ HTTP 상태 코드와 의미
// 아래는 다양한 HTTP 상태 코드 중에서도 가장 자주 보게 되는 상태 코드입니다. 암기해 두시는 것도 좋습니다.

// | 상태 코드 | 의미 | 설명 |
// | 200 OK | 성공 | 요청이 성공적으로 처리됨 |
// | 201 Created | 생성됨 | POST 요청 처리 후 리소스가 생성됨 |
// | 204 No Content | 본문 없음 | 성공했지만 반환할 데이터 없음 |
// | 400 Bad Request | 잘못된 요청 | 클라이언트 요청이 잘못됨 |
// | 401 Unauthorized | 인증 실패 | 인증 필요 |
// | 404 Not Found | 찾을 수 없음 | 요청한 리소스를 찾지 못함 |
// | 500 Internal Server Error | 서버 오류 | 예기치 않은 서버 오류 발생 |

// ->> HTTP 상태 코드 자세히 보기
//   HTTP 상태 코드는 서버가 클라이언트의 요청에 대한 응답을 어떻게 처리했는지를 나타내는 숫자 코드입니다. 각 상태 코드는 '1XX ~ 5XX'로 나뉘며, 용도에 따라 다르게 해석됩니다.

// 1️⃣ 1XX (정보 응답 - Informational Responses)
// - 요청을 받았고, 처리가 진행 중임을 나타냄.

// | 상태 코드 | 의미 | 설명 |
// | 100 Continue | 계속 진행 | 요청의 일부를 받았으며, 클라이언트가 나머지 요청을 계속 보내도 됨 |
// | 101 Switching Protocols | 프로토콜 변경 | 서버가 클라이언트의 프로토콜 변경 요청을 수락함 |

// 2️⃣ 2XX (성공 - Success)
// - 요청이 정상적으로 처리됨.

// | 상태 코드 | 의미 | 설명 |
// | 100 Continue | 계속 진행 | 요청의 일부를 받았으며, 클라이언트가 나머지 요청을 계속 보내도 됨 |
// | 101 Switching Protocols | 프로토콜 변경 | 서버가 클라이언트의 프로토콜 변경 요청을 수락함 |

// 3️⃣ 3XX (리디렉션 - Redirection)
// - 클라이언트가 요청한 리소스를 찾기 위해 다른 위치로 이동해야 함.

// | 상태 코드 | 의미 | 설명 |
// | 301 Moved Permanently | 영구 이동 | 요청한 리소스가 새로운 URL로 영구 이동됨 |
// | 302 Found | 임시 이동 | 요청한 리소스가 다른 URL로 임시 이동됨 |
// | 304 Not Modified | 변경 없음 | 클라이언트가 캐시를 사용해도 됨 (재요청 불필요) |

// 4️⃣ 4XX (클라이언트 오류 - Client Errors)
// - 클라이언트의 요청에 문제가 있을 때 발생하는 오류

// | 상태 코드 | 의미 | 설명 |
// | 400 Bad Request | 잘못된 요청 | 요청이 잘못되어 서버가 이해할 수 없음 |
// | 401 Unauthorized | 인증 필요 | 요청을 위해 인증이 필요함 (로그인 필요) |
// | 403 Forbidden | 접근 금지 | 클라이언트가 리소스에 접근할 권한이 없음 |
// | 404 Not Found | 찾을 수 없음 | 요청한 리소스가 존재하지 않음 |
// | 405 Method Not Allowed | 허용되지 않는 메서드 | 해당 리소스에서 요청한 HTTP 메서드를 사용할 수 없음 |
// | 429 Too Many Requests | 요청 너무 많음 | 클라이언트가 너무 많은 요청을 보냈음 (Rate Limit 초과) |

// 5️⃣ 5XX (서버 오류 - Server Errors)
// - 서버가 요청을 처리하는 중 문제가 발생한 경우

// | 상태 코드 | 의미 | 설명 |
// | 500 Internal Server Error | 내부 서버 오류 | 서버에서 요청을 처리하는 중 예기치 않은 오류 발생 |
// | 502 Bad Gateway | 게이트웨이 오류 | 서버가 잘못된 응답을 받음 (프록시/게이트웨이 문제) |
// | 503 Service Unavailable | 서비스 불가능 | 서버가 과부하 상태이거나 유지보수 중 |
// | 504 Gateway Timeout | 게이트웨이 시간 초과 | 서버가 다른 서버로부터 응답을 받지 못함 |


// ㅇ Headers
// 응답 헤더는 서버가 응답 데이터에 대해 추가 정보를 제공할 때 사용합니다.

// | 헤더 | 설명 | 예시 |
// | `Content-Type` | 응답 데이터의 형식 지정 | `Content-Type: application/json` |
// | `Content-Length` | 응답 본문의 크기(바이트) | `Content-Length: 120` |
// | `Set-Cookie` | 클라이언트에 쿠키 저장 | `Set-Cookie: sessionId=abc123; HttpOnly` |
// | `Cache-Control` | 캐싱 정책 설정 | `Cache-Control: max-age=3600` |
// | `Expires` | 캐시 만료 시간 설정 | `Expires: Wed, 21 Oct 2025 07:28:00 GMT` |
// | `Location` | 리디렉션(3XX 응답 시) | `Location: https://new-site.com` |
// | `Access-Control-Allow-Origin` | CORS 정책 설정 | `Access-Control-Allow-Origin: *` |
// | `WWW-Authenticate` | 인증 방식 지정 (401 응답 시) | `WWW-Authenticate: Basic realm="User Login"` |
// | `Server` | 서버 소프트웨어 정보 | `Server: nginx` |
// | `Date` | 응답 생성 시각 | `Date: Wed, 01 May 2025 04:00:00 GMT` |


// ->> CORS란?
// CORS는 '다른 출처(origin)'의 리소스를 요청할 때 발생하는 '브라우저 보안 정책'입니다.

// 기본적으로 브라우저는 'JavaScript 코드가 자신과 다른 출처(도메인, 프로토콜, 포트)의 서버에 요청을 보내는 것을 제한'합니다. 이를 '동일 출처 정책(Same-Origin Policy)'이라고 하며, 보안상 기본적으로 활성화되어 있습니다.

// 예를 들어, 다음과 같은 상황에서는 출처가 다르기 때문에 CORS 정책이 적용됩니다.

// - 클라이언트: `https://example.com`
// - 요청 대상 서버: `https://api.example.com`

// 이 경우 브라우저는 서버로부터 다음과 같은 응답 헤더가 있는지 확인합니다.
// Access-Control-Allow-Origin: https://example.com

// 만약 이 헤더가 없거나, 출처가 일치하지 않으면 브라우저는 '요청 자체는 서버까지 전달하지만, 응답을 차단'합니다.

// (개발자 도구에 `CORS policy: No 'Access-Control-Allow-Origin' header` 오류가 뜨게 됩니다.)

// ✅ 서버가 CORS를 허용하려면 응답 헤더에 다음을 포함해야 합니다:
// Access-Control-Allow-Origin: *
// 또는
// Access-Control-Allow-Origin: https://example.com

// 특정 메서드, 헤더, 인증을 허용하려면 아래와 같은 추가 헤더가 필요할 수도 있습니다:
// Access-Control-Allow-Methods: GET, POST
// Access-Control-Allow-Headers: Content-Type, Authorization
// Access-Control-Allow-Credentials: true

// 즉, CORS 문제는 브라우저 보안 정책으로 인해 발생하는 것이며, 해결은 서버 쪽에서 응답 헤더를 설정해주는 방식으로 이루어집니다.


// ㅇ Empty Line
// 요청과 마찬가지로, '헤더와 본문 사이에는 빈 줄'이 존재해야 합니다.

// ㅇ Body
// 서버가 반환하는 데이터가 담긴 부분으로, JSON, HTML, 텍스트 등 다양한 형식을 가질 수 있습니다.
// {
//   "message": "회원가입이 완료되었습니다.",
//   "user_id": 10123
// }


// 📦 회원가입 API 명세서와 HTTP 메시지 예시
// 'API 명세서'에는 회원가입 요청 시 포함해야 할 필드와 형식이 명확히 정의되어 있습니다. 
// 예를 들어 `username`, `email`, `password`, `age`, `agree_terms`와 같은 항목이 요구된다면, 개발자는 이를 참고해 올바른 형식으로 요청을 구성해야 합니다.

// ## API 개요
// - 요청 메서드(Method): `POST`
// - 요청 URL(Endpoint): `/api/register`
// - 설명: 사용자가 회원가입을 요청하면, 입력한 정보를 서버에 저장하고 계정을 생성함.


// ㅇ Request Headers

// | 헤더 | 필수 여부 | 설명 | 예시 |
// | `Content-Type` | ✅ 필수 | 요청 본문의 데이터 형식 | `application/json` |
// | `Authorization` | ❌ 선택 | 인증 토큰 (필요한 경우) | `Bearer abcdefg123456` |

// ㅇ Request Body

// | 필드 | 타입 | 필수 여부 | 설명 |
// | `username` | `string` | ✅ 필수 | 사용자 이름 (최소 3자, 최대 20자) |
// | `email` | `string` | ✅ 필수 | 사용자 이메일 (형식: example@email.com) |
// | `password` | `string` | ✅ 필수 | 비밀번호 (최소 8자 이상) |
// | `age` | `integer` | ❌ 선택 | 사용자의 나이 |
// | `agree_terms` | `boolean` | ✅ 필수 | 이용약관 동의 여부 (`true` / `false`) |

// ㅇ 예제 요청(JSON)
// {
//   "username": "hyewon",
//   "email": "hyewon@example.com",
//   "password": "securepassword",
//   "age": 23,
//   "agree_terms": true
//   }

// ㅇ fetch()를 활용한 요청 예시
async function registerUser() {
    const response = await fetch("https://example.com/api/register", //요청타겟 (URL)
    {
	    // HTTP메서드 종류
      method: "POST", 
      //헤더에 추가해줘야하는 정보 (request header)
      headers: { 
        "Content-Type": "application/json", 
        "Authorization": "Bearer abcdefg123456" // 인증 토큰
      },
      //본문에 추가해줘야하는 정보 (request body)
      body: JSON.stringify({ 
        username: "hyewon",
        email: "hyewon@example.com",
        password: "securepassword",
        age: 23,
        agree_terms: true
      })
    });
}

// 함수 호출
registerUser();

// ⚠️ 요청 본문을 JSON으로 보낼 경우, Content-Type: application/json 헤더를 명시하고 JSON.stringify()로 문자열로 변환해야 합니다.

// ㅇ 요청 메시지 예시
// POST /api/register HTTP/1.1
// Host: example.com
// Content-Type: application/json
// Authorization: Bearer abcdefg123456
// Content-Length: 120

// {
//   "username": "hyewon",
//   "email": "hyewon@example.com",
//   "password": "securepassword",
//   "age": 23,
//   "agree_terms": true
// }


// ㅇ 응답 메시지 예시

// ✍🏼 성공 응답 (201 Created)
// HTTP/1.1 201 Created
// Content-Type: application/json
// Content-Length: 85

// {
//   "message": "회원가입 성공",
//   "user": {
//     "id": 123,
//     "username": "hyewon",
//     "email": "hyewon@example.com"
//   }
// }

// ✍🏼 실패 응답 (400 Bad Request - 필수 필드 누락)
// HTTP/1.1 400 Bad Request
// Content-Type: application/json
// Content-Length: 60

// {
//   "error": "이메일은 필수 입력 항목입니다."
// }

// ✍🏼 실패 응답 (409 Conflict - 중복된 이메일)
// HTTP/1.1 409 Conflict
// Content-Type: application/json
// Content-Length: 70

// {
//   "error": "이미 존재하는 이메일입니다."
// }



// ⚠️ 요청/응답 시 주의사항

// - '헤더 작성 누락 주의'
//     - JSON 데이터를 전송할 때 `Content-Type: application/json` 헤더를 생략하면 서버가 본문을 해석하지 못할 수 있습니다.
//     - 인증이 필요한 API는 반드시 `Authorization` 헤더를 포함해야 합니다.

// - '본문(JSON) 직렬화 필수'
//     - JavaScript 객체를 서버로 보낼 때는 `JSON.stringify()`로 문자열로 변환해야 하며, 문자열이 아닌 상태로 보내면 오류가 발생할 수 있습니다.

// - 'CORS 오류는 클라이언트 코드의 문제 아님'
//     - `CORS policy` 오류는 대부분 **서버에서 적절한 응답 헤더를 설정하지 않은 것**이 원인입니다.
//     - 클라이언트에서는 해결할 수 없으며, 백엔드 서버의 CORS 설정을 확인해야 합니다.

// - '응답 처리 시 `response.ok` 확인'
//     - `fetch()` 사용 시 응답의 성공 여부는 `response.ok` 또는 상태 코드를 직접 확인하여 처리해야 합니다.
if (!response.ok) {
  throw new Error("요청 실패: " + response.status);
}


// 'HTTP 요청/응답 메시지는 웹 애플리케이션의 핵심 통신 수단입니다.' 

// `Start Line`, `Headers`, `Body`로 구성된 구조를 이해하고, API 명세서를 정확히 해석하여 요청을 구성해야 하며, 응답의 상태 코드와 헤더도 함께 분석할 수 있어야 합니다.

// 올바른 요청을 보내고 응답을 해석하는 능력은 모든 프론트엔드 개발자에게 필수입니다.

// '지금 배운 내용을 기반으로, 다양한 실전 API와의 통신을 직접 시도해 보세요!'


// ======================실습=======================================
// fetch로 HTTP요청을 보내고, 응답을 받는 코드입니다.
// 터미널을 2개 열어서 각각 node server.js , node index.js 명령어를 입력하여 요청 내용과 응답 내용을 확인하세요.

async function registerUser() {
  console.log('로그인을 요청합니다.');
  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'hyewon',
        email: 'hyewon@example.com',
        password: 'securepassword',
        age: 23,
        agree_terms: true,
      }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // 응답 헤더 출력
    console.log('📌 응답 헤더 (Response Headers):');
    for (let [key, value] of response.headers.entries()) {
      console.log(`${key}: ${value}`);
    }

    // 응답 본문 JSON 변환 및 출력
    const data = await response.json();
    console.log('📌 응답 본문 (Response Body):\n', data);
  } catch (error) {
    console.error('회원가입 요청 실패:', error);
  }
}

// 함수 실행
registerUser();

// ============================================================================

// 2. 목표 : HTTP 메서드를 나열하고(GET, POST, PUT, DELETE 등), 각각의 특징과 사용 예시를 들 수 있다.

// HTTP 메서드는 왜 중요할까요?
// 클라이언트가 서버에 어떤 작업을 요청할지를 알려주는 것이 바로 HTTP 메서드입니다.
// 웹 애플리케이션에서 데이터를 생성, 조회, 수정, 삭제하는 모든 동작은 이 메서드를 통해 이루어집니다.


// ㅇ HTTP 메서드란?
// HTTP 요청 메시지의 'Start Line'은 다음과 같은 형식으로 구성됩니다.
// <HTTP 메서드> <요청 타겟> <HTTP 버전>

// 여기서 'HTTP 메서드(Method)'는 서버가 수행해야 할 동작을 나타내는 키워드입니다.
// 예를 들어 다음 요청은 서버에 `/api/register` 경로로 `POST` 방식의 요청을 보낸다는 뜻입니다.
// POST /api/register HTTP/1.1

// 대표적인 HTTP 메서드로는 다음이 있습니다:
// - `GET`: 데이터 조회
// - `POST`: 데이터 생성
// - `PUT`: 데이터 전체 수정
// - `PATCH`: 데이터 부분 수정
// - `DELETE`: 데이터 삭제

// 예시: 사용자 회원가입 요청
async function registerUser() {
  await fetch("https://example.com/api/register", {
    method: "POST", // 어떤 동작을 할지 명시
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "hyewon",
      email: "hyewon@example.com",
      password: "securepassword"
    })
  });
}

// ㅇCRUD란?
// CRUD는 데이터 처리의 네 가지 기본 동작을 의미합니다.
// 이 네 가지 동작은 웹 앱에서 거의 모든 사용자 행동을 구성합니다.

// | 구분 | 기능 | 설명 | 대표 HTTP 메서드 |
// | Create | 생성 | 새로운 데이터를 서버에 추가 | `POST` |
// | Read | 조회 | 기존 데이터를 서버로부터 가져오기 | `GET` |
// | Update | 수정 | 기존 데이터를 변경 (전체 또는 일부) | `PUT`, `PATCH` |
// | Delete | 삭제 | 기존 데이터를 제거 | `DELETE` |

// ㅇ CRUD의 예시
// - 'SNS에서는' 사용자가 게시글을 작성(Create), 피드에서 조회(Read), 내용을 수정(Update), 삭제(Delete)할 수 있습니다.
// - '쇼핑몰에서는' 상품을 등록(Create), 목록을 조회(Read), 가격을 수정(Update), 판매 중단(Delete)할 수 있습니다.

// | 실제 사례 | C | R | U | D |
// | 블로그 게시글 | 글 작성 | 목록 보기 | 내용 수정 | 글 삭제 |
// | 쇼핑몰 상품 | 상품 등록 | 상품 상세 조회 | 가격 변경 | 상품 삭제 |
// | 회원 기능 | 회원가입 | 회원정보 보기 | 비밀번호 변경 | 회원 탈퇴 |


// ㅇ HTTP 메서드별 기능과 특징

// | 'HTTP 메서드' | '설명' | '관련 CRUD 연산' | '멱등성' |
// | `GET` | 서버에 저장된 데이터를 요청하고 조회함. 요청 본문 없이 URL에 데이터를 담아 전송함. | Read (조회) | ✅ 있음 |
// | `POST` | 서버에 새로운 데이터를 생성함. 요청 본문에 JSON 데이터를 포함하여 전송함. | Create (생성) | ❌ 없음 |
// | `PUT` | 기존 데이터를 전체 수정함. 존재하지 않으면 새로 생성되기도 함. | Update (전체 수정) | ✅ 있음 |
// | `PATCH` | 기존 데이터의 일부만 수정함. 변경이 필요한 필드만 전송함. | Update (부분 수정) | ❌ 없음 |
// | `DELETE` | 특정 데이터를 삭제함. 일반적으로 URL에 리소스 ID를 포함하여 전송함. | Delete (삭제) | ✅ 있음 |


// >> 멱등성(Idempotence)
// 멱등성이란, 같은 요청을 여러 번 보내더라도 결과가 동일함을 보장하는 특성입니다.
// 즉, 요청을 한 번 보내든 열 번 보내든 결과가 변하지 않으면 멱등한 메서드, 요청을 반복할수록 결과가 달라진다면 비멱등한 메서드입니다. 멱등성의 반대 개념은 비멱등성(Non-idempotence)이며, 같은 요청을 여러 번 보낼 때 결과가 달라질 수 있는 특성을 말합니다.
// | HTTP 메서드 | 멱등성 여부 | 설명 |
// | `GET` | ✅ 있음 | 데이터를 가져오기만 하므로 반복 호출해도 서버 상태가 변하지 않음 |
// | `POST` | ❌ 없음 | 호출할 때마다 새로운 리소스를 생성하므로 결과가 매번 달라짐 |
// | `PUT` | ✅ 있음 | 같은 데이터를 여러 번 전송해도 동일 리소스로 덮어쓰기 때문에 결과가 동일 |
// | `PATCH` | ❌ 없음 | 일부 필드만 수정하므로 같은 요청이라도 상태가 누적 변경될 수 있음 |
// | `DELETE` | ✅ 있음 | 한 번 삭제되면 이후 요청은 더 이상 삭제할 리소스가 없어 결과가 동일함 |


// 📍 `GET`: 데이터 조회 (Read)
// - 서버에 '데이터를 요청'할 때 사용합니다.
// - '요청 본문 없이', 데이터를 쿼리 스트링 또는 URL 파라미터로 전달합니다.
// - 서버 상태를 바꾸지 않습니다. (안전한 요청)
// - 멱등성이 있으므로 같은 요청을 여러 번 보내도 결과는 동일합니다.
// GET /products?category=shoes&page=2
// - fetch() 요청 예시
// fetch("https://example.com/products?category=shoes&page=2")

// >> 쿼리 스트링
// 쿼리 스트링은 URL에 데이터를 추가하는 방법 중 하나입니다. 주로 GET 요청에서 서버에 특정 파라미터를 전달할 때 사용됩니다. 
// URL 뒤에 ?로 시작해서 key=value 형식으로 데이터를 전달하며, 여러 개의 파라미터는 &로 구분합니다.
// 예시
// 아래 URL에는 {query:React , page:2, limit:10} 라는 정보가 담겨있습니다.
// https://example.com/search?query=React&page=2&limit=10


// 📍`POST`: 데이터 생성 (Create)
// - 서버에 '새로운 데이터를 추가'할 때 사용합니다.
// - 요청 본문(body)에 JSON 형식으로 데이터를 담아 보냅니다.
// - 서버의 상태를 '변경'합니다.
// - 멱등성이 없기 때문에 같은 요청을 반복하면 의도하지 않은 결과가 발생할 수 있습니다.

// POST /users
// Content-Type: application/json

// {
//   "username": "hyewon",
//   "password": "securepassword"
// }

// - fetch() 요청 예시
fetch("/users", {
  method: "POST",
  body: JSON.stringify({ username: "hyewon", password: "securepassword" }),
  headers: { "Content-Type": "application/json" }
})


// 📍 `PUT`: 데이터 전체 수정 (Update - Replace)
// - 특정 리소스의 '전체 정보를 덮어씌워 수정'할 때 사용합니다.
// - 존재하지 않으면 새로 생성되기도 합니다.
// - PUT은 전체를 교체하기 때문에, 기존 데이터 중 일부만 전달하면 나머지가 사라질 수 있으므로 주의가 필요합니다.
// - 멱등성이 있으므로 같은 요청을 여러 번 보내도 결과는 동일합니다.

// PUT /users/123
// Content-Type: application/json

// {
//   "username": "hyewon",
//   "email": "new@example.com"
// }

// - fetch() 요청 예시
fetch("/users/123", {
  method: "PUT",
  body: JSON.stringify({ username: "hyewon", email: "new@example.com" }),
  headers: { "Content-Type": "application/json" }
})


// 📍 `PATCH`: 데이터 부분 수정 (Update - Partial)
// - 특정 리소스의 '일부 정보만 수정'할 때 사용합니다.
// - 변경이 필요한 필드만 본문에 포함합니다.
// - 전체 데이터를 덮어쓰는 PUT과 달리, 특정 필드만 변경할 수 있습니다.
// - 본문(body)에 수정할 데이터의 일부 필드만 포함하여 전송합니다.
// - 멱등성이 없기 때문에 같은 요청을 반복하면 의도하지 않은 결과가 발생할 수 있습니다.

// PATCH /users/123
// Content-Type: application/json

// {
//   "email": "changed@example.com"
// }

// -fetch() 요청 예시
fetch("/users/123", {
  method: "PATCH",
  body: JSON.stringify({ email: "changed@example.com" }),
  headers: { "Content-Type": "application/json" }
})


// 📍 `DELETE`: 데이터 삭제 (Delete)
// - 특정 리소스를 '삭제'할 때 사용합니다.
// - 본문 없이 ID만 URL에 포함하는 경우가 일반적입니다.
// - 멱등성이 있으므로 같은 요청을 여러 번 보내도 결과는 동일합니다.

// DELETE /users/123

// - fetch() 요청 예시
fetch("/users/123", {
  method: "DELETE"
})


// ## ⚠️ HTTP 메서드 사용 시 주의사항

// - '요청에 적절한 메서드를 사용해야 합니다.'
//     - 조회는 `GET`, 생성은 `POST`, 수정은 `PUT` 또는 `PATCH`, 삭제는 `DELETE`로 구분합니다.
// - '`GET` 요청에는 본문을 포함하지 않아야 합니다.'
//     - 데이터는 URL의 쿼리 스트링이나 경로 파라미터로 전달합니다.
// - '`POST`, `PUT`, `PATCH` 요청은 `Content-Type` 헤더를 반드시 명시합니다.'
//     - 일반적으로 `application/json`을 사용하며, 본문은 반드시 문자열(JSON)로 변환해야 합니다.
// - '`PUT`과 `PATCH`는 용도에 맞게 구분해서 사용해야 합니다.'
//     - `PUT`은 전체 수정, `PATCH`는 부분 수정을 의미합니다.
// - '`DELETE`는 멱등성을 가지지만, 실제로는 주의가 필요합니다.'
//     - 이미 삭제된 리소스에 다시 `DELETE` 요청을 보내도 서버는 오류를 반환하지 않을 수 있습니다.
// - '오류 처리를 위한 상태 코드 확인이 필요합니다.'
//     - `fetch()` 사용 시 `response.ok` 또는 `response.status`를 이용해 예외 상황을 처리하세요.
        // if (!response.ok) {
        //     throw new Error("요청 실패: " + response.status);
        // }

// 'HTTP 메서드를 정확히 이해하면 API 요청을 더욱 안전하고 효율적으로 작성할 수 있습니다.'
// 특히, 멱등성 개념은 오류 발생 시 요청을 다시 보낼 수 있는지를 판단하는 중요한 기준이 됩니다.

// '실무에서 마주할 다양한 API에 대비해, 각 메서드의 동작과 특징을 확실히 이해해 두세요!'

// =============================================================================

// 3. 목표 : HTTP 응답 코드의 범주(1xx~5xx)를 이해하고, 각 범주별로 어떤 상황에서 발생하는지와 이에 대한 적절한 해결 방법을 설명할 수 있다.

// '서버는 요청에 어떻게 응답할까요?'

// HTTP 응답 상태 코드는 클라이언트가 보낸 요청에 대해 서버가 어떤 결과를 반환했는지를 숫자로 알려주는 방식입니다. 각 상태 코드는 1xx부터 5xx까지로 나뉘며, 각각의 의미를 이해하면 문제 해결과 디버깅이 쉬워집니다.

// 이번 학습에서는 '응답 코드의 범주', '자주 사용하는 코드의 의미', '상황별 해결 방법'까지 정리합니다.


// 🌐 HTTP 응답 상태 코드
// - HTTP 응답 메시지의 시작 줄(Start Line)은 다음과 같은 형식으로 구성됩니다.
// <HTTP 버전> <상태 코드> <상태 메시지>

// 이 중 상태 코드는 서버가 요청에 어떻게 응답했는지를 나타내는 세 자리 숫자 코드입니다.
// HTTP/1.1 200 OK

// | 범위 | 의미 | 실무에서의 대표적 상황 |
// | '1xx' | 정보 | 거의 사용되지 않음 (중간 처리 정보 전달) |
// | '2xx' | 성공 | 요청이 정상 처리됨 (`200 OK`, `201 Created` 등) |
// | '3xx' | 리디렉션 | 자원 이동 (`301`, `302`), 캐시 활용 (`304`) |
// | '4xx' | 클라이언트 오류 | 요청 자체의 문제 (오타, 인증 누락, 권한 부족 등) |
// | '5xx' | 서버 오류 | 서버 내부 문제 (로직 오류, DB 문제 등) |


// ㅇ 자주 사용하는 상태코드와 의미

// 웹 개발에서 자주 사용되는 HTTP 상태 코드와 그 의미를 알아봅시다. 콘솔이나 네트워크 탭에서 상태 코드와 오류 메시지를 확인하면, 문제를 디버깅하는 데 큰 도움이 됩니다.

// 자주 발생하는 상태 코드들을 익혀두면, 에러의 원인을 빠르게 파악하고 적절한 해결책을 찾을 수 있습니다.

// ✅ 2xx: 성공
// - '200 OK'
//     - 요청이 정상적으로 처리되었음을 의미합니다.
//     - 'GET 요청': 서버가 요청한 데이터를 응답 본문에 포함하여 반환합니다.
//     - 'POST/PUT 요청': 요청이 수행되었고 그 결과를 응답 본문에 포함하거나 상태 메시지로 전달합니다.

// - '201 Created'
//     - 클라이언트의 요청으로 '서버에 새로운 리소스가 성공적으로 생성'되었을 때 반환합니다.
//     - 주로 `POST` 요청의 응답으로 사용되며, 생성된 리소스의 위치는 `Location` 헤더에 포함될 수 있습니다.
// 리소스 : HTTP에서 리소스란, 서버에서 '식별 가능한 ‘데이터 단위’ 또는 ‘정보의 대상’'을 의미합니다.
// 즉, 우리가 요청하거나 응답을 통해 주고받는 'HTML 문서, JSON 객체, 이미지, 사용자 정보, 게시글, 댓글' 등 모든 것이 리소스가 될 수 있습니다.

// - '204 No Content'
//     - 요청이 성공했으나 '응답 본문이 비어 있는 경우' 사용됩니다.
//     - 주로 `DELETE`, `PUT` 등의 요청에 사용되며, 결과만 확인하고 응답 데이터는 필요하지 않을 때 사용됩니다.


// 🔄 3xx: 리디렉션

// - 301 Moved Permanently
//     - 요청한 리소스의 주소가 '영구적으로 변경되었을 때' 사용됩니다.
//     - `Location` 헤더에 새 주소(URL)를 명시하며, 브라우저나 검색 엔진은 이 정보를 저장하여 이후 요청에 반영합니다.

// - 302 Found
//     - 요청한 리소스가 '임시적으로 다른 위치에 있음'을 나타냅니다.
//     - 클라이언트는 임시 URI로 리디렉션되지만, 다음 요청은 원래 URI로 해야 합니다.

// - '304 Not Modified'
//     - 클라이언트가 캐시된 리소스를 사용해도 된다는 의미로, 서버는 본문 없이 헤더만 응답합니다.
//     - `If-Modified-Since`나 `ETag`와 같은 조건부 요청에 대한 응답으로 사용됩니다.


// ❌ 4xx: 클라이언트 오류
// - '400 Bad Request'
//     - '요청 문법이 잘못되었거나 필수 정보가 누락'된 경우 발생합니다.
//         - JSON 형식 오류
//         - 필수 파라미터 누락
//         - 잘못된 쿼리 구조
// - '해결 방법':
//     - 요청 본문이 JSON 형식에 맞는지 확인합니다.
//     - API 명세서의 필수 필드 누락 여부를 점검합니다.
//     - 문자열과 숫자 등 데이터 타입이 정확히 맞는지 검토합니다.
//     - Content-Type이 "application/json"으로 설정되어 있는지 확인합니다.

// - 401 Unauthorized
//     - '인증이 필요한 리소스에 인증 없이 접근한 경우' 발생합니다.
//     - 서버는 인증 정보를 요구하며, 주로 로그인 토큰 누락 또는 만료가 원인입니다.
//     - '해결 방법':
//         - 로그인 후 발급받은 토큰이 요청 헤더에 포함되었는지 확인합니다.
//         - 토큰이 만료되었거나 유효하지 않은 경우, 재로그인을 통해 새로운 토큰을 받아야 합니다.
//         - 서버 로그를 확인하여 인증 관련 오류가 있는지 파악합니다.

// - '403 Forbidden'
//     - '현재 사용자에게 리소스 접근 권한이 없는 경우' 사용됩니다.
//     - 서버는 요청자를 인식하지만 권한이 없다고 판단합니다.
//         - 예: 일반 사용자가 관리자 페이지에 접근하려는 경우
//     - '해결 방법':
//         - 백엔드에서 해당 리소스에 대한 사용자 권한을 확인합니다.
//         - 사용자 역할(role)이 필요한 조건을 충족하는지 검토하고, 서버의 권한 설정 로직을 점검합니다.

// - '404 Not Found'
//     - 요청한 리소스를 '서버가 찾을 수 없을 때' 사용됩니다.
//     - 주소 오타, 잘못된 경로, 삭제된 리소스 등 다양한 원인이 있습니다.
//     - '해결 방법':
//         - 요청 URL의 오타 여부 확인
//         - 해당 리소스가 실제로 존재하는지 서버 또는 데이터베이스에서 확인
//         - 클라이언트 라우팅 경로 설정에 문제가 없는지 점검

// - '405 Method Not Allowed'
//     - '지원되지 않는 HTTP 메서드로 요청했을 때' 발생합니다.
//         - 예: `GET`만 허용된 엔드포인트에 `POST` 요청한 경우
//     - '해결 방법':
//         - API 명세서 또는 Swagger 문서를 확인하여 어떤 메서드가 허용되는지 파악
//         - 응답 헤더의 `Allow` 필드를 참고해 지원되는 메서드를 적용
//         - 클라이언트 측 코드에서 올바른 HTTP 메서드를 사용했는지 점검

// - '422 Unprocessable Entity'
//     - '요청 형식은 맞지만, 서버가 의미를 처리할 수 없을 때' 발생합니다.
//         - 예: 이메일 형식 오류, 비밀번호 최소 길이 부족 등
//     - '해결 방법':
//         - API 명세서에서 각 필드의 형식, 길이, 조건 등을 검토합니다.
//         - 서버에서 반환하는 에러 메시지를 확인하여 정확한 문제점을 파악합니다.
            // 에러 메시지 예시
            // {
            //     "errors": {
            //         "email": "이미 사용 중인 이메일입니다.",
            //         "password": "비밀번호는 최소 8자 이상이어야 합니다."
            //     }
            // }
            // - 클라이언트 측에서도 유효성 검사를 사전에 수행하여 서버 요청 전에 문제를 방지할 수 있습니다


// 🛠️ 5xx: 서버 오류

// - '500 Internal Server Error'
//     - 서버 내부에서 **예기치 않은 오류**가 발생했을 때 사용됩니다.
//     - 주로 로직 오류, 예외 처리 누락, 데이터베이스 연결 실패 등이 원인입니다.
// - '해결 방법':
//     - 백엔드 로그를 통해 오류 발생 지점을 추적합니다.
//     - 예외 처리 구문(try-catch 등)이 누락되지 않았는지 확인합니다.
//     - 클라이언트에서 전달한 요청 데이터가 백엔드 로직에서 오류를 유발했는지 확인합니다.

// - '502 Bad Gateway'
//     - 클라이언트 요청을 '프록시 서버가 다른 서버에 전달했지만, 잘못된 응답을 받았을 때' 발생합니다.
//     - 백엔드 서버 다운, 네트워크 오류 등이 원인입니다.
//     - '해결 방법':
//         - 백엔드 서버가 정상적으로 동작 중인지 확인합니다.
//         - 게이트웨이 설정(예: Nginx, API Gateway 등)을 확인하여 연결 경로가 올바른지 점검합니다.
//         - 서버 응답 시간이 너무 길지는 않은지, 타임아웃 설정을 확인합니다.

// - '503 Service Unavailable'
//     - 서버가 '과부하 상태이거나 유지보수 중'일 때 사용됩니다.
//     - 일시적인 서비스 중단에 대한 응답입니다.
//     - '해결 방법':
//         - 서버 상태 확인 (CPU, 메모리 등 리소스 부족 여부)
//         - 유지보수 중이라면 사용자에게 안내 메시지를 전달하거나 재시도 로직 적용
//         - 클라이언트 측에서는 일정 시간 후 재요청하도록 처리


// ## 서버 응답 상태 코드를 확인하고 분기처리하는 방법

// 클라이언트는 HTTP 응답 객체의 `.status` 속성을 통해 서버가 반환한 상태 코드에 접근할 수 있습니다. 이 상태 코드를 기반으로 요청의 성공 여부를 판단하고, 그에 맞는 처리를 수행할 수 있습니다.

// 아래는 `fetch()`를 사용하여 로그인 요청을 보내고, 상태 코드에 따라 분기 처리하는 예시입니다.

// - 상태 코드가 `200`인 경우, 응답 데이터를 JSON으로 변환하고 성공 처리를 이어갑니다.
// - 상태 코드가 `404`인 경우, "사용자를 찾을 수 없습니다!"라는 경고 메시지를 사용자에게 표시합니다.
// - 그 외 상태 코드가 반환되면 예외를 발생시켜 `.catch()` 블록에서 에러를 처리합니다.

fetch("https://example.com/login")
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 404) {
      alert("사용자를 찾을 수 없습니다!");
    } else {
      throw new Error("서버 오류 발생");
    }
  })
  .then(data => {
    console.log("로그인 성공:", data);
  })
  .catch(error => {
    console.error("에러:", error.message);
  });


//   ⚠️ HTTP 응답 코드 사용 시 주의사항

// - '상태 코드만으로 모든 원인을 판단할 수는 없습니다.'
//     같은 `400` 코드여도 상황에 따라 원인이 다양하므로, 반드시 응답 본문과 콘솔 로그도 함께 확인해야 합니다.
    
// - '상태 코드와 함께 오는 응답 메시지를 적극 활용하세요.'
//     대부분의 API는 오류 발생 시 상세한 설명을 응답 본문에 담아주므로, 메시지를 통해 디버깅 정보를 얻을 수 있습니다.
    
// - '조건 분기 처리에서 숫자 직접 비교보다 범위 인식이 중요합니다.'
//     예: `if (response.status >= 200 && response.status < 300)`
//     → 모든 성공 응답을 포괄할 수 있어 실용적입니다.
    
// - '에러 발생 시 서버 문제인지 클라이언트 문제인지 구분해야 합니다.'
//     `4xx`는 대부분 요청의 문제(입력 오류, 인증 문제 등)이고, `5xx`는 서버의 내부 문제입니다. 원인을 빠르게 분리하는 습관이 중요합니다.
    
// - '프론트엔드 로직에서도 방어적으로 응답 코드를 처리해야 합니다.'
//     예외 상황을 미리 정의하고, 사용자에게 명확한 메시지를 전달해야 UX 측면에서 혼란을 줄일 수 있습니다.


// 'HTTP 응답 코드는 서버와 클라이언트 간의 소통 언어입니다.'

// 각 상태 코드의 의미를 정확히 이해하고, 그에 맞는 처리를 구현해야 신뢰성 높은 프론트엔드 앱을 만들 수 있습니다.

// 특히, `4xx`와 `5xx` 코드에 대해선 상황별 대응 전략을 익혀두면 문제 해결 속도가 달라집니다.

// 지금 학습한 내용을 바탕으로, 실제 프로젝트에서 다양한 상태 코드에 대응하는 로직을 직접 구현해 보세요!

// =========================실습(학습퀴즈)===============================
// ## ✅ 학습 퀴즈

// 제대로 이해했는지 스스로 점검해 보세요!

// ### ❓ Q1. 다음 중 브라우저가 클라이언트 요청을 처리하지 않고 캐시된 리소스를 그대로 사용하도록 안내하는 응답 상태 코드는 무엇인지 고르세요.

// 1. 201
// 2. 204
// 3. 304
// 4. 401

// ---

// ### ❓ Q2. 다음 중 인증은 되어 있지만 요청한 리소스에 대한 권한이 없어 서버가 접근을 거부할 때 반환되는 상태 코드는 무엇인지 고르세요.

// 1. 400
// 2. 401
// 3. 403
// 4. 404

// ---

// ### ❓ Q3. 다음 코드의 실행 결과로 예상되는 동작으로 옳은 것은 무엇인지 고르세요.

// ```jsx
// fetch("/api/user")
//   .then(res => {
//     if (res.status === 404) {
//       alert("유저를 찾을 수 없습니다");
//     }
//     return res.json();
//   })
//   .catch(error => {
//     console.error("에러 발생:", error.message);
//   });
// ```

// 1. 404 오류일 경우 콘솔에 "에러 발생: Not Found"가 출력된다.
// 2. 404 오류일 경우 alert 창이 뜨고, 이후 `catch()`가 호출될 수 있다.
// 3. `.catch()`는 항상 실행된다.
// 4. 상태 코드가 200이 아니면 fetch 자체가 실패한 것으로 간주된다.

// ==========================================================================

// 4. 목표 : try-catch 구문을 사용하여 런타임 에러를 처리하는 코드를 구현할 수 있다.

// 'JavaScript 코드에서 오류가 발생하면 어떻게 될까요?'

// JavaScript는 코드 실행 중 오류가 발생하면 프로그램을 즉시 중단하고 콘솔에 에러 메시지를 출력합니다. 이때 `try-catch` 구문을 사용하면 '오류를 감지하고 적절히 처리하여 프로그램 흐름을 유지'할 수 있습니다.

// 이번 학습에서는 `try-catch` 구문의 구조와 예외 객체 활용, 명시적 오류 발생(`throw`)까지 실습 중심으로 익혀봅니다.


// ㅇ try-catch 구문을 활용한 예외 처리

try {
  // 오류 발생 가능성이 있는 코드
} catch (error) {
  // 오류 발생 시 실행할 코드
} finally {
  // 선택: 오류 발생 여부와 관계없이 항상 실행되는 코드
}
// - `try`: 오류 발생 가능성이 있는 코드를 작성
// - `catch`: 예외 발생 시 실행. `error` 객체를 통해 오류 정보 확인 가능
// - `finally`: 생략 가능. 정리 작업, 상태 초기화 등 용도로 사용

// ❗ try 다음에는 catch, finally 중 하나는 반드시 필요하며, 둘 다 함께 사용할 수도 있습니다.

// ㅇ try-catch 구문의 효과
// - 오류가 발생해도 '앱이 종료되지 않고 흐름을 유지'
// - 오류 메시지를 받아서 '디버깅 정보 확인'
// - 사용자에게 '안내 메시지를 제공하거나 대체 동작 수행 가능'
// - `finally`를 통해 '정리 작업 또는 리소스 해제 수행 가능'

// ㅇ finally 구문의 역할
// `finally`는 예외 발생 여부와 관계없이 '항상 마지막에 실행되는 블록'입니다.
// 주요 사용 사례
// - 로딩 상태 초기화
// - 서버 연결 해제
// - 파일 핸들러, 스트림 등 리소스 반환
// - 상태 플래그 정리 (예: `isSubmitting = false`)
try {
  console.log("데이터 요청 시작");
  // 오류 발생 가능 코드
} catch (error) {
  console.error("에러 발생:", error.message);
} finally {
  console.log("로딩 상태 종료");
}

// 💡 finally는 오류 발생 여부와 상관없이 항상 실행되므로, 정리 작업에 매우 유용합니다.


// 예외 객체(error 객체) 다루기
// `try` 블록에서 오류가 발생하면, JavaScript는 자동으로 '에러 객체(error object)를 생성하여 `catch` 블록으로 전달'합니다. 개발자는 이 객체를 통해 에러의 종류, 메시지, 발생 위치 등 상세 정보를 확인할 수 있습니다.

try {
  throw new TypeError("데이터 형식이 잘못되었습니다");
} catch (error) {
  console.error(error.name);    // TypeError
  console.error(error.message); // 데이터 형식이 잘못되었습니다
  console.error(error.stack);   // 오류 발생 위치와 호출 스택 정보
}

// ㅇ error 객체의 주요 속성
// - `error.name`: 에러의 종류를 문자열로 반환합니다 (`TypeError`, `ReferenceError`, `SyntaxError` 등)
// - `error.message`: 에러 발생 시 설정한 설명 메시지입니다
// - `error.stack`: 에러가 발생한 위치와 함수 호출 흐름을 문자열로 담고 있으며, 디버깅 시 유용합니다


// ㅇ `catch` 매개변수 작성 방식
// `catch` 블록의 괄호 안에는 오류 정보를 담을 변수명을 지정할 수 있습니다. 이 매개변수는 `try` 블록에서 발생한 예외 객체를 자동으로 전달받습니다.
try {
  // 오류 발생 코드
} catch (error) {
  console.error(error.message);
}
// - 변수명은 자유롭게 설정할 수 있습니다 (`e`, `err`, `error` 등)
// - 그러나 '가장 일반적으로 사용하는 명칭은 `error`'이며, 가독성과 명확성을 위해 권장됩니다.
// - ES2019부터는 `catch`에서 변수명을 생략하는 것도 가능해졌습니다. 예외 객체를 사용하지 않을 경우에만 활용됩니다. 하지만 대부분의 경우 에러 객체의 정보를 활용해야 하므로, 변수명을 생략하지 않고 명시하는 것이 일반적입니다.
try {
  throw new Error("에러 발생");
} catch {
  console.error("에러가 발생했습니다"); // error 객체는 사용하지 않음
}


// ㅇ throw 구문으로 오류를 직접 발생시키기
// `throw` 키워드를 사용하면 개발자가 '직접 오류를 발생시켜 흐름을 `catch`로 넘길 수 있습니다'. 이는 단순히 예외 상황을 표시하는 것을 넘어, '프로그램이 비정상적인 흐름으로 진행되지 않도록 명확하게 제어'할 수 있는 강력한 수단입니다.

function divide(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없습니다"); // 0으로 나누면 에러 발생
  }
  return a / b; // 정상 분기
}

try {
  const result = divide(10, 0);
  console.log("결과:", result);
} catch (error) {
  console.error("에러 발생:", error.message);
} finally {
  console.log("연산 시도 종료");
}

// 위 예시처럼, 0으로 나누는 상황은 개발자가 예상한 비정상 상태입니다. 단순히 return null 같은 방식보다 throw로 명확하게 예외를 선언하고, 이를 catch에서 처리하는 방식이 안정성과 유지보수 측면에서 더 유리합니다.

// ㅇ  throw를 사용하는 대표 상황
// - 잘못된 사용자 입력이 들어온 경우
// - 함수 인자의 조건이 맞지 않을 때
// - 서버 응답이 `null`, `undefined`인 경우
// - 내부 로직이 예외적인 상태일 때


// ## ⚠️ try-catch-finally, throw 사용 시 주의사항

// - '오류를 무조건 감싸는 것보다, 필요한 위치에만 사용하세요.'
//     모든 코드를 `try-catch`로 감싸면 오히려 디버깅과 유지보수가 어려워집니다.
//     오류 발생 가능성이 높거나 외부 입력/요청이 있는 부분만 감싸는 것이 좋습니다.
    
// - 'catch 블록은 예외를 잡은 뒤 적절한 처리 로직을 포함해야 합니다.'
//     예외를 단순히 `console.log()`로 출력하고 끝내는 것이 아니라, 사용자에게 메시지를 보여주거나 흐름을 조절하는 로직이 필요합니다.
    
// - 'finally는 중요한 정리 작업에만 사용하세요.'
//     네트워크 연결 종료, 로딩 상태 해제, 변수 초기화 등 꼭 실행돼야 하는 작업만 넣는 것이 좋습니다.
//     `finally` 안에서 또다른 오류가 발생하지 않도록 주의해야 합니다.
    
// - 'throw는 오류를 적극적으로 드러내기 위한 수단입니다.'
//     예외를 억지로 숨기기보다는, `throw`로 명확하게 의도된 문제임을 드러내고 `catch`에서 처리하는 것이 더 안전한 방식입니다.
    
// - '동기 코드 외에도, 비동기 코드에서는 try-catch와 함께 async/await 사용을 고려하세요.'
//     `Promise.then().catch()` 방식과 `async/await`+`try-catch`는 예외 처리 방식이 다르므로 혼동하지 않도록 주의해야 합니다.


// 'try-catch는 오류를 '숨기기 위한 도구'가 아니라, 오류를 '제어하고 회복하기 위한 장치'입니다.'

// 코드 실행 중 언제든 발생할 수 있는 예외 상황을 안전하게 처리할 수 있어야, 사용자에게 신뢰감 있는 서비스를 제공할 수 있습니다.

// 이번 학습에서 배운 내용을 바탕으로, 실전 코드에서 '언제 try-catch를 써야 할지 판단하고', 적절하게 'throw를 사용하여 오류 흐름을 관리'해 보세요!

// ========================실습(학습퀴즈)========================================

// ## ✅ 학습 퀴즈

// 제대로 이해했는지 스스로 점검해 보세요!

// ---

// ### ❓ Q1. 다음 중 `try-catch` 구문을 사용하는 목적과 가장 거리가 먼 것은 무엇인가요?

// 1. 오류 발생 시 프로그램의 흐름을 유지하기 위해
// 2. 오류 발생 시 catch 블록에서 사용자에게 안내 메시지를 제공하기 위해
// 3. 서버로부터 받은 응답 데이터를 자동으로 저장하기 위해
// 4. 오류 발생 위치와 내용을 로그로 확인하기 위해

// ### ❓ Q2. `throw` 키워드를 사용하는 이유로 가장 적절한 설명은 무엇인가요?

// 1. 오류 발생 시 프로그램을 종료시키기 위해
// 2. 의도적인 오류를 발생시켜 오류 흐름으로 분기하기 위해
// 3. catch 블록의 실행을 방지하기 위해
// 4. finally 블록의 실행을 무시하기 위해

// ### ❓ Q3. 다음 코드 실행 시 예상되는 동작으로 가장 알맞은 것은 무엇인가요?

// ```jsx
// function getData() {
//   throw new Error("데이터를 불러올 수 없습니다");
// }

// try {
//   getData();
//   console.log("성공!");
// } catch (error) {
//   console.log("에러 발생:", error.message);
// } finally {
//   console.log("요청 종료");
// }
// ```

// 1. "성공!"만 출력된다
// 2. "에러 발생: 데이터를 불러올 수 없습니다"만 출력된다
// 3. "에러 발생: ..."과 "요청 종료"가 함께 출력된다
// 4. 아무것도 출력되지 않는다

// =================================================================

// 5. 목표 : (심화) CORS 오류가 발생하는 이유를 알고, 해결방법을 설명할 수 있다.

// 'CORS 오류는 왜 발생할까요?'

// 현대 웹에서는 프론트엔드와 백엔드가 분리되어 동작하는 경우가 많습니다. 이때 서로 다른 출처 간 데이터를 주고받으면 보안 정책에 의해 브라우저가 이를 차단합니다.

// 이번 학습에서는 브라우저의 보안 정책인 동일출처정책(SOP)의 개념부터, 'CORS 오류가 발생하는 구조와 해결 방법'까지 상세하게 정리합니다.


// ㅇ 동일출처정책(SOP)이란?
// 'Same-Origin Policy (SOP)'는 브라우저에서 서로 다른 출처 간의 '리소스 접근을 제한하는 보안 정책'입니다. 즉, '서버와 클라이언트의 출처가 다르면' JavaScript를 통한 요청과 응답은 '브라우저에서 차단'됩니다.

// ㅇ 출처(origin)의 구성 요소
// 출처란 다음 세 가지 요소의 조합입니다.

// | 구성 요소 | 예시 | 설명 |
// | 프로토콜 | `http`, `https` | 통신 방식 |
// | 호스트 | `localhost`, `example.com` | 도메인 또는 IP 주소 |
// | 포트 번호 | `3000`, `5000`, `443` | 서버의 포트 번호 |

// 이 중 하나라도 다르면 브라우저는 다른 출처로 간주하며, SOP 정책에 의해 차단이 발생할 수 있습니다


// ㅇ CORS란?
// - 'CORS(Cross-Origin Resource Sharing)'는 서로 다른 출처(origin) 간에 리소스를 공유하기 위한 '명시적 허용 방식'입니다.

// SOP로 인해 차단될 요청에 대해 '서버가 응답 헤더를 통해 허용 여부를 명시함으로써', 브라우저가 이를 허용하도록 하는 방식입니다.


// ㅇ 서버가 설정하는 주요 헤더
// | 헤더 | 설명 |
// | `Access-Control-Allow-Origin` | 허용할 출처 |
// | `Access-Control-Allow-Methods` | 허용할 HTTP 메서드 (`GET`, `POST`, 등) |
// | `Access-Control-Allow-Headers` | 허용할 요청 헤더 목록 |
// | `Access-Control-Allow-Credentials` | 인증 정보(Cookie, Authorization 등) 허용 여부 |


// ㅇ 브라우저와 서버 간 CORS 요청 흐름
// CORS는 단순한 요청/응답 구조가 아니라, 브라우저가 요청의 성격에 따라 '사전 확인(preflight)'을 하는 복잡한 과정을 거칩니다.

// 1️⃣ Preflight 요청 발생
// - 브라우저는 실제 요청 전, 서버에 `OPTIONS` 메서드로 '사전 요청'을 보냅니다.
// - 서버가 요청을 허용하는지 미리 확인받기 위한 절차입니다.

// ### Preflight가 발생하는 조건
// - HTTP 메서드가 `PUT`, `DELETE`, `PATCH` 등인 경우
// - `Content-Type`이 `application/json` 또는 일반적이지 않은 값인 경우
// - `Authorization`, `X-Requested-With` 등의 '커스텀 헤더'를 포함하는 경우

// 2️⃣ 서버의 Preflight 응답
// 서버는 다음과 같은 헤더를 응답에 포함하여 브라우저에 허용 여부를 전달합니다.

// Preflight 응답 예시
// - `Access-Control-Allow-Origin`: `https://frontend.com`
// - `Access-Control-Allow-Methods`: `GET, POST, PUT`
// - `Access-Control-Allow-Headers`: `Content-Type, Authorization`
// - `Access-Control-Allow-Credentials`: `true`
// - `Access-Control-Max-Age`: `600` (10분 동안 캐시)

// 3️⃣ 브라우저가 본 요청을 전송
// 서버의 Preflight 응답이 유효할 경우, 브라우저는 '실제 데이터 요청'을 전송합니다.
// - 출처, 메서드, 헤더 등이 응답과 일치하지 않으면 CORS 오류 발생
// - 일치하면 정상적으로 통신 진행


// ㅇ CORS 오류 해결 방법

// 방법 1: 서버에서 CORS 허용 헤더 설정

// '예시. Node.js + Express 환경에서 직접 설정하는 경우'
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://frontend.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// 예시. cors 미들웨어를 사용하는 경우
const cors = require("cors");

app.use(cors({
  origin: "https://frontend.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
// - 개발 환경에서는 `origin: "*"`으로 모든 출처 허용 가능
// - 배포 환경에서는 반드시 '명확한 도메인만 허용'해야 함


// ㅇ 방법 2: 프록시 서버 활용 (개발 환경용)

// 브라우저는 출처가 다르면 보안을 위해 요청을 차단하지만, '개발 도중 프론트엔드 개발 서버가 요청을 대신 중계해 주면' 이를 같은 출처로 간주합니다.

// create-react-app 기준
// "proxy": "http://localhost:5000"
// - 이후 API 요청은 상대 경로(`/api/data`)로 전송
// - 개발 중에는 편리하지만, '배포 환경에서는 사용 불가'


// ⚠️CORS 발생시 주의사항
// - '모든 요청에 CORS가 필요한 것은 아닙니다.'
//     - 같은 출처일 경우 CORS는 작동하지 않습니다.
//     - 서버 간 통신(백엔드 ↔ 백엔드)에는 브라우저 보안 정책이 적용되지 않습니다.
// - '브라우저 콘솔의 오류 메시지를 잘 살펴보세요.'
//     - `No 'Access-Control-Allow-Origin' header` 등 명확한 원인이 명시되어 있습니다.
// - '허용 대상은 좁게 설정하세요.'
//     - 와일드카드는 개발 환경에서만 사용하고, 배포 시에는 반드시 구체적인 출처를 명시해야 보안을 유지할 수 있습니다.


// 'CORS는 브라우저가 사용자를 보호하기 위한 보안 정책입니다.'

// 오류가 발생했다고 해서 브라우저나 서버의 잘못은 아닙니다.

// '서버와 클라이언트가 명시적으로 서로를 신뢰해야' 안전한 통신이 가능합니다.

// 이번 학습을 통해 CORS 오류가 발생하는 구조를 이해하고,

// 실제 프로젝트에서 직접 해결할 수 있는 역량을 키워보세요.