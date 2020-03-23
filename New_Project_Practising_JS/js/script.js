/*I am practicing java script here I have produce output on web page with html h1 tag and I have added css into it*/
document.write("<h1>I am h1 heading produced from java script</h1>");
document.write("<h2 style= color:green;>I am h2 heading produced from java script and I have green color on my css</h1>");
document.write("<div id=jsdiv><h6>I m h6 heading inside id div, my div border is black</h6></div>");

//Practicing JS variables
var num = 16; //number
var name = "Ashur"; // string
var flag = true; //boolean
document.write("<br><hr>")
document.write("<div id=jsdiv><h6> I am number sixteen inside variable produced inside div = " + num + " : see I am cool</h6></div>");

//alert(name + " " + num + " " + flag); // sending all three values in 1 alert

/* Operators in Java script
    Arithmetic oprators
    Comparision operators
    Logical or relational operators
    Assignment operators
    conditional operators or ternary operators
    string operators
    type operators
    bitwise operators

1. Arithmetic oprators: + is addition, - subtraction, * is mulitiplicaiton / is division
         % is modulus or Remainder
         ++ is to increment by speciifed vlaue
         -- is to decrement by specified value 

2.          Comparision operators to test the condition for true and false
                <Given that x = 5>          
         == is equalt to " x==8" returns false  
                          "x == 5" returns true
                          " x == "5" " returns true
        
        === equal value and equal type "x === 5" true
                            "x === "5" " return fasle because value in inverted commas makes it string.
                    != is not equal to "x!=8"

                    !== os not equal to value or not equal type
                    > is greater than, < is lesser than, >= is greater than and equal to
                    <= is lesser than and equal to
3. Logical or relational operators we generally use in logic statlement like if and else
        && is and operator (x < 10 && y > 1) is true
        || is or (x == 5 || y == 5)  is false
        ! is not !(x==y) is true
4. Assignment operators to assign values
    = , example x = y, same as x = y
    +=, example x +=y, same x = X + y
    -=, example x-= y, same as x = x - y
    and same with *, /, y, <<=, >>=, &=, |= **=

5. Conditional operators Javascript also contains a conditional opertator that assigns a value to a variable based on some condition


6. type o operators

*/
document.write("<H1>Practising if else statements </h1>");
    /*
        Q.1. Find weather number is even pr odd
        Q.2. Find the number if its positive or negative
        Q.3. Find if the number is positve and even
    */

var x = 5;
    if (x%2==0){

        document.write("even number" + "<br>");

    }
    else 
    {
        document.write("odd number" + "<br>");
    }

    var x = -5;
    if (x>0){

        document.write("positve number" + "<br>");

    }
    else 
    {
        document.write("negative" + "<br>");
    }