import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingtwoComponent } from './bindingtwo.component';

describe('BindingtwoComponent', () => {
  let component: BindingtwoComponent;
  let fixture: ComponentFixture<BindingtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
