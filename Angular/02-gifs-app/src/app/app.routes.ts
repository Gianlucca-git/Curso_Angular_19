import {Routes} from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    // loadComponent: () => import('./gifs/pages/dashboard.component').then(
    //   (c) => c.DashboardPageComponent
    // )
    loadComponent: () =>
      import('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search-page/search-page.component'),
      },
      {
        path: 'history/:query',
        loadComponent: () =>
          import('./gifs/pages/gif-history/gif-history.component'),
      },
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page/trending-page.component'),
      },
      {
        path: '**',
        redirectTo: 'trending',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
