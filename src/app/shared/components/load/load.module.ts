import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadComponent } from './containers/load/load.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadComponent],
  exports: [LoadComponent]
})
export class LoadModule { }
