import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-mycalc',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './mycalc.component.html',
  styleUrl: './mycalc.component.css'
})
export class MycalcComponent {
  currentTheme: string = 'default';
  displayValue: string = '0';

  setTheme(theme: string) {
    this.currentTheme=theme;
  }
}
