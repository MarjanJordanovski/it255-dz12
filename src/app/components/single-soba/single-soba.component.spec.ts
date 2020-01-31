import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSobaComponent } from './single-soba.component';

describe('SingleSobaComponent', () => {
  let component: SingleSobaComponent;
  let fixture: ComponentFixture<SingleSobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
