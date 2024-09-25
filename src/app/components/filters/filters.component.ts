import { Component } from '@angular/core';

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
  regions: Regions[] = [
    {value: 'africa-0', viewValue: 'Africa'},
    {value: 'america-1', viewValue: 'America'},
    {value: 'asia-2', viewValue: 'Asia'},
    {value: 'europe-2', viewValue: 'Europe'},
    {value: 'oceania-2', viewValue: 'Oceania'},
  ];
}
