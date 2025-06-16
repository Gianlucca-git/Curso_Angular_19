import {Component, signal} from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px;
      width: 75px;
    }
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {

  initCounter: number = 10;
  counter: number = 10;

  counterSignal = signal(10);


  increaseCounter(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decreaseCounter(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);

  }

  resetCounter() {
    this.counter = this.initCounter;
    this.counterSignal.set(this.initCounter);
  }
}
