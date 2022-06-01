import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../containers/main/main.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      {
        path: '', redirectTo: 'characters', pathMatch: 'full'
      },
      {
        path: 'characters',
        loadChildren: () => import('../../characters/characters.module').then(m => m.CharactersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
