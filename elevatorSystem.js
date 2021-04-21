// uncomment line below if using node
// const ElevatorCar = require("./elevatorCar.js");

class ElevatorSystem {
  constructor(numberOfFloors, numberOfElevators) {
    this.numberOfFloors = numberOfFloors;
    this.numberOfElevators = numberOfElevators;
    this.elevatorsList = [];

    this.createElevatorsList();
  }

  createElevatorsList() {
    console.log("------------ Creating elevator system ------------");

    for (let i = 1; i <= this.numberOfElevators; i++) {
      this.elevatorsList.push(
        new ElevatorCar(i, this.numberOfFloors, 0, "idle")
      );
    }
    console.log(this.elevatorsList);
  }

  callElevator(orderFloor, destinationFloor) {
    // which elevator to call
    // closest idle elevator
    // todo: elevator traveling to this floor and going in this direction
    // direction = orderFloor-destinationFloor
    // todo: other (traveling to this floor and going in opposite direction or traveling to other floor)
    const idleElevators = this.elevatorsList.filter(
      (elevator) => elevator.status === "idle"
    );
    const distance = (elevator) => Math.abs(elevator.currentFloor - orderFloor);
    let closestIdleElevator = undefined;
    let bestDistance = this.numberOfFloors;
    idleElevators.forEach((elevator) => {
      if (distance(elevator) < bestDistance) {
        closestIdleElevator = elevator;
        bestDistance = distance(elevator);
      }
    });
    console.log("--------------------------------------------------");
    console.log(
      `Calling Elevator${closestIdleElevator.id} from floor ${orderFloor} to floor ${destinationFloor}`
    );
    closestIdleElevator.addToQueue(orderFloor, destinationFloor);
  }
}

// uncomment line below if using node
// module.exports = ElevatorSystem;
