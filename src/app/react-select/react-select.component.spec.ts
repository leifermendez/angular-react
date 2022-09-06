import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactSelectComponent } from './react-select.component';

describe('ReactSelectComponent', () => {
  let component: ReactSelectComponent;
  let fixture: ComponentFixture<ReactSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
