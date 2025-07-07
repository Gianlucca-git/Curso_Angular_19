import {Component, signal} from '@angular/core';
import {StatComponent} from '../../components/stat/stat.component';
import {I18nSelectPipe} from '@angular/common';

const client1 = {
  name: 'Pepita',
  gender: 'female',
  age: 40,
  address: 'Otawa, Canada',
};

const client2 = {
  name: 'Gian',
  gender: 'male',
  age: 40,
  address: 'Valle, COL',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    StatComponent, I18nSelectPipe
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient() {
    if (this.client() == client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);

  }

}
