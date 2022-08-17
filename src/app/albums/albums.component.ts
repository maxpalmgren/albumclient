import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];
  filteredAlbums: Album[] = [];
  
  private _listFilter: string = "";
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredAlbums = this.performFilter(value);
  }

  constructor(private albumService: AlbumServiceService, private router: Router) { }

  ngOnInit(): void {
    this.albumService.getApiAlbums().subscribe(data => {
      if(data){
      this.albums = data;
      this.filteredAlbums = this.albums;
    }})
  }

  performFilter(filterBy: string): Album[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.albums.filter((album: Album) =>
    album.title.toLocaleLowerCase().includes(filterBy));
  }

  goTo(album: Album){
    this.router.navigate(["/albums/"+album.id])
  }

}
