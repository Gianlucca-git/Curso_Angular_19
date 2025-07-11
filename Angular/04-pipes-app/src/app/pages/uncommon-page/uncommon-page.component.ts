import {Component, signal} from '@angular/core';
import {StatComponent} from '../../components/stat/stat.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
import {interval, tap} from 'rxjs';

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
    AsyncPipe,
    StatComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
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

  // i18n Plural
  clientsMap = signal({
    '=0': ' Dont have clients',
    '=1': 'There is one client',
    // '=2': 'There are two clients',
    other: 'There are # clients',
  });
  clients = signal([
    'Andres', 'Martin', 'Ana', 'Pepita'
  ])

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  //key value Pipe
  profile = {
    firstName: 'Gian',
    lastName: 'Lucca',
    age: 27,
  }

  //Async Pipe
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data in de Promise');
      console.log('Promesa finalizada')
    }, 3500)
  })

  myObservableTimer = interval(1000).pipe(
    tap(()=> console.log('timer'))
  );
}
