import { Component, OnInit } from '@angular/core';

import { CharactersSandbox } from '../../characters.sandbox';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  public selected$ = this.charactersSandbox.selected$;

  constructor(private charactersSandbox: CharactersSandbox) { }

  ngOnInit() {
  }

}
