import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComicModel } from './../../../shared/models/comic.model';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {

  @Input() comic: ComicModel;

  @Output() selectComic = new EventEmitter<ComicModel>();

  constructor() { }

  ngOnInit() {
  }

}
