import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputControlComponent } from '../form-input-control/form-input-control.component';
import { BaseFormComponent } from '../base-form.component';
import { FormControlTemplate } from '../../models/form-control-template.model';

@Component({
  selector: 'dynamic-form',
  imports: [ReactiveFormsModule, FormsModule, FormInputControlComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {

  @Input() formControlTempalte: any[] = [];
  @Input() baseFormComponent?: BaseFormComponent<any>;

  constructor() {

  }
  ngOnInit(): void {
  }

  save() {
    this.baseFormComponent?.save();
  }

  setOnChangeValue(item: FormControlTemplate, event: any) {
    this.baseFormComponent?.inputCommandList.filter(x => x.key == item.key).forEach(x => x.command?.call(this, event));
  }


}
