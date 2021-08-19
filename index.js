
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

//Just Some Personal Code 😋;
//Let Me log some text without repeating much stuff. 
//prefered: (String)
function cLog(text){
  console.log(text);
};
// VVVVVVV THIS IS JUT FOR TESTING THE FUNCTION ABOVE W/ ARRAYS^^^^^^^^^^
// const TestLogs = [
//   `Is this working?`,
//   'Working 1, 2, 3',
//   "can it be broken?",
//   'Let"s" See'
// ]

// consoleLog(TestLogs);
// ^^^^ END OF FUNCTION -- Sorry for the intrution.

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  // Constructor 
  //prefered:(String, Int);
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  };
  // Methods
  //Prefered: (String)
  eat(someFood){
    if (this.stomach.length < 10){
      this.stomach.push(someFood);
    };
  };
  poop(){
    this.stomach = [];
  };
  toString(){
    return `${this.name}, ${this.age}`;
  };
};

// Lets Create a New Person
const Human = new Person('Pengin', '10,2021');
// Lets See What the Person IS & CAN DO!
//<<Array to store and create string to display>>// <<---This is self-implemented Code not Original to the file
cLog(`Task 1 - PERSON`);
cLog(Human.toString() + ' years of age');
cLog(Human.stomach);
Human.eat('Burger');
Human.eat('Salad');
Human.eat('Soda');
Human.eat('Water');
cLog(Human.stomach);
Human.poop();
cLog(Human.stomach);
cLog(`------- END OF TASK 1 -------`);


/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  // Constructor
  // prefered: (String, Float)
  constructor(model, milesPerGallon){
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  };
  // Methods
  // prefered: (float)
  fill(gallons){
    this.tank += gallons;
  };
  //prefered: (float)
  drive(distance){
    const maxDistance = (this.tank * this.milesPerGallon); // Create Cars Current Max Distance to have a Variable Easier to compare to.
    if (distance > maxDistance){ //If we cant travel more than the distance given
      this.odometer += maxDistance; //We add our max distance to the odometer, To we at least traveled,
      this.tank = 0; // Set the tank to 0,
      return `I ran out of fuel at ${this.odometer} miles!`; //And leave our traveler stranded with no prior notice that their distance input was gonna put them in peril.
    } else { // If we do have gas tho
      this.odometer += distance; // We add the wanted distance to be traveled to the odometer
      this.tank -= (distance/this.milesPerGallon); //and remove our used (gas per mile / distance) and keep moving 
      return this.odometer;
    };
  };
};

// Lets Create a Few New Cars
const luxuryAuto = new Car('2021', 25);
const commonAuto = new Car('2010', 20);
const trashAuto = new Car('2000', 15);
// Lets See What the Car IS & CAN DO!
cLog(`Task 2 - CARS`);
cLog(`The ${luxuryAuto.model} Model Can drive ${luxuryAuto.milesPerGallon} Miles per Gallon!`);
cLog(`The ${commonAuto.model} Model Can drive ${commonAuto.milesPerGallon} Miles per Gallon!`);
cLog(`The ${trashAuto.model} Model Can drive ${trashAuto.milesPerGallon} Miles per Gallon!`);
luxuryAuto.fill(75);
commonAuto.fill(75);
trashAuto.fill(75);
cLog(`You filled ${luxuryAuto.model}'s Model's Tank to ${luxuryAuto.tank} MTD: ${luxuryAuto.tank * luxuryAuto.milesPerGallon}`);
cLog(`You filled ${commonAuto.model}'s Model's Tank to ${commonAuto.tank} MTD: ${commonAuto.tank * commonAuto.milesPerGallon}`);
cLog(`You filled ${trashAuto.model}'s Model's Tank to ${trashAuto.tank} MTD: ${trashAuto.tank * trashAuto.milesPerGallon}`);
console.log(luxuryAuto.drive(1600));
console.log(commonAuto.drive(1600));
console.log(trashAuto.drive(1600));
cLog(`------- END OF TASK 2 -------`);

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  // Constructor
  // prefered: (Object{Key:value} pairs)
  constructor(atrs){
    this.name = atrs.name;
    this.age = atrs.age;
    this.location = atrs.location;
  };
  // Methods
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  };
};

//What even is a Lambdasian
const newLambdasian = new Lambdasian({
  name: 'Pengin',
  age: '102021',
  location: 'NY'
});
cLog(`TASK 3 - LAMBDASIAN`)
// Let Them Speak
cLog(newLambdasian.speak());
cLog('------- END OF TASK 3 -------');

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian{
  //Constructor of Child usesu Super To call Constructor in Parent Class.
  // prefered: (Object{Key:value} pairs).
  constructor(atrs){
    super(atrs);
    this.specialty = atrs.specialty;
    this.favLanguage = atrs.favLanguage;
    this.catchPhrase = atrs.catchPhrase;
  };
  //Methods
  // prefered: (String)
  demo(subject){
    return `Today we are learning about ${subject}`;
  };
  //prefered: (Object w/ .name, String)
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  };
};

// you are not dealing with your average instructor anymore
const superInstructor = new Instructor({
  name: 'Vegeta',
  age: '200',
  location: 'Planet Vegeta',
  specialty: 'Saiyan Training',
  favLanguage: 'Combat',
  catchPhrase: 'I am THE PRINCE of ALL SAIYANS!'
});

//Lets see what he has to say to you
cLog(superInstructor);
cLog(superInstructor.demo('Becoming a Super Saiyan'));

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian {
  //Constructor of Child usesu Super To call Constructor in Parent Class.
  // prefered: (Object{Key:value} pairs).
  constructor(atrs){
    super(atrs);
    this.previousBackground = atrs.previousBackground;
    this.className = atrs.className;
    this.favSubjects = atrs.favSubjects;
  };
  // Methods
  // prefered: (array[Strings])
  listSubjects(){
    let endString = `Loving `; //Creating a string to add to
    for (let i = 0; i < this.favSubjects.length; i++){ //and add each item form the array intot he string as a string
      if( i === this.favSubjects.length - 1 ){
        endString += (this.favSubjects[i].toString() + '!');
      }else{
        endString += (this.favSubjects[i].toString() + ", ");
      }
    };
    return endString; //put that ! at the end please;
  };
  //prefered: (String)
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  };
  // prefered: (String)
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  };
};


//Lets See what Students we got
const trunks = new Student({
  name: 'Trunks',
  age: '15',
  location: 'West East City',
  previousBackground: 'Martial Artist Child Division Champion',
  className: 'SC101',
  favSubjects: [
    'combat',
    'flying',
    'Ki training'
  ]
});

const goten = new Student({
  name: 'Goten',
  age: '12',
  location: 'North West of West East City',
  previousBackground: 'Martial Artist Child Division Runner-Up',
  className: 'SC101',
  favSubjects: [
    'meditation',
    'flying',
    'racing'
  ]
});

cLog(trunks.listSubjects(trunks.favSubjects));

cLog(superInstructor.grade(trunks, 'Going Super Saiyan'));
cLog(superInstructor.grade(goten, 'Ki Control'));

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
  //Constructor of Child usesu Super To call Constructor in Parent Class.
  // prefered: (Object{Key:value} pairs).
   constructor(atrs){
     super(atrs);
     this.gradClassName = atrs.gradClassName;
     this.favInstructor = atrs.favInstructor;
   };
   // Methods
   // prefered: (String)
   standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times`;
   };
   // prefered: ({Object w/ .name} , String)
   debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
   };
}
/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/


//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}
