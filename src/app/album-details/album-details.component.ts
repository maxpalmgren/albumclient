import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';
import { AreYouSureDeleteComponent } from '../are-you-sure-delete/are-you-sure-delete.component';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit, OnDestroy {

  pageTitle = "Album Details";
  id!: number;
  album!: Album;
  sub!: Subscription;

  data!: any[];

  constructor(public route: ActivatedRoute, private albumService: AlbumServiceService, private routing: Router, public dialog: MatDialog) { 
    this.route.params.subscribe(params => this.id = +params["id"])
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.albumService.getApiAlbum(this.id).subscribe(data => {
      if(data)
      this.album = data;
    })

    this.album.numberOfTracks = this.album.tracks.length;
  }

  openDialog(){
    const dialogRef = this.dialog.open(AreYouSureDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.onDelete();
      }
    });
  }

  onDelete(){
    this.albumService.deleteAlbum(+this.album.id).subscribe(() => this.routing.navigateByUrl("/albums"));
  }
}
