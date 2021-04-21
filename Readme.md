# Elevator System

Elevator control system built with JavaScript

## Table of contents

- [How to run this app](#how-to-run)
- [Overview](#overview)
  - [Features](#features)
  - [Known issues](#known-issues)
- [Possible improvements](#possible-improwements)

## How to run this application

To run this application open index.html file.
Simulation results will be visible on the page.

If you want to test a new scenario, please edit start.js file.

Alternatively, you can run the code with node.js at the terminal by typing:
node start.js
Note that you have to be in the script folder for it to run correctly.
Note that you have to uncomment some lines of code at the beginning and at the end of the files-> lines with modules import and export. These lines are marked with:

```js
// uncomment the line below if using node
```

## Overview

Elevator control system built with JavaScript.

### Features

- call an elevator from order floor to destination floor
- elevator system will find the nearest elevator
- order floor and destination floor will be added to the elevator queue
- elevator will calculate which way to move
- elevator will visit all floors from the queue and stop if the opposite direction queue is empty or move in the opposite direction
- after visiting all floors from the queue elevator will stop and wait for the next call

### Known issues

While traveling up or down the elevator blocks the application, so adding destination floors to the queue is possible only when the elevator is waiting for a call.

## Possible improvements

After solving the above issue I will be able to improve the elevator finding algorithm:

- if no waiting elevator is available call an elevator traveling to order floor and going in direction of the destination floor
- otherwise, call an elevator traveling to order floor and going in the opposite direction or traveling to the other floor

The next step will be a visualization of the simulation. Probably canvas for the start.
