import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure-delete',
  templateUrl: './are-you-sure-delete.component.html',
  styleUrls: ['./are-you-sure-delete.component.css']
})
export class AreYouSureDeleteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

}
