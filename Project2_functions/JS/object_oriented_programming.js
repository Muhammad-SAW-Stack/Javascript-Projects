/* Object-Oriented Programming:
A “constructor” is a special part of a class 
(a template for defining an object [item with state and behavior]).
The constructor is a special part of the class that describes the default state 
of any new instance of the class that gets created. In other words, 
it gives default values for the properties of the class.*/

/*Example
Let’s say you had a class called “Customer.” 
The computer code to create the “customer” class might look something like this:*/
class Customer
{
    String FullName;
    Boolean Active;
}

/*Now let’s say that whenever you created a new instance of the “customer” class, 
you wanted it to be an active customer – in other words, you wanted the property “Active” 
to be set to “true”.
To do this, you would make a constructor for the “customer” class. 
It would be a small subprogram, inside the class, that would be used 
every time an instance of the “customer” class was created.
The constructor might look something like this:*/
Customer(string name) {
    FullName = name;
    Active = true;
}
/*The constructor would be used by asking for an instance of the “customer” 
class to be created and passing along the desired name of the customer.
The call to create the instance of the class would look like this: */
Customer cust = new Customer("Brenda Smith");

/*This creates a new instance of the “customer” class using the constructor inside the class. 
The constructor uses the string “Brenda Smith” that it was given to set the value of the property 
“FullName” and uses the instruction in the constructor to set the property “Active” to “true.”
The new instance of the “customer” class, which is the variable “cust” here, will, therefore, 
have the properties:*/
FullName = "Brenda Smith";
Active = true;

/*Note
The above code is given as an example and is not meant to be executed. 
We will create a constructor soon.*/

