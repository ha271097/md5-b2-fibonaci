import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    listF (num: number): number{
    // let count: number = 0;
    // let sum: number = 0;
    let a: number = 1;
    let b:number = 0;
    let temp:any;
    let sum: number = 0;
    while(num > 0){
    temp = a;
    a = a + b;
    b = temp;
    sum += a;
      num --;
    }
    return sum;
  }
  num: number = 0;
}
