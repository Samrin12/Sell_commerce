import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardListComponent } from './product-card-list.component';

describe('ProductCardComponent', () => {
  let component: ProductCardListComponent;
  let fixture: ComponentFixture<ProductCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
