// // 1. 목표 : DOM이 브라우저가 HTML 문서를 JavaScript의 객체 형태로 변환한 Document Object Model이라는 것을 기억할 수 있다.

// // HTML과 CSS는 웹페이지의 모습을 구성하지만, 'JavaScript가 실제로 이들을 제어하는 통로'는 바로 'DOM(Document Object Model)'입니다.

// // DOM을 이해하면 단순한 정적 웹페이지를 넘어서, '사용자의 행동에 반응하고 실시간으로 콘텐츠가 변하는 동적인 웹페이지'를 만들 수 있습니다.

// // 이번 학습에서는 DOM이 '무엇이며, 왜 필요한지', 그리고 DOM을 활용해 '무엇을 할 수 있는지'를 이해하는 데 집중합니다.


// // ✅ DOM(Document Object Model)이란?
// // 웹페이지를 구성하는 HTML은 본질적으로 단순한 '텍스트 문서'입니다. 하지만 JavaScript는 객체를 기반으로 동작하는 언어이기 때문에, 이 HTML을 '제어하려면 객체 형태로 변환'되어야만 합니다. 이때 사용되는 것이 바로 'DOM'입니다.
// // 'DOM은 HTML이나 XML 문서를 트리 구조로 변환하여, JavaScript를 통해 각 요소에 접근하고 조작할 수 있도록 만든 객체 모델'입니다. 즉, DOM은 웹 브라우저 안에서 '문서를 프로그래밍적으로 제어할 수 있도록 연결해주는 프로그래밍 인터페이스'입니다.

// // ㅇ Moal이란?
// // - 특정 개념, 데이터, 시스템 등을 단순화하고 구조화하여 표현한 패턴입니다.

// // ㅇ 프로그래밍 InterFace란?
// // - 프로그래밍 인터페이스(Programming Interface)는 프로그램이 특정 시스템, 서비스, 또는 데이터와 상호작용을 할 수 있게 만드는 중간 다리 같은 역할을 하는 것입니다.

// // ** DOM = 브라우저가 HTML을 객체로 변환한 구조 + JavaScript가 조작할 수 있는 대상

// // 💡 DOM이 왜 필요할까요?
// // HTML은 웹페이지의 '뼈대', CSS는 그 위에 '스타일을 입히는 역할', 그리고 JavaScript는 페이지를 '동적으로 움직이게 만드는 역할'을 합니다. 하지만 JavaScript가 HTML 요소를 직접 조작하려면, HTML이 단순 텍스트가 아닌 '객체 구조'로 되어 있어야 합니다.
// // 브라우저는 HTML 문서를 로드한 뒤, 그 내용을 DOM이라는 '트리 구조의 객체로 해석'하여 JavaScript가 각 요소에 접근하고 수정할 수 있게 만듭니다.
// // 예를 들어, HTML 안에 `<h1>Hello</h1>`이라는 요소가 있다면, JavaScript는 DOM을 통해 이 요소를 찾아 색상을 바꾸거나 내용을 바꾸는 등의 작업을 할 수 있습니다.

// // 🔎 DOM을 이해하면 가능한 일들
// // DOM은 단순히 HTML을 객체로 바꾸는 구조일 뿐만 아니라, 이를 이해하고 활용하면 웹페이지를 '동적으로 제어'할 수 있는 수많은 작업이 가능해집니다. 아래에 등장하는 DOM 메서드는 다른 콘텐츠에서 추가로 학습할 예정이니, 지금은 DOM으로 무엇을 할 수 있는지만 이해하면 충분합니다.

// // 1. HTML 요소의 스타일 변경
// const heading = document.querySelector('h1');
// heading.style.color = 'red'; // 색상 변경

// // - `querySelector`를 이용해 원하는 요소를 선택한 후,
// // - `style` 속성을 통해 직접 CSS를 조작할 수 있습니다.

// // 2. 사용자와 상호작용 처리 (이벤트 핸들링)
// document.querySelector('button').addEventListener('click', () => {
//   alert('버튼 클릭됨!');
// });
// // - 버튼 클릭, 입력 등의 '이벤트에 반응하여 동작을 정의'할 수 있습니다.
// // - 이를 통해 사용자와의 '상호작용이 가능한 인터페이스'를 구현합니다.

// // 3. HTML 요소 추가 및 삭제
// const newDiv = document.createElement('div');
// newDiv.textContent = '새로운 내용';
// document.body.appendChild(newDiv);
// // - `createElement`로 새 요소를 만들고, `appendChild`로 문서에 추가할 수 있습니다.
// // - 동적으로 구성되는 콘텐츠(예: 댓글, 알림 등)에 자주 사용됩니다.

// // 4. DOM 트리 순회 및 탐색
// // const parent = document.querySelector('ul');
// // const children = parent.children; // 모든 자식 요소 가져오기
// // - parentNode, children, nextElementSibling 등을 활용하면 DOM 구조를 탐색하며 필요한 요소에 접근할 수 있습니다.

// // ㅇ HTML 문서가 객체로 변환되는 과정

// // HTML 문서는 본래 단순한 '텍스트 구조'입니다. 하지만 웹 브라우저는 이 HTML을 단순 텍스트로만 인식하지 않고, '계층적인 구조'로 해석할 수 있어야 합니다. 이를 가능하게 해주는 것이 바로 DOM입니다.

// // 예를 들어 아래와 같은 HTML 문서가 있다고 가정해 보겠습니다.
// <html>
//   <body>
//     <h1>Hello!</h1>
//     <p>Welcome to the DOM.</p>
//   </body>
// </html>
// // 이 문서는 폴더와 파일처럼 '상위 요소와 하위 요소가 계층적으로 연결되어 있는 구조'입니다.

// // 하지만 컴퓨터는 이런 구조를 직접 이해하지 못하기 때문에, 브라우저는 HTML을 '트리(Tree) 구조로 변환'하여 각 요소 간의 관계를 파악할 수 있도록 합니다. 이 변환 과정을 통해 HTML은 JavaScript로 조작 가능한 객체 구조가 됩니다.
// // - Tree 구조란?
//     // Tree는 데이터의 계층적으로 표현하는 방법 중 하나이며, Node와 Edge로 구성되어 있습니다. 다음은 트리 구조를 그림으로 표현한 예시입니다. 아래 그래프에서 Node는 파란색 원, Edge는 Node와 Node를 연결하는 선입니다. 
//     // - Node: 하나의 데이터 단위 (예: 태그, 텍스트 등)
//     // - Edge: 노드와 노드를 연결하는 선

// // DOM 트리에서는 다음과 같이 각 HTML 구성 요소들이 분류됩니다.

// // - 태그 요소 → `Element` 노드
// // - 태그의 속성 → `Attribute` 노드
// // - 텍스트 내용 → `Text` 노드

// // 위 예제 HTML을 DOM Tree로 표현하면 다음과 같습니다.
// // Document
// //  └── html (Element)
// //       └── body (Element)
// //            ├── h1 (Element)
// //            │     └── "Hello!" (Text)
// //            └── p (Element)
// //                  └── "Welcome to the DOM." (Text)
// // > 참고: 실제로 h1과 p 태그에 class="text" 속성이 있다면, 각 요소에는 Attribute: class="text" 노드도 함께 포함됩니다.

// // 이렇게 DOM은 HTML을 객체로 변환하여, JavaScript에서 다음과 같은 방식으로 조작할 수 있도록 해줍니다.
// const heading = document.querySelector("h1");
// heading.textContent = "안녕하세요!"; // 텍스트 변경

// // ⚠️ DOM 학습 시 주의할 점
// // - DOM은 'HTML 구조 전체를 객체로 변환'한 모델이기 때문에, 하나의 요소만 보는 것이 아니라 '문서 전체의 계층 구조를 파악'하는 연습이 필요합니다.
// // - DOM 트리는 각 HTML 요소가 'Node로 변환된 형태'이므로, `Element`, `Text`, `Attribute` 등 다양한 노드 유형이 존재합니다. 이를 정확히 이해하고 있어야 JavaScript에서 DOM을 조작할 때 '의도한 대로 작동하게 만들 수 있습니다.'
// // - HTML은 단순한 문서이고, 'DOM을 통해서만 JavaScript가 HTML과 연결되어 동작'할 수 있다는 점을 반드시 기억해야 합니다.


// // 'DOM은 HTML을 단순한 텍스트 문서가 아닌 객체의 트리 구조로 바꿔주는 연결 다리입니다.'

// // 이 구조 덕분에 JavaScript는 문서의 요소를 선택하고, 수정하며, 추가하거나 삭제할 수 있습니다.

// // 'HTML → DOM → JavaScript'의 흐름을 이해하면, 단순히 웹페이지를 보는 수준을 넘어 '웹페이지를 제어하고 변화시키는 능력'을 갖추게 됩니다.

// // Document
// //  └── html (Element, Attribute: lang="en")
// //       ├── head (Element)
// //       │     └── title (Element)
// //       │           └── "Sample DOM Tree with Attributes" (Text)
// //       └── body (Element)
// //             ├── h1 (Element, Attribute: id="main-title", class="title")
// //             │     └── "Hello, DOM Tree!" (Text)
// //             ├── p (Element, Attribute: class="description", style="color: blue;")
// //             │     └── "This is a simple paragraph." (Text)
// //             └── a (Element, Attribute: href="https://example.com", target="_blank")
// //                   └── "Visit Example" (Text)

// // =========================================================================

// // 2. 목표 : Node의 유형과 DOM API에 대해 알 수 있다.

// // 'HTML은 단순한 마크업 문서이지만, 브라우저는 이를 객체(Node)의 형태로 재구성하여 JavaScript가 조작할 수 있도록 DOM을 만듭니다.'

