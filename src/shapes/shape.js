"use strict";

export class Shape{
  constructor () {
    this.svg = null;
    this.width = 200;
    this.height = 200;
  }
  render(){}
  update(){}
  resize(){}
  print(id){
    let element = document.getElementById(id);
    element && element.appendChild(this.svg.node());
  }

  get area(){}
  get circumference(){}
}
