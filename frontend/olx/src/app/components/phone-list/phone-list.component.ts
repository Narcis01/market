import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/common/phone';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  
  phones!: Phone[];
  
  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
      this.getAll();
  }

  getAll() {
    this.phoneService.getAll().subscribe(
      data => this.phones = data
    );
  }

  delete(id: number) {
    this.phoneService.delete(id).subscribe(
      data => this.getAll()
    )
  }

}
