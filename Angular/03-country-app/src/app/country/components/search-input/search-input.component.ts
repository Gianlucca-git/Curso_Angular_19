import {Component, effect, input, linkedSignal, output, signal} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  placeholder = input('Search');
  value = output<string>();
  initialValue = input<string>();

  debounceTime = input(300);
  inputValue = linkedSignal<string>(() => this.initialValue() ?? ''); //inicializa signal y luego actua como signal normi

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue(); // disparador

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());
    onCleanup(() => {
      clearTimeout(timeout);
    })
  })
}
