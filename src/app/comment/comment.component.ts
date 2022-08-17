import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';
import {Comment} from './comment'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  author!: string;
  content!: string;
  @Input() album!: Album
  sub!: Subscription;

  constructor(private albumService: AlbumServiceService) { }

  ngOnInit(): void {

  }

  // onClickSubmit(){
  //   this.sub = this.albumService.addComment(this.album.id, this.author, this.content).subscribe(data => {
  //    if(!data)
  //    console.error("No comment data")
  //   })
  // }

}
