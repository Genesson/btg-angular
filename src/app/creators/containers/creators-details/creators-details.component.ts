import { Component, OnInit } from '@angular/core';

import { CreatorsSandbox } from '../../creators.sandbox';

@Component({
  selector: 'app-creators-details',
  templateUrl: './creators-details.component.html',
  styleUrls: ['./creators-details.component.scss']
})
export class CreatorsDetailsComponent implements OnInit {

  public selected$ = this.creatorsSandbox.selected$;

  constructor(private creatorsSandbox: CreatorsSandbox) { }

  ngOnInit() {
  }

}
