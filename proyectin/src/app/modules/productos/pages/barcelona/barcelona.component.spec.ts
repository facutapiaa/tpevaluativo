import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcelonaComponent } from './barcelona.component';

describe('BarcelonaComponent', () => {
  let component: BarcelonaComponent;
  let fixture: ComponentFixture<BarcelonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarcelonaComponent]
    });
    fixture = TestBed.createComponent(BarcelonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
