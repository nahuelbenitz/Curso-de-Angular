import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>

<button (click)="increment()">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="decrement()">-1</button>
`
})

export class CounterComponent  {
  public counter: number = 0;

  public increment(): void{
    this.counter++;
  }

  public decrement(): void{
    this.counter--;
  }

  public reset(): void{
    this.counter = 0;
  }

}
