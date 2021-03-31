import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsererCreateComponent } from './userer-create.component';

describe('UsererCreateComponent', () => {
  let component: UsererCreateComponent;
  let fixture: ComponentFixture<UsererCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsererCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsererCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
