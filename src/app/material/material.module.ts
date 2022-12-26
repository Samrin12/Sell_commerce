import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon'
const materialComponents = [MatSlideToggleModule, MatTableModule, MatButtonModule, MatPaginatorModule, MatSortModule, MatIconModule];


@NgModule({

  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
