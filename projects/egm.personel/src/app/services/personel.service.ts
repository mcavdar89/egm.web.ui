import { Injectable } from '@angular/core';
import { Personel } from '../models/personel.model';
import { BaseFormService } from '../core/services/base-form.service';
import { Observable } from 'rxjs';
import { ResultDto } from '../core/models/result-dto.model';

@Injectable({
  providedIn: 'root'
})
export class PersonelService extends BaseFormService<Personel> {

  constructor() { 
    super();
    this.saveUrl = 'personel/save';
    this.getUrl = 'personel/get';
  
  }

  getPersonelList(): Observable<ResultDto<Personel[]>> {
    return this.httpClient.get<ResultDto<Personel[]>>("api/OAS/getpersonellist");
  }

}
