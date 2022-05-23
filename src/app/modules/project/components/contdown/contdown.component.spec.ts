import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContdownComponent } from './contdown.component';

describe('ContdownComponent', () => {
  let component: ContdownComponent;
  let fixture: ComponentFixture<ContdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
