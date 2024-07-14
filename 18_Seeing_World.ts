//1.Store the locations in a array. Make sure the array is not in alphabetical order.
let places :string[]=["Italy","Germany","Agra","Efil Tower","Pyramids"];

//2.Print your array in its original order.
console.log("2."+places);

//3.Print your array in alphabetical order without modifying the actual list.
console.log("3."+[...places].sort());

//4.Show that your array is still in its original order by printing it.
console.log("4."+places);

//5.Print your array in reverse alphabetical order without changing the order of the original list.
console.log("5."+[...places].sort().reverse());

//6.Show that your array is still in its original order by printing it again.
console.log("6."+places);

//7.Reverse the order of your list. Print the array to show that its order has changed.
console.log("7."+places.reverse());

//8.Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("8."+places.reverse());

//9.Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("9."+places.sort());

//10.Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("10."+places.sort().reverse());