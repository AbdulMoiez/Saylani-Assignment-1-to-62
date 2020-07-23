// Chapter 1
/*
//1. Write a script to greet your website visitor using JS alert box.
/!*
var greet = "Welcome to our Website";
alert(greet);*!/


//2. Write a script to display following message on your web page:

/!*var message  = "Error! Please Enter a valid password";
alert(message);*!/

//3. Write a script to display following message on your web page: (Hint : Use line break)
/!*var message = "Welcome to JS Land..." +"<br>" + "Happy Coding!"
alert(message);*!/

//4. Write a script to display following messages in sequence:
/!*
alert("Welcome to JS Land");
alert("Happy Coding");
*!/

//5. Generate the following message through browser’s developer console:

/!*
console.log("Hello... I can JS throughmy web browser's console");*!/


*/

// Chapter 2
/*// Saylani JS Training (Variables for Strings)

/!*
/!*var username = "Jhon Doe"
alert(username)*!/

/!*var myName = "Abdul Moiez Irbaz"
window.alert(myName)*!/


/!*var message = "Hello Word"
window.alert(message)*!/


/!*var student_Name = "Student Name \n Abdul Moiez"
window.alert(student_Name)

var student_Age = " Student Age \n 23"
window.alert(student_Age)

var studen_Skills = "Student Skill \n Certified Mobile Application Developer "
window.alert(studen_Skills)*!/

var email = "My email address is moiezirbaz@gmail.com";
window.alert(email);

var book = "A smater way to learn JavaScript"

window.alert("I am trying to learn from Book "+ book)


var text = "Yah! I can write HTML content through JavaScript";
document.write(text);


var style = "----------#$*$#----------";
window.alert(style)*!/*/

// Chapter 3
/*// Saylani JS Varable and Number

/!*
/!*var age =  22 ;
window.alert("I am " + age + " year old")


var visitor = "You have visit this site 14 time";
window.alert(visitor)*!/



/!*var birthYear = 1998 ;
document.write("My birth Year is of "+birthYear + "<br>"+"The Data type (birthYear) Declared Variable is " )
document.write(typeof birthYear);*!/


var visitor_Name = " <b>Asjad Sandeel</b>";
var product_Buy = " <b>Check Shirt</b>";
var brand = "<b>Levis</b>";

document.write(visitor_Name+" ordered "+product_Buy+" on " +brand + " Clothing Store")*!/*/


//Chapter 4
/*
//1 . Declare 3 variables in one statement.
/!* var name1 = "Abdul"; name2 = "Moiez"; name3 = "Irbaz";
 document.write(name1 + "<br>" + name2 + "<br>" + name3 );*!/

 //2. Declare 5 legal & 5 illegal variable names.
/!*!// 5 Legal names
/!*var name;
var first_Name;
var name1;
var name$;
var $name;
var _name;*!/

// 5 illegal names
/!*
var 1name;
var @name;
var first-Name;
var (name;
var name];*!/!*!/

// 3. Display this in your browser

/!*document.write("<h1> Rules for Naming JS variables </h1>");
 document.write("a A heading stating “Rules for naming JS variables” " + "<br>");
 document.write("b  Variable names can only contain number,$ and _." + "<br>");
 document.write("c Variables must begin with a letter, $ or _. For example $name, _name or name " + "<br>");
 document.write("d) Variable names are case sensitive " + "<br>");
 document.write("e) Variable names should not be JS Keywords" + "<br>");*!/*/

