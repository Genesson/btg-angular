import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SocialComponent } from './components/social/social.component';
import { FooterComponent } from './containers/footer/footer.component';

@NgModule({
  declarations: [FooterComponent, SocialComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
