import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from '../../core/components/base-form.component';
import { InputType } from '../../core/enums/input-type.enum';
import { FormInputControlComponent } from '../../core/components/form-input-control/form-input-control.component';


@Component({
  selector: 'app-personel-form',
  imports: [ReactiveFormsModule,FormsModule,FormInputControlComponent],
  templateUrl: './personel-form.component.html',
  styleUrl: './personel-form.component.scss'
})
export class PersonelFormComponent extends BaseFormComponent implements OnInit {

  
  unvanList =[
    {ad:'Yönetici', id:1},
    {ad:'Müdür', id:2},
    {ad:'Uzman', id:3},
    {ad:'Personel', id:4}

  ]

  constructor() {
    super();
   }

  ngOnInit(): void {

    this.formControlTempalte =[
      {key:'id', inputType:InputType.hidden},
      {key:'ad', inputType:InputType.textbox, label:'Ad', required:true, minLength:2, maxLength:50},
      {key:'soyad', inputType:InputType.textbox, label:'Soyad', required:true, minLength:2, maxLength:50},
      {key:'unvanId', inputType:InputType.dropdown, label:'Ünvan', required:true, minLength:2, maxLength:50},
    ]

    this.setFormGroup();

  }


  save(){
    console.log(this.formGroup!.value);
  }

}
