import { Component, OnInit } from '@angular/core';
import { JoystickServiceService } from '../JoystickService/joystick-service.service';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements OnInit {
  joystick: JoystickServiceService;

  constructor() {}

  ngOnInit() {
    this.joystick = new JoystickServiceService();
  }
}
