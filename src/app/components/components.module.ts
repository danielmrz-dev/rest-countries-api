import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CountriesComponent } from './countries/countries.component';
import { DirectivesModule } from '../directives/directives.module';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './country/country.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FiltersComponent,
    CountriesComponent,
    CountryComponent,
    
  ],
  imports: [
    CommonModule, 
    AngularMaterialModule,
    DirectivesModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FiltersComponent,
    CountriesComponent,
    CountryComponent,
  ]
})
export class ComponentsModule { }
