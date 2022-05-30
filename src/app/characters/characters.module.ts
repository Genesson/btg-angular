import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CharactersComponent } from './containers/characters/characters.component';
import { CharactersRoutingModule } from './routers/characters-routing.module';
import { CharactersState } from './state/characters/characters.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature( [ CharactersState ] ),
    CharactersRoutingModule
  ],
  declarations: [CharactersComponent]
})
export class CharactersModule { }
