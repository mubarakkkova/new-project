import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIdComponent } from './category-id.component';

describe('CategoryIdComponent', () => {
  let component: CategoryIdComponent;
  let fixture: ComponentFixture<CategoryIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
