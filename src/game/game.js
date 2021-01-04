'use strict';

const resizeCanvas = require('../util/resizeCanvas');
const Path = require('./path');
const Camera = require('./camera');
const State = require('./state');
const { BACKGROUND_COLOR } = require('../util/constants');
const enemy = require('./enemy/all');
const currentTick = require('../util/currentTick');

module.exports = class Game {
   constructor() {
      this.wave = 0;
      this.towers = [];
      this.fov = 0.1;
      this.camera = new Camera();
      this.path = require('./path.json');
      this.pathObject = new Path(this.path);
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.state = new State();
      this.state.enemy.push(new enemy.Basic(this.path));
      this.tick = 0;
      this.startTime = window.performance.now();
      resizeCanvas(this.canvas);
      this.listen('resize', () => resizeCanvas(this.canvas));
      document.body.appendChild(this.canvas);
   }
   listen(type, func) {
      window.addEventListener(type, func.bind(this));
   }
   stop() {
      if (this.afr) {
         window.cancelAnimationFrame(this.afr);
      }
   }
   start() {
      (function run() {
         this.update();
         this.render();
         this.afr = requestAnimationFrame(run.bind(this));
      }.bind(this)());
   }
   render() {
      this.ctx.fillStyle = BACKGROUND_COLOR;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.pathObject.render(this.ctx, this.camera);
      this.state.render(this.ctx, this.camera);
   }
   simulate() {
      this.state.simulate();
   }
   update() {
      const expectedTick = currentTick(this.startTime);
      while (this.tick < expectedTick) {
         this.simulate();
         this.tick++;
      }
   }
};