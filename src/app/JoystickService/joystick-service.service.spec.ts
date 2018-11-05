import { TestBed } from '@angular/core/testing';

import { JoystickServiceService } from './joystick-service.service';

describe('JoystickServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoystickServiceService = TestBed.get(JoystickServiceService);
    expect(service).toBeTruthy();
  });
});
