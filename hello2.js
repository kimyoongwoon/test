const fruits = ["apple", "banana", "cherry"];

// 1. push: 맨 끝에 요소 추가
fruits.push("melon");
console.log("push 실행 후:", fruits);
// 2. pop: 맨 끝 요소 제거
fruits.pop();
console.log("pop 실행 후:", fruits);
// 3. shift: 맨 앞 요소 제거
fruits.shift();
console.log("shift 실행 후:", fruits);
// 4. unshift: 맨 앞 요소 제거
fruits.unshift("apple");
console.log("unshift 실행 후:", fruits);

// 5. slice: start –end 슬라이싱
let sliced = fruits.slice(1, 3);
console.log("slice 결과:", sliced);
console.log("slice 실행 후 원본 배열:", fruits);
// 6. splice: 요소를 추가, 제거, 교체
fruits.splice(1, 1, "grape", "kiwi");
console.log("splice 실행 후:", fruits);
