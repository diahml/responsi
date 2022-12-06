import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "src/app/api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-playlist-tambah',
  templateUrl: './playlist-tambah.page.html',
  styleUrls: ['./playlist-tambah.page.scss'],
})
export class PlaylistTambahPage implements OnInit {
  id: any;
  judul: any;
  penyanyi: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  addLagu() {
    let url = this._apiService.apiURL() + "/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        judul: this.judul,
        penyanyi: this.penyanyi,
      },
    })
    console.log('berhasil');
    this.router.navigateByUrl('/home');
  }

}
