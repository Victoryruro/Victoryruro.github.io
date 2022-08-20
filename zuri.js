var firstName ="  victory";
console.log(firstName.length);
var online ='always';
console.log(online.toUpperCase());  
console.log(online[0]);
console.log(online.slice(1,6));
var offline='rarely';
var firstLetterOfOffline=offline[0].toUpperCase();
var anotherOffline=offline.slice(1,6);
var old=firstLetterOfOffline + anotherOffline;
console.log(old);
var replacementOfOld='never';
var another=old.replace(old,replacementOfOld);
console.log(another);

console.log(firstName.trim());
console.log("Hello");
if (firstName==="") {
    console.log("you \n are not logged in");
    
}
else if(firstName==="tulo"){
    console.log("try another username please");

    
}
else if( firstName==="vic"){
    console.log("try another username");

}
else{
    console.log("you are highly welcome ");
    
    
}




