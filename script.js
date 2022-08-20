var myName ="victory diemuodeke";
var welcome="I am "+myName+" and you are ?";
console.log(welcome);
welcome += myName
console.log(welcome);
var age= 17;
age += 13;
age -= 2;
console.log(age);
//alert(age);
age ++
console.log(age);
var remainder = 10 % 3;
console.log(remainder);
console.log(age / remainder);
// lenght of a string
var newName;
newName = myName.length;//number of elements
console.log(newName);
newName = myName[myName.length-2]; //second to last letter
console.log(newName);
var firstLetter;
firstLetter = myName[0];//for the first letter of the element
console.log( firstLetter );
//word blanks
function wordBlanks ( myNoun , Myverb ,){
    var result='';
    result += "My"+" "+myNoun+" "+Myverb +" "+"coding";
    return result;
}
console.log ( wordBlanks("son", "loves"));
//arrays
var pupil = ["obi" , 24];
console.log(pupil);
var student = pupil.length;//array lenght
console.log(student);
pupil[1]= "my";
console.log(pupil);//modifing arrays using bracket notation
// nested arrays
var pupil = ["chidi" ,[" peter obi" , "is our president"] ,[ "come", 2023]];
console.log(pupil);
pupil[1][1]= "sure president";//still on modifing arrays
console.log(pupil);
//manipulating array
pupil.push(["a must"]);//add to the array from the last
pupil.pop();//remove the last
pupil.shift();//remove the first
pupil.unshift();
//function
function myFirstFunction(){
    console.log("hi everyone");
}
myFirstFunction();
