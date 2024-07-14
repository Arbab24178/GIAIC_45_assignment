//Creating Array
let userNames = ["Mehdi","Haya","Qais","Zeeniya","Admin"];

//Creating ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser ==="Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser},thanks for logging in again.`)
    }
})
