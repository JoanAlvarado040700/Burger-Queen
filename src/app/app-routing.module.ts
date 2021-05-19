import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./page/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },

  {
    path: 'list-product',
    loadChildren: () => import('./page/list-product/list-product.module').then( m => m.ListProductPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./page/pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./page/product/product.module').then( m => m.ProductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
