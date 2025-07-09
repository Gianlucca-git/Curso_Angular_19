import {Routes} from '@angular/router';
import {BasicPageComponent} from './pages/basic-page/basic-page.component';
import {DynamicPageComponent} from './pages/dynamic-page/dynamic-page.component';
import {SwitchesPageComponent} from './pages/switches-page/switches-page.component';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'BasicForm',
        component: BasicPageComponent,
        data: {
          icon: 'M3 12h18M3 6h18M3 18h18'
        }
      },
      {
        path: 'dynamic',
        title: 'DynamicForm',
        component: DynamicPageComponent,
        data: {
          icon: 'M4 11q-.825 0-1.412-.587T2 9V6q0-.825.588-1.412T4 4h9v7zm0 9q-.825 0-1.412-.587T2 18v-3q0-.825.588-1.412T4 13h11v7zm13 0v-9h-2V4h7l-2 5h2zM4.75 17.25h1.5v-1.5h-1.5zm0-9h1.5v-1.5h-1.5z'
        }
      },
      {
        path: 'switches',
        title: 'SwitchesForm',
        component: SwitchesPageComponent,
        data: {
          icon: 'M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z'
        }
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
]
