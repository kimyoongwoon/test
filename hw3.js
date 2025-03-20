let com = Math.random();
let user = prompt("가위바위보를 입력하세요", "가위");
let user_power = 0;

if (0 < com < 1 / 3) {
    console.log("이겼습니다.");
}
if (1 / 3 < com < 2 / 3) {
    console.log("비겼습니다.");
} else {
    console.log("졌습니다.");
}
