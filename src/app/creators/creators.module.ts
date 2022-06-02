import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { LoadModule } from '../shared/components/load/load.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { CreatorCardComponent } from './components/creator-card/creator-card.component';
import { CreatorsDetailsComponent } from './containers/creators-details/creators-details.component';
import { CreatorsComponent } from './containers/creators/creators.component';
import { CreatorsRoutingModule } from './routers/creators-routing.module';
import { CreatorsState } from './state/creators/creators.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature( [ CreatorsState ] ),
    CreatorsRoutingModule,
    RouterModule,
    LoadModule,
    PaginationModule
  ],
  declarations: [CreatorsComponent, CreatorsDetailsComponent, CreatorCardComponent]
})
export class CreatorsModule { }