// // 이때 생성되는 'Node는 DOM 트리의 기본 단위이자 JavaScript 객체로서의 기능을 갖춘 구조'입니다.

// // 각 Node는 HTML 요소뿐만 아니라 텍스트, 속성, 주석 등 다양한 유형을 포함하며, 이를 제대로 이해하면 DOM 전체를 더 깊이 있게 다룰 수 있게 됩니다.

// // 이번 학습에서는 'DOM을 구성하는 다양한 Node 유형과 역할, 그리고 DOM API를 통해 어떻게 접근하고 조작하는지'를 단계별로 익혀봅니다.


// // ✅ DOM을 구성하는 Node 이해하기
// // 1️⃣ Node란?
// // Node는 DOM 트리를 구성하는 '기본 단위이자 JavaScript 객체'입니다. 각각의 Node는 'HTML 요소, 속성, 텍스트, 주석 등'을 표현하며, DOM을 통해 제어할 수 있게 됩니다.
//     // ㅇ 예시
//     // `<div id="example" class="container">
//     //     <p>Hello, World!</p>
//     // </div>`
//     // 이 HTML 문서는 아래와 같은 Node 트리로 변환됩니다.
// //     Element (div)
// //  ├── attributes (NamedNodeMap)
// //  │     ├── Attribute: id="example"
// //  │     └── Attribute: class="container"
// //  ├── children (HTMLCollection)
// //  │     └── Element (p)
// //  │           └── Text: "Hello, World!"
// //  ├── childNodes (NodeList)
// //  │     ├── #text (공백 노드)
// //  │     └── Element (p)
// //  │           └── Text: "Hello, World!"
// //  └── style (CSSStyleDeclaration)

// // 2️⃣ 주요 Node 유형 정리\
// // - Document : DOM의 최상위 Node. 문서 전체를 대표하며, 탐색과 생성의 출발점
// // - Element : HTML 태그를 나타냄. querySelector() 등으로 선택 가능
// // - Attribute : 태그에 설정된 속성 (예 : id='title')
// // - Text : 태그 내부의 텍스트 내용
// // - Comment : HTML 주석 내용
// // - Children : 자식 Element만 포함
// // - ChildNodes : 자식 Node 전체 포함 (공백, 주석 등 포함)
// // - Style : 인라인 스타일 정보 (style="color: red;" 등)

// // 3️⃣ Node와 Element의 차이
// // - `Node`: 텍스트, 주석, 속성 등 모든 종류의 노드 포함
// // - `Element`: 그중 'HTML 태그 요소'만을 의미
// // 예를 들어, `document.querySelector('div')`로 선택한 요소는 'Element Node'이며, 이는 속성, 자식 노드, 스타일 등을 포함한 하나의 객체입니다.

// // ⚙️ DOM API란?
// // DOM API는 'Node를 조작하기 위한 속성과 메서드의 집합'입니다. 예를 들어 `textContent`, `style`, `appendChild()` 등은 모두 DOM API에 해당합니다.
// const title = document.querySelector('h1');
// title.textContent = '새로운 제목'; // 텍스트 변경
// // - 속성(property): 객체의 상태나 정보를 표현 (예: `innerHTML`, `id`, `value`)
// // - 메서드(method): 객체가 수행할 수 있는 동작 (예: `appendChild()`, `remove()`)

// // 💡 HTML 속성과 DOM 속성의 차이
// // | 항목      | HTML 속성(Attribute)         | DOM 속성(Property)       |
// // | ---       |            ---               |              ---         |
// // | 위치      | HTML 문서 내 태그에 작성     | DOM 객체의 내부 속성     |
// // | 역할      | 초기값으로만 사용됨          | 현재 상태를 표현         |
// // | 예시      | `<input type="text" />`      | `input.type === "text"`  |
// // | 동적 변경 | 불가능 (HTML 직접 수정 필요) | 가능 (JavaScript로 조작) |

// // - HTML 속성(Attribute)
// <input id="username" type="text" />

// // - DOM 속성(Property)
// const input = document.querySelector('#username');

// console.log(input.id);       // "username" (DOM 속성)
// console.log(input.type);     // "text" (DOM 속성)
// console.log(input.getAttribute('type')); // "text" (HTML 속성)


// // ## ⚠️ DOM 메서드 사용시 주의 사항
// // 1. 사용자 정의 속성(`data-*`)은 DOM 속성으로 자동 연결되지 않을 수 있습니다
// // HTML에서는 `data-` 접두어를 사용하여 사용자 정의 속성을 만들 수 있습니다. 예를 들어 다음과 같은 코드를 보겠습니다.
// <div data-user-id="1234"></div>

// // 이때, JavaScript에서는 아래와 같이 해당 속성을 가져올 수 있습니다.
// const element = document.querySelector('div');
// console.log(element.dataset.userId); // "1234"
// // - `dataset` 객체를 통해 `data-`로 시작하는 속성에 접근할 수 있으며, 속성명은 camelCase로 변환됩니다 (`data-user-id` → `userId`)
// // - 하지만 `dataset`이 아닌 일반적인 방식으로 DOM 속성처럼 바로 접근할 수는 없습니다

// // - 또는 다음과 같이 `getAttribute()` 메서드를 사용하여도 값을 가져올 수 있습니다
// console.log(element.getAttribute('data-user-id')); // "1234"
// // 즉, data-* 속성은 JavaScript 객체의 속성(property)으로 자동 연결되지 않으며, 별도로 dataset 객체나 getAttribute()를 통해 접근해야 합니다

// // 2. HTML 속성명과 DOM 속성명은 이름이 다를 수 있습니다
// // HTML에서는 속성명이 '하이픈(-)'을 포함할 수 있지만, JavaScript에서는 변수나 속성명에 하이픈을 사용할 수 없기 때문에, DOM에서는 이를 'camelCase' 형식으로 변환하여 사용합니다.

// // 예를 들어 아래와 같은 HTML이 있다고 해봅시다.
// <button tab-index="0"></button>
// // 이 요소에 JavaScript로 접근하려면 다음과 같이 작성해야 합니다.
// const btn = document.querySelector('button');
// console.log(btn.tabIndex); // 0
// // - `tab-index`는 `tabIndex`라는 이름으로 변환되어 DOM 속성으로 존재합니다
// // - 하이픈이 포함된 속성은 모두 camelCase로 바뀌므로 주의가 필요합니다

// // 또한, HTML 속성과 DOM 속성의 이름이 일치하지 않는 경우도 있습니다. 예를 들어:
// // HTML 속성(Attribute)   /   DOM 속성(Property)
// // class                  /  className
// // for                    /    htmlFor
// // readonly               /    readOnly

// // 이러한 차이점은 JavaScript에서 DOM 속성을 사용할 때 항상 동일한 이름으로 접근할 수 없다는 점을 의미합니다.
// // 따라서 DOM 속성명을 정확히 기억하거나, getAttribute() / setAttribute() 메서드를 함께 활용하는 것이 좋습니다.


// // DOM을 이해한다는 것은 단순히 HTML을 다루는 것이 아니라, '웹페이지를 구성하는 모든 요소를 객체처럼 자유롭게 조작할 수 있는 능력'을 기르는 것입니다.
// // 각 Node가 어떤 역할을 하며, 어떻게 조작 가능한지를 알게 되면 '인터랙티브(interactive, 상호작용하는)한 웹을 만드는 데 훨씬 강력한 도구'를 갖추게 됩니다.

// // ==========================================================

// // 3. 목표 : querySelector를 사용하여 HTML 요소를 선택하고 해당 요소를 변수에 할당할 수 있다.

// // HTML 문서를 JavaScript로 제어하려면, 가장 먼저 해야 할 일은 'HTML 요소를 선택하는 것'입니다. 이를 위해 가장 널리 사용되는 메서드가 바로 `querySelector()`입니다.

// // 이번 학습에서는 `querySelector()`를 사용해 '원하는 요소를 선택하고, 이를 변수에 저장'하는 방법을 익혀봅니다.


// // ✅ querySelector로 HTML 요소 선택하기
// // 1️⃣ document 객체란?
// // 웹페이지를 구성하는 HTML 문서는 브라우저에 의해 DOM(Document Object Model)으로 변환됩니다. JavaScript는 이 DOM에 접근해 요소를 조작하거나 이벤트를 처리합니다. DOM에 접근하는 시작점이 바로 document 객체입니다.
// console.log(document); // 현재 문서를 나타내는 객체
// // - 브라우저는 HTML을 읽고 DOM 트리를 생성하며, 이를 조작할 수 있는 document 객체를 자동으로 제공합니다. 따라서 document.querySelector()와 같은 형태로 DOM에 바로 접근할 수 있습니다.

// // 2️⃣ querySelector()로 요소 하나 선택하기
// <h1 class="title">안녕하세요!</h1>
// // -------------------------------------------
// const titleEl = document.querySelector(".title");
// console.log(titleEl.textContent); // "안녕하세요!"
// // - `.title`이라는 클래스명을 가진 '첫 번째 요소'를 선택합니다.
// // - `querySelector()`는 CSS 선택자 문법을 그대로 사용할 수 있어 매우 직관적입니다.
// // - 클래스(`.className`), 아이디(`#idName`), 태그 이름(`tagName`)은 물론, 자손(`div p`), 자식(`div > p`), 속성 선택자(`[type="text"]`)까지 모두 사용 가능합니다.

