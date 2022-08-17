import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums!: Album[];

  constructor(private albumService: AlbumServiceService) { }

  ngOnInit(): void {
    this.albumService.getApiTopTenAlbums().subscribe((x:Album[]) => {
      this.albums = x});
  }
}
