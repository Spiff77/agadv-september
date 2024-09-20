import {ChangeDetectionStrategy, Component, effect, inject, OnInit, signal, Signal,} from '@angular/core';
import {Album} from '../../../model/album.model';
import {AddComponent} from '../../dialog/album/add/add.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DetailComponent} from '../../dialog/album/detail/detail.component';
import {AlbumCart, CartStore} from '../../../store/cart.store';
import {AsyncPipe, JsonPipe, NgOptimizedImage, SlicePipe} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {AlbumStore} from '../../../store/album.store';
import {MatChipsModule} from '@angular/material/chips';
import {ActivatedRoute} from '@angular/router';

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

  private albumStore = inject(AlbumStore)
  private cartStore = inject(CartStore)
  private dialogService = inject(MatDialog);
  private route  = inject(ActivatedRoute)
  albums: Signal<Album[]> =  this.albumStore.albums
  cartAlbums: Signal<AlbumCart[]> = this.cartStore.albums

  private dialogRef!:MatDialogRef<AddComponent>

  ngOnInit() {
    console.log( this.route.snapshot.data['albums'])
  }

  addToCart(album: Album) {
    this.cartStore.addAlbum({...album});

  }

  getQuantityInCart(album: Album): Signal<number>{
    let find = this.cartAlbums().find(a => a.id === album.id);
    return signal(find ? find.quantity : 0)
  }

  addAlbum() {
    this.dialogRef = this.dialogService.open(AddComponent);
    this.dialogRef.afterClosed().subscribe(() => {
      this.albumStore.loadAllAlbums();
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