// document.querySelector("#main");           // ID 선택자
// document.querySelector("ul li.item");      // 자손 선택자
// document.querySelector("a[target='_blank']"); // 속성 선택자
// // - CSS 선택자를 익힐수록, querySelector()를 더욱 강력하게 활용할 수 있습니다.
// // 다양한 선택자(selector) 알면 좋음 ( [type="text"], input:checked, li:nth-child(2) 등등)

// // 3️⃣ querySelectorAll()로 여러 요소 선택하기
// <div>
//     <div class="btn">버튼2</div>
//     <div class="btn">버튼3</div>
//     <div class="btn">버튼1</div>
// </div>
// // ------------------------------------------
// const buttons = document.querySelectorAll(".btn");
// console.log(buttons.length); // 3
// // - `.btn` 클래스를 가진 '모든 요소를 선택'하여 `NodeList`로 반환합니다.
// // - 이때 반환되는 `NodeList`는 '유사 배열 객체'로, `forEach()`는 사용할 수 있지만 `map()`, `filter()` 등 배열 메서드는 직접 사용이 불가능합니다.
// // | 구분 | 사용 가능 여부 | 설명 |
// // | `length` | ✅ 가능 | 요소 개수 확인 |
// // | `forEach()` | ✅ 가능 | 반복 처리 가능 (고차 함수 중 유일) |
// // | `map()` / `filter()` 등 | ❌ 불가능 | 진짜 배열로 변환해야 사용 가능 |
// // | `Array.from()` / `[...]` | ✅ 가능 | 배열로 변환하여 고차 함수 사용 가능 |

// // 💡💡  >> 유사 배열을 배열로 변환하는 방법
// // ✅ 유사 배열(NodeList)과 진짜 배열의 차이
// // - 유사 배열에 배열 메서드를 사용하려면 먼저 '배열로 변환'해야 합니다.
// buttons.forEach(btn => {
//   console.log(btn.textContent); // 정상 동작
// });
// buttons.map(btn => btn.textContent); // ❌ 오류: map은 NodeList에 없음

// // 1. Array.from() 사용
// const btnArray1 = Array.from(buttons);
// const texts1 = btnArray1.map(btn => btn.textContent);
// // 2. 스프레드 문법(...) 사용
// const btnArray2 = [...buttons];
// const texts2 = btnArray2.map(btn => btn.textContent);

// // 4️⃣ 다양한 HTML 요소 선택 메서드
// // ┌──────────────────────────────┬────────────────────────────────────────────┬────────────────────┐
// // │ 메서드                       │ 설명                                       │ 반환값             │
// // ├──────────────────────────────┼────────────────────────────────────────────┼────────────────────┤
// // │ getElementById(id)           │ id 속성으로 요소 선택                      │ 단일 요소          │
// // │ getElementsByClassName(class)│ class 속성으로 요소들 선택                 │ HTMLCollection     │
// // │ getElementsByTagName(tag)    │ 태그 이름으로 요소들 선택                  │ HTMLCollection     │
// // │ querySelector(selector)      │ CSS 선택자 문법으로 첫 번째 요소 선택      │ 단일 요소          │
// // │ querySelectorAll(selector)   │ CSS 선택자 문법으로 모든 요소 선택         │ NodeList           │
// // └──────────────────────────────┴────────────────────────────────────────────┴────────────────────┘

// // `getElementById(id)`
// // - 특정 id를 가진 요소를 선택하는 메서드입니다.
// // `getElementsByClassName(className)`
// // - 특정 클래스를 가진 요소 목록을 반환하는 메서드입니다.

// // ㅇ querySelectorAll()
// // - `querySelectorAll()`은 지정된 범위 내에서 '선택자의 마지막 요소'를 기준으로 먼저 탐색합니다.
// // - 이후, 전체 DOM 트리에서 '선택자 전체가 일치하는지 관계를 검증'합니다.
// // - 이 방식은 선택자의 시작점이 기준 범위에 포함되어 있지 않아도 결과를 반환할 수 있다는 점에서 혼동을 줄 수 있습니다.


// // ⚠️ querySelector 사용 시 주의 사항

// // 1️⃣ HTMLCollection과 NodeList는 배열이 아닙니다
// // - `querySelectorAll()`은 'NodeList'를 반환합니다. `getElementsByClassName()` 등은 'HTMLCollection'을 반환합니다.
// // - 둘 다 배열처럼 보이지만 '실제 배열이 아니기 때문에', `map()`, `filter()` 같은 '배열 전용 메서드는 사용할 수 없습니다.'
// // - '사용 가능한 메서드'
// //     - NodeList: `forEach()`, `length`, `item()`, `entries()` 등
// //     - HTMLCollection: `length`, `item()`, `namedItem()` 등
// // - 배열처럼 사용하려면 Array.from() 또는 전개 연산자(...)로 변환해야 합니다.
// const btns = document.querySelectorAll('.btn');
// const btnArray = Array.from(btns); // 또는 [...btns]

// // 2️⃣ querySelector는 항상 첫 번째 요소만 반환합니다
// const btn = document.querySelector('.btn')
// // - `.btn` 클래스가 여러 개 있어도 '가장 첫 번째 요소만 반환'합니다.
// // - 여러 요소를 선택하려면 `querySelectorAll()`을 사용해야 합니다.

// // 3️⃣ querySelectorAll은 NodeList를 반환하지만, 정적인 집합입니다
// // - `getElementsByClassName()`은 'HTMLCollection(동적)'을 반환하지만, `querySelectorAll()`은 'NodeList(정적)'를 반환합니다.
// // - `querySelectorAll()`은 DOM이 변경되어도 반환된 요소 목록이 자동으로 갱신되지 않습니다. 즉, '정적인(고정된) 목록'을 반환합니다.

// // 4️⃣ CSS 선택자를 잘못 쓰면 null 또는 빈 NodeList가 반환됩니다
// const element = document.querySelector('.does-not-exist');
// console.log(element); // null
// // - 선택자 문법 오류 또는 해당하는 요소가 없으면 null을 반환하므로, null 체크가 중요합니다.


// // '요소 선택은 DOM 조작의 시작점입니다.'
// // `querySelector()`와 `querySelectorAll()`은 CSS 선택자를 그대로 사용할 수 있어 매우 유용하지만, 동작 방식과 반환값의 특징을 정확히 이해하고 있어야 원하는 대로 작동합니다.
// // 'NodeList는 배열이 아니라는 점', '첫 번째 요소만 반환된다는 점', '복잡한 선택자 사용 시 마지막 요소 중심으로 탐색된다는 점' 등을 꼭 기억하세요!
// // '이해하고 쓰면 훨씬 안전하고 유연한 DOM 제어가 가능합니다.'
// // ===================================================================

// // 4. 목표 : DOM 메서드를 사용하여 HTML 요소의 속성, 내용또는 스타일을 동적으로 변경하는 코드를 구현할 수 있다

// // 'HTML 요소는 단순한 텍스트가 아닙니다.'
// // JavaScript에서는 `querySelector()`로 선택한 요소를 객체처럼 다룰 수 있으며, 속성, 내용, 스타일을 자유롭게 조작할 수 있습니다.
// // 이번 학습에서는 DOM 요소를 조작하는 다양한 방법을 익혀, '화면에 직접적인 변화를 주는 코드 작성 능력'을 키워봅니다.


// // ✅ querySelector로 선택한 요소 조작하기
// // 1️⃣ HTML 요소 선택하기
// // HTML 요소를 조작하려면 먼저 해당 요소를 선택해야 합니다. 가장 일반적인 방법은 `querySelector()`입니다.
// <div id="box" class="container">안녕하세요!</div>
// const box = document.querySelector('#box');
// // - `#box`라는 ID를 가진 요소를 선택해 변수 `box`에 저장합니다.
// // - 이 요소는 이제 `HTMLElement` 객체로, 다양한 속성과 메서드를 사용할 수 있습니다.

// // 2️⃣ 요소의 **속성(property)** 조작하기
// // ## 'id`, `className`, `classList` 등 기본 속성 변경
// console.log(box.id); // "box"
// box.id = 'greeting'; // id 속성 변경

// console.log(box.className); // "container"
// box.className = 'highlighted'; // class 속성 변경
// // - `id`, `className`은 HTML 속성과 1:1로 연결된 DOM 속성입니다.
// // - 값을 직접 수정하면 화면의 요소에도 즉시 반영됩니다.

// // ## classList 메서드를 활용한 클래스 추가/제거
// box.classList.add('visible');     // 클래스 추가
// box.classList.remove('container'); // 기존 클래스 제거
// box.classList.toggle('active');    // 없으면 추가, 있으면 제거
// // - `classList`는 배열처럼 클래스 목록을 조작할 수 있는 객체입니다.
// // - `toggle()`은 상태를 전환할 때 유용합니다.

// // 3️⃣ 요소의 내용 조작하기
// // ## textContent: 텍스트만 바꾸기
// console.log(box.textContent); // "안녕하세요!"
// box.textContent = "반가워요!"; // 텍스트 변경
// // 텍스트만 교체할 때 유용하며, 기존의 태그 구조는 무시됩니다.

// // ## innerHTML: HTML 구조까지 변경
// box.innerHTML = "<p><strong>새로운 인사</strong></p>";
// // - 태그 구조를 포함하여 전체 내용을 변경할 수 있습니다.
// // - 주의⚠️: 외부 입력을 직접 삽입하는 경우 XSS 취약점에 노출될 수 있습니다.

// // ### ⚠️ XSS 취약점이란?
// // - 'XSS(Cross-Site Scripting, 교차 사이트 스크립팅)'는 악의적인 사용자가 웹페이지에 'JavaScript 등의 스크립트를 삽입'하여, 이를 열람한 다른 사용자에게 피해를 입히는 공격 기법입니다.

