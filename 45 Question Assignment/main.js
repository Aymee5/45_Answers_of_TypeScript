"use strict";
// 100 Days Coding Challenge:
//Day 1
//Question 2:
let personName = "Aiman";
console.log("Hello", personName, "Would you like to learn some Typescript today");
//Question 3:
let Name = "Fahad";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase);
//Queation 4:
console.log("Sir Syed Ahmed Khan Once said", '"Education is the key to a better future for all"');
//Question 5:
let famousperson = "Sir Syed Ahmed Khan";
let message = ("Education is the real wealth of a nation");
console.log(famousperson, message);
//Question 6:
let whitespace = "\n\tAiman \t\n";
console.log(whitespace);
let withoutwhitespace = whitespace.trim();
console.log(withoutwhitespace);
//Question 7 ,Q8:
console.log(4 + 4); //Addition
console.log(16 - 8); //Subtraction
console.log(4 * 2); //Multiplication
console.log(16 / 2); //Division
//Question 9:
let favorateNumber = 5;
console.log("My Favourate Number is", favorateNumber);
//Question 10:
let whiteSpace = "\n\t Aiman\t\n"; // /n is used for new line /t is used for whitespace
// with whitespace
console.log(whiteSpace);
//without whitespace
let withoutwhiteSpace = whiteSpace.trim();
console.log(withoutwhiteSpace);
// Famous Quote of Sir syed ahmed khan
console.log("sir syed ahmed khan once said", '"Education is the key to a better future for all"');
//Question 11:
let friendName = ["sherish", "Ayeza", "Iqra", "Reeja"];
console.log(friendName[0]);
console.log(friendName[1]);
console.log(friendName[2]);
console.log(friendName[3]);
//Question 12:
let friendname = ["sherish", "Ayeza", "Iqra", "Reeja"];
let Message = ("How are you?");
console.log("hello", friendname[0], Message);
console.log("hello", friendname[1], Message);
console.log("hello", friendname[2], Message);
console.log("hello", friendname[3], Message);
//Question 13:
let Transportation = ['Car', 'Motorcycle', 'Train', 'Bus'];
for (let i = 0; i < Transportation.length; i++) {
    console.log('I would like to own a ' + Transportation[i]);
}
//Question 14:
let Guest_list = ['Ayeza', 'Sherish', 'Rimsha'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear' + Guest_list[i] + ', \n\n It is our pleasure to invite you in our party.\n\nThank you');
}
//Question 15:
let absent_guest = "Sherish";
let new_guest = "Reeja";
Guest_list[0] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear' + Guest_list[i] + ', \n\n It is our pleasure to invite you in our party.\n\nThank you');
}
console.log(`Miss. ${absent_guest}  is not coming to the party.`);
//Question 16:
console.log('Good News! we find Big Table so we are inviting 3 more Guests.');
Guest_list.unshift('Tabbassum');
Guest_list.splice(2, 0, 'Maryam');
Guest_list.push('Barira');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear ' + Guest_list[i] + ', \n\n It is our pleasure to invite you in our party.\n\nThank you');
}
//Question 17:
console.log('\nSorry we can not Arrange Big Table,only Two peoples wii be invited.');
//Here I have removed the guest.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Miss.${remove_Guest}, you are not invited for Dinner`);
}
//
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss.' + Guest_list[i] + ', \n\nYou are still invited.\n\nThank you!\n\n');
}
Guest_list.splice(0, 2);
//I removed all Guest Array.
console.log(Guest_list);
//Question 18:
// Store the location ina array. Make sure the array is not in Alphabetical order.
let places = ['London', 'Italy', 'Germany', 'Egypt', 'USA'];
// Print your Array in its original order
console.log('Original ' + places);
// Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());
//show that your array is still in its original order by printing it.
console.log('Original ' + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + ([...places].sort().reverse()));
//show that your array is still in its original order by printing it again.
console.log('Original ' + places);
// Reverse the order of your list. print the array to show that its order has changed.
console.log('Original ' + (places.reverse()));
// Reverse the order of your list again. Print the list to show it's back to its original order.
console.log('Original ' + places.sort());
// Sort to change your array so it's stored in reversed alphabetical order. Print the list to show that its order has changed.
console.log('Original ' + places.sort().reverse());
// Question 19:
// Repeated Exercise 14.
// Print a message indicating the number of people you are inviting to dinner.
console.log(`Total numaber of Guest Are: ${Guest_list.length}`);
// Question 20:
// Think of Something you could store in an Array.
let items = ["karachi", "Pakistan", "English"];
// Write a program that creates a list containing these items.
let items2 = [];
items2.push("Paris");
items2.push("France");
items2.push("Turkey");
console.log(items2);
// Question 21:
// Write a program that creates objects contaning these items.
// Car Object
let Car = {
    maker: "Honda",
    colour: "White",
    Automatic: "true"
};
// Print Car 
console.log(Car);
// Question 22:
//Creating Array
let Books = ["English", "Urdu", "Math"];
// Accessing array by index
// console.log(Books[S]);
// Correct the array
console.log(Books);
// Question 23:
let car = 'Subaru';
// Test no 1
console.log("Is car == 'Subaru'? I predict true.");
console.log(car == 'Subaru'); //True
// Test no 2
console.log("Is car == 'Toyota'? I predict True");
console.log(car == 'Toyota'); //False
// Test no 3
console.log("Is car === 'Sabaru'? I predict True");
console.log(car === 'Sabaru'); //False
// Test no 4
console.log("car != 'Sabaru'? I predict True");
console.log(car != 'Sabaru'); //True
// Test no 5
console.log("Is car !== 'Honda'? I predict True");
console.log(car !== 'Honda'); //True
// Test no 6
console.log("Is car.Upper Case == 'SUBARU'? I pretict True");
console.log(car.toUpperCase() == 'SUBARU'); //True
// Test no 7
console.log("Is car.Lower Case == 'subaru'? I perdict True");
console.log(car.toLowerCase() == 'subaru'); //True
// Test no 8
console.log("Is car.Lower Case == 'SUBARU'? I pretict False");
console.log(car.toLowerCase() == 'SUBARU'); // False
// Test no 9
console.log("Is car === 'Train'? I predict False");
console.log(car === 'Train'); //False
// Test no 10
console.log("Is car === 'Cvic'? I predict False");
console.log(car === 'Cvic'); //False
// Question 24
// Equality and Inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple"); // True
// Equality and Inequality Test 2
console.log("Equlity test with strings: ", "Apple" != "Orange"); //True
// Using the lower case function 
console.log("Testing the lower case.", "Hello".toLowerCase() == "Hello"); //False
// Numerical Tests involving Equality 
console.log("Equality test with numbers", 15 === 15); // True
// Numerical Test involving Inequality
console.log("Inequality test with numbers", 20 != 19); //True
// Greater than Test
console.log("Greater than Test", (2 > 8)); //False
// Less than Test
console.log("less than Test", 3 < 4);
// Greater than and equal to
console.log("Grater than and equal to Test", 5 <= 5); //True
// Less than or equal to 
console.log("less than or equal to test:", 9 >= 4);
// Tests using "And" Operators
console.log("And Operators test: ", 3 === 3 && 9 > 5); //True
// Test using "Or" Operators
console.log("Or Operators test: ", 4 < 8 || 2 == 2); //True
// Test item is in Array
let fruits = ["apple", "banana", "cherry",];
// Fruits Test
console.log("Is 'apple' in fruits? ", fruits.includes('apple')); //True
// Fruit Test 
console.log("Is 'mango' in friuts? ", fruits.includes('mango')); //False
//Question 25:
let alien_colour = "green";
if (alien_colour == "green") {
    console.log("you just earned 5 points!");
}
alien_colour = "red";
if (alien_colour == "green")
    [
    // No Output because the condition is false
    ];
