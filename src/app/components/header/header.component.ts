import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ThemeType } from '../../../types/theme.type';
import { DarkThemeService } from '../../services/dark-theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  darkThemeService: DarkThemeService = inject(DarkThemeService)

  isDarkThemeEnabled$: BehaviorSubject<boolean> = this.darkThemeService.isDarkThemeEnabled$

  toggleDarkMode(): void {
    this.darkThemeService.toggleDarkMode();
  }


}