// // 웹페이지에서 `innerHTML`을 사용할 때, 외부에서 입력받은 내용을 그대로 넣으면 공격자가 아래와 같은 코드를 삽입할 수 있습니다.
// const userInput = '<img src=x onerror="alert(`해킹됨`)">';
// element.innerHTML = userInput;
// // 이 코드가 실행되면 이미지 로딩이 실패하면서 onerror에 정의된 alert()가 실행됩니다. 이보다 더 위험한 경우에는 쿠키 탈취, 계정 탈취, 세션 하이재킹 등의 보안 사고로 이어질 수 있습니다.

// // ㅇ 예시 : 위험한 코드
// // 사용자의 입력을 그대로 innerHTML에 삽입한 경우
// const input = '<script>alert("XSS 공격!")</script>';
// document.querySelector('#output').innerHTML = input;
// // - 사용자가 `<script>` 태그를 삽입하면, 실제로 그 '스크립트가 실행'되어 버립니다.
// // - 이 코드는 공격자가 작성한 스크립트를 사이트에 삽입할 수 있도록 허용하는 셈입니다.

// // ㅇ 안전한 대안은?
// // - textContent를 사용하면 HTML 태그를 텍스트로 취급하므로, 스크립트가 실행되지 않습니다.
// document.querySelector('#output').textContent = userInput;
// // - 외부 입력이 반드시 HTML이어야 하는 경우, sanitize(정제) 라이브러리를 사용하여 위험한 코드를 제거한 후 삽입해야 합니다. 예: DOMPurify

// // 4️⃣ 요소의 스타일 조작하기
// // style 속성으로 인라인 스타일 적용
// box.style.color = 'white';               // 글자색
// box.style.backgroundColor = 'skyblue';   // 배경색
// box.style.padding = '10px';              // 패딩
// // - `style`은 인라인 스타일로 적용되며, 기존 CSS보다 우선 적용됩니다.
// // - CSS 속성 중 하이픈(-)이 포함된 경우에는 camelCase로 작성합니다 (예: `background-color` → `backgroundColor`).

// // 5️⃣ HTML 속성(attribute) 조작하기
// // - 속성(attribute)은 HTML 태그 안에 직접 지정된 값이며, JavaScript로 접근할 때는 다음 메서드를 사용합니다.
// <input id="user" type="text" placeholder="이름 입력"></input>
// const input = document.querySelector('#user');

// // 속성 읽기
// console.log(input.getAttribute('placeholder')); // "이름 입력"
// // 속성 변경
// input.setAttribute('placeholder', '닉네임 입력');
// // 속성 제거
// input.removeAttribute('type');
// // 속성 존재 여부 확인
// console.log(input.hasAttribute('type')); // false
// // - `getAttribute()`, `setAttribute()` 등을 사용하면 HTML 문서에 정의된 속성을 그대로 조작할 수 있습니다.
// // - `placeholder`, `data-*` 속성처럼 DOM 속성으로 자동 변환되지 않는 값도 조작할 수 있습니다.

// // 6️⃣ 이벤트 리스너 추가하기
// // HTML 요소에 이벤트를 연결하면 사용자의 동작(클릭, 입력 등)에 반응하는 인터랙션을 만들 수 있습니다.

// // addEventListener() 메서드란?
// // - addEventListener(이벤트 타입, 실행할 함수) 형식으로 작성합니다.
// const box = document.querySelector('.box');

// box.addEventListener('click', () => {
//   alert('박스를 클릭했습니다!');
// });
// // - 위 예제에서는 `.box` 클래스를 가진 요소를 클릭했을 때, 알림창이 뜨도록 설정했습니다.
// // - 첫 번째 전달인자 `"click"`은 '이벤트 종류'입니다. `"mouseover"`, `"keydown"`, `"input"` 등 다양한 이벤트 타입을 지정할 수 있습니다.
//     // | 이벤트 타입 | 설명 |
//     // | `click` | 요소를 클릭할 때 실행 |
//     // | `input` | 입력 필드에 값이 입력될 때 실행 |
//     // | `change` | 값이 바뀌었을 때 (select, checkbox 등) |
//     // | `submit` | 폼이 제출될 때 |
//     // | `mouseover` | 마우스가 요소 위로 올라갔을 때 |
//     // | `keydown` | 키보드 키를 눌렀을 때 |
// // - 두 번째 전달인자는 이벤트가 발생했을 때 실행할 함수(콜백 함수)입니다.

// // 7️⃣ 요소 추가 / 삭제 / 교체하기
// // HTML 요소는 JavaScript로 생성하고 추가하거나, 삭제하거나, 교체할 수 있습니다. 이 기능은 동적인 UI를 만들 때 매우 중요합니다.

// // ✅ 1. 자식 요소 추가하기: `appendChild()`
// // `createElement()`로 새로운 요소를 만든 뒤, `appendChild()`를 통해 기존 요소에 자식으로 추가할 수 있습니다.
//     const box = document.querySelector('.box');

//     // 새 요소 생성
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = "새 문단이 추가됐어요!";

//     // box의 자식으로 추가
//     box.appendChild(newParagraph);
//     // - `createElement('p')`: `<p>` 태그 요소를 새로 만듭니다.
//     // - `textContent`를 설정해 텍스트를 추가합니다.
//     // - `appendChild()`를 사용해 기존 요소의 '맨 마지막 자식'으로 새 요소를 추가합니다.

// // ✅ 2. 요소 삭제하기: remove()
// // 선택한 요소를 DOM에서 완전히 제거합니다.
//     const box = document.querySelector('.box');

//     box.remove();
//     // - `remove()` 메서드는 선택된 요소(`box`) 자체를 DOM에서 제거합니다.
//     // - 이 메서드는 해당 요소의 부모와 자식 관계도 끊고, 메모리에서 제거되도록 요청합니다.

// // ✅ 3. 자식 요소 교체하기: replaceChild()
// // replaceChild(새로운 요소, 기존 요소)를 사용하면, 특정 자식 요소를 새 요소로 교체할 수 있습니다.
//     const box = document.querySelector('.box');

//     // 새 요소 생성
//     const span = document.createElement('span');
//     span.textContent = "교체된 내용";

//     // 기존 자식 중 첫 번째 요소를 교체
//     box.replaceChild(span, box.firstChild);
//     // - `createElement('span')`: `<span>` 태그를 새로 만듭니다.
//     // - `box.firstChild`: `box`의 첫 번째 자식 노드를 의미합니다.
//     // - `replaceChild()`는 기존 자식을 제거하고, 그 위치에 새로운 요소를 삽입합니다.

// // ### 참고: `box.firstChild` vs `box.children[0]`
// // - `firstChild`는 '모든 노드(공백 포함)' 중 첫 번째를 가져옵니다.
// // - `children[0]`은 '요소 노드만' 가져옵니다.
// // - `box.firstChild`는 텍스트 노드(공백 포함)일 수도 있기 때문에 요소 노드를 정확히 지정하려면 `box.children[0]`을 사용하는 것이 더 안전합니다.


// // ⚠️ DOM 메서드 사용 시 주의 사항

// // - `innerHTML`을 사용할 때는 보안에 주의해야 합니다.
// //     외부 입력값을 그대로 `innerHTML`에 넣을 경우, 'XSS(크로스 사이트 스크립팅)' 공격에 노출될 수 있습니다.
// //     사용자의 입력을 처리할 때는 `textContent`를 사용하는 것이 더 안전합니다.
//             // ❌ 위험한 코드 (XSS 취약점 발생 가능)
//             element.innerHTML = userInput;
//             // ✅ 안전한 코드
//             element.textContent = userInput;
// // - `removeChild()`나 `replaceChild()`를 사용할 때는 교체 대상이 실제로 DOM에 존재하는지 확인해야 합니다.
// //     존재하지 않는 요소를 제거하거나 교체하려 하면 오류가 발생합니다.

// // - DOM 선택 메서드(querySelectorAll, element.childNodes 등)에 의해 선택된 요소집합은 배열이 아니므로 주의해서 사용해야합니다.
//     // - `NodeList`: `forEach`를 제외한 배열 메서드 사용 불가능
//     // - `HTMLCollection`: 배열 메서드 사용 불가능

// // → 배열 메서드 사용시, DOM 선택 요소 집합(`NodeList`, `HTMLCollection`)은 배열로 변환하여 사용해야합니다.


// // 'DOM 조작은 사용자와의 상호작용을 시각적으로 표현하는 핵심 기술입니다.'

// // 이번 학습을 통해 `querySelector()`로 선택한 요소를 속성(property)으로 제어하고, 내용(textContent, innerHTML)을 바꾸고, 스타일(style)을 적용하고, 필요한 경우 DOM에서 추가하거나 삭제하며 '웹 페이지를 유연하게 제어하는 방법을 익히셨습니다.'

// // 이러한 DOM 메서드는 프론트엔드 개발에서 매우 자주 사용되므로, '직접 코드를 써보며 익히는 것이 가장 좋은 학습 방법'입니다.

// // ======================================================================

// // 5. 목표 : DOM API를 사용하여 새로운 HTML 요소를 생성하고, 기존 요소에 append하거나 prepend하여 동적으로 문서 구조를 변경하는 코드를 구현할 수 있다

// // '정적인 HTML만으로는 진짜 웹앱을 만들 수 없습니다.'

// // 사용자의 클릭, 입력, 네트워크 요청에 따라 화면에 새로운 내용을 보여주려면 'HTML 요소를 직접 생성하고 추가할 수 있는 능력'이 필요합니다.

