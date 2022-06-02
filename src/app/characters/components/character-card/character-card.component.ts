import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CharacterModel } from './../../../shared/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: CharacterModel;

  @Output() selectCharacter = new EventEmitter<CharacterModel>();

  constructor() { }

  ngOnInit() {
  }

}
