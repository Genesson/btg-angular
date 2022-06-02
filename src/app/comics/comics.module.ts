import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { LoadModule } from '../shared/components/load/load.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicsDetailsComponent } from './containers/comics-details/comics-details.component';
import { ComicsComponent } from './containers/comics/comics.component';
import { ComicsRoutingModule } from './routers/comics-routing.module';
import { ComicsState } from './state/comics/comics.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature( [ ComicsState ] ),
    ComicsRoutingModule,
    RouterModule,
    LoadModule,
    PaginationModule
  ],
  declarations: [ComicsComponent, ComicsDetailsComponent, ComicCardComponent]
})
export class ComicsModule { }