// // 이번 학습에서는 `createElement()`로 새로운 요소를 만들고, `appendChild()`나 `append()`를 통해 DOM에 동적으로 삽입하는 '진짜 웹 개발의 기초'를 익혀봅니다.

// // 'TO-DO 리스트, 알림 메시지, 댓글 입력창 등 모든 인터랙션의 시작은 바로 DOM 조작입니다.'

// // 코드로 화면을 바꾸는 경험, 지금 함께 시작해 볼까요?


// // ✅ JavaScript로 새로운 HTML 요소 만들고 추가하기

// // 1️⃣ 왜 HTML 요소를 생성하고 조작할까?
// // 웹페이지는 항상 정적인 구조만을 가진 것이 아닙니다. 사용자와의 상호작용에 따라 새로운 정보가 나타나거나 사라져야 할 때가 많습니다. 이처럼 '필요할 때 요소를 동적으로 추가하거나 제거하는 것'이 바로 DOM 조작의 핵심입니다.

// // 예를 들어 TO-DO 리스트 웹앱을 만든다고 생각해 봅시다.
// // - 사용자가 '할 일 추가' 버튼을 클릭하면,
// // - 새로운 할 일 항목(`<li>`)이 생성되고,
// // - 기존 목록에 마지막 자식으로 추가됩니다.

// // 이때 실제로 브라우저 내부에서는 어떤 일이 일어날까요?
// const newTodo = document.createElement('li'); // 새로운 li 요소 생성
// newTodo.textContent = 'JavaScript 복습하기';  // 텍스트 설정

// const list = document.querySelector('ul');    // ul 요소 선택
// list.appendChild(newTodo);

// // 2️⃣ createElement()로 HTML 요소 생성하기
// // HTML 태그를 JavaScript로 생성하려면 document.createElement()를 사용합니다.
// const div = document.createElement('div');
// console.log(div); // <div></div>
// // - `createElement()`는 해당 태그의 Element 객체를 생성해 반환합니다.
// // - 이 시점에서는 DOM에 추가되지 않았습니다.

// // 3️⃣ 생성한 요소에 텍스트 및 속성 추가하기
// // 🟢 텍스트 추가
// const div = document.createElement('div');
// div.textContent = '안녕하세요!';
// // - `textContent`: 단순 텍스트를 삽입할 수 있음
// // - `innerText`: 브라우저에 표시되는 텍스트 기준 (스타일 영향 받음)
// // - `innerHTML`: 태그를 포함한 HTML 삽입 가능
// div.innerHTML = '<strong>굵은 텍스트</strong>';

// // 🟢 속성 및 스타일 설정
// div.id = 'greeting';
// div.className = 'box';
// div.setAttribute('data-role', 'user');
// div.style.color = 'blue';
// // - `setAttribute()`를 사용하면 모든 속성을 문자열로 추가 가능
// // - `classList.add/remove/toggle()`를 사용하면 클래스 제어가 유용함
// div.classList.add('highlight');
// div.classList.toggle('active');

// // createElement() 메서드로 요소를 생성하고 텍스트, 속성, 스타일을 추가했다고 해서 곧바로 화면에 표시되는 것은 아닙니다. 생성한 요소는 반드시 append(), appendChild(), 또는 prepend() 같은 메서드를 사용하여 DOM에 추가해 주어야 사용자에게 보이게 됩니다.

// // 4️⃣ 생성한 요소를 DOM에 추가하기
// // ㅇ appendChild(): 마지막 자식으로 하나 추가
// const container = document.querySelector('.container');
// const newDiv = document.createElement('div');
// newDiv.textContent = '추가된 내용';

// container.appendChild(newDiv);
// // - 한 번에 하나의 요소만 추가 가능
// // - 반환값은 추가된 노드

// // ㅇ append(): 여러 개도 추가 가능, 텍스트도 가능
// const div1 = document.createElement('div');
// const div2 = document.createElement('div');
// div1.textContent = '첫 번째';
// div2.textContent = '두 번째';

// container.append(div1, div2, '텍스트도 추가');
// // - 텍스트와 요소를 동시에 추가 가능
// // - 여러 요소 추가 가능

// // ㅇ prepend(): 가장 첫 자식으로 추가
// const header = document.createElement('h2');
// header.textContent = '최상단 제목';

// container.prepend(header);
// // - 가장 첫 번째 위치에 추가
// // - append와 사용법은 같지만 위치가 다름

// // 5️⃣ 생성한 요소 교체하기
// // ㅇ replaceChild(): 자식 요소 교체
// const oldItem = container.querySelector('.old');
// const newItem = document.createElement('div');
// newItem.textContent = '새로운 요소';

// container.replaceChild(newItem, oldItem);
// // - 기존 요소를 새 요소로 교체
// // - 부모 요소에서만 호출 가능

// // 🏄🏻‍♂️ 예제:  Todo-list 만들기
// // 아래는 사용자가 ‘할 일 추가’ 버튼을 눌렀을 때, 새로운 `<li>` 요소를 동적으로 생성하여 `<ul>` 목록에 추가하는 코드입니다.
// <div>
//     <h2>오늘의 할 일</h2>
//     <ul id="todo-list">
//     <li>JavaScript 복습하기</li>
//     </ul>
//     <button id="add-btn">할 일 추가</button>
// </div>
// // - `#todo-list`: 할 일 목록을 담고 있는 `<ul>` 요소입니다.
// // - `#add-btn`: 새로운 할 일을 추가할 버튼입니다.

// // 1. 요소 선택
// const todoList = document.querySelector('#todo-list');
// const addBtn = document.querySelector('#add-btn');

// // 2. 버튼 클릭 시 실행할 함수 정의
// addBtn.addEventListener('click', () => {
//   // 1) 새로운 <li> 요소 생성
//   const newTodo = document.createElement('li');

//   // 2) 텍스트 설정
//   newTodo.textContent = '새로운 할 일 추가됨!';

//   // 3) 리스트에 추가
//   todoList.appendChild(newTodo);
// });
// // ✅ 코드 설명
// // 1. 요소 선택
// //     - `querySelector()`를 사용해 `ul`과 버튼을 선택합니다.
// // 2. 이벤트 등록
// //     - `addEventListener('click', ...)`를 통해 버튼 클릭 이벤트를 감지합니다.
// // 3. 새로운 요소 생성 및 추가
// //     - `createElement('li')`로 새 `<li>` 요소를 생성합니다.
// //     - `textContent`를 통해 표시할 텍스트를 설정합니다.
// //     - `appendChild()`로 기존 `ul`의 마지막에 새 항목을 추가합니다.

// // 🎯 결과 화면
// // 버튼을 누를 때마다 아래처럼 리스트 항목이 하나씩 추가됩니다.
// <ul id="todo-list">
//   <li>JavaScript 복습하기</li>
//   <li>새로운 할 일 추가됨!</li>
//   <li>새로운 할 일 추가됨!</li>
//   ...
// </ul>


// // ⚠️ DOM 요소 생성 및 추가 시 주의 사항

// // - `createElement()`로 생성한 요소는 DOM 트리에 자동으로 포함되지 않습니다. `appendChild()`, `append()`, `prepend()` 등을 사용해 명시적으로 추가해야 합니다.

// // - 텍스트나 HTML 내용을 동적으로 삽입할 때는 'XSS(크로스 사이트 스크립팅)' 공격에 주의해야 합니다.
//     // 외부에서 입력받은 데이터를 그대로 `innerHTML`로 삽입하면 악성 스크립트가 실행될 수 있습니다.

// // - `innerHTML`은 전체 내용을 통째로 덮어쓰므로 기존 자식 요소가 모두 삭제됩니다. 필요한 경우에는 `appendChild()`나 `insertAdjacentHTML()` 등 다른 방식도 고려하세요.

// // - 반복적으로 많은 요소를 생성할 때는 `DocumentFragment`를 사용하면 렌더링 성능을 높일 수 있습니다


// // '요소 생성과 추가는 동적 웹 페이지의 핵심입니다.'

// // `createElement()`로 HTML 요소를 만들고, `appendChild()`, `append()`, `prepend()` 등의 메서드를 사용하여 DOM에 추가함으로써 동적으로 콘텐츠를 조작할 수 있습니다.

// // 실제 웹 애플리케이션에서는 TO-DO 리스트, 댓글 입력, 모달 창 생성 등 다양한 곳에서 이러한 동작이 필요합니다.

// // 'DOM을 다룰 수 있어야 진짜 사용자 경험을 만드는 개발자가 됩니다.'

// // ============================================================================

// // 6. 목표 : addEventListener 문법을 사용하여 HTML 요소에 이벤트를 설정하고, 사용자 동작에 따라 동적으로 반응하는 코드를 구현할 수 있다.

// // '웹페이지는 사용자와의 상호작용으로 완성됩니다.'

// // 버튼 클릭, 키보드 입력, 마우스 움직임 등 다양한 행동을 감지하고 반응하는 기능은 모두 '이벤트(Event)'를 통해 구현됩니다. 이번 학습에서는 '이벤트를 감지하고 처리하는 방법', 그리고 그중에서도 실무에서 가장 많이 사용하는 방식인 `addEventListener()`를 배워봅니다.


// // ✅ 이벤트란?

// // JavaScript에서 '이벤트(Event)'란 사용자의 동작이나 브라우저에서 발생하는 특정 상황을 의미하며, '개발자는 이러한 이벤트를 감지하고 필요한 로직을 실행하도록 코드를 작성'함으로써 웹페이지가 사용자와 상호작용할 수 있도록 만듭니다.

// // 🎯 대표적인 이벤트 유형

