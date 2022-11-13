function logArray(arr){
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
}
let food= ["Ndog", "vn", "Chudat"]
logArray([])
function add(a,b){
    return a+b
}
const sum = add(1,5);
console.log(sum);
console.log(---------------------);
//arrow function o duoi
const logObject=(obj)=> {
    console.log("OBJ:", obj);
}
logObject({
    key: "Ky anh tho khoa",
    job:"Sua khoa"
})

const logBoo1= function(boo={}){
    if(boo){
        console.log("dung");
    }else{
        console.log("sai");
    }
};
logObject();
logBoo1(true);