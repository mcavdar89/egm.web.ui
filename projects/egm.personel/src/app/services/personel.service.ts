import { Injectable } from '@angular/core';
import { Personel } from '../models/personel.model';
import { BaseFormService } from '../core/services/base-form.service';

@Injectable({
  providedIn: 'root'
})
export class PersonelService extends BaseFormService<Personel> {

  constructor() { 
    super();
    this.saveUrl = 'personel/save';
    this.getUrl = 'personel/get';
  }
}