// // 이벤트 타입 : 개발자가 감지할 수 있는 상황
// // --------------------------------------------------------------------------
// // click : 사용자가 요소를 클릭했을 때 동작을 실행
// // dblclick : 사용자가 요소를 더블 클릭했을 때 반응
// // mouseover / mouseout : 마우스가 요소 위로 올라가거나 벗어났을 때 효과 적용
// // keydown / keyup : 사용자가 키보드를 눌렀을 때 또는 뗐을 때 입력 감지
// // input : 사용자가 입력 필드에 텍스트를 입력할 때 실시간 반응 처리
// // submit : 사용자가 폼을 제출할 때 유효성 검사 등 추가 동작 실행
// // scroll : 페이지가 스크롤될 때 UI 업데이트 또는 데이터 로딩 처리
// // load : 웹페이지나 이미지 등의 리소스가 완전히 로드되었을 때 초기화 처리


// // 🎯 이벤트 등록 방식 비교

// // JavaScript에서 이벤트를 등록하는 방법은 다음 세 가지가 있습니다:

// // 1. '인라인 이벤트 속성 방식'
// // 2. 'DOM 속성 방식 (`onclick`, `onchange` 등)'
// // 3. '`addEventListener()` 방식' ← '표준'

// // 이 중에서 `addEventListener()`는 'W3C DOM Level 2 이벤트 모델의 표준 메서드'이며, 실무와 최신 웹 개발 흐름에서 '사실상 유일하게 권장되는 방식'입니다.
// // 방식        |       예시                         |            특징                                           
// // 인라인 방식 | `<button onclick="doSomething()">` | HTML과 JS가 혼합되어 구조 분리 불가, XSS에 취약 
// // DOM 속성 방식 | `element.onclick = () => {}`     | 이벤트 중복 등록 불가, 마지막 핸들러만 실행됨 
// // `addEventListener()` | `element.addEventListener('click', () => {})` | 표준 방식, 다중 이벤트 등록 및 제거 가능, 구조적 코드 작성 가능 

// // ✅ addEventListener()만 사용해야 하는 이유
// // | 항목              | 인라인 방식, DOM 속성 방식 | `addEventListener()` 방식 |
// // | 구조 분리         | ❌ 불가능                 | ✅ 가능 |
// // | 가독성            | ❌ 낮음                   | ✅ 높음 |
// // | 이벤트 중첩 등록  | ❌ 불가                   | ✅ 가능 |
// // | 이벤트 제거       | ❌ 불가                   | ✅ 가능 |
// // | 보안성 (XSS)      | ❌ 취약                   | ✅ 우수 |

// // 1. **구조적이고 가독성이 좋습니다**
// // - 이벤트 로직을 JS 코드에 명확히 분리해 둘 수 있어 유지보수가 쉬워집니다.
// // - HTML에 JS 로직을 섞는 인라인 방식보다 훨씬 직관적입니다.

// // 2. 하나의 요소에 여러 개의 이벤트 핸들러를 등록할 수 있습니다
// button.addEventListener("click", handleA);
// button.addEventListener("click", handleB); // 모두 동작함

// // 반면 onclick 방식은 마지막에 할당된 하나만 실행됩니다.
// button.onclick = handleA;
// button.onclick = handleB; // handleA는 덮어쓰기됨 ❌

// // 3. '이벤트 제거(removeEventListener)가 가능합니다'
// // - 동적으로 이벤트를 붙였다가 제거할 수 있어, 'SPA(싱글 페이지 앱)'이나 '컴포넌트 기반 UI'에서 매우 유용합니다.

// // 4. '캡처링 / 버블링 제어, 이벤트 위임 등 고급 제어 가능'
// // - `addEventListener()`는 `useCapture`와 같은 옵션도 받을 수 있어 '이벤트 흐름을 더 유연하게 제어'할 수 있습니다.
// // - 이벤트 위임(버블링을 활용해 부모 요소에서 하위 요소의 이벤트를 처리)은 실무에서 많이 사용되는 패턴입니다.


// // 🛠️ JavaScript에서 이벤트를 등록하는 방법 addEventListener()
// // 1️⃣ 기본 구조
// // 요소.addEventListener("이벤트 타입", 실행할 함수);
// // - 첫 번째 전달인자: '이벤트 타입' (예: `"click"`, `"submit"`, `"keydown"` 등)
// // - 두 번째 전달인자: '이벤트가 발생했을 때 실행할 함수'

// // 2️⃣ 활용 방법
// const button = document.querySelector("button");

// button.addEventListener("click", function () { alert("버튼이 클릭되었습니다!") });

// // - 이벤트 핸들러 함수를 따로 정의하고, 함수명만 전달해도 동일하게 동작합니다.
// function handleClick() {
//   alert("클릭됨!");
// }

// button.addEventListener("click", handleClick);

// // 3️⃣ 전달인자가 필요한 함수는 익명 함수로 감싸기
// // 이벤트 핸들러 함수에 전달인자를 넣고 싶은 경우 다음과 같이 작성하면 오류가 발생합니다.
// function greet(name) {
//   alert(`안녕하세요, ${name}님!`);
// }

// // ❌ 잘못된 방식: 함수가 바로 실행됨
// button.addEventListener("click", greet("지민"));
// // 이유는 greet("지민")이 실행되어 반환되는 값(보통 undefined)이 이벤트 핸들러 자리에 들어가게 되기 때문입니다. 즉, 이벤트가 발생하지 않아도 등록 시점에 실행되어 버립니다.

// // ✅ 올바른 방식: 익명 함수로 감싸기
// button.addEventListener("click", function () {
//   greet("지민");
// });
// // 또는 익명 함수 대신 화살표 함수를 사용할 수도 있습니다.
// button.addEventListener("click", () => {
//   greet("지민");
// });
// // - '익명 함수와 화살표 함수 모두 사용 가능'하며, 실제로는 동작에 큰 차이가 없습니다.
// // - '화살표 함수는 문법이 간결해 직관적인 코드를 작성할 수 있다는 장점'이 있습니다.

// // ✅ 자주 사용하는 이벤트 예제
// // 1️⃣ click (클릭 이벤트)
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   alert("버튼 클릭!");
// });
// // - 사용자가 마우스로 버튼을 클릭했을 때 `click` 이벤트가 발생합니다.
// // - 가장 기본적이며 자주 사용하는 이벤트입니다.

// // 2️⃣ dblclick (더블 클릭)
// const box = document.querySelector("#box");

// box.addEventListener("dblclick", () => {
//   box.style.backgroundColor = "skyblue";
// });
// // - `dblclick`은 요소를 빠르게 두 번 클릭했을 때 발생합니다.
// // - 사용자의 의도를 보다 명확히 구분하고 싶을 때 사용할 수 있습니다.

// // 3️⃣ mouseover / mouseout (마우스 올리기 / 떼기)
// const hoverBox = document.querySelector("#hoverBox");

// hoverBox.addEventListener("mouseover", () => {
//   hoverBox.style.backgroundColor = "lightgray";
// });

// hoverBox.addEventListener("mouseout", () => {
//   hoverBox.style.backgroundColor = "white";
// });
// // - `mouseover`: 마우스 커서가 해당 요소에 올라갔을 때 발생
// // - `mouseout`: 마우스가 요소 바깥으로 나갔을 때 발생
// // - 보통 'hover 시 스타일 효과'를 주고자 할 때 사용합니다.

// // 4️⃣ keydown / keyup (키보드 입력)
// document.addEventListener("keydown", () => {
//   console.log("키가 눌렸습니다");
// });

// document.addEventListener("keyup", () => {
//   console.log("키가 떼졌습니다");
// });
// // - `keydown`: 키보드를 '누르는 순간'
// // - `keyup`: 키보드를 '떼는 순간'
// // - 키보드 입력을 감지해 실시간 검색, 단축키 구현 등에 활용됩니다.

// // 5️⃣ input (실시간 입력 감지)
// const input = document.querySelector("#liveText");
// const output = document.querySelector("#output");

// input.addEventListener("input", () => {
//   output.textContent = input.value;
// });
// // - 사용자가 입력 필드에 '텍스트를 입력할 때마다' 발생합니다.
// // - 매 입력마다 이벤트가 발생하므로 실시간으로 값을 출력하거나 유효성 검사에 활용됩니다.

// // 6️⃣ submit (폼 제출)
// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // ⬇️ 상세 설명은 토글 참고
//   alert("폼이 제출되었습니다!");
// });
// // - `submit`은 `<form>` 태그에서 사용자가 제출 버튼을 클릭하거나 Enter를 눌렀을 때 발생합니다.
// // - 이때 브라우저는 기본적으로 페이지를 새로고침하려고 하기 때문에, 이를 막기 위해 `event.preventDefault()`를 사용합니다.

