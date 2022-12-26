import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { product } from '../shared/product.model'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { ProductDetailService } from 'src/app/product-detail.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductDetailService]
})
export class CartComponent {
  public products: product[] = [];
  displayedColumns: string[] = ['no', 'name', 'price', 'category', 'action'];
  dataSource = new MatTableDataSource<product>(this.products);

  constructor(private _liveAnnouncer: LiveAnnouncer, private route: Router, private productDetailService: ProductDetailService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ngOnInit(): void {
    this.productDetailService.getProducts().subscribe(prod => {
      this.products = prod;
    })
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
