import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadAlbums, loadingAlbumsSucceeded} from './album.actions';
import {catchError, EMPTY, exhaustMap, map} from 'rxjs';
import {AlbumService} from '../../services/album.service';

@Injectable()
export class AlbumEffects {

  loadAlbums$ = createEffect(() => this.actions$.pipe(
      ofType(loadAlbums),
      exhaustMap(() => this.albumService.findAll()
        .pipe(
          map(albums => loadingAlbumsSucceeded({albums})),
          catchError(() => EMPTY))
    )
  ))

  constructor(
    private albumService: AlbumService,
    private actions$: Actions
  ) {}
}
