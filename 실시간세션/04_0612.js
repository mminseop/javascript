/**
 *
 * @ㄴㅇㄹㅇㄹㄴㅇㄹㄹㄴㅇ
 */
function f() {
  console.log("hi");
  return true;
}
function g() {
  console.log("hello");
  return false;
}

// 1.
f() || g();
// 2.
// const a = f();
// const b = g();
// b || a;

/*
    단축평가 원리
    true or(||) true => 앞만 봐도 true인게 확정, 뒤 안봄
    true or false => 앞만 봐도 true인게 확정, 뒤 안봄
    flase or true
    false or false

    true and(&&) true
    true and false 
    false and true => 앞만 봐도 false인게 확정, 뒤 안봄
    false and false => 앞만 봐도 false인게 확정, 뒤 안봄
*/

class User {
  #birth; //private (외부 접근 금지)
  static speies = "Homo Sapiens"; // 공통적으로 가질 수 있는 변수가 static임

  constructor(name, age, gender, job, birth) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.job = job;
    this.#birth = birth; // 외부 접근 금지하게 해!
  }
  getGender() {
    if (this.gender === "M") return "남자";
    else return "여자";
  }
  getAge(unit) {
    return `${this.age}${unit}`;
  }
  getAGe() {
    const todayYear = new Date().getFullYear();
    const birthYear = Number(this.#birth.slice(0, 4));
    return todayYear - birthYear;
  }
}
const minsu = new User("민수", 30, "M", "develop", "19940101");
const winter = new User("윈터", 20, "F", "designer", "20010101");
console.log(minsu);
console.log(winter);
console.log(minsu.getGender());
console.log(winter.getGender());
console.log(winter.getAge("살"));
console.log(winter.getAGe());
console.log(minsu.getAGe());
console.log(User.speies);
