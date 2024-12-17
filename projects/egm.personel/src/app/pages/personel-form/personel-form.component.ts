import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from '../../core/components/base-form.component';
import { InputType } from '../../core/enums/input-type.enum';
import { FormInputControlComponent } from '../../core/components/form-input-control/form-input-control.component';
import { DynamicFormComponent } from '../../core/components/dynamic-form/dynamic-form.component';
import { Personel } from '../../models/personel.model';
import { PersonelService } from '../../services/personel.service';


@Component({
  selector: 'app-personel-form',
  imports: [DynamicFormComponent],
  templateUrl: './personel-form.component.html',
  styleUrl: './personel-form.component.scss'
})
export class PersonelFormComponent extends BaseFormComponent<Personel> implements OnInit {

  
  unvanList =[
    {ad:'Yönetici', id:1},
    {ad:'Müdür', id:2},
    {ad:'Uzman', id:3},
    {ad:'Personel', id:4}

  ]

  constructor() {
    //base constructure çağırmak için super() metodu kullanılır.
    super();

    this.service = inject(PersonelService);
   }

  ngOnInit(): void {

    this.formControlTempalte =[
      {key:'id', inputType:InputType.hidden},
      {key:'ad', inputType:InputType.textbox, label:'Ad', required:true, minLength:2, maxLength:50},
      {key:'soyad', inputType:InputType.textbox, label:'Soyad', required:true, minLength:2, maxLength:50},
      {key:'unvanId', inputType:InputType.dropdown, label:'Ünvan', required:true},
      {key:'dogumTarihi', inputType:InputType.date, label:'Doğum Tarihi', required:true},
    ]

    this.setFormGroup();

  }


  // override save(){
  //   console.log(this.formGroup!.value);
  // }

}
