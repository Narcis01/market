import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/common/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  car!: Car;
  carId: number = +this.route.snapshot.paramMap.get('id')!;

  constructor(private carService: CarService,
              private route: ActivatedRoute) {}

  
  
  ngOnInit(): void {
    this.getCar();
  }
  
  getCar() {

    this.carService.getCar(this.carId).subscribe(
      data => this.car = data
    );

  }

}
