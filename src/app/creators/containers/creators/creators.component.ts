import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatorModel } from 'src/app/shared/models/creator.model';

import { CreatorsSandbox } from '../../creators.sandbox';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  public creators$ = this.creatorsSandbox.creators$;

  public isLoading$ = this.creatorsSandbox.isLoading$;

  constructor(private creatorsSandbox: CreatorsSandbox, private router: Router) { }

  ngOnInit() {
    this.loadCreators(0);
  }

  loadCreators(offset: number) {
    this.creatorsSandbox.getCreators(offset);
  }

  onSelectCreator(creator: CreatorModel) {
    this.creatorsSandbox.selectCreator(creator);
    this.router.navigateByUrl('/creator/details');
  }

}
