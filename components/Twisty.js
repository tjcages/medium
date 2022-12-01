import React, { useEffect } from "react";

const Twisty = () => {
  let canvas;
  let ctx;
  let w, h;
  let angleOffset;
  let r;
  let nrOfSquares;

  useEffect(() => {
    setup();
    draw(1);
  });

  function setup() {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", () => {
      resize();
    });
  }

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    ctx.lineWidth = 1;
  }

  function draw(now) {
    requestAnimationFrame(draw);
    ctx.fillStyle = "#242424";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "white";
    angleOffset = now / 1000;
    let width = Math.min(w, h) * 0.9;
    r = width * 0.01;
    nrOfSquares = 64;
    square(0, h / 3, width, width, nrOfSquares);
  }

  function square(x, y, width, height, level) {
    if (level <= 0) {
      return;
    }
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.rect(-width / 2, -height / 2, width, height);
    ctx.stroke();
    ctx.clip();

    let angle = (Math.PI * 2 * level) / nrOfSquares + angleOffset;
    let x1 = Math.cos(angle) * r;
    let y1 = Math.sin(angle) * r;
    square(x1, y1, width * 0.97, height * 0.97, level - 1);
    ctx.restore();
  }

  return <canvas id="canvas" />;
};

export default Twisty;
