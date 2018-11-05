import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttControllerComponent } from './mqtt-controller.component';

describe('MqttControllerComponent', () => {
  let component: MqttControllerComponent;
  let fixture: ComponentFixture<MqttControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqttControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqttControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
