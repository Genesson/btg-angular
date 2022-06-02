import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatorsDetailsComponent } from '../containers/creators-details/creators-details.component';
import { CreatorsComponent } from '../containers/creators/creators.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CreatorsComponent },
  { path: 'details', component: CreatorsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorsRoutingModule {}
