import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from '../album';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  albumForm!: FormGroup;
  //tracks = new FormArray([]);
  album: Album = {} as Album;

  constructor(private albumService: AlbumServiceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.albumForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      artist: "",
      bio: "",
      image: "",
      releaseYear: 0,
      tracks: this.fb.array([new FormGroup({
        title: new FormControl(''),
        length: new FormControl()
      })])
    })
  }

 get tracks() {
   return this.albumForm.get('tracks') as FormArray;
 }
  addTrack(){
    const trackOb = new FormGroup({
      title: new FormControl(''),
      length: new FormControl()
    })

    this.tracks.push(trackOb);
  }

  save(){
    console.log(this.albumForm);
  }
}
