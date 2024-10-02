import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DarkThemeService } from '../../services/dark-theme.service';
import { BehaviorSubject } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

export interface IRegions {
  value: string;
  viewValue: string
}

export interface IFilterOptions {
  value: string | undefined,
  region: string | undefined
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

  filterOptions: IFilterOptions = {
    value: undefined,
    region: undefined
  }

  regions = [
    {value: 'All', viewValue: 'All'},
    {value: 'Africa', viewValue: 'Africa'},
    {value: 'Americas', viewValue: 'Americas'},
    {value: 'Asia', viewValue: 'Asia'},
    {value: 'Europe', viewValue: 'Europe'},
    {value: 'Oceania', viewValue: 'Oceania'},
  ];

  @Output() inputEvent = new EventEmitter<string>()

  onInputChange(evento: Event) {
    const inputElement = evento.target as HTMLInputElement;
    this.inputEvent.emit(inputElement.value);
  }

  @Output() selectEvent = new EventEmitter<IFilterOptions>()

  onSelect() {
    this.selectEvent.emit(this.filterOptions)
  }


  
}
