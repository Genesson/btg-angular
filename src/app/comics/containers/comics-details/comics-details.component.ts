import { Component, OnInit } from '@angular/core';

import { ComicsSandbox } from '../../comics.sandbox';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.scss']
})
export class ComicsDetailsComponent implements OnInit {

  public selected$ = this.comicsSandbox.selected$;

  constructor(private comicsSandbox: ComicsSandbox) { }

  ngOnInit() {
  }

}