// // **** event.preventDefault()
// // - event.preventDefault()는 이벤트가 발생했을 때의 브라우저의 기본 동작을 막는 메서드입니다. 이 메서드는 사용자 행동에 따른 브라우저의 기본 반응을 제어하고 싶을 때 사용합니다.
// // ✅ 왜 필요할까?
// // 브라우저는 이벤트가 발생하면 '자동으로 특정 동작을 수행'합니다. 예를 들어:
// // | 상황 | 브라우저의 기본 동작 |
// // | `<a href="#">` 클릭 | 해당 링크로 이동 |
// // | `<form>` 제출 | 페이지가 새로고침됨 |
// // | `<input type="checkbox">` 클릭 | 체크 상태 변경 |
// // 이처럼 기본 동작이 실행되는 것을 막고, JavaScript로 직접 원하는 동작을 구현하고자 할 때 preventDefault()를 사용합니다.
// // ✅ 어떤 상황에서 쓰일까?
// // 1. 폼 제출 시 새로고침 방지
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // 기본 새로고침 동작 막기
//   alert("폼이 제출되었습니다!");
// });
// // - 이 코드를 작성하지 않으면 `<form>` 제출 시 페이지가 새로고침됩니다.
// // - 새로고침되면 자바스크립트 실행 결과나 입력 데이터가 사라질 수 있기 때문에 '직접 제어'하기 위해 `preventDefault()`를 사용합니다.
// // ✅ event 객체는 반드시 필요할까?
// // '결론적으로는, `event.preventDefault()`를 사용하려면 `event` 객체가 반드시 필요합니다.'
// // - `preventDefault()`는 `event` 객체의 메서드이기 때문에,
// // - 해당 객체 없이 `preventDefault()`를 호출하려고 하면 '에러가 발생합니다.'
// // 따라서 preventDefault()를 사용하려면 반드시 매개변수로 event 객체를 받아야 합니다.
// // 🧠 참고: event 객체는 어디서 오는 걸까?
// // - 이벤트 핸들러에 전달되는 `event` 객체는 '브라우저가 자동으로 생성해서 함수의 첫 번째 인자로 넘겨줍니다.'
// // - 이 객체 안에는 '이벤트의 정보'(예: 클릭한 요소, 마우스 위치, 키보드 키 등)가 담겨 있습니다.

// // 7️⃣ scroll (스크롤 이벤트)
// window.addEventListener("scroll", () => {
//   console.log("페이지가 스크롤되었습니다");
// });
// // - 사용자가 페이지를 '스크롤할 때마다' 발생합니다.
// // - 스크롤 한 칸만 움직여도 이벤트가 여러 번 발생할 수 있기 때문에, 성능 이슈가 생길 수 있으므로 사용 시 주의해야 합니다.

// // 8️⃣ load (페이지 로딩 완료 시)
// window.addEventListener("load", () => {
//   console.log("페이지가 모두 로드되었습니다");
// });
// // - 페이지 내 모든 콘텐츠(HTML, CSS, 이미지 등)가 '완전히 로드된 후' 발생합니다.
// // - DOM 요소가 준비된 뒤 실행하고 싶은 스크립트를 이 이벤트에서 실행합니다.

// // | 이벤트 타입 | 설명 | 자주 사용되는 예시 |
// // | `click` | 요소가 클릭될 때 발생 | - 버튼 클릭 시 모달 열기- 목록 삭제 버튼 클릭- 좋아요/하트 기능 |
// // | `dblclick` | 빠르게 두 번 클릭했을 때 발생 | - 이미지 확대- 항목 수정 모드 전환 |
// // | `mouseover` / `mouseout` | 마우스를 올리거나 뗐을 때 발생 | - 메뉴 hover 시 드롭다운- 카드 hover 시 스타일 변경 |
// // | `keydown` / `keyup` | 키보드를 누르거나 뗐을 때 발생 | - 단축키 등록- 실시간 키 입력 감지 |
// // | `input` | 사용자가 입력 필드에 입력할 때 발생 | - 실시간 유효성 검사- 실시간 미리보기- 검색어 자동완성 |
// // | `submit` | 폼이 제출될 때 발생 | - 회원가입 / 로그인- 게시글 등록- 이메일 전송 |
// // | `scroll` | 페이지가 스크롤될 때 발생 | - 스크롤 애니메이션- 무한 스크롤- 상단 고정 메뉴 동작 |
// // | `load` | 페이지나 리소스가 로드되었을 때 발생 | - 웹 크롤링 스크립트 실행- 이미지 lazy loading- 초기 렌더링 전 데이터 준비 |

// // ✅ 이벤트 리스너 제거하기
// // 등록한 이벤트를 제거하려면 `removeEventListener()`를 사용합니다. 이때, '익명 함수는 제거할 수 없습니다. 반드시 함수 참조가 필요합니다.'

// // ❌ 제거 불가한 방식
// button.addEventListener("click", () => {
//   alert("클릭!");
// });

// button.removeEventListener("click", () => {
//   alert("클릭!");
// });

// // ✅ 제거 가능한 방식
// function handleClick() {
//   alert("클릭!");
// }

// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);

// //⚠️ addEventListener() 사용 시 주의 사항

// // 1️⃣ 익명 함수는 제거할 수 없습니다
// // `removeEventListener()`로 이벤트를 제거하려면, '처음 등록한 함수의 참조가 정확히 같아야 합니다.' 익명 함수나 화살표 함수를 직접 넘기면 제거할 수 없습니다.

// // ❌ 이렇게 하면 제거되지 않음
// button.addEventListener("click", () => {
//   console.log("클릭!");
// });

// button.removeEventListener("click", () => {
//   console.log("클릭!");
// });

// // ✅ 함수 이름을 따로 정의해두면 제거 가능
// function handleClick() {
//   console.log("클릭!");
// }

// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick); // 제대로 제거됨

// // 2️⃣ '중복 등록 주의'
// // 같은 요소에 같은 이벤트 타입, 같은 함수가 여러 번 등록되면 '중복 실행'될 수 있습니다.
// const handler = () => console.log("클릭됨");

// button.addEventListener("click", handler);
// button.addEventListener("click", handler); // 두 번 등록됨
// // 클릭 시 콘솔에 "클릭됨"이 두 번 출력됨
// // -> 동일한 함수와 이벤트가 중복 등록되지 않도록 관리가 필요합니다.

// // 3️⃣ 불필요한 리스너 누적에 주의
// // 이벤트 리스너는 DOM에서 제거되지 않으면 계속 메모리에 남아있습니다. 특히 다음과 같은 상황에서는 주의가 필요합니다.
// // - 페이지 전환 없이 컴포넌트를 여러 번 다시 렌더링하는 경우
// // - `setInterval`처럼 반복적으로 요소를 추가하면서 리스너도 계속 등록되는 경우

// // ❌ 매번 새로 등록됨 → 메모리 누수 위험
// function attachEvent() {
//   const btn = document.querySelector("button");
//   btn.addEventListener("click", () => console.log("클릭"));
// }
// // 이런 경우에는 리스너를 제거하거나, 조건을 통해 한 번만 등록되도록 처리해야 합니다.


// // '이벤트는 사용자 경험의 중심입니다.'

// // 이벤트를 감지하고 처리하는 방식은 코드의 구조, 유지보수성, 보안성과 직결됩니다. `addEventListener()`는 표준이자 유연한 방법으로, '지금부터는 이 방식만 익혀두어도 충분합니다.'

// // 한 번만 실행되는 이벤트, 여러 개를 동시에 등록해야 하는 상황, 또는 동적으로 제거해야 하는 경우까지…

// // '이벤트 흐름을 이해하고 제어하는 것이 진짜 프론트엔드 개발자의 시작입니다.'

// // =-================================================================

// // 7. 목표 : 이벤트 객체의 역할과 기본 속성을 설명하고, 이벤트가 발생한 요소를 조회할 수 있다. 

// // '버튼 클릭 시 어떤 버튼이 눌렸는지 알고 싶다면?'

// // 그때 필요한 것이 바로 `이벤트 객체(event object)`입니다.

// // 이벤트 객체는 이벤트가 발생한 요소와 관련 정보를 담고 있으며,

// // 클릭한 버튼의 값이나 키보드 입력, 마우스 좌표 등 다양한 정보에 접근할 수 있도록 도와줍니다.


// // 🧩 이벤트 객체란?
// // 이벤트 객체는 브라우저가 이벤트 핸들러 함수에 자동으로 전달하는 객체입니다.
// // 이 객체를 활용하면 이벤트가 발생한 요소(`target`), 이벤트 유형(`type`), 입력 키(`key`) 등 다양한 정보를 확인하거나, 기본 동작을 막는 등의 조작이 가능합니다.

// // ㅇ 이벤트 객체 자동 전달
// const button = document.querySelector("button");

// function handleButtonClick(event) {
//   console.log(event.target.value); // 클릭한 버튼의 value 값을 출력
// }

// button.addEventListener("click", handleButtonClick);
// // - `addEventListener()`는 이벤트가 발생하면 '자동으로 이벤트 객체를 핸들러에 전달'합니다.
// // - 따라서 `handleButtonClick(event)`처럼 따로 호출할 필요 없이, 브라우저가 `event`를 넘겨줍니다.

// // 🔍 이벤트 객체의 주요 속성과 메서드

// // 1. `event.type`
// // 이벤트의 '종류'를 확인할 수 있습니다.
// document.addEventListener("click", function (event) {
//   console.log(`이벤트 유형: ${event.type}`); // "이벤트 유형: click"
// });

// document.addEventListener("keydown", function (event) {
//   console.log(`이벤트 유형: ${event.type}`); // "이벤트 유형: keydown"
// });

// // 2. `event.target`
// // 이벤트가 발생한 '실제 요소'를 가리킵니다.

// <ul>
//   <li>첫번째 리스트</li>
//   <li>두번째 리스트</li>
// </ul>

// document.querySelector("ul").addEventListener("click", function (event) {
//   console.log("클릭한 요소:", event.target);
// });
// // - `<li>`를 클릭하면 해당 `li` 요소가 콘솔에 출력됩니다.
// // - 이를 통해 `textContent`, `classList`, `style` 등 다양한 속성에 접근 가능합니다.
// // 자주 사용하는 `event.target` 속성들
// // - `event.target.tagName`: 태그 이름
// // - `event.target.textContent`: 요소 내부 텍스트
// // - `event.target.getAttribute("속성명")`: 특정 속성
// // - `event.target.style`: 인라인 스타일
// // - `window.getComputedStyle(event.target)`: 실제 CSS 적용 스타일
// // - `event.target.classList`: 클래스 목록

