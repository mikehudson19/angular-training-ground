import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterParentComponent } from './my-counter-parent.component';

describe('MyCounterParentComponent', () => {
  let component: MyCounterParentComponent;
  let fixture: ComponentFixture<MyCounterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCounterParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
