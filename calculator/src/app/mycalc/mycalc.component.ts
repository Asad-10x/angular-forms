import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-mycalc',
  standalone: true,
  imports: [ NgClass, ReactiveFormsModule],
  templateUrl: './mycalc.component.html',
  styleUrls: ['./mycalc.component.css']
})
export class MycalcComponent implements OnInit{
  currentTheme: string = 'default';
  inputStr: any;

  ngOnInit():void {
    this.inputStr = new FormGroup({
      text: new FormControl('0')
    })
  }

  setTheme(theme: string) {
    this.currentTheme=theme;
  }

  onButtonClick(buttonElement: any) {
    let buttonText = buttonElement.textContent

    // To check if the InputStr is currently empty?
    if(this.inputStr.controls.text.value == '0') {
      // if empty and input is a decimal-point, append a zero on left side
      if(buttonText == '.') {
        this.inputStr.controls.text.setValue('0' + buttonText)
      } else {          // else set the value to button input
        this.inputStr.controls.text.setValue(buttonText);
      }
    }else {           // if not empty, just append the new button value to the string
      this.inputStr.controls.text.setValue(this.inputStr.controls.text.value + buttonText);
    }
  }

  onDelete():void {
    // set the value of inputStr = slice-out inputStr[-1] or until it's 0
    this.inputStr.controls.text.setValue(this.inputStr.controls.text.value.slice(0, -1) || '0');
  }

  onReset(): void {
    // just set the inputStr's value to 0 :) EZ
    this.inputStr.controls.text.setValue('0');
  }

  onCalculate(): void {
    try {
      let result = eval(this.inputStr.controls.text.value);
      this.inputStr.controls.text.setValue(result);
    } catch (error) {
      console.log(error);
      this.inputStr.controls.text.setValue(undefined);
    }

  }

}
