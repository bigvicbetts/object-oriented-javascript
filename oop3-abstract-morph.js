
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this
   class from being instantiated with an instance.  In the Creature class, include two abstract
   methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class,
   so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract
Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also,
each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

    class Creature {
        //your code here...
        constructor() {
            if (this.constructor === Creature) {
                throw new Error('Abstract class "Creature" cannot be instantiated directly.');
            }
        }

        move() {
            throw new Error('"move" is an abstract method.  It cannot be implemented.');
        }

        act() {
            throw new Error('"act" is an abstract method.  It cannot be implemented.');
        }

    }

    class Human extends Creature {
        //your code here...
        constructor(name, favoriteActor) {
            super()
            this.name = name;
            this.favoriteActor = favoriteActor;
        }

        move() {
            console.log(`I am ${this.name} and I am walking on two feet.`);
        }

        act() {
            console.log(`I am acting just like ${this.favoriteActor}`);
        }

        party() {
            console.log('I am PARTYING like it 1999!!!');
        }
    }

    const victor = new Human('Victor', 'Morgan Freeman');
    victor.move();
    victor.act();
    victor.party();

    class Fish extends Creature {
        constructor(commonName, habitat) {
            super()
            this.commonName = commonName;
            this.habitat = habitat;
        }

        move() {
            console.log(`I am a ${this.commonName} and I LOVE swimming through the ${this.habitat}.`);
        }

        act() {
            console.log('I CAN act.  Perhaps you\'ve seen my movie.');
        }

        hide() {
            console.log('OH NO!!!  I see a predator!!  I\'ll squeeze into this tiny crevice.');
        }
    }

    const clownFish = new Fish('clown fish', 'coral reefs of Australia');
    clownFish.move();
    clownFish.act();
    clownFish.hide();

    class Dinosaur extends Creature {
        constructor(carnivore, speed) {
            super()
            this.carnivore = carnivore;
            this.speed = speed;
        }

        move() {
            console.log(`I can run at speeds up to ${this.speed} MPH.`);
        }

        act() {
            console.log('I used to be able to act...before the meteors *sad face*');
        }

        eat() {
            if (!this.carnivore) {
                console.log('Mmmm.  This grass and these leaves look SCRUMPTEOUS!');
            }
            else {
                console.log('Them silly plant-munchers better watch out, \'cause I\'m STARVING!!');
            }
        }
    }

    const tRex = new Dinosaur(true, 17);
    tRex.move();
    tRex.act();
    tRex.eat();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully
   fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it
   will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }

    code() {
        console.log(this.name + " is coding");
    }

    repeat() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct
        //functions to work, and the reasoning behind what you did.
        console.log("The methods on the parent that were not overridden by the object were each in the parent's field (as opposed to the prototype).  I simply converted them to be in the prototype rather than a field.  This way they are only triggered if there is not an overriding method on the child object.");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the 
    //Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " loves to teach before eating");
    }

    sleep() {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat() {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {
    //set up your methods in this student class, so all of these methods will override the methods from
    //the super class.
    constructor(name) {
        super(name);
        this.name = name;
    }
    
    //eat method should print out - <stduent name> studies, then eats
    eat() {
        console.log(`${this.name} studies, then eats.`);
    }

    //sleep method should print out, <student name> studies coding so much, that they dream about it in
    //their sleep
    sleep() {
        console.log(`${this.name} studies coding so much, that they dream about it in their sleep.`);
    }

    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now
    //has become a coding guru!
    code() {
        console.log(`${this.name} was first overwhelmed by coding, but they kept at it, and now has become a coding guru!`);
    }

    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and
    //puts it all on repeat.  
    repeat() {
        console.log(`${this.name} keeps studying, coding, eating, and sleeping, and puts it all on repeat.`);
    }

}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare = function(food1,food2,food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }

    prepare() {
        console.log('The cook is cooking');
    }

    explain = () => {
        console.log("Initially the second line of code was assigned to the object itself and the first line was assigned to the prototype.  I simply swapped them so that the desired line of code would be a field on the object and, therefore, called first.");
    }

}

const cook = new Cook();

cook.prepare("turkey","salami","pizza");

cook.explain();

