import { Component, inject } from '@angular/core';
import { DarkThemeService } from '../../services/dark-theme.service';
import { BehaviorSubject } from 'rxjs';

interface Regions {
  value: string;
  viewValue: string
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

  isDarkModeEnabled$: BehaviorSubject<boolean>;

  constructor(private darkThemeService: DarkThemeService) {
    this.isDarkModeEnabled$ = this.darkThemeService.isDarkThemeEnabled$
  }

  regions: Regions[] = [
    {value: 'africa-0', viewValue: 'Africa'},
    {value: 'america-1', viewValue: 'Americas'},
    {value: 'asia-2', viewValue: 'Asia'},
    {value: 'europe-2', viewValue: 'Europe'},
    {value: 'oceania-2', viewValue: 'Oceania'},
  ];
}