// Chapter 5
/*
//Task 1
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Adding
/!*var first_Number = 200;
var second_Number =100;

var adding = first_Number + second_Number;

document.write("The Sum of 200 and 100 is: " + adding + "<br>");*!/
//Task
//2. Repeat task1 for subtraction, multiplication, division & modulus.
// Subtracting

/!*
var first_Number = 200;
var second_Number =100;

var subracting= first_Number - second_Number;

document.write("The Subraction of 200 and 100 is: " + subracting + "<br>");
*!/


// Multiplication

/!*
var first_Number = 20;
var second_Number =10;

var multiplication= first_Number * second_Number;

document.write("The Multiplication of 200 and 100 is: " + multiplication + "<br>");

*!/

// Division

/!*
var first_Number = 20;
var second_Number =10;

var division = first_Number / second_Number;

document.write("The Division of 200 and 100 is: " + division + "<br>");
*!/


// Modulus

/!*
var first_Number = 20;
var second_Number =10;

var modulus = first_Number % second_Number;

document.write("The Modulus of 200 and 100 is: " + modulus + "<br>");

*!/

//Do the following using JS Mathematic Expressions

/!*
//b.  Value after variable declaration is:
var value;

document.write("b.  Value after variable declaration is:" + value + "<br>");

//c. Initialize the variable with some number.
var value =5;

//d. Show tvalue: 5”.

document.write("c. Initialize the variable with some number." + value + "<br>");

//Increment the variable.

value = value + 1;
//Show the value of variable in your browser like “Value after increment is: 6”
 document.write("f. Value after increment is: " + value + "<br>");

//g. Add 7 to the variable.

value = value + 7 ;
//h. Show the value of variable in your browser like Value after addition is: 13
document.write("h. Value after addition is: " + value + "<br>");


//i. Decrement the variable.

value = value -1;
//j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("j. Value after decrement is: " + value + "<br>");


//k. Show the remainder after dividing the variable’s value by 3.
value = value % 3;

//l. Output : “The remainder is : 0”.
document.write("l. The remainder is:  " + value + "<br>");

document.write("<br>" + "<br>"  + "<br>");*!/

//Task 4
//4. Cost of one movie ticket is 600 PKR. Write a script to store

/!*
var prize = 600 ;
prize = prize * 5;
document.write("Total cost to buy  5 tickets  to a movie is " + prize + " PKR." + "<br>");

document.write("<br>" + "<br>"  + "<br>");
*!/

//Task 5
//5. Write a script to display multiplication table of any number in your browser
//table
/!*
var table;
for (table = 1; table <=10; table++){
    document.write("4 x " + table + "=" + table * 4  + "<br>" )

}
document.write("<br>" + "<br>"  + "<br>");
*!/

//Task 6
//6. The Temperature Converter:
/!*
// Convet to Fahrenheit
var convert_Celsius  = 56;

convert_Celsius = (convert_Celsius * 9/5 ) + 32 ;

document.write("Convet to Fahrenheit: " + convert_Celsius + " NNoF"   + "<br>" );

// Convet to Celsius
var convert_Fahrenheit  = 101;

convert_Fahrenheit = (convert_Fahrenheit - 32 ) * 5/9 ;

document.write("Convet to Celsius: " + convert_Fahrenheit + " NNoC"    + "<br>"  );

document.write("<br>" + "<br>"  + "<br>");*!/

//Task 7
//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
/!*

//a. Price of item 1
var price_1_item = 650;

//c. Ordered quantity of item 1
var quantity_1_item = 3;

var total_price_1 = price_1_item *  quantity_1_item ;
//b. Price of item 2
var price_2_item = 100;

//d. Ordered Quantity of item 2
var quantity_2_item = 7;

var total_price_2 = price_2_item * quantity_2_item

//e. Shipping charges
var shipping = 100;


document.write("Price of 1 item: " + price_1_item    + "<br>"  );
document.write("Price of 2 item :" + price_2_item     + "<br>" );
document.write("Ordered quantity of 1 item:" + quantity_1_item    + "<br>"  );
document.write("Ordered Quantity of 2 item:" + quantity_2_item     + "<br>" );
document.write("Shipping charges: " + shipping );
document.write("<br>" + "<br>" );

var total = total_price_1 + total_price_2  + shipping    + "<br>"  ;

document.write("Total cost of your order is " +  total );


document.write("<br>" + "<br>" + "<br>" );
*!/


//Task 8
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in  your browser
/!*
 /!*var total_Marks = prompt( "Write Your Total Marks: ");
 var obtain_Marks = prompt("Write your Obtain marks:");*!/
 var percentage =  obtain_Marks / total_Marks * 100

document.write("Total marks: " + total_Marks + "<br>"  );
document.write("Obtain marks: " + obtain_Marks + "<br>"  );
document.write("Percentage: " + percentage) + "<br>"  ;

document.write("<br>" + "<br>" + "<br>" );*!/



//Task 9
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.

/!*
var dollar = 10;
var Saudi_Riyal = 25;
var single_Expression = (dollar*104) + (Saudi_Riyal * 28);

document.write("Total Currency in PKR " + single_Expression);
*!/

//Task 10
//10. Write a program to initialize a variable with some number and do arithmetic.

/!*
var number = 10;
var single_expression = (((number + 5) * 10) /2 );
document.write(" The answer of given statments a. Add 5 b. Multiply by 10  Divide the result by 2 is: " + single_expression);
*!/

//Task 11
//11. The Age Calculator: Forgot how old someone is Calculate it!

/!*
var current_Date = new Date();
var only_Year = current_Date.getFullYear();
var birth_Year = prompt("Please write your birth Year only!");

document.write("Current Year " + only_Year + "<br>");
document.write("Birth Year " + birth_Year + "<br>");

var age = only_Year - birth_Year;
document.write("Your Age is: " + age + "<br>");
*!/



//Task 12
//12. The Geometrizer: Calculate properties of a circle.

/!*
var radius = prompt("Please Enter Radius! ");

var circumference = 2 * 3.142 * radius;
var area =  3.142 * radius * radius;

document.write("The Radius of the Circle is that you Enter: " + radius + "<br>");
document.write("The Circumference of the Circle according to your given Radius: " + circumference + "<br>");
document.write("The Area of the Circle according to your given Radius: " + area + "<br>");*!/

//Task 13
//13. The Lifetime Supply Calculator: Ever wonder howmuch a “lifetime supply” of your favorite snack is?  Wonder no more.

/!*var  favorite_Snack = prompt("Please Enter your Favorite Snack name.");
var  current_Age = prompt("Please Enter your Current Age: ");
var maximum_Age = 65;
var estimated_Amount = 3 ;
var need_Snack = (maximum_Age - current_Age) * 3


document.write("Your Favorite Snack is:  " + favorite_Snack + "<br>");
document.write("Your Current Age is:  " + current_Age + "<br>");
document.write("Maximum Age is:  " + maximum_Age + "<br>");
document.write("Amount of Snacks per day:  " + estimated_Amount + "<br>");
// document.write("Amount of Snacks per day:  " + estimated_Amount + "<br>");
document.write("You will need " + need_Snack +" " + favorite_Snack + " to last you until the ripe old age of 65");*!/

*/

