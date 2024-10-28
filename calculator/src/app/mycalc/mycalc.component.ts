import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass, DecimalPipe, CommonModule} from '@angular/common';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-mycalc',
  standalone: true,
  imports: [ NgClass, ReactiveFormsModule, CommonModule],
  templateUrl: './mycalc.component.html',
  styleUrls: ['./mycalc.component.css'],
  providers: [DecimalPipe]
})
export class MycalcComponent implements OnInit{
  // A host Listener for listening to keypress events
  @HostListener('window:keydown', ['$event']) onKeyDown(event:any){
    console.log(event)      // show keypress event on console
    const allowedKeys = '0123456789.+-*/';

    // The keys that corresponds to the keys of calculator are allowed and if any such key is encountered its value is taken as a button click.
    if (allowedKeys.includes(event.key)){
      this.onButtonClick({textContent: event.key});
    }
    if(event.keyCode === 13){         // return key
      this.onCalculate();
    }
    if(event.keyCode === 8){          // backspace
      this.onDelete();
    }
    if(event.keyCode === 67){        // c key
      this.onReset();
    }
  }

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
      if(buttonText === '.' || buttonText === '+' || buttonText=== '*' || buttonText === '/') {
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
      console.log(result);
      this.inputStr.controls.text.setValue(result);
    } catch (error) {
      console.log(error);
      this.inputStr.controls.text.setValue(undefined);
    }

  }

}
