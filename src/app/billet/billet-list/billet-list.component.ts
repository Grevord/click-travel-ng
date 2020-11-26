import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClickTravelService } from '../../services/click-travel.service'
import { filter, map } from 'rxjs/operators';
import {Billet} from '../../interfaces/billet';

@Component({
  templateUrl: './billet-list.component.html',
  styleUrls: ['./billet-list.component.scss']
})
export class BilletListComponent implements OnInit {
  title = "Liste des billets"
  myParam = null
  mybillets = null
  constructor(
    private route: ActivatedRoute,
    private clickservice: ClickTravelService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) =>{this.myParam = params['name'], this.getBillets(params)} );

  }

  getBillets(param){
    this.clickservice.getBillets(param).subscribe((data)=> {this.mybillets = data, console.log(data)})
  }

}
