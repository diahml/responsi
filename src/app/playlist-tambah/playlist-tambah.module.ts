import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistTambahPageRoutingModule } from './playlist-tambah-routing.module';

import { PlaylistTambahPage } from './playlist-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistTambahPageRoutingModule
  ],
  declarations: [PlaylistTambahPage]
})
export class PlaylistTambahPageModule {}
