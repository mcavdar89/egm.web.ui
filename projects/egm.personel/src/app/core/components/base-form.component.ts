import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlTemplate } from '../models/form-control-template.model';

@Component({
  imports: [],
  template: ``,
})
export class BaseFormComponent {

  formGroup: FormGroup | undefined;
  formBuilder: FormBuilder;

  formControlTempalte: FormControlTemplate[] = [];

  constructor() {
    this.formGroup = undefined;
    this.formBuilder = inject(FormBuilder);
  }


  setFormGroup() {
    this.formGroup = undefined;
    
    let controlList: any = {};
    this.formControlTempalte.forEach((item) => {
      controlList[item.key] = new FormControl(item.value || null, this.getFormControlValidators(item));
    });

    this.formGroup = this.formBuilder.group(controlList);

  }


  getFormControlValidators(item: FormControlTemplate): any[] {
    let validators = [];

    if (item.required) {
      validators.push(Validators.required);
    }

    if (item.minLength) {
      validators.push(Validators.minLength(item.minLength));
    }

    if (item.maxLength) {
      validators.push(Validators.maxLength(item.maxLength));
    }

    if (item.isEposta) {
      validators.push(Validators.email);
    }

    return validators;

  }




}
