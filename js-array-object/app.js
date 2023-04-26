let product1 = {
    name: "Tee Shirt",
    color: "Black",
};

let product2 = {
    name: "Dress",
    color: "White",
};

let product3 = {
    name: "Cardigan",
    color: "Brown",
};

let products = [];
products.push(product1, product2, product3); // create

// CRUD - create - read - update -  delete
let name = prompt();
let color = prompt();
let product4 = {
    name,
    color,
};
products.push(product4);
// read
console.log(products);

// tinh binh phuong cho tung so
let num = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];

// tim so nguyen to
let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];

// tao mot gio hang hoa qua (ten qua, mau, noi san xuat, ngay het han, don  vi phan)
