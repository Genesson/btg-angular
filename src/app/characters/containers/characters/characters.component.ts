import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from 'src/app/shared/models/character.model';

import { CharactersSandbox } from '../../characters.sandbox';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters$ = this.charactersSandbox.characters$;

  public isLoading$ = this.charactersSandbox.isLoading$;

  constructor(private charactersSandbox: CharactersSandbox, private router: Router) { }

  ngOnInit() {
    this.loadCharacters(0);
  }

  loadCharacters(offset: number) {
    this.charactersSandbox.getCharacters(offset);
  }

  onSelectCharacter(character: CharacterModel) {
    this.charactersSandbox.selectCharacter(character);
    this.router.navigateByUrl('/characters/details');
  }

}
