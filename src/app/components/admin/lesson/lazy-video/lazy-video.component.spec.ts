import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyVideoComponent } from './lazy-video.component';

describe('LazyVideoComponent', () => {
  let component: LazyVideoComponent;
  let fixture: ComponentFixture<LazyVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
