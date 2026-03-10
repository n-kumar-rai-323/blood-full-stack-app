const printData =(a,b,c)=>{
    console.log(a,b,c)
}
const arr = [1,2,3];
printData(arr)
printData(...arr)

function sum(a,b,c){
    return a + b + c;
}
const nums=[5,10,15]
console.log(sum(nums))
console.log(sum(...nums))
console.log(sum(2,3,4))


const arr1= [1,2,3,4]
const arr2=[4,5,6,7]
const combined =[...arr, ...arr2]
console.log(combined)

const obj1= {name:"Alice", age:25}
const obj2={job:"Developer", country:"Nepal"}

const merged={...obj1, ... obj2};
console.log(merged)