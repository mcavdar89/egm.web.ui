import { Component, inject, Input } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlTemplate } from '../models/form-control-template.model';
import { BaseFormService } from '../services/base-form.service';
import { InputControlCommand } from '../models/input-control-command';

@Component({
  imports: [],
  template: ``,
})
export class BaseFormComponent<T> {

  formGroup: FormGroup | undefined;
  formBuilder: FormBuilder;

  formControlTempalte: FormControlTemplate[] = [];

  service?:BaseFormService<T>

  inputCommandList : InputControlCommand[] = [];

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

  save() {
    console.log(this.formGroup?.value);
    this.service?.save(this.formGroup?.value).subscribe((data) => {

    });

  }




}
