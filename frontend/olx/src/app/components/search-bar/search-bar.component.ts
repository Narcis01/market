import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private router: Router) {}

  startSearch(keyWord: string){
    console.log("value:" + keyWord);
    this.router.navigateByUrl(`search/${keyWord}`);
  }
}
