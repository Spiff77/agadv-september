import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../model/album.model';



@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  http = inject(HttpClient)

  findAll(): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:3000/albums');
  }

  findById(id: number): Observable<Album> {
    return this.http.get<Album>(`http://localhost:3000/albums/${id}`);
  }

  save(album: Album): Observable<Album> {
    return this.http.post<Album>('http://localhost:3000/albums', album);
  }

  update(album: Album): Observable<Album> {
    return this.http.put<Album>(`http://localhost:3000/albums/${album.id}`, album);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/albums/${id}`);
  }
}
