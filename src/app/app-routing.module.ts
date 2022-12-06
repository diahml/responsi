import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m =>
      m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'playlist-tambah',
    loadChildren: () => import('./playlist-tambah/playlist-tambah.module').then(m => m.PlaylistTambahPageModule)
  },
  {
    path: 'playlist-edit/:id',
    loadChildren: () => import('./playlist-edit/playlist-edit.module').then(m => m.PlaylistEditPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
