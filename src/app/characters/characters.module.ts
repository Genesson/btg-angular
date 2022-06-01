import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CardComponent } from './components/card/card.component';
import { CharactersDetailsComponent } from './containers/characters-details/characters-details.component';
import { CharactersComponent } from './containers/characters/characters.component';
import { CharactersRoutingModule } from './routers/characters-routing.module';
import { CharactersState } from './state/characters/characters.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature( [ CharactersState ] ),
    CharactersRoutingModule
  ],
  declarations: [CharactersComponent, CharactersDetailsComponent, CardComponent]
})
export class CharactersModule { }
