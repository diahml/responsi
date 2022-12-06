import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from 'src/app/api.service';
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.page.html',
  styleUrls: ['./playlist-edit.page.scss'],
})
export class PlaylistEditPage implements OnInit {
  id: any;
  judul: any;
  penyanyi: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilPlaylist(this.id);
    })
  }

  ngOnInit() {
  }

  ambilPlaylist(id: any) {
    this._apiService.ambilPlaylist(id).subscribe((res: any) => {
      console.log('sukses', res);
      let playlist = res;
      console.log(playlist);
      this.judul = playlist.judul;
      this.penyanyi = playlist.penyanyi;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

  editPlaylist() {
    let url = this._apiService.apiURL() + "/edit.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id: this.id,
        judul: this.judul,
        penyanyi: this.penyanyi,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/home');
    })
  }

}
