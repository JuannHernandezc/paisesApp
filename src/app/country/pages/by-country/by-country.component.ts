import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  
  term: string = '';
  thereIsError: boolean = false;
  countries : Country[] = [];

  constructor(private countryService: CountryService) {}

  search( term: string ) {
    this.thereIsError = false;
    this.term = term;
    this.countryService.searchCountry(this.term).subscribe({
      next: (countriesResponse) => {
        this.countries = [...countriesResponse];
      },
      error: (error) => {
        this.thereIsError = true;
        this.countries = [];
      },
    });
  }

  suggest( term:string ){
    this.thereIsError = false;
  }
}
