import {Component, inject, OnInit} from '@angular/core';
import {Album} from '../../../model/album.model';
import {AddComponent} from '../../dialog/album/add/add.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DetailComponent} from '../../dialog/album/detail/detail.component';
import {Store} from '@ngrx/store';
import {addAlbum} from '../../../store/cart/cart.actions';
import {async, map, Observable} from 'rxjs';
import {CartState} from '../../../store/cart/cart.reducer';
import {selectProductById} from '../../../store/cart/cart.selectors';
import {loadAlbumsStart} from '../../../store/album/album.actions';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  private store = inject(Store<{ cartstore: CartState, albumstore: Album[] }>);
  private dialogService = inject(MatDialog);
  albums$!: Observable<Album[]>;
  dialogRef!:MatDialogRef<AddComponent>


  ngOnInit() {
    this.store.dispatch(loadAlbumsStart());
    this.albums$ = this.store.select('albumstore')
  }

  addToCart(album: Album) {
    console.log(album)
    this.store.dispatch(addAlbum({album}));
  }

  getQuantityInCart(album: Album): Observable<number> {
    return this.store.select(selectProductById(album.id)).pipe(
      map(album => album ? album.quantity : 0))
  }

  addAlbum() {
    this.dialogRef = this.dialogService.open(AddComponent);
    this.dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(loadAlbumsStart());
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