// // 3. `event.currentTarget`
// // 이벤트 핸들러가 '등록된 요소'를 가리킵니다.
// <ul id="list">
//     <li>첫 번째 아이템</li>
//     <li>두 번째 아이템</li>
//     <li>세 번째 아이템</li>
// </ul>

// document.getElementById("list").addEventListener("click", function (event) {
//     console.log("📌 target:", event.target); // li
//     console.log("📌 currentTarget:", event.currentTarget); // ul

//     event.target.style.color = "red";
//     event.currentTarget.style.border = "2px solid black";
// });
// // - `event.target`: 실제 클릭된 `<li>`
// // - `event.currentTarget`: `addEventListener`가 바인딩된 `<ul>`

// // 따라서 위 코드를 실행하고, ‘두 번째 아이템’을 클릭하면, 다음과 같은 결과가 발생합니다.
// // 2번쨰 <li>태그 color: red / ul 태그 border: 2px solid black

// // 5. `event.preventDefault()`
// // 요소의 '기본 동작을 중단'합니다. 
// // 예를 들어 `<form>` 요소에서 `submit` 이벤트가 발생하면 브라우저는 기본적으로 '폼을 전송하면서 페이지를 새로고침'합니다.
// // 하지만 `event.preventDefault()`를 사용하면 이러한 '기본 동작(새로고침)을 막고', JavaScript로 원하는 로직을 실행할 수 있습니다.

// {/* <form id="myForm">
//   <input type="text" id="name" name="name" required>
//   <button type="submit">제출</button>
//   <p id="message"></p>
// </form> */}

// document.getElementById("myForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // 폼 제출 시 발생하는 새로고침 방지

//   const nameInput = document.getElementById("name");
//   const message = document.getElementById("message");

//   if (nameInput.value.trim() === "") {
//     message.textContent = "이름을 입력하세요!";
//     message.style.color = "red";
//   } else {
//     message.textContent = `안녕하세요, ${nameInput.value}!`;
//     message.style.color = "green";
//   }
// });
// // - `submit` 이벤트는 기본적으로 폼을 전송하고 페이지를 새로고침합니다.
// // - `preventDefault()`는 이를 방지하여, 사용자 정의 로직을 자유롭게 실행할 수 있게 합니다.

// // - `preventDefault()`가 필요한 다른 상황들
// //     - `<a href="#">링크</a>` 클릭 시 페이지 상단으로 이동하는 기본 동작을 막고 싶을 때
// //     - `<input type="checkbox">`의 체크 상태 변경을 무시하고 사용자 정의 동작만 실행하고 싶을 때
// //     - `dragstart`, `drop` 등의 기본 드래그 앤 드롭 동작을 제어하고 싶을 때

// // ⚠️ 이벤트 객체 사용 시 주의 사항
// // - `event.target`은 이벤트가 발생한 '정확한 요소'를 반환하므로, 이벤트 위임을 사용할 때는 주의가 필요합니다. 예를 들어 `<ul>`에 이벤트를 걸었지만 실제 클릭된 요소는 `<li>`일 수 있습니다. 이 경우 조건문으로 클릭된 요소의 태그나 클래스 등을 체크해야 합니다.
// // - `event.currentTarget`은 이벤트 리스너가 바인딩된 요소를 가리키므로, 이벤트 위임이나 버블링 구조에서 헷갈리지 않도록 구분해서 사용하는 것이 중요합니다.
// // - `preventDefault()`는 '기본 동작이 존재하는 요소에만 의미가 있습니다.' 예를 들어 `<form>`, `<a>`, `<input type="checkbox">` 등에서만 효과가 있습니다.
// // - 브라우저 호환성을 고려할 때, `event` 객체를 직접 사용하는 경우 IE와의 차이점은 거의 없지만, 항상 최신 브라우저 기준을 기준으로 작성하는 것이 좋습니다.


// // '이벤트 객체는 사용자 상호작용을 세밀하게 제어할 수 있는 매우 중요한 도구입니다.'

// // `target`, `type`, `key`, `preventDefault()`등을 잘 활용하면, 원하는 동작을 정확히 구현할 수 있습니다.

// // React 같은 프레임워크에서도 이벤트 객체는 자주 사용되므로, '기초 개념을 확실히 익혀두는 것'이 중요합니다.

// // =======================================================================

// // 8. 목표 : 이벤트의 버블링에 대해 이해하고, event.stopPropagation()을 적절히 활용할 수 있다.

// // '리스트 아이템을 클릭했을 뿐인데, 왜 전체 리스트도 클릭된 걸까요?'

// // 이 현상은 JavaScript에서 매우 중요한 개념인 '이벤트 버블링(Event Bubbling)' 때문입니다.

// // 이번 학습에서는 이벤트가 부모 요소로 전파되는 동작을 실습을 통해 이해하고, 이를 막는 방법까지 함께 알아봅니다.


// // 🌀 이벤트의 버블링이란?
// // HTML 요소에서는 '자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 현상'이 발생합니다. 이를 '이벤트 버블링(Event Bubbling)'이라고 합니다.
// // 즉, 하위 요소에서 발생한 이벤트가 상위 요소에도 영향을 미치게 되는 것입니다.

// // ㅇ 예제 HTML 구조
// <div>
//     <ul>
//         <li>item</li>
//         <li>item</li>
//         <li>item</li>
//     </ul>

//     <p class="text1"></p>
//     <p class="text2"></p>
// </div>
// // - `<ul>`은 부모 요소입니다.
// // - `<li>`는 자식 요소입니다.
// // - `.text1`, `.text2`는 클릭 결과를 표시하는 요소입니다.

// // ㅇ 예제 JavaScript 코드

// // 이벤트리스너를 추가하여 다음과 같은 기능을 구현하였습니다. 
// // - `li` 요소를 클릭하면 "아이템 클릭"이라는 텍스트가 화면에 나타납니다.
// // - `ul` 요소를 클릭하면 "전체 클릭"이라는 텍스트가 나타납니다.

// const text1 = document.querySelector('.text1');
// const text2 = document.querySelector('.text2');

// // 부모 요소에 클릭 이벤트 리스너 추가
// document.querySelector('ul').addEventListener('click', function () {
//   text1.innerText += ' 전체 클릭';
//   console.log('📌 리스트 전체가 클릭됨!');
// });

// // 자식 요소 각각에 클릭 이벤트 리스너 추가
// document.querySelectorAll('li').forEach((li) => {
//   li.addEventListener('click', function () {
//     text2.innerText += ' 아이템 클릭';
//     console.log('🖱 리스트 아이템 클릭됨!');
//   });
// });

// // ### 예상되는 실행 결과와 실제 결과

// // 아래 화면처럼 각 요소를 클릭할 때 다른 텍스트가 출력될 것으로 예상됩니다.

// // 1. 파란색 박스(`li`)를 클릭하면 → `'아이템 클릭'`
// // 2. 빨간색 박스(`ul`)를 클릭하면 → `'전체 클릭'`

// // | 클릭 대상 | 예상 결과 텍스트 |
// // | `<li>` 클릭 | '아이템 클릭' |
// // | `<ul>` 클릭 | '전체 클릭' |

// // 그러나 실제로 코드를 실행해 보면, 예상과 다른 결과가 나타납니다.

// // 1. 파란색 박스(`li`)를 클릭하면 → `'아이템 클릭'` 그리고 `'전체 클릭'`
// // 2. 빨간색 박스(`ul`)를 클릭하면 → `'전체 클릭'`

// // | 클릭 대상 | 실제 출력 텍스트 |
// // | `<li>` 클릭 | '아이템 클릭 전체 클릭' |
// // | `<ul>` 클릭 | '전체 클릭' |

// // 자식 요소를 클릭했을 때 부모 요소에서도 클릭 이벤트가 감지되었습니다.
// // 이는 이벤트가 자식 요소에서 부모 요소로 전파되기 때문이며, 이를 '이벤트 버블링(Event Bubbling)'이라고 합니다.

// // 🛑 버블링을 막고 싶다면? `event.stopPropagation()`
// // 버블링이 필요하지 않은 상황이라면, 이벤트 객체의 `stopPropagation()` 메서드를 사용하여 '이벤트의 전파를 중단'할 수 있습니다.
// // 아래처럼 코드를 수정하면, `li`를 클릭해도 `ul`의 이벤트는 실행되지 않습니다.
// document.querySelectorAll('li').forEach((li) => {
//   li.addEventListener('click', function (event) {
//     event.stopPropagation();
//     text2.innerText += ' 아이템 클릭';
//     console.log('🖱 리스트 아이템 클릭됨!');
//   });
// });

// //⚠️ 이벤트 버블링 사용 시 주의 사항
// // - '이벤트 위임(delegate)' 기법에서는 버블링을 적극 활용합니다. 예: `ul`에 이벤트를 등록하고 `li` 클릭을 감지
// // - 하지만 '불필요한 상위 요소 이벤트가 함께 실행되면, 의도하지 않은 동작'이 발생할 수 있습니다
// // - 이럴 땐 `event.stopPropagation()`을 적절히 사용해 제어할 수 있습니다


// // 📌'이벤트 버블링은 반드시 알아야 할 핵심 개념입니다.'

// // React나 Vue 같은 프레임워크를 사용할 때도 이 개념은 그대로 적용됩니다.

// // `stopPropagation()`은 선택적으로 사용해야 하며, '버블링을 이해한 뒤에 활용'하는 것이 중요합니다.