import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../containers/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: '', redirectTo: 'characters', pathMatch: 'full'
      },
      {
        path: 'characters',
        loadChildren: () => import('../../characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: 'comics',
        loadChildren: () => import('../../comics/comics.module').then(m => m.ComicsModule)
      },
      {
        path: 'creators',
        loadChildren: () => import('../../creators/creators.module').then(m => m.CreatorsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