// Chapter 6-9
/*//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

/!*var take_Number = prompt("Write any Intiger Number: ");
document.write(" <h2><b>Result </b></h2>");
document.write("Now the Value of a You Enter is: " + take_Number  + "<br>");
document.write("*******************************"  + "<br>");
document.write("<br>" +" <br>"  +" <br>");

var increment = ++take_Number;
document.write("The value of ++a is: " + increment + "<br>");
document.write("Now the value of a is: " + increment  + "<br>");
document.write("<br>" +" <br>"  +" <br>");

var new_Increment = increment++ ;
document.write("The value of a++ is: " + new_Increment + "<br>");
document.write("Now the value of a is: " + (new_Increment + 1) + "<br>" );
document.write("<br>" +" <br>"  +" <br>");

var decrement = --increment;
document.write("The value of --a is: " + decrement + "<br>");
document.write("Now the value of a is: " + decrement + "<br>" );
document.write("<br>" +" <br>"  +" <br>");

var new_decrement = decrement-- ;
document.write("The value of a-- is:  " + new_decrement + "<br>");
document.write("Now the value of a is: " + (new_decrement -1) + "<br>");*!/*/

// Chapter 9-11
/*//Task 1
/!*!//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

/!*

var  city_Name = prompt("Enter the city name!");

var upper_Case = city_Name.slice(0,1);
var lower_Case = city_Name.slice(1);
 upper_Case = upper_Case.toUpperCase();
 lower_Case = lower_Case.toLowerCase();
 var city_Name = upper_Case + lower_Case;
if (city_Name === "Karachi"){

 document.write("Welcome to city of lights");
}*!/!*!/

//Task 2
/!* //2. Write a program to take “gender” as input from user. If th user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
/!*

var gender = prompt("Please Enter your Gender.");
gender = gender.toLowerCase();

if (gender === "male"){
 document.write(" Good Morning Sir")
}
else if (gender === "female"){
 document.write("Good Morning Ma’am");
}
*!/!*!/

//Task 3
/!*

var signal_Color = prompt("Please Enter the Tracfic Signal Light Color!");

signal_Color = signal_Color.toLowerCase();
document.write("Signal"+ '&nbsp &nbsp &nbsp &nbsp &nbsp' + "Message" + "<br>");

if (signal_Color === "red"){
 document.write("Red"+ '&nbsp &nbsp &nbsp &nbsp &nbsp' + "Must Stop");
}
else if (signal_Color === "green"){
 document.write("Green"+ '&nbsp &nbsp &nbsp &nbsp &nbsp' + "Ready to move");
}
else if (signal_Color === "yellow"){
 document.write("Yellow"+ '&nbsp &nbsp &nbsp &nbsp &nbsp' + "Move now");
}*!/

//Task 4
/!*
//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

/!*var liter = parseInt( prompt("Please Enter your remaining Fuel of car.") );
if (liter => 0.25){
    document.write("Please Refill the fuel in your Car. ");
}*!/!*!/

//Task 5
/!*!//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
/!*
 var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

 var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

 if (true){
    alert("True");
}
if (false){
    alert("False");
}

 if("car" < "cat"){
    alert("car is smaller than cat");
}*!/!*!/

//Task 6
/!*!//Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

/!*
var marks_Obtained = parseInt(prompt("Please Enter Your Marks."));

var  total_Marks = 300 ;
 var percentage = marks_Obtained * 100 / 300 ;
 percentage = percentage.toFixed(2);
 document.write("Total Marks: " + total_Marks + "<br>");
 document.write("Marks Obtain: " + marks_Obtained + "<br>");
 document.write("Percentage: " + percentage + "%" + "<br>");

 if(percentage >= 80){
     document.write("Grade: A-one" + "<br>" + "Remarks: Excellent" + "<br>")
 }
else if (percentage >=70){
    document.write("Grade: A" + "<br>" + "Remarks: Good" + "<br>");
 }

else if (percentage >= 60){
    document.write("Grade: B" + "<br>" + "Remarks: You Need to Improve" + "<br>");
 }

else if (percentage < 60 ){
    document.write("Grade: Fail" + "<br>" + "Remarks: Sorry" + "<br>") }*!/!*!/

// Task 7
/!*!//7. Guess game:
/!*var guess_Number = parseInt(prompt("Please Enter Sercet Number."));
var sercet_Number = 7;
if (guess_Number === 7){
    document.write("Bingo! Correct Answer")
}
else if (guess_Number === 6){
    document.write("Close enough to the correct answer");
}
else if (guess_Number === 8 ){
    document.write("Close enough to the correct answer");
}
else {
    document.write("Wrong Answer.Try Again");
}*!/!*!/

//Task 8
/!*!//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

/!*var number = parseInt(prompt("Please enter a number"));

 var divided = number % 3;

 if(divided === 0){
     document.write("The number you enter is Divisble of 3.");
 }
 else{
     document.write("The number you enter is not Divisble of 3.")
 }*!/!*!/

//Task 9
/!*!//9. Write a program that checks whether the given input is an even number or an odd number.

/!*var number = parseInt(prompt("Please Enter any number"));

var even_or_odd = number % 2 ;

if (even_or_odd === 0){
    document.write(number + " is an Even Number");
}
else if (even_or_odd =! 0){
    document.write(number + " is an Odd Number");
}*!/!*!/

//Task 10
/!*
//10. Write a program that takes temperature as input and shows a message based on following criteria.

/!*
var temperature = parseInt(prompt("Please Enter Today Temperature"));

if(temperature >= 40){
    document.write("It is too hot Today's");
}

else if (temperature >=30 ){
    document.write("The weather is Normal Today.")
}
else if (temperature >= 20){
    document.write("Today’s Weather is cool.")
}
else if (temperature >= 10){
    document.write("OMG! Today’s weather is so Cool.")
}*!/
*!/


//Task 11
/!*
//Write a program to create a calculator for +,-,*, / & % using if statements.

/!*
var first_Number = parseInt(prompt("Please enter the first number"));
var operator = prompt("Please enter the Operator");
var second_Number =parseInt(prompt("Pease enter the second number"));

if (operator === '-'){
    document.write("The Result of " + first_Number + operator + second_Number +" is: " + (first_Number - second_Number) + "<br>" );
}

else if (operator === '+'){
    document.write("The Result of " + first_Number + operator + second_Number +" is: " + (first_Number + second_Number) + "<br>" );
}

else if (operator === 'x' || operator === '*'){
    document.write("The Result of " + first_Number + operator + second_Number +" is: " + (first_Number * second_Number) + "<br>" );
}
else if (operator === '/'){
    document.write("The Result of " + first_Number + operator + second_Number +" is: " + (first_Number / second_Number) + "<br>" );
}
*!/
*!/*/

