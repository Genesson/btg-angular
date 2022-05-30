import { Component, OnInit } from '@angular/core';

import { CharactersSandbox } from '../../characters.sandbox';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private charactersSandbox: CharactersSandbox) { }

  ngOnInit() {
  }

}
