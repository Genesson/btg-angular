import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CreatorModel } from './../../../shared/models/creator.model';

@Component({
  selector: 'app-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.scss']
})
export class CreatorCardComponent implements OnInit {

  @Input() creator: CreatorModel;

  @Output() selectCreator = new EventEmitter<CreatorModel>();

  constructor() { }

  ngOnInit() {
  }

}
