import {Routes} from '@angular/router';
import {ByCapitalPageComponent} from './pages/by-capital-page/by-capital-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: ByCapitalPageComponent,
  },
  // {
  //   path: '',
  // },

];

export default countryRoutes;
