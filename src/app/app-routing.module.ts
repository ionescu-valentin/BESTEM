import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'app',
    loadChildren: () => import('./internal-app/internal-app.module').then(m => m.InternalAppModule)
  },
  // {
  //   path: Urls.AUTH,
  //   canLoad: [NoAuthGuard],
  //   canActivate: [NoAuthGuard],
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: '**',
    loadChildren: () => import('./internal-app/internal-app.module').then(m => m.InternalAppModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
