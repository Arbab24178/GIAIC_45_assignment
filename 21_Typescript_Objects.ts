// Write a program that creates Objects containing these items.

//let person_Name:string="Ali";

//const personName_Array:(string | number)[]=["Ahmed",6,"Hira"];

//const personName_Array:string[]=["Person","car","Cold Drink"];

//data type of person object
interface person{
        age:number,
        name:string,
        nationality:string,
        student:Boolean
}
//person object
let person :person={
    age:26,
    name:"Ali",
    nationality:"Pakistan",
    student:true
}
console.log(person);

//data type of car object
interface car{
    maker:string,
    color:string,
    automatic:boolean
}

//car object
let car={
    maker:"Toyota",
    color:"Black",
    automatic:true
}
console.log(car);
