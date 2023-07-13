import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Apartment } from 'src/app/common/apartment';
import { ApartmentService } from 'src/app/service/apartment.service';

@Component({
  selector: 'app-apartment-form',
  templateUrl: './apartment-form.component.html',
  styleUrls: ['./apartment-form.component.css']
})
export class ApartmentFormComponent implements OnInit {

  apartmentForm!: FormGroup;
  apartment: Apartment = new Apartment;

  constructor(private formBuilder: FormBuilder,
    private apartmentService: ApartmentService) { }


  ngOnInit(): void {
    this.apartmentForm = this.formBuilder.group({
      apartment: this.formBuilder.group({
        name: [''],
        description: [''],
        price: ['']
      })
    })
  }

  onSubmit() {
    this.apartment.name = this.apartmentForm.get('apartment')?.value.name;
    this.apartment.description = this.apartmentForm.get('apartment')?.value.description;
    this.apartment.price = this.apartmentForm.get('apartment')?.value.price;
    this.apartment.imageUrl = "assets/image/apartment/apartment.png";

    this.apartmentService.save(this.apartment).subscribe(
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


  }
}