// Chapter 12-13
/*// Task 1
//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
/!*
var number_or_char =  prompt("Please Enter a Number OR a Letter, If you type a letter than  a character  will be capital or small...");

if (number_or_char === number_or_char.toUpperCase()){
    document.write("This is a upper case  a letter. ");
}
else if (number_or_char === number_or_char.toLowerCase() ){
    document.write("This is a lower case  a letter. ");
}
else if ( number_or_char === Number(number_or_char) ){
    document.write("This is a Number. ");
}*!/*/

// Chapter 14-16
/*//1. Declare an empty array using JS literal notation to store student names in future.
/!*
var student_Names = ["Asjad Sandeel", "Hamza Ravani" , "Ali Murtaza", "Jalal Hassan"];*!/*/

//Chapter 17-20


// Chapter 21-25


/*
//1 & 6. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable.

var first_Name = prompt("Enter Your First Name.");
var last_name = prompt(" Enter your last Name.");

var full_Name = first_Name + last_name;

document.write(" Welcome "+ full_Name);*/


/*
//2. Write a program to take a user input about his favorite mobile phone model.

var mobile_Model = prompt("Please Enter your Favorite Mobile Model.");

document.write("Lenght of String: " + mobile_Model.length);*/

/*
//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var country = "Pakistan";
document.write("Index of n: " + country.indexOf('n'));*/

