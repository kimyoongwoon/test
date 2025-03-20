let user = {
    name: "yuchul",
    age: 23,
    job: "의사",
    "student id": 2021171232,
};
user.name; //객체 참조(점 표기법)
user["name"]; //객체 참조(대괄호 표기법)
user.job = "백수"; //동적 추가
user.age = 22; //동적 수정

console.log(user["student id"]);
console.log(user.name);
console.log(user.age);
console.log(user.job);
