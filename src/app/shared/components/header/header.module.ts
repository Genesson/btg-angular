import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './containers/header/header.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
