import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/products/products';
import { Form } from './pages/form/form';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'products',
    component: Products
  },
  {
    path: 'form',
    component: Form
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
