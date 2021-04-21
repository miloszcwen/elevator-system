class ElevatorCar {
  constructor(id, numberOfFloors, initialFloor, elevatorStatus) {
    this.id = id;
    this.numberOfFloors = numberOfFloors;
    this.currentFloor = initialFloor;
    this.status = elevatorStatus;
    this.queueUp = [];
    this.queueDown = [];
  }

  addToQueue(orderFloor, destinationFloor) {
    if (this.currentFloor < orderFloor) {
      this.queueUp.push(orderFloor);
      this.queueUp.sort((a, b) => a - b);
    } else {
      this.queueDown.push(orderFloor);
      this.queueDown.sort((a, b) => b - a);
    }
    if (orderFloor > destinationFloor) {
      this.queueDown.push(destinationFloor);
      this.queueDown.sort((a, b) => b - a);
    }
    if (orderFloor < destinationFloor) {
      this.queueUp.push(destinationFloor);
      this.queueUp.sort((a, b) => a - b);
    }
    // console.log(`Elevator${this.id} queue up: ${this.queueUp}`);
    // console.log(`Elevator${this.id} queue down: ${this.queueDown}`);
    this.moveElevator(orderFloor);
  }

  removeFromQueueUp(requestedFloor) {
    this.queueUp = this.queueUp.filter((floor) => floor !== requestedFloor);
    console.log(`Elevator${this.id} has arrived to floor ${requestedFloor}`);
    // console.log(`Elevator${this.id} queue up: ${this.queueUp}`);
    // console.log(`Elevator${this.id} queue down: ${this.queueDown}`);
  }

  removeFromQueueDown(requestedFloor) {
    this.queueDown = this.queueDown.filter((floor) => floor !== requestedFloor);
    console.log(`Elevator${this.id} has arrived to floor ${requestedFloor}`);
    // console.log(`Elevator${this.id} queue up: ${this.queueUp}`);
    // console.log(`Elevator${this.id} queue down: ${this.queueDown}`);
  }

  moveElevator(requestedFloor) {
    console.log(
      `Move Elevator${this.id} from floor ${this.currentFloor} to floor ${requestedFloor}`
    );

    if (this.currentFloor < requestedFloor) {
      this.moveUp();
    } else {
      this.moveDown();
    }
  }

  moveUp() {
    this.status = "up";
    console.log(`Elevator${this.id} is going up`);

    while (this.currentFloor < this.queueUp[this.queueUp.length - 1]) {
      this.currentFloor++;
      if (this.queueUp.includes(this.currentFloor)) {
        this.removeFromQueueUp(this.currentFloor);
      }
    }
    if (this.queueUp.length === 0 && this.queueDown.length > 0) {
      this.moveDown();
    } else {
      this.status = "idle";
      console.log(
        `Elevator${this.id} is waiting for a call on floor ${this.currentFloor}`
      );
    }
  }

  moveDown() {
    this.status = "down";
    console.log(`Elevator${this.id} is going down`);

    while (this.currentFloor > this.queueDown[this.queueDown.length - 1]) {
      this.currentFloor--;
      if (this.queueDown.includes(this.currentFloor)) {
        this.removeFromQueueDown(this.currentFloor);
      }
    }
    if (this.queueDown.length === 0 && this.queueUp.length > 0) {
      this.moveUp();
    } else {
      this.status = "idle";
      console.log(
        `Elevator${this.id} is waiting for a call on floor ${this.currentFloor}`
      );
    }
  }
}

// uncomment the line below if using node
// module.exports = ElevatorCar;
