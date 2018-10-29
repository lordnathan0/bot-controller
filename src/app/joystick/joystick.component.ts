import { Component, OnInit } from '@angular/core';
import nipplejs from 'nipplejs';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements OnInit {
  manager;
  nipple;
  joystick;
  size = 100;

  constructor() {
    this.joystick = {
      x: 0,
      y: 0,
      dist: 0,
      rad: 0,
      mag: 0
    };
  }

  ngOnInit() {
    const options = {
      zone: document.getElementById('zone_joystick'),
      mode: 'static',
      position: { left: '50%', bottom: '200px' },
      color: 'blue',
      size: this.size
    };
    this.manager = nipplejs.create(options);
    this.nipple = this.manager.get(0);
    this.nipple.on('move', this.onMove.bind(this));
    this.nipple.on('end', this.onEnd.bind(this));
  }

  onMove(evt, data) {
    this.joystick.dist = data.distance;
    this.joystick.mag = this.joystick.dist / (this.size / 2);
    this.joystick.rad = data.angle.radian;
    this.joystick.x = this.joystick.mag * Math.sin(this.joystick.rad);
    this.joystick.y = this.joystick.mag * Math.cos(this.joystick.rad);
  }

  onEnd(evt, data) {
    this.joystick.x = 0;
    this.joystick.y = 0;
    this.joystick.dist = 0;
    this.joystick.rad = 0;
    this.joystick.mag = 0;
  }
}
