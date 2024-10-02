import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {
  @Input({ required: true }) flag: string = ''
  @Input({ required: true }) nativeName: string = ''
  @Input({ required: true }) population: number = 0
  @Input({ required: true }) region: string = ''
  @Input({ required: true }) subRegion: string = ''
  @Input({ required: true }) capital: string = ''
  @Input({ required: true }) topLevelDomain: string = ''
  @Input({ required: true }) currencies: string[] = []
  @Input({ required: true }) languages: string[] = []
  @Input({ required: true }) borderCountries: string[] = []
}
