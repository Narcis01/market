import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/common/apartment';
import { ApartmentService } from 'src/app/service/apartment.service';

@Component({
  selector: 'app-homes-detail',
  templateUrl: './homes-detail.component.html',
  styleUrls: ['./homes-detail.component.css']
})
export class HomesDetailComponent implements OnInit {

  apartment!: Apartment;

  theAparmtnetId: number = +this.route.snapshot.paramMap.get('id')!;

  constructor(private apartmentService: ApartmentService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();
  }


  getDetails() {
    this.apartmentService.getApartment(this.theAparmtnetId).subscribe(
      data => this.apartment = data
    );
  }


}
