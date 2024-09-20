import {createAction, createReducer, on, props} from '@ngrx/store';
import {Album} from '../../model/album.model';

export const loadAlbums = createAction('[Album] Loading Albums Started');
export const loadingAlbumsSucceeded = createAction('[Album] Loading Albums Succeeded', props<{albums: Album[]}>());
