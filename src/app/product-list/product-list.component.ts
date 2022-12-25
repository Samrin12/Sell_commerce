import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { product } from '../shared/product.model'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  displayedColumns: string[] = ['no', 'name', 'price', 'category'];
  dataSource = new MatTableDataSource<product>(products);
  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
const products: product[] = [
  { no: 2, name: 'Cabbage', price: '30 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p1.png' },
  { no: 3, name: 'broccoli', price: '40 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 5, name: 'Cabbage', price: '30 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p1.png' },
  { no: 4, name: 'carrot', price: '70 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 7, name: 'broccoli', price: '40 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 6, name: 'Cabbage', price: '30 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p1.png' },
  { no: 8, name: 'carrot', price: '70 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 9, name: 'Cabbage', price: '30 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p1.png' },
  { no: 1, name: 'carrot', price: '70 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 14, name: 'broccoli', price: '40 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 10, name: 'carrot', price: '70 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 12, name: 'broccoli', price: '40 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 13, name: 'carrot', price: '70 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 11, name: 'broccoli', price: '40 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
  { no: 15, name: 'carrot', price: '70 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p3.png' },
];
