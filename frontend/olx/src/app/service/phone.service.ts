import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Phone } from '../common/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  phoneUrl: string = "http://localhost:8080/phones";
  savePhoneUrl: string = "http://localhost:8080/api/v1/phone/save";
  searchPhoneUrl: string = "http://localhost:8080/api/v1/phone/search";
  deletePhoneUrl: string = "http://localhost:8080/api/v1/phone/delete";

  constructor(private HttpClient: HttpClient) { }

  getAll(): Observable<Phone[]>{
      return this.HttpClient.get<GetPhoneResponse>(this.phoneUrl).pipe(
        map( data => data._embedded.phones)
      );
  }

  getPhone(id: number): Observable<Phone>{
    return this.HttpClient.get<Phone>(`${this.phoneUrl}/${id}`);
  }

  save(phone: Phone): Observable<Phone>{

    return this.HttpClient.post<Phone>(this.savePhoneUrl,phone);
  }

  search(keyWord: string): Observable<Phone[]>{
    return this.HttpClient.get<Phone[]>(`${this.searchPhoneUrl}/${keyWord}`).pipe(
      map(data => data)
    );
  }

  delete(id: number): Observable<any>{
    return this.HttpClient.delete(`${this.deletePhoneUrl}/${id}`, {responseType: 'text'})
  }
}

interface GetPhoneResponse{
  _embedded:{
    phones: Phone[];
  }
    
}

