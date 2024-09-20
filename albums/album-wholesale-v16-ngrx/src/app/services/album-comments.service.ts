import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumCommentsService {

  constructor() { }

  http = inject(HttpClient)

  findAllByAlbumId(albumId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:3000/comments?album_id=' + albumId);
  }
}
