import { Component, inject, Input } from '@angular/core';
import { DarkThemeService } from '../../services/dark-theme.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {
  @Input({ required: true }) countryName: string = ''
  @Input({ required: true }) flag: string = ''
  @Input({ required: true }) population: number = 0 
  @Input({ required: true }) region: string = ''
  @Input({ required: true }) capital: string = ''

  darkThemeService = inject(DarkThemeService)

  isDarkThemeEnabled$ = this.darkThemeService.isDarkThemeEnabled$
}
