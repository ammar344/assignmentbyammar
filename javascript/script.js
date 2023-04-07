function twoNumbers(){
    let firstNo = prompt("Enter the 1st no.:");
    let secondNo = prompt("Enter the 2nd no.:");
    if(firstNo>secondNo){
        // console.log("1st no. is larger")
        console.log("1st no. is larger which is equal to", firstNo);
    }
    else{
        console.log("2nd no. is larger which is equal to", secondNo);
    }
}
function sign(){
    let integer = prompt("Enter a positive or negitive integer:");
    if(integer>0){
        alert("The sign is +ve");
    }
    else{
        alert("The sign is -ve");
    }
}
function fiveNumbers(){
    let fisrt_number = prompt("Enter the 1st no.");
    let second_number = prompt("Enter the 2nd no.");
    let third_number = prompt("Enter the 3rd no.");
    let fourth_number = prompt("Enter the 4th no.");
    let fifth_number = prompt("Enter the 5th no.");
    if(fisrt_number>second_number){
        console.log(fisrt_number);
    }
    else if(second_number>third_number){
        console.log(second_number);
    }
    else if(third_number>fourth_number){
        console.log(third_number);
    }
    else if(fourth_number>fifth_number){
        console.log(fourth_number);
    }
    else{
        console.log(fifth_number);
    }
}
function grade(){
    let marks = prompt("Enter your obtained Marks");
    if(marks<=60){
        alert("Your grade is F");
    }
    else if(marks<=70){
        alert("Your grade is D");
    }
    else if(marks<=80){
        alert("Your grade is C");
    }
    else if(marks<=90){
        alert("Your grade is B");
    }
    else{
        alert("Your grade is A");
    }
}
function iterates(){
    for(let i = 1; i <= 100; i++){
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0 && i % 5 === 0) {
              console.log("FizzBuzz");
         }
        else {
            console.log(i);
        } 
    }
}
function evenOdd(){
    for(let i = 1; i<=100; i++)
    if(i % 2 === 0){
        console.log(i , "is even");
    }
    else{
        console.log(i , "is odd");
    }
}
function pattern(){
    for(let i = 1; i<=10; i++)
    {
        let row ="";
        for(let h = 1;h<=i; h++)
        {
            row += "* ";
            console.log(row);
        }
    }
}