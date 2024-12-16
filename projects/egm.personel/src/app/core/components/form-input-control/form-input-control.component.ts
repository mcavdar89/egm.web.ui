import { Component, Input } from '@angular/core';
import { InputType } from '../../enums/input-type.enum';
import { FormControlTemplate } from '../../models/form-control-template.model';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';



@Component({
  selector: 'form-input-control',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    DropdownModule ,
    CalendarModule
  ],
  templateUrl: './form-input-control.component.html',
  styleUrl: './form-input-control.component.scss'
})
export class FormInputControlComponent {

  @Input() control?: FormControlTemplate;
  @Input() formGroup?: any;
  



  InputType = InputType;

}
