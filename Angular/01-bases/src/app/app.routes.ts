import {Routes} from '@angular/router';
import {CounterPageComponent} from './pages/counter/counter-page.component';
import {HeroPageComponent} from './pages/hero/hero-page.component';
import {DragonballPageComponent} from './pages/dragonball-page/dragonball-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
