import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() album!: Album;
  
  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];

  constructor() {}

  ngOnInit(): void {

  }


  selectStar(value: any): void{
    // prevent multiple selection
    if ( this.selectedRating === 0){

      this.stars.filter( (star) => {

        if ( star.id <= value){

          star.class = 'star-gold star';

        }else{

          star.class = 'star-gray star';

        }

        return star;
      });

    }
    this.album.timesRated ++;
    this.selectedRating = value;
    this.album.totalRating +=this.selectedRating;
    if(this.album.timesRated == 1){
      this.album.rating = value;
    }
    else
    this.album.rating = this.album.totalRating / this.album.timesRated;
    this.album.rating = Math.round(this.album.rating * 10) / 10;
  }

}

