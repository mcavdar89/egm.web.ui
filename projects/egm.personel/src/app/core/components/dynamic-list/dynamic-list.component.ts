import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableOption } from '../../models/table-option';
import { TieredMenu, TieredMenuModule } from 'primeng/tieredmenu';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'dynamic-list',
  imports: [TableModule, CommonModule, TieredMenuModule],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.scss'
})
export class DynamicListComponent {

  @Input() tableOption?: TableOption;
  @Input() rowMenuItemList: MenuItem[] = [];



  setRowMenu(event: Event, pm: TieredMenu, rowData: any) {
    pm.toggle(event);
    event.preventDefault();

  }
}
