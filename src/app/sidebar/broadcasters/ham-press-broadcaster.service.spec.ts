/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HamPressBroadcasterService } from './ham-press-broadcaster.service';

describe('HamPressBroadcasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HamPressBroadcasterService]
    });
  });

  it('should ...', inject([HamPressBroadcasterService], (service: HamPressBroadcasterService) => {
    expect(service).toBeTruthy();
  }));
});
