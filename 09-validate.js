console.log('hello world');

/*
* Write a program that checks to see if the given username u is valid.
* A username must:
*-have at least 3 characters
*-Have no more than 20 characters
*-only consist of letters and digits [a-z][A-Z][0-9]
*
*if the username meets the requirement, print VALID
* if doesn't, print INVALID
*/

let username = prompt("username");
const letterNumber = "^[0-9a-zA-Z]+$";

if (username.length >= 3 
    && username.length <= 20 
    && username.match(letterNumber)){
    console.log('VALID');
} else {
    console.log('INVALID');
}