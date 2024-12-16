import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';



@Component({
  selector: 'app-personel-form',
  imports: [ReactiveFormsModule,FormsModule, InputTextModule,DropdownModule ],
  templateUrl: './personel-form.component.html',
  styleUrl: './personel-form.component.scss'
})
export class PersonelFormComponent implements OnInit {

  frmPersonel: FormGroup;

  unvanList =[
    {ad:'Yönetici', id:1},
    {ad:'Müdür', id:2},
    {ad:'Uzman', id:3},
    {ad:'Personel', id:4}

  ]

  constructor(private fb:FormBuilder) {
    this.frmPersonel = this.fb.group(
      {
        id:'',
        ad: ['', [Validators.required]],
        soyad: ['', [Validators.required]],
        ePosta: ['', [Validators.required, Validators.email]],
        unvanId: ['', [Validators.required]],
        dogumTarihi: ['', [Validators.required]],
      }
    );
   }

  ngOnInit(): void {
  }



}
