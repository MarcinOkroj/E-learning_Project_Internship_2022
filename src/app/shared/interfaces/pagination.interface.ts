import { Sort } from '@angular/material/sort';
export interface PaginationInterface {
  pageNumber: number;
  pageSize: number;
  totalElementsCount: number;
  totalPages: number;
  sort: Sort;
}

export interface Pageable {
  page: number;
  size: number;
}
