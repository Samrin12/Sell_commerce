import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { product } from '../shared/product.model'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { ProductDetailService } from 'src/app/product-detail.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductDetailService]
})
export class ProductListComponent implements AfterViewInit {
  // public products: product[] = [];
  products: any = this.productDetailService.getProducts();

  //sort and pagination
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
    // this.products = this.productDetailService.getProducts();
    this.productDetailService.getProducts().subscribe((prod: string[]) => {
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
  goToForm() {
    this.route.navigate(['form']);
  }


}
