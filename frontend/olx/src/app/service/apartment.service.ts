import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Apartment } from '../common/apartment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  
  saveApartmentUrl = "http://localhost:8080/api/v1/apartment/save"
  apartmentUrl = "http://localhost:8080/apartments";
  searchByKeyWordUrl = "http://localhost:8080/api/v1/apartment/search";
  deleteApartmentUrl = "http://localhost:8080/api/v1/apartment/delete";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Apartment[]>{

    return this.httpClient.get<GetApartmentResponse>(this.apartmentUrl).pipe(
      map( data => data._embedded.apartments)
    );
    
  }

  getApartment(id: number): Observable<Apartment>{
    return this.httpClient.get<Apartment>(`${this.apartmentUrl}/${id}`);
  }

  save(apartment: Apartment): Observable<Apartment> {
    
      return this.httpClient.post<Apartment>(this.saveApartmentUrl,apartment)
  }

  search(keyWord: string): Observable<Apartment[]>{

    return this.httpClient.get<Apartment[]>(`${this.searchByKeyWordUrl}/${keyWord}`).pipe(
      map(data => data)
   );

  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.deleteApartmentUrl}/${id}`, {responseType: 'text'});
  }

}

interface GetApartmentResponse{
  _embedded: {
    apartments: Apartment[]}
}
