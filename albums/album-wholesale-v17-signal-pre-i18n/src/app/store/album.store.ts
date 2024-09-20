import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {delay, map, pipe, switchMap} from 'rxjs';
import {tapResponse} from '@ngrx/operators';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {Album} from '../model/album.model';
import {inject} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {mapToResolve} from '@angular/router';

export type AlbumState = {
  albums: Album[]
}

export const initialState: AlbumState = {albums : []}

export const AlbumStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, albumService = inject(AlbumService)) => ({
    loadAllAlbums: rxMethod<void>(
      pipe(switchMap(() =>
        albumService.findAll().pipe(
          delay(2000),
          tapResponse({
            next: (albums) => patchState(store, {albums}),
            error: (err) => {
              console.error(err);
            },
          }),
        ))
      )
    ),
      addAlbum:  rxMethod<Album>(
        pipe(switchMap((album) =>
          albumService.save(album).pipe(
            tapResponse({
              next: (album) => patchState(store, {albums: [...store.albums(), album]}),
              error: (err) => {
                console.error(err);
              },
            })
          ))
        )
      )
  })
  )
)


