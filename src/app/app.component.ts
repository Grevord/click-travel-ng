import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ClickTravelService } from './services/click-travel.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choose your dream destination...';
  destinations = null

  constructor(
    private clickservice: ClickTravelService
  ) { 
    clickservice.getDestination().subscribe((data) => {this.destinations = data , console.log(data)})
   
  }

  ngOnInit(): void {
  }


}
