import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CountriesComponent } from './countries/countries.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FiltersComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule, 
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    FiltersComponent,
    CountriesComponent
  ]
})
export class ComponentsModule { }
