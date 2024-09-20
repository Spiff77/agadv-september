import {Component, inject, OnInit} from '@angular/core';
import {AlbumService} from '../../../services/album.service';
import {Album} from '../../../model/album.model';
import {CartService} from '../../../services/cart.service';
import {AddComponent} from '../../dialog/album/add/add.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DetailComponent} from '../../dialog/album/detail/detail.component';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  private albumService = inject(AlbumService);
  private cartService = inject(CartService);
  private dialogService = inject(MatDialog);
  albums: Album[] = []
  dialogRef!:MatDialogRef<AddComponent>


  ngOnInit() {
    this.albumService.findAll().subscribe(albums => {
      this.albums = albums;
    });
  }

  addToCart(album: Album) {
    this.cartService.add(album);
  }

  getQuantityInCart(album: Album): number {
    return this.cartService.getQuantityInCart(album);
  }

  addAlbum() {
    this.dialogRef = this.dialogService.open(AddComponent);
    this.dialogRef.afterClosed().subscribe(() => {
      this.albumService.findAll().subscribe(albums => {
        this.albums = albums;
      });
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
