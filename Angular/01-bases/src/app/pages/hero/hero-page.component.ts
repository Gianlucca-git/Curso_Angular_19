import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent {

  defaultName: string = 'Iron Man';
  defaultAge: number = 40;
  defaultDescription: string = 'Hombre de Hierro';

  name = signal(this.defaultName);
  age = signal(this.defaultAge);

  // Sen~ales Computadas (solo lectura)
  heroDescription = computed(() => `${this.defaultName} - ${this.defaultAge}`);

  // nameCapitalized = computed(() => this.name().toUpperCase());

  changeName(arg_name: string) {
    this.name.update(v => arg_name);
    // this.nameCapitalized.update(v => v = arg_name.toUpperCase());
  }

  changeAge() {
    this.age.update(v => 0);
  }

  resetForm() {
    this.name.update(v => v = this.defaultName);
    this.age.update(v => v = this.defaultAge);
    // this.nameCapitalized.update(v => v = this.defaultName.toUpperCase());
  }

}
