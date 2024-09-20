import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {filter} from 'rxjs';
import {AlbumStore} from '../store/album.store';
import {toObservable} from '@angular/core/rxjs-interop';

export const loadAlbumsResolver: ResolveFn<any> =  (route, state) => {

  let albumStore = inject(AlbumStore);
  albumStore.loadAllAlbums()

  return  toObservable(albumStore.albums)
    .pipe(
      filter(c => c.length > 0)
    )
};
