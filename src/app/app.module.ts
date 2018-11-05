import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoystickComponent } from './joystick/joystick.component';
import { MqttControllerComponent } from './mqtt-controller/mqtt-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    JoystickComponent,
    MqttControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
