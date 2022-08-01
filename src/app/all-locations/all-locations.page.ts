import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'all-locations.page.html',
  styleUrls: ['all-locations.page.scss']
})
export class AllLocationsPage implements OnInit {

  allLocations: any;


  constructor(
    private randmService: RickAndMortyService
    ) { }

  ngOnInit() {
    this.randmService.getAllLocations().then( (res: any) => {
      this.allLocations = res;
      console.log (this.allLocations);
    });
  }
  
}
