import { Component, OnInit } from '@angular/core';
import {SportCountry} from '../../Models/SportCountry';
import { SportsCountryService } from 'src/app/services/sports-country.service';


@Component({
  selector: 'app-sport-country',
  templateUrl: './sport-country.component.html',
  styleUrls: ['./sport-country.component.css']
})
export class SportCountryComponent implements OnInit {
SportCountry:SportCountry[];
  constructor(private sportCountryService:SportsCountryService) { }

  ngOnInit(): void {
  }
  getSportCountry(){
    this.sportCountryService.getSportCountries().subscribe((data:any)=>{
      this.SportCountry=data;
    });
  }

  addSportToCountry(sportCountry:SportCountry){
    this.sportCountryService.addSportToCountry(sportCountry).subscribe((data:any)=>{
      this.getSportCountry();
    })
  }

}
