import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { BackgroundComponent } from './components/background/background.component';
import { MainComponent } from './containers/main/main.component';
import { MainRoutingModule } from './routers/main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [MainComponent, BackgroundComponent]
})
export class MainModule { }
