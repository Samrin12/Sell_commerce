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
  listProducts: any[] = [];
  products: any[] = [];

  //sort and pagination
  displayedColumns: string[] = ['name', 'price', 'category', 'action'];
  dataSource = new MatTableDataSource<product>();

  constructor(private _liveAnnouncer: LiveAnnouncer, private route: Router, private productDetailService: ProductDetailService) {
    console.log(this.listProducts);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.getProd();
    // console.log(this.listProducts);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

  }

  // ngOnInit(): void {
  //   // this.products = this.productDetailService.getProducts();
  //   this.getProd();
  // }
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
  deleteProd(id: string) {
    this.productDetailService.deleteProduct(id).subscribe(Response => {

    })
  }

  private getProd() {
    this.productDetailService.getProducts().subscribe(prod => {
      this.products = prod;
      console.log()
      this.dataSource = new MatTableDataSource<product>(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
