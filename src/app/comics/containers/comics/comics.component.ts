import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicModel } from 'src/app/shared/models/comic.model';

import { ComicsSandbox } from '../../comics.sandbox';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  public comics$ = this.comicsSandbox.comics$;

  public isLoading$ = this.comicsSandbox.isLoading$;

  constructor(private comicsSandbox: ComicsSandbox, private router: Router) { }

  ngOnInit() {
    this.loadComics(0);
  }

  loadComics(offset: number) {
    this.comicsSandbox.getComics(offset);
  }

  onSelectComic(comic: ComicModel) {
    this.comicsSandbox.selectComic(comic);
    this.router.navigateByUrl('/comic/details');
  }

}
