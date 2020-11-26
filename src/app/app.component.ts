import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ClickTravelService } from './services/click-travel.service'
import { Router } from '@angular/router';
import {Destination} from './interfaces/destination';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choose your dream destination...';
  destinations = null

  constructor(
    private clickservice: ClickTravelService,
    private router: Router,
  ) { 
    clickservice.getDestination()
    
    .subscribe((data) => {this.destinations = data})
   
  }

  ngOnInit(): void {
  }
  
  navigate(val: string){
    console.log(val);
    this.router.navigate(["billets", val]);
  }
}
