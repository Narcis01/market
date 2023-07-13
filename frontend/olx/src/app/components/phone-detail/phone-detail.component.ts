import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from 'src/app/common/phone';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {

  phone!: Phone;
  phoneId: number = +this.route.snapshot.paramMap.get('id')!;

  constructor(private phoneService: PhoneService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPhone();
  }
  getPhone() {
    this.phoneService.getPhone(this.phoneId).subscribe(
      data => this.phone = data
    );
  }

}
