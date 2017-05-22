"use strict";
import {Shape} from './shape.js';
import * as d3 from "d3";

export class Circle extends Shape{
  constructor (width, height) {
    super();
    if(width) this.width = width;
    if(height) this.height = height;
  }
  render(){
    var svg =  d3.select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    svg.attr("width", this.width)
    .attr("height", this.height);

    svg.append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 40)
      .attr("cx", 50)
      .attr("cy", 50);

      let squared = 3 ** 2;
      console.log('squared ', squared);

    this.svg = svg.node();
    return this.svg;
  }
  update(){}
  resize(){}
}
