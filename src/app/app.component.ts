import { Component, inject, OnInit } from '@angular/core';
import { CountriesApiService } from './services/countries-api.service';
import { PageEvent } from '@angular/material/paginator';
import { ICountry } from '../interfaces/country.interface';
import { ThemeType } from '../types/theme.type';
import { DarkThemeService } from './services/dark-theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  countriesList: any[] = [];
  paginatedCountriesList: any[] = []; // Lista de países para exibir na página atual
  totalItems = 0;
  itemsPerPage = 8;
  currentPage = 0;
  
  darkThemeService: DarkThemeService = inject(DarkThemeService)
  isDarkThemeEnabled$: BehaviorSubject<boolean> = this.darkThemeService.isDarkThemeEnabled$

  constructor(private countries: CountriesApiService) {}
  

  ngOnInit(): void {
    this.countries.getData().subscribe(
      (response) => {
        this.countriesList = response;
        this.totalItems = this.countriesList.length;
        this.loadItems(); // Carrega a primeira página
      },
      (error) => {
        console.error("Could not obtain the data", error);
      }
    );
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
    this.paginatedCountriesList = this.countriesList.slice(startIndex, endIndex); // Fatiamento da lista
  }
  
}
