import {inject, Injectable} from '@angular/core';
import {AlbumService} from '../../services/album.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadAlbumsStart, loadAlbumsSuccess} from './album.actions';
import {exhaustMap, map} from 'rxjs';


@Injectable()
export class AlbumEffect {

  albumService = inject(AlbumService)
  actions$ = inject(Actions)

  loadAlbum$ = createEffect(() => this.actions$
    .pipe(
      ofType(loadAlbumsStart),
      exhaustMap(() => this.albumService.findAll()
        .pipe(
          map(albums => loadAlbumsSuccess({albums}))
        )
      )
    )
  )
}
