import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mycalc',
  standalone: true,
  imports: [FormsModule],
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
