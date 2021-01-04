/* 
TYPES OF FUNCTIONS
1. Normal Functions
 function name(param){
     statements
 }

2. Function Expression
let name = function(params){
    statements
}

3. Arrow Functions Expression
let name = (params) => {
    statements
}

*/
document.write('<h1>Functions</h1>');
function sumAdd (num1, num2) {
  let total = num1 + num2;
document.write(total);
};

sumAdd(5,7); 

document.write('<br>')
function multi1(x,y){
    let m= x*y;
    document.write(m);
}
multi1(3,5);

document.write('<br>')
function addNumbers(a,b){
    var tot= a+b;
    document.write('The total is : ' + tot);

}
addNumbers(4,2);
 
document.write('<br>')

// Arrays in justifyContent: 

let cars = ["Bmw", "Audi", "Benz"];
cars.push("Lexus","volvo");
let arr1 = new Array("Mango ", 'Banana ', 'Orange ', 'pineapple ', ' Apple ', 'melon');
arr1.push("Sugarcane");
// arr1.pop();

for(var i=0; i<arr1.length; i++){

    document.write(arr1[i] + '<br>');
}





// Objects
 // Functions found in objects are called methods 
let car = {
    car_brand : "Tesla",
    car_model : "Model 3",
    price : 3500,
     teslaAutoPilot: function(){
document.write("This car has Auto Pilot ");
    }

}
car.teslaAutoPilot();
document.write('<br>');
document.write(car.price);
document.write('<br>');

// writing objects using function constructor
// function constructors

function foodb(protein,vitamins,Carbohydrates){
    this.protein = protein;
    this.vitamins = vitamins;
    this.Carbohydrates = Carbohydrates;
    this.balanceDiet = function(){
        document.write("This food is a balance diet");
    }
}
var f1= new foodb("Egg","Cabbage","Maize");

var f2= new foodb("Mutton","kales","potato");

f1.balanceDiet();
document.write('<br>');

document.write(f1.protein + ', ' + f2.vitamins);

// changing strings to objectPosition: 
// use the keyword new
document.write('<br>');

let str = 2.8
document.write(typeof(str))

document.write('<br>');

// You can also add properties to the object outside the objectPosition: 
// use the oject_name.Property_name = "Value_property"
foodb.minerals ="Liver";
document.write(foodb.minerals)


// adding more methods to an object
// user mainObject_name.New_method_name = function(){}


// deleting property in an object
// use the key word delete
document.write('<br>');

// delete foodb.vitamins;

document.write(car.car_brand);
document.write('<br>');
document.write(f1.Carbohydrates+'<br>');

//Object with properties and methods

var person = {
    firstName: "James",
    lastName: "Bond",
    age: 15,
    getFullName: function(){
        return this.firstName + '  ' + this.lastName;
    }

}
document.write(person.getFullName()+'<br>');

// Object constructor
// use the new keyword 

let person1 = new Object();
person1.firstname = 'Hilly';
person1.lastname = 'Kiplo';
person1.Age = 25;
person1['Location'] = 'Kapsokwony';

person1.findFullName = function(){
    return 'My name is ' + this.firstname + ' ' + this.lastname +' from ' + this.Location + ' I am ' + this.Age + " Years old";
}
document.write(person1.Age +'<br>');
document.write(person1.findFullName());

// if not sure if an object has a property
// use hasOwnProperty() before accessing properties
// hasOwnproperty()

let school = new Object();
school.primary;
if(school.hasOwnProperty('primary')){
    school.primary;
}
 

// Dom manipulation and getelementbyId method
