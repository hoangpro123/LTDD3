
// Arrow function
var PhepTinh = (a, b) => {
    var result = a + b;
    console.log("Phép Cộng: " + result);
    var result1 = a - b;
    console.log("Phép Trừ: " + result1);
    var result2 = a * b;
    console.log("Phép Nhân: " + result2);
    var result3 = a / b;
    console.log("Phép Chia: " + result3);

};

PhepTinh(5, 5);


//Collection Maps
let map = new Map([
    ["Name", "Nguyen huu Phu"],
    ["Email", "nhp@gmail.com"],
    ["Address", "HCM"],
    
]);

//kiem tra phan tu

console.log(map.has('domain')); // k co phan tu domain
console.log(map.has('Name')); // co phan tu Name

//Xóa phan tu
 
//map.clear();

console.log(map);