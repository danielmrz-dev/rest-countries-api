import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFilterByName]'
})
export class FilterByNameDirective {

  
  @HostListener('click') 
  OnInput() {
    alert("clicastes")
  }

}
