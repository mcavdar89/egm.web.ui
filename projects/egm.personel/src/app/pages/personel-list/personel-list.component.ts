import { Component, inject } from '@angular/core';
import { PersonelService } from '../../services/personel.service';
import { Personel } from '../../models/personel.model';
import { DynamicListComponent } from "../../core/components/dynamic-list/dynamic-list.component";
import { BaseListComponent } from '../../core/components/base-list.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-personel-list',
  imports: [DynamicListComponent],
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent extends BaseListComponent<Personel> {

  service: PersonelService;
  personelList: Personel[] = [];
  rowMenuItemList: MenuItem[] | undefined;
  constructor() {
    super();
    this.service = inject(PersonelService);
  }

  ngOnInit(): void {

    this.rowMenuItemList=[
      {label:'Düzenle', icon:'pi pi-pencil', command:(event)=>{this.edit(event)}},
      {label:'Sil', icon:'pi pi-trash', command:(event)=>{this.delete(event)}}
    ]
    this.tableOption.columns = [
      { field: 'ad', header: 'Ad' },
      { field: 'soyad', header: 'Soyad' },
      { field: 'unvanAd', header: 'Ünvan' },
      { field: 'birimAd', header: 'Birim' },
    ]
    this.service.getPersonelList().subscribe(resp => {
      this.personelList = resp.data;
      this.tableOption.data = this.personelList;
    });
  }

  edit(item: any) {
    console.log("edit", item);
  }
  delete(item: any) {
    console.log("delete");
  }


}
