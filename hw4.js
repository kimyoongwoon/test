let john = { name: "john", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];
let new_user = [];
let john_data = {};
let pete_data = {};
let mary_data = {};
john_data["FullNName"] = john.name + john.surname;
john_data["id"] = john.id;

pete_data["FullNName"] = pete.name + pete.surname;
pete_data["id"] = pete.id;

mary_data["FullNName"] = mary.name + mary.surname;
mary_data["id"] = mary.id;

new_user.push(john_data);
new_user.push(pete_data);
new_user.push(mary_data);

console.log(new_user);
