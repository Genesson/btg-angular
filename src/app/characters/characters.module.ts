import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { LoadModule } from '../shared/components/load/load.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharactersDetailsComponent } from './containers/characters-details/characters-details.component';
import { CharactersComponent } from './containers/characters/characters.component';
import { CharactersRoutingModule } from './routers/characters-routing.module';
import { CharactersState } from './state/characters/characters.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature( [ CharactersState ] ),
    CharactersRoutingModule,
    RouterModule,
    LoadModule,
    PaginationModule
  ],
  declarations: [CharactersComponent, CharactersDetailsComponent, CharacterCardComponent]
})
export class CharactersModule { }
