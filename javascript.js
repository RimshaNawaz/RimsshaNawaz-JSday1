  
     //IST TASK
function bmi_function(weight,height)
{
   let kilmeter=weight*0.001;
   let meter=height*1000;
   let BMI = kilmeter / (meter * meter)
   return BMI;
}
let bmi=bmi_function(15,8);
console.log(bmi);

                         //  2ND TASK
function swap_function(a,b){
  [a,b]=[b,a]
  return [a,b];
}
let a=10;
let b=5;
[a,b]=swap_function(a,b);
console.log(a)
console.log(b)
              //3RD TASK

function factorial(a){
    let number=1;
    for(let i=1;i<=a;i++){
     number=number*i;
    }
    return number;
}
let number=factorial(3);
console.log(number)
