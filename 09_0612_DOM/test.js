// jquery의 document.ready()
document.addEventListener("DOMContentLoaded", () => {
  // console.log(document); // 현재 문서를 나타내는 객체
  const titleEl = document.querySelector(".title");
  console.log(titleEl.textContent); // "안녕하세요!"

  // 선택된 태그의 텍스트만 화면에 출력하는 함수입니다.
  const title = (tag) => {
    document.write(tag.innerText);
  };

  //선택된 박스의 번호만 출력하는 함수입니다.
  const boxes = (tag) => {
    const result = document.querySelector(".result");
    for (let i = 0; i < tag.length; i++) {
      document.write(tag[i].innerText);
    }
  };

  // 1. querySelector로 제목을 선택해서 title() 메서드의 인자로 보내세요.
  const myTitle = document.querySelector("#main-title");
  title(myTitle);
  // 이런 방법도 가능합니다. : title(document.querySelector('#main-title'));

  // 2. querySelectorAll로 3개 박스를 전부 선택해서 boxes() 메서드의 인자로 보내세요.
  const myBoxes = document.querySelectorAll(".box");
  boxes(myBoxes);
});
