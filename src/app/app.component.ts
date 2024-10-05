import { Component, inject, OnInit } from '@angular/core';
import { CountriesApiService } from './services/countries-api.service';
import { PageEvent } from '@angular/material/paginator';
import { ICountry } from '../interfaces/country.interface';
import { DarkThemeService } from './services/dark-theme.service';
import { BehaviorSubject } from 'rxjs';
import { IFilterOptions } from './components/filters/filters.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  countriesList: ICountry[] = [];
  filteredList: ICountry[] = [];
  paginatedCountriesList: ICountry[] = [];
  totalItems = 0;
  itemsPerPage = 8;
  currentPage = 0;
  isCountryClicked: boolean = false;
  selectedCountry: ICountry | undefined;
  borders: string[] | undefined;
  nativeName: string = '';
  
  darkThemeService: DarkThemeService = inject(DarkThemeService)
  isDarkThemeEnabled$: BehaviorSubject<boolean> = this.darkThemeService.isDarkThemeEnabled$

  constructor(private countries: CountriesApiService) {}  

  ngOnInit(): void {
    this.countries.getData().subscribe(
      (response) => {
        this.countriesList = response;
        this.filteredList = this.countriesList; //*
        this.totalItems = this.countriesList.length;
        this.loadItems();
      },
      (error) => {
        console.error("Could not obtain the data", error);
      }
    );
  }

  handleInput(value: string) {
    if (value.length <= 0) {
      this.filteredList = this.countriesList
    } else {
      this.filteredList = this.filteredList.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
    }
    this.totalItems = this.filteredList.length;
    this.loadItems()
  }
  
  handleSelect(region: IFilterOptions) {

    if (region.region === "All") {
      this.filteredList = this.countriesList
      this.totalItems = this.countriesList.length
      this.loadItems()
    } else {
      this.filteredList = this.countriesList.filter((country) => country.region === region.region)
      this.totalItems = this.filteredList.length;
      this.loadItems()
    }
    
  }

  onPageChange(event: PageEvent): void {
    this.itemsPerPage = event.pageSize; // Atualiza o número de itens por página
    this.currentPage = event.pageIndex; // Atualiza a página atual
    this.loadItems(); // Carrega os itens da nova página
  }

  // Função para carregar os itens da página atual
  loadItems(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedCountriesList = this.filteredList.slice(startIndex, endIndex); // Fatiamento da lista
  }
  
  getCountryName(value: string) {
    this.selectedCountry = this.countriesList.find(country => country.name.common.toLocaleLowerCase() === value.toLocaleLowerCase())
  }

  getBoolean(value: boolean) {
    this.isCountryClicked = value;
  }

  getBorderCountry(selectedCountry: ICountry): string[] {

    return this.countriesList
      .filter(country => country.borders?.includes(selectedCountry.cca3))
      .map(country => country.name.common);
  }

  returnButton(boo: boolean) {
    this.isCountryClicked = boo;
    this.filteredList = this.countriesList;
    this.totalItems = this.countriesList.length;
    this.loadItems();
  }

  receivedBorderCountry(countryName: string) {
    this.selectedCountry = this.countriesList.find(country => country.name.common === countryName)
  }
}
