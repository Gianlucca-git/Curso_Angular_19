import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Basics',
    loadComponent: () =>
      import('./pages/basic-page/basic-page.component'),
  },
  {
    path: 'numbers',
    title: 'Pipes Numbers',
    loadComponent: () =>
      import('./pages/number-page/number-page.component'),
  },
  {
    path: 'uncommon',
    title: 'Pipes UnCommons',
    loadComponent: () =>
      import('./pages/uncommon-page/uncommon-page.component'),
  },
  {
    path: 'custom',
    title: 'Pipes Personal',
    loadComponent: () =>
      import('./pages/custom-page/custom-page.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
