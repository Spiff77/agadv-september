import {createAction, props} from '@ngrx/store';
import {Album} from '../../model/album.model';


export const loadAlbumsStart = createAction('[Album] Starting loading albums') // purpose: Begin called by dispatch in the component and to trigger an effect
export const loadAlbumsSuccess = createAction('[Album] Success loading albums', props<{albums: Album[]}>()) // purpose: Load data from our effect to the state using the reducer
