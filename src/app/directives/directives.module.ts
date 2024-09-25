import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersDirective } from './filters.directive';
import { ColorThemeDirective } from './color-theme.directive';



@NgModule({
  declarations: [
    FiltersDirective,
    ColorThemeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltersDirective,
    ColorThemeDirective
  ]
})
export class DirectivesModule { }
