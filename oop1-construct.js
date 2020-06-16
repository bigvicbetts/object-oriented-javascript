//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property
//   is called "purpose", and stores a string.  This string should clearly explain why classes are used in
//   Object Oriented Programming.  The first method is called explain().  This method should print the
//   contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd
//   method should print out the various parts that are essential to building a class.  Instantiate the
//   class, and invoke the method so the results are showing in the console once this file is run.

//your code here...

class WhyClass {
    constructor() {
        this.purpose = 'In OOP, classes are used to provide a blueprint for objects.  They pass their attributes and methods to the objects created from the class';
    }

    explain() {
        return this.purpose;
    }

    pieces() {
        return 'The various parts that are essential to building a class are the constructor as well as the attributes and methods created by the class and passed to the instances.';
    }
}

const because = new WhyClass();
console.log(because.explain());
console.log(because.pieces());



/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife
on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the
following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel
free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each
creature should have 3 unique characteristics, and 2 unique actions that it can do. */


//your code here...

class AmazonAnimal {
    constructor(name, animalClass, color, diet, locomotion, language) {
        this.name = name;
        this.animalClass = animalClass;
        this.color = color;
        this.diet = diet;
        this.locomotion = locomotion;
        this.language = language;
    }

    eat() {
        return `I eat ${this.diet.join(' and ')}.`
    }

    getAround() {
        return `I get around by ${this.locomotion}ing.`
    }

    sayHi() {
        return `I say "hello" with a ${this.language}.`
    }
    
}

const amazonRiverDolphin = new AmazonAnimal('Amazon River Dolphin', 'mammal', 'pale pink', ['small fish', 'crabs', 'turtles'], 'swim', 'whistle');
const capybara = new AmazonAnimal('Capybara', 'mammal', 'brown', ['grass'], 'walk', 'bark');
const jaguar = new AmazonAnimal('Jaguar', 'mammal', 'spotted', ['fish', 'turtles', 'land mammals'], 'stalk', 'roar');
const hyacinthMacaw = new AmazonAnimal('Hyacinth Macaw', 'bird', 'blue', ['fruit', 'nuts'], 'fly', 'screech');
const kingVulture = new AmazonAnimal('King Vulture', 'bird', 'white', ['dead animals'], 'fly', 'grunt');
const greenAnaconda = new AmazonAnimal('Green Anaconda', 'reptile', 'green', ['wild pigs', 'deer', 'birds', 'turtles', 'capybara', 'caimans', 'jaguars'], 'slither', 'hiss')
console.log(amazonRiverDolphin.eat());
console.log(capybara.sayHi());
console.log(jaguar.getAround());
console.log(hyacinthMacaw.eat());
console.log(kingVulture.sayHi());
console.log(greenAnaconda.getAround());




/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to
     generate the object literals
*/


class Shape {
    //your code here...
    constructor(name, sides, length, width, radius) {
        this.name = name;
        this.sides = sides;
        this.base;
        this.height;
        this.length = length;
        this.width = width;
        this.radius = radius;
    }

    calcArea () {
        if (this.sides.length === 3) { //If the sides parameter has a length of 3, apply the triangle area formula
            this.base = this.sides[0];
            this.height = Math.sqrt(Math.pow(this.sides[1], 2) - Math.pow((this.base / 2), 2))
            console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
        }
        else if (this.radius === null) { // Else if it is not a circle (so has no radius), apply the rectangle area formula
            console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
        }
        else { // If object is not a triangle or rectangle, apply the circle area formula
            console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
        }
    }

    calcPerimeter () {
        
        if (this.sides.length === 3) { //If the sides parameter has a length of 3, apply the triangle perimeter formula
            this.base = this.sides[0]
            console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
        }
        else if (this.radius === null) { // Else if it is not a circle (so has no radius), apply the rectangle perimeter formula
            console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
        }
        else { // If object is not a triangle or rectangle, apply the circle circumference (or perimeter) formula
            console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
        }
    }
}

const newTriangle = new Shape('triangle', [4,7,7], null, null, null);
newTriangle.calcArea();
newTriangle.calcPerimeter();

const newRectangle = new Shape('rectangle', 4, 2, 5, null);
newRectangle.calcArea();
newRectangle.calcPerimeter();

const newCircle = new Shape('circle', 1, null, null, 5)
newCircle.calcArea();
newCircle.calcPerimeter();
//  End of student code


const triangle = {
    name : "triangle",
    sides : [4,7,7], //lengths of each side
    base : null,
    height : null, //determine this height using basic geometry.  You may need to research this one.
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    },
    calcPerimeter : function() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
    }
}

triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
    name : "rectangle",
    sides : 4,
    length : 2,
    width : 5,
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
    },
    calcPerimeter : function() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
    }
}

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
    name : "circle",
    sides : 1,
    radius : 5,
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
    },
    calcCircumference : function() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

console.log(circle);
circle.calcCircumference();
circle.calcArea();


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in
comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also,
as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it,
you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided
for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known
earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT
instantiating the class.

*/

class Earth {
    name;
    planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name,num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Earth('earth',3);
console.log(earth);




