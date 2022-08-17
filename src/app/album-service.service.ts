import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError, of } from 'rxjs';
import { Album } from './album';
import { Comment } from './comment/comment'

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  apiUrl = "https://localhost:7094/album";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };


  constructor(private http: HttpClient) { }


  // addComment(albumId: number, author: string, content: string){
  //   let album = MockAlbumData.find(x => x.id == albumId);

  //   let comment = {} as Comment;
  //   comment.author = author;
  //   comment.content = content;
  //   album?.comment.push(comment)
  //   return of(comment);
  // }

  getApiAlbums(): Observable<Album[]>{
    return this.http.get(this.apiUrl).pipe(
      map(data => data as Album[])
    );
  }

  getApiAlbum(id: number){
    return this.http.get(this.apiUrl + `/${id}`).pipe(
      map(data => data as Album)
    );
  }

  getApiTopTenAlbums(): Observable<Album[]>{
    return this.http.get(this.apiUrl + "/gettoptenalbums").pipe(
      map(data => data as Album[])
    );
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl + "/create", album)
  }

  deleteAlbum(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + "/delete/" + id);
  }
}
