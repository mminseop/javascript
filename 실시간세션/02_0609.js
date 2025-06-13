console.log('' + 19);

const arr = [1, 2, 3 ,5, 6];
const spliceArr = arr.splice(1, 3);
console.log(spliceArr);
console.log(arr);

const obj1 = {};
obj1.a = 'apple';
obj1.b = 'banana';
console.log(obj1[0]);

// 배열 값이 이어지지 않고 띄엄띄엄 있는 배열 = 희소배열
const array1 = ['a', 'b', 'c', 'd'];
array1[10] = 'ten';

console.log(array1);
console.log((10 in array1)); // true (in은 포함이 되어있냐 아니냐 bool로 반환)