/*
//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var  text = "Hello World";
document.write("The index of l: " + text.indexOf('l'));*/

/*//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browse.

var country = "Pakistan";
document.write( "Character at index 3: " + country./*
//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var change = "hyderabad";
change= change.slice(5,10);
document.write("Islam"+ change);*/

/*
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";
 message1 = message.replace(/and /g , " & ");
 document.write(message1);*/

/*
//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var value = "472";
document.write("Value: " +value + "<br>");
document.write("Type: " + typeof value + "<br>");

value = Number(value );
document.write("Value: "  + value + "<br>");
document.write("Type: " + typeof value + "<br>");*/

/*
//10. Write a program that takes user input. Convert and show the input in capital letters.
var user_Input = prompt("Please enter any Letter.");
document.write("User Input: " + user_Input + "<br>");
user_Input = user_Input.toUpperCase();
document.write("Upper Case: " + user_Input);*/

/*!//11. Write a program that takes user input. Convert and show the input in title case.

var name = prompt("Please Enter your Title name.");
name1 = name.slice(0,1);
name1 = name1.toUpperCase();
name2 = name.slice(1);
name2 = name2.toLowerCase();
document.write("<h1>"+ "<b>" + name1+name2 +"</b>"+"<h1>");*/

/*
//12. Write a program that converts the variable num to string.

var num = 35.36 ;
document.write("Number: " + num + "<br>")
num2 = num.toString();
num1 = num2.replace('.',"")
document.write("Result: "+ num1 + "<br>" + "Type: " + typeof num1);*/

/*
//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !],
// I do the above question through function ;


function check(inputvalue) {
    var a = /^[A-Za-z]+$/;
if (inputvalue.value.match(a)){
    alert("Your Username Recoded Successfully")
}
else {
    alert("Please enter a valid Username.")
}
}*/

/*
//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
 var user_Input = prompt("Welcome to Master bakery. What do you want to order sir/ma'am") ;

 user_Input = user_Input.toLowerCase();

 if (user_Input === A[0]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
else  if (user_Input === A[1]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
 else  if (user_Input === A[2]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
 else  if (user_Input === A[3]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
 else  if (user_Input === A[4]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
 else{
     document.write("We are sorry."+ user_Input + "is not available in our bakery")
 }
*/

/*
//15. Write a program to take password as an input from user. The password must qualify these requirements:

function alphanumeric(inputtxt)
{
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(inputtxt.value.match(letterNumber))
    {
        return true;
    }
    else
    {
        alert("message");
        return false;
    }
}*/

