let userNames = ["Qais","Mehdi","Haya","Zeeniya","Admin"]

userNames =[]
if(userNames.length === 0){
    console.log("Your array in Empty We need to find users!")
}else{
    //Creating ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser ==="Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser},thanks for logging in again.`)
    }
})
}