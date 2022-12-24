import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
const materialComponents = [MatSlideToggleModule, MatTableModule];


@NgModule({

  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
