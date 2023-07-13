import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from 'src/app/common/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  selectedFile!: File;
  carForm!: FormGroup;
  car: Car = new Car;
  constructor(private formBuilder: FormBuilder,
              private carService: CarService) {}
  
  
  ngOnInit(): void {

    this.carForm = this.formBuilder.group({
      car: this.formBuilder.group({
          name: [''],
          description: [''],
          price: ['']
      })
    })

  }
  onSubmit(){
    this.car.name = this.carForm.get('car')?.value.name;
    this.car.description = this.carForm.get('car')?.value.description;
    this.car.price = this.carForm.get('car')?.value.price;
    this.car.imageUrl = "assets/image/car/" + this.selectedFile.name;
    console.log(this.car);
    this.carService.saveCar(this.car).subscribe(
      (savedCar) => {
        // Handle success
        console.log('Car saved:', savedCar);
        // Add any additional logic you need after the car is saved
      },
      (error) => {
        // Handle error
        console.error('Error saving car:', error);
        // Add any error handling logic you need
      }
    );

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.carService.saveImageCar(formData).subscribe(
      (savedFile) =>console.log("Image saved")
      
    );

  }

  onFileSelected(event: any) {
    this.selectedFile = event?.target.files[0];
    }
}
