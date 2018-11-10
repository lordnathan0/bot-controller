import { Injectable } from '@angular/core';
import nipplejs from 'nipplejs';

@Injectable({
  providedIn: 'root'
})
export class JoystickServiceService {
  manager;
  nipple;
  x = 0;
  y = 0;
  dist = 0;
  rad = 0;
  mag = 0;
  private options;

  constructor(
    id: string = 'zone_joystick',
    size: number = 200,
    left: string = '50%',
    bottom: string = '200px',
    color: string = 'blue'
  ) {
    this.options = {
      zone: document.getElementById(id),
      mode: 'static',
      position: { left: left, bottom: bottom },
      color: color,
      size: size
    };
    this.manager = nipplejs.create(this.options);
    this.nipple = this.manager.get(0);
    this.nipple.on('move', this.onMove.bind(this));
    this.nipple.on('end', this.onEnd.bind(this));
  }

  onMove(evt, data) {
    this.dist = data.distance;
    this.mag = this.dist / (this.options.size / 2);
    this.rad = data.angle.radian;
    this.x = this.mag * Math.sin(this.rad);
    this.y = this.mag * Math.cos(this.rad);
  }

  onEnd(evt, data) {
    this.x = 0;
    this.y = 0;
    this.dist = 0;
    this.rad = 0;
    this.mag = 0;
  }
}
