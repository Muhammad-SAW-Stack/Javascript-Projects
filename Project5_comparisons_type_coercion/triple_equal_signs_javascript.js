/*Triple Equal Signs
The === (triple equal sign) symbol is used to show that a comparison should be made. 
Specifically, this "===" symbol is an instruction to check whether the data on the 
left side of the symbol is equal to the data on the right side and that it is the same 
type of data as that on the right. The answer to this comparison is an answer of 
"true" or "false."

Example
You want to check whether two birth dates are equal. You have two pieces of data 
in the computer that represent these two birth dates:

"DateOfBirth1" is data of type "Date," and the value of the data is "1/1/1970".
"DateOfBirth2" is data of type "Date," and the value of the data is "1/1/1970".

You would use the "===" symbol like this:
DateOfBirth1 === DateOfBirth2

This tells the computer to check whether the two pieces of data are equal in both 
VALUE and TYPE. Since they are, the computer responds with "true."

Now, remember, a single equal sign assigns a variable. Here is a way we could 
utilize === in JavaScript:*/

/* X = 10;
    Y= 10;
    document.write(X === Y);
This returns “true”. To return “false” we would write:
X = 82;
Y = "82";
document.write(X === Y);

/* Why? Because the data types (number and string respectively) 
were not the same.
This works for all data types, including strings, like:
A = "Magnus";
B = "Magnus";
document.write(A === B);*/
/*This would return “true”.*/