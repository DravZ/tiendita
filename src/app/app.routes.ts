import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/products/products';
import { Clients } from './pages/clients/clients';
import { Form } from './pages/form/form';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'products',
    component: Products,
    children: [
      {
        path: 'form',
        component: Form
      }
    ]
  },
  {
    path: 'clientes',
    component: Clients
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
