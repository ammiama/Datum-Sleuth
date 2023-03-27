
let someNumber = "I gave him some money";
// if(someNumber == someNumber)........ It will execute if statement.
if(someNumber == "I gave him some moneyy") 
{
    console.log("Some Number");
}
else {
    console.log("No Number ");
}
console.log(someNumber.length);

// ----------------------------------------------------------------------------------------------------------------------------------------------
const month = "June";

if (month == "January")
{
    console.log("No birthday month");
}
    else if (month == "Feb")
{
    console.log("No Bithday month");
}   
        else (month == "June")
{
    console.log("My birthday");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Switch
const anotherMonth = "June"; // Defined variable
switch(anotherMonth) // switch case is generally switch (condition) {case 1: and so on and then default}
{
    case"January":
    console.log("No");
    break;
    case "February":
        console.log("No");
        break; 
        case "Feb":
            console.log("No");
            break;
            case "March":
                console.log("No");
                break;
                case "April":
                    console.log("No");
                    break;
                    case "May":
                        console.log("No birthday");
                        break;
                        case "June":
                            console.log("My Birthday month");
                            break;
                            case "July":
                                console.log("No birthday");
                                break;
                                case "August":
                                    console.log("No birthday");
                                    break;
                                    case "September":
                                        console.log("No birthday");
                                        break;
                                        case "October":
                                            console.log("No birthday");
                                            break;
                                            case "November":
                                                console.log("No birthday");
                                                break;
                                                case "December":
                                                console.log("No birthday");
                                                break;
                                                    default:
                                                        console.log("Re-In-Carnation");
}

/*for (let i = 0; i < 100; i++) // i = i+1, Now i = 0 , then i = 0+1 means 1. Printed 1
{
    console.log(i); 
}

//-----------------------------

 for (let i = 0; i > 100; i--) // this iteration will run to infinity, with minus sign
{
    console.log(i);
} */

let array = [1,2,34,4,5,6,4, "am"];
console.log(array.length);

for (i = 0; i < array.length; i++)
{
    if (typeof array[i] == "string") 
    // here typeof Operator is an operator by which we find out the data type of any variable, so in if statement we can ask for string, number, boolean or any other data types.

    {
    console.log(array[i]);
    }
};

                                                                            // Functions
// 1st Method
function myFunction() { // declared function
    console.log("Hello World, this is my first function");
};
myFunction(); // here we calling function after the declaration.

// 2nd Method
(function anotherFunction()
{
    console.log("Consoling the anotherFuunction's statement, this is an another type to declare and call/invoke the function at the same time. ");
})();

                                                                // Method with parameters.

function functionParameters(param1, param2)
{
    console.log(param1);
    console.log(param2);
    //functionParameters(20, "String"); .... if we declare parameters inside the fuunction it will call itself to the infinity, isStackOverflowError will be occured.
};
console.log(functionParameters());
functionParameters(20, "String");

const anotherFunction = function assigningInVariableFunction()
{
    console.log("Printing the statement, we can also assign function to a variable and can invoke it by calling the variable name.");
}
console.log(anotherFunction());

                                                                // Arrow Function
const arrowFunction = () =>
{
    console.log("This is an arrow function");
}
console.log(arrowFunction());