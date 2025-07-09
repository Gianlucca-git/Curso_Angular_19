import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {Routes} from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sing-up',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'sing-up',
      }
    ],
  },
]

export default authRoutes;
