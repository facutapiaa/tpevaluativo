import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BocaComponent } from './boca.component';

describe('BocaComponent', () => {
  let component: BocaComponent;
  let fixture: ComponentFixture<BocaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BocaComponent]
    });
    fixture = TestBed.createComponent(BocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
