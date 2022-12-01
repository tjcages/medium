import React from "react";
import Sketch from "react-p5";

export default function DrawSketch() {
  const setup = (p5, canvasParentRef) => {
    let wHeight = window.innerHeight - margin;
    let wWidth = wHeight * res;
    p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
  };
  var res = 70.0 / 50.0;
  var margin = 0.0;

  // Function to draw the wave
  const draw = (p5) => {
    p5.background(36, 36, 36);
    var res = 15;
    var gridWidth = p5.width / res;
    var gridHeight = p5.height / res;

    for (var i = 0; i < gridWidth; i++) {
      for (var j = 0; j < gridHeight; j++) {
        var x = i * res;
        var y = j * res;
        var noi = p5.noise(
          i * 0.2,
          j * 0.1 + p5.millis() * 0.0001,
          p5.millis() * 0.001
        );
        var angle = noi * p5.TWO_PI;

        if (noi > 0.5) {
          var newnoi = p5.map(noi, 0.5, 1.0, 0.1, 1.0);
          p5.stroke(255 * newnoi, 255 * newnoi, 255 * newnoi);
          p5.strokeWeight(5.0 * newnoi);
          p5.push();
          p5.translate(x, y);
          p5.rotate(angle);
          p5.line(0, -res * 0.5 * noi, 0, res * 0.5 * noi);
          p5.pop();
        } else {
          var rectnoi = p5.map(noi, 0, 0.5, 0, 1.0);
          p5.strokeWeight(1);
          p5.noFill();
          //stroke(40);
          p5.fill(255 * noi, 255 * noi, 255 * noi);
          p5.noStroke();
          p5.rectMode(p5.CENTER);
          p5.rect(x, y, res * rectnoi, res * rectnoi);
        }
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