/*
//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”;
var university = "University of Karachi";
university = university.split("");
document.write(university);*/

/*

//17. Write a program to display the last character of a user input.
 var input = "Pakistan";
 var input1=input.charAt(7);
 document.write(input1);
*/

/*
//18.You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var string = "The quick brown fox jumps over the lazy dog";
for (i = 0; i<string.length; i++){
    document.write(i+string[i])
}*/


// Chapter 26-30
/*

//1. Write a program that takes a positive integer from user & display the following in your browser.
var user_Input = prompt("Please Enter any Float Number.");

var user_Input1 = Math.round(user_Input);
document.write("Round: " +user_Input + "<br>");
var user_Input2 = Math.floor(user_Input);
document.write( "Floor: "+user_Input2 + "<br>");

var user_Inout3 = Math.ceil(user_Input);
document.write( "Ceil: "+user_Inout3 + "<br>");
*/

/*
//2. Write a program that takes a negative floating point number from user & display the following in your browser.
var user_Input = prompt("Please Enter a Negative Floor Number.");
var user_Input1 = Math.round(user_Input);
document.write("Round: " +user_Input + "<br>");
var user_Input2 = Math.floor(user_Input);
document.write( "Floor: "+user_Input2 + "<br>");

var user_Inout3 = Math.ceil(user_Input);
document.write( "Ceil: "+user_Inout3 + "<br>");*/

/*

//3. Write a program that displays the absolute value of a number.

var  user_input = prompt("Please Enter a Number.");
user_input1 = user_input.slice(1);
var user_input2 = user_input.charAt(0);
if (user_input2 === '-'){
    document.write(user_input1);
}
else if (user_input2 !== '-'){
    document.write(user_input)
}*/

/*
//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser..

var Dice_Number = Math.random();
var new_Number = Dice_Number *6;
var One_Digit = Math.floor(new_Number);
document.write(One_Digit);*/

/*!//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser..
var random_Number = Math.random();
var new_number = random_Number * 6;
var floor_Value = Math.floor(new_number) ;

if (floor_Value <= 3){
    document.write(floor_Value + "<br>" + "Random Coin value: Heads");
}
else if (floor_Value >= 3){
    document.write(floor_Value + "<br>" + "Random Coin value: Tails")
}*/

/*
//6. Write a program that shows a random number between 1 and 100 in your browser.

var random_Number = Math.random();
var new_number = random_Number * 100;
var floor_Value = Math.floor(new_number) ;
document.write("Random number between 1 and 100: " + floor_Value );*/

/*
//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number.

var user_Input = prompt("Please Enter a Secret number from1 to 10 ");

var secret_Number = 7;

if (user_Input == secret_Number){
    document.write("Congratulate you type the Correct Secret number ")
}
else if (user_Input != 7){
    document.write("Wrong Answer! Try Again");
}*/


