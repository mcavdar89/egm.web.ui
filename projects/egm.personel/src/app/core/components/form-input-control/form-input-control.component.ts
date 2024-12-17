import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../enums/input-type.enum';
import { FormControlTemplate } from '../../models/form-control-template.model';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';




@Component({
  selector: 'form-input-control',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    DropdownModule ,
    CalendarModule,
    CheckboxModule
  ],
  templateUrl: './form-input-control.component.html',
  styleUrl: './form-input-control.component.scss'
})
export class FormInputControlComponent {

  @Input() control?: FormControlTemplate;
  @Input() formGroup?: any;
  
  @Output() onChangeValue: EventEmitter<any> 

  constructor() {
    this.onChangeValue = new EventEmitter<any>();
  }

  InputType = InputType;

  setValuChanged(event: any) {
    this.onChangeValue.emit(event);
  }

}
