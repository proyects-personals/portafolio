import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastSucessComponent } from './toast-sucess.component';

describe('ToastSucessComponent', () => {
  let component: ToastSucessComponent;
  let fixture: ComponentFixture<ToastSucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastSucessComponent]
    });
    fixture = TestBed.createComponent(ToastSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
