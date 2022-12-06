import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { Http } from "@capacitor-community/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  apiURL() {
    return "http://localhost:8080/responsi";
  }

  getPlaylist() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deletePlaylist(id: any) {
    return this.http.delete(this.apiURL() + '/hapus.php?id=' + id);
  }

  ambilPlaylist(id: any) {
    return this.http.get(this.apiURL() + '/lihat.php?id=' + id);
  }

}
