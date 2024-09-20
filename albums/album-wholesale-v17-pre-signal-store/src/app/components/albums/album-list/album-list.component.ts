import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit, Signal,
} from '@angular/core';
import {Album} from '../../../model/album.model';
import {AddComponent} from '../../dialog/album/add/add.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DetailComponent} from '../../dialog/album/detail/detail.component';
import {Store} from '@ngrx/store';
import {addAlbum} from '../../../store/cart/cart.actions';
import {fromEvent, map, Observable} from 'rxjs';
import {Cart} from '../../../store/cart/cart.reducer';
import {selectProductById} from '../../../store/cart/cart.selectors';
import {loadAlbums} from '../../../store/album/album.actions';
import {AsyncPipe, JsonPipe, SlicePipe} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    SlicePipe,
    AsyncPipe,
    MatButtonModule,
    JsonPipe,
    MatChipsModule,
  ],
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{

  private store = inject(Store<{ cartstore: Cart, albumstore: Album[] }>);
  private dialogService = inject(MatDialog);
  dialogRef!:MatDialogRef<AddComponent>

  albums: Signal<Album[]> = toSignal(this.store.select('albumstore'));

  constructor() {
    this.store.dispatch(loadAlbums());
  }

  ngOnInit() {
    this.store.dispatch(loadAlbums());
  }

  addToCart(album: Album) {
    this.store.dispatch(addAlbum({album}));
    console.log('Adding to cart')
  }

  getQuantityInCart(album: Album): Observable<number> {
    return this.store.select(selectProductById(album.id)).pipe(
      map(album => album ? album.quantity : 0))
  }

  addAlbum() {
    this.dialogRef = this.dialogService.open(AddComponent);
    this.dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(loadAlbums());
    });
  }

  openDetailModal(album: Album): void {
    this.dialogService.open(DetailComponent, {
      data: {
        album: album
      }
    });
  }






}
