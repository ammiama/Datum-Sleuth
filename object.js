const myObject = 
{
    firstName: "Aman",
    secondName: "Goswami",
    age: 28,
    fullName: function()
    {
        return this.firstName + " " + this.secondName;
    }
};
console.log(myObject.firstName);
console.log(myObject['secondName']);
console.log(myObject.function);

const stringObject = "My name is Aman";
const stringObject1 = "I am a tech professional";
console.log("Call my name \" John \" and tell people about my \" proffesion \" ");
console.log('Call my name \' Aman \' and tell the world I am gonna rock');
console.log("Call my name \r AMAN and tell the \f world, I am gonna rock the world one day.") // here \r is carriage something anf \f is feed form
// String Methods
console.log(stringObject.toUpperCase());
console.log(stringObject1.toLowerCase());
console.log(stringObject.length);
console.log(stringObject.slice(3,6)); // slice function of string method
console.log(stringObject.slice(-10, -8)) // it will count string backwards
console.log(stringObject.slice(8));
console.log(stringObject.slice(-8));
console.log(stringObject.slice(-0)); // output My name is Aman
console.log(stringObject.slice(0));
console.log(stringObject.substring(3,7));

const str = stringObject.replace("My", "I"); // this method is used to replace any words or sentences and By default, the replace() method replaces only the first match:
console.log(stringObject.replace)

const learnEnglish = "Quick brown fox jump over the lazy dog. Dog is dog no matter what, You dog me. quick brown, lazy dog"
console.log(learnEnglish.replaceAll("Dog", "Cat")); // case-sensitive
console.log(learnEnglish.replaceAll("dog", "cat"));

// String Search Methods
console.log(stringObject1.indexOf("tech",8));
console.log(stringObject1.lastIndexOf("tech, 2"));
console.log(learnEnglish.search("Dog"));
console.log(learnEnglish.search("dog"));
console.log(learnEnglish.search("quick"));
console.log(learnEnglish.search("Quick"));
console.log(learnEnglish.match("dog"));

