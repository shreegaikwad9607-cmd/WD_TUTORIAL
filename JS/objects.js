// Objects in js
// there are two ways to intialize objects
// 1.literls
let emp={
    id:101,
    name:"amit",
    address:"pune"
}

console.log(emp);
console.table(emp);



//2. constructor function 

let stu={
    id:1010,
    name:"swaraj",
    address:{
        s_street:"vallabh nagar",
        s_area:"PCMC",
        s_city:"pune"
    }
}

console.log(stu);
console.table(stu);

console.log(Object.keys(stu));
console.log(Object.values(stu));

