// uncomment the line below if using node
// const ElevatorSystem = require("./elevatorSystem.js");

// You can change number of floors and elevators here:
const numberOfFloors = 10;
const numberOfElevators = 3;
// YOU CAN EDIT ABOVE LINES

function test() {
  console.log("------------------ Running test ------------------");
  // Create elevator system:
  let elevator = new ElevatorSystem(numberOfFloors, numberOfElevators);

  // Call an elevator (startFloor, destinationFloor)
  // both floors must be less or equal than numberOfFloors
  // call elevator from 4th floor to 1st floor:
  elevator.callElevator(4, 1);

  elevator.callElevator(4, 1);
  elevator.callElevator(2, 3);
  elevator.callElevator(7, 9);
  elevator.callElevator(1, 6);
  elevator.callElevator(7, 10);
  elevator.callElevator(0, 3);
  // YOU CAN EDIT ABOVE LINES
}

function randomTest() {
  console.log("-------------- Running random test ---------------");
  // Create elevator system:
  let elevator = new ElevatorSystem(numberOfFloors, numberOfElevators);

  //create 10 random elevator calls
  for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
      elevator.callElevator(
        getRandomInt(0, numberOfFloors),
        getRandomInt(0, numberOfFloors)
      );
    }, getRandomInt(0, 4000));
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

// run tests
test();
randomTest();
// YOU CAN EDIT ABOVE LINES
