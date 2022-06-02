import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComicsDetailsComponent } from '../containers/comics-details/comics-details.component';
import { ComicsComponent } from '../containers/comics/comics.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ComicsComponent },
  { path: 'details', component: ComicsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
