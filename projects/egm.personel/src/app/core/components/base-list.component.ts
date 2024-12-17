import { Component } from '@angular/core';
import { TableOption } from '../models/table-option';

@Component({
  imports: [],
  template: ``,
})
export class BaseListComponent<T> {

  tableOption: TableOption = new TableOption();

  constructor() {
  }

}