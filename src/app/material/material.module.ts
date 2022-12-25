import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
const materialComponents = [MatSlideToggleModule, MatTableModule, MatButtonModule];


@NgModule({

  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
