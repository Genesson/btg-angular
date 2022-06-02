import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() isLoading: boolean;

  @Output() clickPagination = new EventEmitter<number>();

  private page: number = 1;

  private itemsPerPage: number = 20;

  constructor() { }

  ngOnInit() {
  }

  onClickPagination(pagination: string) {
    this.page = (pagination == 'Next') ? this.page + 1 : this.page - 1;
    if (this.page <= 0) return;
    const offset = (this.page * this.itemsPerPage) - this.itemsPerPage;

    this.clickPagination.emit(offset);
  }

}
