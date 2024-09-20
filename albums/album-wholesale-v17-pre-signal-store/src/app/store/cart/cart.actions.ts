import {createAction, props, union} from '@ngrx/store';
import {Album} from '../../model/album.model';

export const addAlbum = createAction('[Cart] Add Album', props<{album: Album}>())
export const removeAlbum = createAction('[Cart] Remove Album', props<{album: Album}>())
