import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component';
import { RatingComponent } from './rating/rating.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AreYouSureDeleteComponent } from './are-you-sure-delete/are-you-sure-delete.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    HomeComponent,
    CommentComponent,
    RatingComponent,
    CreateAlbumComponent,
    AreYouSureDeleteComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "albums", component: AlbumsComponent},
      {path: "create", component: CreateAlbumComponent},
      {path: "albums/:id", component: AlbumDetailsComponent},
      {path: "", redirectTo: "/home", pathMatch: "full"}
    ]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
