import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersDetailsComponent } from '../containers/characters-details/characters-details.component';
import { CharactersComponent } from '../containers/characters/characters.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CharactersComponent },
  { path: 'details', component: CharactersDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
