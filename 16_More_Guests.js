"use strict";
let Guest_List = ["Imran Khan", "Nawaz Sharif", "Asif Zardari"];
// for(let i=0; i<Guest_List.length; i++){
//     console.log("Dear Mr. "+Guest_List[i]+ ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n")
// }
let absent_Guest = "Imran Khan";
let new_Guest = "Kamran Tessori";
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. " + Guest_List[i] + ",\nIt is our pleasure to invite you in our party.\nThank You!\n\n");
}
console.log(`Mr.${absent_Guest} is not coming to the party.\n`);
console.log("Good News!We find a Big Table So we are inviting 3 more guests.\n");
Guest_List.unshift("Sir Zia Khan");
Guest_List.splice(2, 0, "Maryam Nawaz");
Guest_List.push("Bilawal Bhutto Zardari");
for (let i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. " + Guest_List[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
}
