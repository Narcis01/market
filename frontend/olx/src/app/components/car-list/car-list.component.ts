import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/common/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{
  
  cars!: Car[];

  constructor(private carService: CarService) {}
  
  ngOnInit(): void {
      this.getAll();
  }
  getAll() {
      this.carService.getAll().subscribe(
        data => this.cars = data
      )
  }

  deleteCar(id: number){
    console.log("in delete method........");
    this.carService.deleteCar(id).subscribe(
      data => {
        console.log('deleted', data);
        this.getAll();
      }
    );
    
  }

}
