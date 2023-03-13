import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {

  term: string = '';
  thereIsError: boolean = false;
  countries : Country[] = [];

  constructor(private countryService: CountryService){}

  search( term: string ) {
    this.thereIsError = false;
    this.term = term;
    this.countryService.searchCapital(this.term).subscribe({
      next: (countriesResponse) => {
        this.countries = [...countriesResponse];
      },
      error: (error) => {
        this.thereIsError = true;
        this.countries = [];
      },
    });
  }
}