alien_colour = "yellow";
if (alien_colour = "green") {
    console.log("you just earned 5 points!");
}
// Question 26:
let Alien_colour = "green";
if (Alien_colour == "green") {
    console.log("you just earned 5 points for shooting the aliens!");
}
else {
    console.log("you just earned 10 points.");
}
Alien_colour = "yellow";
if (Alien_colour == "green") {
    console.log("you just earned 5 points for shooting the alien!");
}
else {
    console.log("you just earned 10 points.");
}
// Question 27:
// Green Version Alien
let alien_Colour = "green";
if (alien_Colour == "green") {
    console.log("you just earned 5 points.");
}
else if (alien_Colour == "yellow") {
    console.log("you just earned 10 points.");
}
else if (alien_Colour == "red") {
    console.log("you just earned 15 pionts.");
}
else {
    console.log("Select the Right colour.");
}
// Yellow Version Alien
alien_Colour = "yellow";
if (alien_Colour == "green") {
    console.log("you just earned 5 points.");
}
else if (alien_Colour == "yellow") {
    console.log("you just earned 10 points.");
}
else if (alien_Colour == "red") {
    console.log("you just earned 15 points.");
}
else {
    console.log("Select the Right Colour.");
}
// Red Alien Version
alien_Colour = "red";
if (alien_Colour == "green") {
    console.log("you just earned 5 points.");
}
else if (alien_Colour == "yellow") {
    console.log("you just earned 10 points.");
}
else if (alien_Colour == "red") {
    console.log("you just earned 15 points.");
}
else {
    console.log("Select the Right Colour.");
}
// Question 28:
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a Kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29:
let favorate_fruits = ["apples", "banana", "cherries"];
if (favorate_fruits.includes("bananas!")) {
    console.log("you really like bananas!");
}
if (favorate_fruits.includes("apple")) {
    console.log("you are really like apples");
}
// Continoue with more fruits
if (favorate_fruits.includes("cherries")) {
    console.log("you are really like cherries");
}
