import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistTambahPage } from './playlist-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistTambahPageRoutingModule {}
