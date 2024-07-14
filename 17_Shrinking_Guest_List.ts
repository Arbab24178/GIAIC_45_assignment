let Guest_List :string[]=["Imran Khan","Nawaz Sharif","Asif Zardari"];
// for(let i=0; i<Guest_List.length; i++){
//     console.log("Dear Mr. "+Guest_List[i]+ ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n")
// }
let absent_Guest :string="Imran Khan";
let new_Guest :string="Kamran Tessori";
Guest_List[0]=new_Guest;

// for(let i=0; i<Guest_List.length; i++){
//     console.log("Dear Mr. "+Guest_List[i]+ ",\nIt is our pleasure to invite you in our party.\nThank You!\n\n")
// }
console.log(`Mr.${absent_Guest} is not coming to the party.\n`);

console.log("Good News!We find a Big Table So we are inviting 3 more guests.\n")
//array may 3 guest add kiay hain
Guest_List.unshift("Sir Zia Khan") ;
Guest_List.splice(2,0,"Maryam Nawaz");
Guest_List.push("Bilawal Bhutto Zardari");

//yahan 6 guest ky array ko print kraya hy
for(let i=0; i<Guest_List.length; i++){

    console.log("Dear Mr. "+Guest_List[i]+ ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n")
}
//sorry message for not inviting
console.log("\nSorry we cannot arrange big table,only two peoples will be invited,");

//yahan pr sary guest remove kiay hain sewai 2 guest ky
while(Guest_List.length>2){
let remove_Guest=Guest_List.pop();
console.log(`Sorry Mr.${remove_Guest}, You are not invited for Dinner.`);
}
//remaining invited guest
for(let i=0; i<Guest_List.length; i++){

    console.log("Dear Mr. "+Guest_List[i]+ ",\n\nYou are still invited.\n\nThank You!\n\n")
}
// sary guest array sy remove krdiay.
Guest_List.splice(0,2);
console.log(Guest_List);





