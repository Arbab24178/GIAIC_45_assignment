
//Equality Test 1
console.log("Equality test with strings: ","Apple"==="Apple");
console.log("Equality test with strings: ",("Apple" as string)==="Orange");

//Inequality Test 2
console.log("Inequality test with strings: ",("Apple" as string)!="Orange");
console.log("Inequality test with strings: ","Apple"!="Apple");

//• Tests using the lower case function
console.log("Lower case function tests: ","Hello".toLowerCase()==="hello");
console.log("Lower case function tests: ","Hello".toLowerCase()!="hello");

//• Numerical tests involving equality, 
console.log("Equality test with numbers: ",26===26);
console.log("Equality test with numbers: ",(26 as number)===15);

//• Numerical tests involving inequality,
console.log("inequality test with numbers: ",(26 as number)!=35);
console.log("inequality test with numbers: ",(26 as number)!=26);

//greater than test,
console.log("Greater than test: ",10>5);
console.log("Greater than test: ",10>12);

//less than test,
console.log("less than test: ",5<10);
console.log("less than test: ",5<3);

//greater than or equal to,
console.log("Greater than and equal to test: ",10>=10);
console.log("Greater than and equal to test: ",10>=12);

 //and less than or equal to
 console.log("Less than Equal to test: ",5<=10);
 console.log("Less than Equal to test: ",12<=10);

 //• Tests using "and" operators
console.log("And Operator test: ",5===5 && 10>5);
console.log("And Operator test: ",5===5 && 10<5);

//• Tests using "or" operators
console.log("And Operator test: ",5===5 || 5>10);
console.log("And Operator test: ",(5 as number)===4 || 5>10);

//• Test whether an item is in a array
const fruit:string[]=["Mango","Apple","Banana"];
console.log('test "Apple" in the array: ', fruit.includes("Apple"));
console.log('test "Apple" in the array: ', fruit.includes("Grapes"));

//• Test whether an item is not in a array
console.log('test "Guava" is not in the array: ', !fruit.includes("Guava"));
console.log('test "Guava" is not in the array: ', fruit.includes("Guava"));







