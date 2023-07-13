import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Car } from '../common/car';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  saveCarUlr: string = "http://localhost:8080/api/v1/car/save";
  carUrl: string = "http://localhost:8080/cars";
  searchCarUrl: string = "http://localhost:8080/api/v1/car/search"
  deleteCarUrl: string = "http://localhost:8080/api/v1/car/delete";
  imageCarUrl: string = "http://localhost:8080/api/v1/file/car";
  constructor(private HttpClient: HttpClient) { }

  getAll(): Observable<Car[]>{
    return this.HttpClient.get<GetCarResponse>(this.carUrl).pipe(
      map( data => data._embedded.cars)
    )
  }

  getCar(id: number): Observable<Car>{

    return this.HttpClient.get<Car>(`${this.carUrl}/${id}`);

  }

  saveCar(car: Car): Observable<Car> {
    
    return this.HttpClient.post<Car>(this.saveCarUlr, car);
    
  }

  search(keyWord: string): Observable<Car[]> {

    return this.HttpClient.get<Car[]>(`${this.searchCarUrl}/${keyWord}`).pipe(
      map(data => data)
    );
  }

  deleteCar(id: number): Observable<any> {
    console.log("in delete service.......");
    return this.HttpClient.delete(`${this.deleteCarUrl}/${id}`, {responseType: 'text'});
    
  }

  saveImageCar(formData: FormData): Observable<any>{

    return this.HttpClient.post(this.imageCarUrl,formData);
  }
 
}

interface GetCarResponse{
  _embedded:
    { cars: Car[]    }
}

