import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/common/apartment';
import { ApartmentService } from 'src/app/service/apartment.service';

@Component({
  selector: 'app-homes-list',
  templateUrl: './homes-list.component.html',
  styleUrls: ['./homes-list.component.css']
})
export class HomesListComponent implements OnInit {
  
  apartments!: Apartment[];
  
  constructor(private apartmentService: ApartmentService){}

  
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    
    this.apartmentService.getAll().subscribe(
      data => {
        this.apartments = data;
        console.log(this.apartments);
      }
    )

  }

  delete(id: number){
    this.apartmentService.delete(id).subscribe(
      data => this.getAll()
    )
  }

}
