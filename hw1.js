let main_grade = ["A", "B", "C"];
let cos_grade = prompt("회원등급을 입력해주세요요", "C");

if (cos_grade === main_grade[0]) {
    console.log("A,B,C 시청 가능합니다.");
}
if (cos_grade === main_grade[1]) {
    console.log("B,C 시청 가능합니다.");
}
if (cos_grade === main_grade[2]) {
    console.log("C 시청 가능합니다.");
}
