import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByNameDirective } from './filter-by-name.directive';



@NgModule({
  declarations: [
    FilterByNameDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterByNameDirective
  ]
})
export class DirectivesModule { }
