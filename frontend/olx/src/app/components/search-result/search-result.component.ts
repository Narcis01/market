import { HttpClient } from '@angular/common/http';
import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/common/apartment';
import { Car } from 'src/app/common/car';
import { Phone } from 'src/app/common/phone';
import { ApartmentService } from 'src/app/service/apartment.service';
import { CarService } from 'src/app/service/car.service';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  keyWord: string = this.route.snapshot.paramMap.get('keyWord')!;

  cars!: Car[];
  apartments!: Apartment[];
  phones!: Phone[];


  constructor(private route: ActivatedRoute,
              private carService: CarService,
              private apartmentService: ApartmentService,
              private phoneService: PhoneService) {}
  
  ngOnInit(): void {
    console.log(this.keyWord);
    this.search(this.keyWord);
  }

  search(keyWord: string){
    this.carService.search(keyWord).subscribe(
      data => this.cars = data
    );
    
    this.apartmentService.search(keyWord).subscribe(
      data => {
        console.log(data);
        this.apartments = data},
      erorr =>{
        console.error(erorr);
      }
    );

    this.phoneService.search(keyWord).subscribe(
      data => {
        console.log(data);
        this.phones = data

      
      }
    )

    

  }

  deletePhone(id: number){
      this.phoneService.delete(id).subscribe(
        data => this.search(this.keyWord)
      )
  }

  deleteCar(id: number){
    this.carService.deleteCar(id).subscribe(
      data => this.search(this.keyWord)
    );
  }

  deleteApartment(id: number){
    this.apartmentService.delete(id).subscribe(
      data => this.search(this.keyWord)
    );
  }
}
