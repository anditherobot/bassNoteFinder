import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BassComponent } from './bass.component';

describe('BassComponent', () => {
  let component: BassComponent;
  let fixture: ComponentFixture<BassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
