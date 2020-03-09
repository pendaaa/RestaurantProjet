import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'plats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plats/plats.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'ajouter',
            loadChildren: () =>
              import('../plats/ajouter/ajouter.module').then(m => m.AjouterPageModule)
          },
          {
            path: 'modifier/:id',
            loadChildren: () =>
              import('../plats/modifier/modifier.module').then(m => m.ModifierPageModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../map/map.module').then(m => m.MapPageModule)
          }
        ]
      },
      {
        path: 'compte',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../compte/compte.module').then(m => m.ComptePageModule)
          },
          {
            path: 'login',
            loadChildren: () =>
              import('../compte/login/login.module').then(m => m.LoginPageModule)
          },
          {
            path: 'register',
            loadChildren: () =>
              import('../compte/register/register.module').then(m => m.RegisterPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
