import { Routes } from '@angular/router';
import { productsResolver } from '@shared/resolvers/products.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Home',
    data: {
      meta: {
        description: 'Welcome to my Clothe Shop',
        robots: 'index, follow',
      },
    },
  },

  {
    // In this case, we are using a resolver as a dynamic title of the page
    path: 'product/:id',
    loadComponent: () =>
      import('@pages/product/product.component').then(
        (m) => m.ProductComponent
      ),
    title: productsResolver,
    // resolve: { product: productsResolver },
  },

  {
    path: 'product',
    pathMatch: 'full',
    redirectTo: '',
  },

  {
    path: '**',
    loadComponent: () =>
      import('@components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
