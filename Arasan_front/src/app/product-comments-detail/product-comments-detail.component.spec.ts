import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCommentsDetailComponent } from './product-comments-detail.component';

describe('ProductCommentsDetailComponent', () => {
  let component: ProductCommentsDetailComponent;
  let fixture: ComponentFixture<ProductCommentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCommentsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
