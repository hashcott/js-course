let arr = new Array(10).fill(5, 0, 3);
console.log(arr);

let arr1 = [];
arr1.push(9, 10, 4, 5, 6);
arr1.pop(); // xoa o cuoi [9, 10, 4, 5]
arr1.shift(); // xoa o dau [10, 4, 5]
arr1.unshift(100); // them o dau [100, 10, 4, 5]
console.log(arr1);

let arrConcat = arr1.concat([99, 88]);
console.log(arrConcat);

arrConcat.splice(1, 3); // index bat dau, so luong xoa
console.log(arrConcat);

let arrSlice = arrConcat.slice(1, 3); // index bat dau -> index - 1
console.log(arrSlice);

let person = {
    colorOfEye: "brown black",
    colorHair: "red",
};

let item = {
    name: "Wild sword",
    owner: "Yasuo",
    dame: 1000,
    cris: 0.2,
};

let a = 5;
let b = 5;
console.log(a == b);

let x = [5, 10]; // address memory (0x1)
let y = [5, 10]; // address memory (0x2)
console.log(x == y);
