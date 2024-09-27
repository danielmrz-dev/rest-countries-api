import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {

  constructor() { }

  isDarkThemeEnabled$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  toggleDarkMode(): void {
    this.isDarkThemeEnabled$.next(!this.isDarkThemeEnabled$.value)
  }

}
