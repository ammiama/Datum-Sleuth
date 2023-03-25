const myObject = 
{
    firstproperty: 20,
    secondproperty:'20',
    thirdproperty: [20, 'Hello Aman', 40, 50, '60'],
    fullproperty: function()
    {return this.firstproperty + " " + this.secondproperty
    }
};
console.log (myObject['firstproperty']);
console.log(myObject.firstproperty);
console.log(typeof myObject.secondproperty);
console.log(myObject.secondproperty);
console.log(myObject.thirdproperty[3])

const myArray = [20, 'Hello Aman', [1,2,3,4,5], '20'];
console.log(myArray[2]);
console.log (myArray);

//Operators # Comaprison
const myValue1 = 90;
let myValue2 = 120;
let myValue3 = '120';
let myValue4= 120;
let myValue5 = "Hello String";


console.log(myValue1 == myValue2);
console.log(myValue2 === myValue3); // With this operator data type matters that is why it will give result false.
console.log(myValue2 == myValue3);
console.log(myValue2 !== myValue3); // data type does not matter here for the !== operator
console.log(myValue2 != myValue3); // data type matters here
console.log(myValue2 != myValue4);

console.log(myValue2++); // myValue2 = myValue2 +1;
/* let p;
p = myValue2;
console.log(myValue2);
console.log(myValue2++); // myValue2= myValue2 + 1;
console.log(myValue2);
                            // myValue2 = myValue2+ 1;
                        //myValue2 += myValue2; 
console.log(myValue2); */

// Boolean Operator
const array = [1,2,3,4,5];
const array1 = [1,2,3,4,5];

 valueArray = array + " " + array1;
 console.log(valueArray);
 console.log(array[4]);

 if (myValue1 == myValue2)
 {
    console.log(myValue1);
 }
 else {
    console.log("Ninety");
 }

 if (array == array[4]){
    console.log(array[4]);
 }
 else {
    console.log("No values");
 }
console.log(myValue1 + " " + myValue5);
 