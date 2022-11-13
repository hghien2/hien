
/*function ditmeNduc(){
    console.log('memay ');
    console.log('ngu nduc');
}
ditmeNduc()

function greeting(name){
    greet= `hi ${name}, nice to meet you`
    console.log(greet);
}
greeting('Lance')
function sum(a, b){
    return a + b
}

console.log(sum(1, 2));

function calculateFoodTotal(food, tip){
    tipPercentage=tip/100
    tipAmount= food*tipPercentage
    total=sum(food, tipAmount)
    return total
}
console.log(calculateFoodTotal(300,20));
function sum() {
    let sum = 0;
  
    for(let i = 0; i < arguments.length; i++)
      sum+= arguments[i]
  
    console.log(sum)
  }
  
  sum(1, 3, 5, 7, 9)*/

//const sum(a, b) => a+b
  //ES6, arrow function
/*const introducer =(name, shirt) =>{
    const person ={
        name: name,
        shirt: shirt,
        assets:100000,
        liabilities: 50000,
        netWorth:function (){
          return this.assets-this.liabilities
        }
    }
  const intro= `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my worth is ${person.netWorth()} USD`
  return intro
}
console.log(introducer('Vu nhat', 'bamba'));

const numbers=[1,2,3,4,5,6]
other way turn it into a function
const double =(numbers)=>{
    let result=[]
    for(const number of numbers){
      result.push(number*2)
    }
    return result
}
console.log(double([1,2,3,4,5,6]));*/
const numberOneTriangle = (n) => {
  for(let i = 0; i< n; i++){
    for(let j =0; j<i; j++) {
      document.write("*")
    }
    document.write("<br/>")
  }
}
numberOneTriangle(5);


