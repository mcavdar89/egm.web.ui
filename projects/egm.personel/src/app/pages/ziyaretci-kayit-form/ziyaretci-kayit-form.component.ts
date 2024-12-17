import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../core/components/base-form.component';
import { Ziyaretci } from '../../models/ziyaretci.model';
import { InputType } from '../../core/enums/input-type.enum';
import { DynamicFormComponent } from "../../core/components/dynamic-form/dynamic-form.component";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ziyaretci-kayit-form',
  imports: [DynamicFormComponent],
  templateUrl: './ziyaretci-kayit-form.component.html',
  styleUrl: './ziyaretci-kayit-form.component.scss'
})
export class ZiyaretciKayitFormComponent extends BaseFormComponent<Ziyaretci> implements OnInit {

  constructor() {
    super();
  }
  ngOnInit(): void {
    this.formControlTempalte = [
      { key: 'id', inputType: InputType.hidden },
      { key: 'ad', inputType: InputType.textbox, label: 'Ad', required: true, minLength: 2, maxLength: 50 },
      { key: 'soyad', inputType: InputType.textbox, label: 'Soyad', required: true, minLength: 2, maxLength: 50 },
      { key: 'tcKimlikNo', inputType: InputType.textbox, label: 'TC Kimlik No', required: true, minLength: 11, maxLength: 11 },
      { key: 'telefon', inputType: InputType.textbox, label: 'Telefon', required: true, minLength: 10, maxLength: 10 },
      { key: 'email', inputType: InputType.textbox, label: 'E-Posta', required: true, minLength: 5, maxLength: 50 },
      { key: 'adres', inputType: InputType.textbox, label: 'Adres', required: true, minLength: 5, maxLength: 250 },
      { key: 'ziyaretTarihi', inputType: InputType.date, label: 'Ziyaret Tarihi', required: true },
      { key: 'misafirVarMi', inputType: InputType.checkbox, label: 'Misafir Var Mı?' },
      {key:'misafirAd',show:false, inputType:InputType.textbox, label:'Misafir Ad', required:true, minLength:2, maxLength:50},
      {key:'misafirSoyad',show:false, inputType:InputType.textbox, label:'Misafir Soyad', required:true, minLength:2, maxLength:50}

    ];

    this.inputCommandList.push({ key: 'misafirVarMi', command: (event: any) => this.setMisafirVarMi(event) });


    this.setFormGroup();
  }

  setMisafirVarMi(event: any) {
    let controlMisafirAd = this.formControlTempalte.find(x => x.key == 'misafirAd')!;
    let controlMisafirSoyad = this.formControlTempalte.find(x => x.key == 'misafirSoyad')!;
    if (this.formGroup?.get('misafirVarMi')?.value[0]==true) {
      controlMisafirAd.show = true;
      controlMisafirSoyad.show = true;
    }
    else {
      controlMisafirAd.show = false;
      controlMisafirSoyad.show = false;
    }
  }

}