// Chapter 31-34
/*


/!*
 //1. Write a program that displays current date and time in your browser.

var date = new Date();
document.write(date);*!/


/!*!// 2. Write a program that alerts the current month in words. For example December.
var month_names = ["January", "February", "March", "April", "May","June","July","August", "September", "October", "November", "December"];
var month = new Date();
var the_Month = month.getMonth();
var present_month = month_names[the_Month];
document.write("Current Month: " + present_month);*!/


/!*
//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write("Current Day: " + nameOfToday);*!/


/!*
//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (theDay == 0 || theDay == 6){
    document.write("It's Fun day");
}
else {
    document.write("It's Working Day");
}
document.write("<br>" + "Current Day: " + nameOfToday);*!/

/!*
//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var first15_Days = new Date();
var today = first15_Days.getDay();
if (today <= 15)
for (today =  first15_Days.getDay(); today <16; today++){
    document.write(today)
}
else if (today >= 16) {
    for (today = first15_Days.getDay(); today < 31; today++) {
        document.write(today)
    }
}*!/

/!*
//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that....

var d = new Date();
document.write("Current Data: " + d);

var d = new Date("1970 1 1");
var millsSince = d.getTime();
document.write("<br>" + "Elapsed millisecond since Jan.1,1970: " + millsSince);

var d = new Date("January 1 1970");
var mintsSince = d.getMinutes();
document.write("<br>" + "Elapsed minutes since Jan.1,1970: " + mintsSince);*!/

/!*
//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var d = new Date();
document.write(d + "<br>");
var time = d.getHours();
if (time <=12   ){
    document.write(time + " Am.")
}
else if (time >=12.59000 || time <= 23.59000)
document.write(time + " PM.");*!/

/!*
//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var LastDate = new Date("2020 12 31");
document.write(LastDate);*!/

/!*!//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?


const date1 = new Date('4/25/2020');
const date2 = new Date('2/22/2020');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.write(diffDays + " days have passed since 1st Ramadan, 2020");*!/

/!*
//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var d = new Date();
document.write("On reference date " + d);
const date1 = new Date('1/01/2020');
const date2 = new Date('6/22/2020');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const seconds = diffDays * 86400;
document.write("<br>" + seconds + " seconds had passed since beginning of 2020");
*!/

/!*!//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display

var d = new Date();
document.write("Current Date: " + d + "<br>");
var hour = d.setHours(22);
document.write("1 hour ago: " + d + "<br>");*!/

/!*!//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var d = new Date();
document.write(d + "<br>" );

d.setFullYear(d.getFullYear() - 100);
document.write(d);*!/

/!*!//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var user_Date = prompt("Please Enter your Data.");
document.write("Your age is: " + user_Date + "<br>");
var d = new Date();
var user_Year = d.getFullYear() - user_Date;
document.write("Your Birth year is: " + user_Year);*!/

/!*
//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.

var customer_Name = "Abdul Moiez Irbaz";
document.write("Customer Name: " +  "<b>" +customer_Name + "</b>" + "<br>" );
var d = new Date();
var month_Name = ["January", "February", "March", "April", "June", "July","August", "September", "October", "November", "December"];
var Month_index = d.getMonth();
var Bill_Month = month_Name[Month_index];
document.write("Current Month:" + "<b>" + Bill_Month + "</b>" + "<br>");

var Number_unit = 410;
document.write("Number of units: " + "<b>" + Number_unit +"</b>" + "<br>");
var Charge_Unit = 16;
document.write("Charges per units: " + "<b>"+ Charge_Unit +"</b>" + "<br>");
document.write("<br>"+"<br>");

var Net_amount =  + Number_unit * Charge_Unit;
document.write( " Net Amount Payable (within Due Date): " + "<b>"+ Net_amount +"</b>" + "<br>");
var Late_payment = 350;
document.write("Late Payment Surcharges: " +"<b>" + Late_payment + "</b>"  + "<br>" );
var Gross_amount = Net_amount + Late_payment;
document.write("Gross Amount Payable (after Due Date): " + "<b>" + Gross_amount + "</b>");*!/
*/

// Chapter 35-38
/*

/!*
//1. Write a function that displays current date & time in your browser.

function date() {
var d = new Date();
document.write(d);
}
date();*!/

/!*
//2. Write a function that takes first & last name and then it greets the user using his full name.
function Greeting() {
var first_Name =prompt("Enter your First Name");
var Second_Name = prompt("Enter your Last Name");
document.write("Welcome! " + first_Name + Second_Name);
}
Greeting();*!/

/!*
//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function adding() {
var first_Number =  prompt("Please Enter a First Number to Add");
    var second_Number = prompt("Please Enter a Second Number to Add");

    document.write(parseInt(first_Number) + parseInt(second_Number));

}
adding();*!/

/!*
//4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculator() {
    var num1 =parseInt( prompt("Enter First Number to get Result") );
    var operator =prompt("Enter a Operator to get Result" );
    var num2 =parseInt( prompt("Enter Second Number to get Result") );

    if (operator == '+' ){
        document.write(num1 + num2)
    }
    else if (operator == '-' ){
        document.write(num1 - num2)
    }
    else if (operator == '*'  ){
        document.write( num1  * num2)
    }
    else if (operator == 'x' ){
        document.write(num1 * num2)
    }
    else if (operator == '/' ){
        document.write(num1 / num2)
    }
    else{
        alert("Please Enter a Valid Argument or Operator")
    }
}




calculator();*!/*/

// Chapter 38-42
/*
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
/!*
//Saylani sir when you remove comment from this question also remove comment from button in html
//
function power(){
    var a = prompt("Enter the base");
    var b = prompt("Enter the power");
    var result = Math.pow(a,b);
    document.write("The result is " + result)
}*!/*/

//