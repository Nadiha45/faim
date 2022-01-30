// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


// const obj = JSON.parse(text);

// // console.log(text);
// console.log(obj.employees[0].firstName);


// function getGrade(mark){

//   if (mark>25 && mark<=30 ){
//     console.log("A");
//   } 
//   else if (mark>20 && mark<=25 ){
//     console.log("B");
//   } 
//   else if (mark>15 && mark<=20 ){
//     console.log("C");
//   } 
//   else if (mark>10 && mark<=15 ){
//     console.log("D");
//   } 
//   else if (mark>5 && mark<=10 ){
//     console.log("E");
//   } 
//   else if (mark>=0 && mark<=5 ){
//     console.log("F");
//   } 
// }
// getGrade (30);


          // problem solve - da 

// for(let a = 1; a <= 100;a++){
//   console.log(a);
// }


// function evenTotal() {
//   let sum = 0;
//   for (let a = 2; a <= 100; a += 2) {
//     if (true) {
//       sum = sum + a;
//     }
//   }
//   return sum;
// }
// let even = evenTotal();
// console.log("even total  " , even);
 

// function oddTotal() {
//   let sum = 0;
//   for (let a = 1; a <= 100; a += 2) {
//     if (true) {
//       sum += a;
//     }
//   }
//   return sum;
// }
// let odd = oddTotal();
// console.log( "odd total " , odd);


// function total() {
//   let sum = 0;
//   for (let a = 1; a <= 100; a += 1) {
//     if (true) {
//       sum += a;
//     }
//   }
//   return sum;
// }
// let totalNumber = total();
// console.log("total sum " ,  totalNumber);


        // [BORO THEKE CHOTO]

// const points =[10,200,2,6,1,11];
// points . sort(function (a,b){
//    return b - a;
//   });
//   console.log(points);

        // [CHOTO THEKE BORO]

// const points =[10,200,2,6,1,11];
// points . sort(function (a,b){
//    return a - b;
//   });
//   console.log(points);

        // [CHOTO NUMBER]
// let a = Math.min(1,2000,300);
// console.log(a);

//         [BORO NUMBER]
// let a = Math.max(1,2000,300);
// console.log(a);

        // [ FOR EACH]
// const numbers =[30,11,12,13,14];
// function a(value,index,array){
// console.log(value);
// console.log(index);
// console.log(array);
// console.log("------");
// }
// numbers.forEach(a);
     

        // [BUJHI NAI 10:00]
           
// const numbers =[45,4,9,16,25];
// function myFunction(value , index , array){
//         return value > 10;
// }
// const newNumbers = numbers.filter(myFunction);
// console.log(newNumbers);
// ------------------------------

        // reduce = jog
// const numbers =[45,4,9,16,25];
// function myFunction(total, value , index , array){
//         return total + value;
// }
// const newNumbers = numbers.reduce(myFunction);
// console.log(newNumbers);


