import { fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataSharingExampleComponent', () => {
  let component: DataService;
  let fixture: ComponentFixture<DataService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DataService ]
    }).compileComponents;
  });
  
  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('should create', () => {
    expect(DataService).toBeTruthy();
  });
});
