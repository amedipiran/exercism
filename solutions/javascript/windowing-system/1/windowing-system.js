// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/* Prototype */

// Task 1
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

// Task 2
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    let newWidth = newSize.width;
    let newHeight = newSize.height;

    // minimum size
    if (newWidth < 1) newWidth = 1;
    if (newHeight < 1) newHeight = 1;

    // maximum size depends on position
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    if (newWidth > maxWidth) newWidth = maxWidth;
    if (newHeight > maxHeight) newHeight = maxHeight;

    this.size = new Size(newWidth, newHeight);
  }

  move(newPosition) {
    let newX = newPosition.x;
    let newY = newPosition.y;

    // minimum position
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;

    // maximum position depends on current size
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    if (newX > maxX) newX = maxX;
    if (newY > maxY) newY = maxY;

    this.position = new Position(newX, newY);
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}