import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Phone } from 'src/app/common/phone';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  phoneForm!: FormGroup;
  phone: Phone = new Phone;


  constructor(private phoneService: PhoneService,
              private formBuilder: FormBuilder) {}
  
  
  ngOnInit(): void {
    this.phoneForm = this.formBuilder.group({
      phone : this.formBuilder.group({
        name: [''],
        description: [''],
        price: ['']
      })
    })
  }

  onSubmit(){
    this.phone.name = this.phoneForm.get('phone')?.value.name;
    this.phone.description = this.phoneForm.get('phone')?.value.description;
    this.phone.price = this.phoneForm.get('phone')?.value.price;
    this.phone.imageUrl = "assets/image/phone/phone.png";

    this.phoneService.save(this.phone).subscribe(
      (savedPhone) => {
      // Handle success
      console.log('Phone saved:', savedPhone);
      // Add any additional logic you need after the car is saved
    },
    (error) => {
      // Handle error
      console.error('Error saving phone:', error);
      // Add any error handling logic you need
    });

  }
  

}
