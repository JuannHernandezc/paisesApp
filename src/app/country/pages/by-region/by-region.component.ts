import { Component } from '@angular/core';
import {CountryService} from "../../services/country.service";
import { Country, Name } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  countries: Country[] = [];
  regions: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  thereIsError: boolean = false;

  constructor(private countryService: CountryService){}

  getClassCss( region: string): string{
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activateRegion( region: string){
    this.activeRegion = region;
    this.countryService.searchRegion(region).subscribe({
      next: (countriesResponse) => {
        this.countries = [...countriesResponse];
        this.countries.forEach((elemento) => console.log(elemento.name));
      },
      error: (error) => {
        this.thereIsError = true;
        this.countries = [];
      }
    })
  }
}
