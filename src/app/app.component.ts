import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from './services/countries-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  countriesList: any[] = []

  constructor(private countries: CountriesApiService) {}

  ngOnInit(): void {
    this.countries.getData().subscribe(
      (response) => {
        this.countriesList = response
      },
      (error) => {
        console.error("Could not obtain the data", error);        
      }
    )
  }
}
