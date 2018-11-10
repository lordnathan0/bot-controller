import { Component, OnInit, NgModule } from '@angular/core';
import { JoystickServiceService } from '../JoystickService/joystick-service.service';
import { timer, Observable, Subscription, fromEventPattern } from 'rxjs';
import {
  IMqttMessage,
  MqttService,
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.0.200',
  port: 9001,
  protocol: 'ws'
};

const intervalDelay = 250;

@Component({
  selector: 'app-mqtt-controller',
  templateUrl: './mqtt-controller.component.html',
  styleUrls: ['./mqtt-controller.component.css']
})
export class MqttControllerComponent implements OnInit {
  private cmdTimer: Observable<any>;
  private cmdTimerSub: Subscription;
  private mqttClient: MqttService;
  joystick: JoystickServiceService;
  constructor() {}

  ngOnInit() {
    this.joystick = new JoystickServiceService();
    this.cmdTimer = timer(0, intervalDelay);
    this.cmdTimerSub = this.cmdTimer.subscribe(this.cmdSend.bind(this));
    this.mqttClient = new MqttService(MQTT_SERVICE_OPTIONS);
  }
  OnDestroy() {
    this.cmdTimerSub.unsubscribe();
    this.mqttClient.disconnect();
  }

  cmdSend() {
    const msg: String =
      'x = ' +
      this.joystick.x.toString() +
      ' y = ' +
      this.joystick.y.toString();

    this.mqttClient
      .publish('controller/x', this.joystick.x.toString())
      .subscribe();
    this.mqttClient
      .publish('controller/y', this.joystick.y.toString())
      .subscribe();
  }
}
