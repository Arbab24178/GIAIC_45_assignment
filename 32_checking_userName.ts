//Array of current userName.
let current_user =["Mehdi","Haya","Qais","Zeeniya","Sheezal"];

//Array of new userName.
let new_user =["Burak","Sheezal","Murad","Mehdi","Haya"];

//Loop through new_users to checked users name avilabilty
new_user.forEach(new_one_user =>{

    //Making a condition for username already exists and save in our condition variable
    let our_condition =current_user.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLowerCase())

//Print messages using if else statements
    if(our_condition){
console.log(`Sorry ${new_one_user} is already taken!`)    
    } else {
        console.log(`This Username ${new_one_user} is available`)
    }
})

