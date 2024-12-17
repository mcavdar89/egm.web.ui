import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultDto } from '../models/result-dto.model';


export abstract class BaseFormService<T> {

  httpClient: HttpClient;
  saveUrl: string = '';
  getUrl: string = '';
  constructor() {
    this.httpClient = inject(HttpClient);
  }

  save(item: T | any): Observable<ResultDto<T>> {
    return this.httpClient.post<ResultDto<T>>(this.saveUrl, item);

  }






}
