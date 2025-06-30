import {Routes} from '@angular/router';
import {ByCapitalPageComponent} from './pages/by-capital-page/by-capital-page.component';
import {CountryLayoutComponent} from './layouts/country-layout/country-layout.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**',
        redirectTo: 'capital',
      },
    ]
  },


];

export default countryRoutes;
