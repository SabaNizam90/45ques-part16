//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//* Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//* Add one new guest to the beginning of your array.
//* Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// Print a new set of invitation messages, one for each person in your list.
var guestArr = ["Dua Fatima", "Sakina", "Sarfaraz", "Riffat"];
var canNotAttend = "Riffat";
var newGuest = "Ali";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
//guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people's.`)
//)
// part 2
var guestBeg = "Javeria";
guestArr.unshift(guestBeg);
//console.log(guestBeg)
//part 3 middle
var middleGuest = "Fatima";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr)
//part 4 append
guestArr.push("zeeshan");
console.log(guestArr);
//part 5 
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", Your are invited in the new people category list on dinner."));
});