import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AlbumCart, CartService} from './services/cart.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CartComponent} from './components/dialog/cart/cart.component';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Album} from './model/album.model';
import {UpdateSwService} from './services/update-sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cartService = inject(CartService);
  dialogService = inject(MatDialog);
  router = inject(Router);
  updateSwService = inject(UpdateSwService);
  currentRoute: string = ''
  cart:AlbumCart[] = this.cartService.cartAlbums;

  @ViewChild('askforupdate', {read: TemplateRef})
  askforupdate!: TemplateRef<any>;

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.split('/').pop() || '';
      }
    })

    this.updateSwService.getUpdate().subscribe(() => {
      console.log('Update available');
      this.dialogService.open(this.askforupdate, {disableClose: true})
        .afterClosed().subscribe((result: string) => {
        if (result == 'update') {
          window.location.reload();
        }
      })
    })
    }

  openCart() {
    this.dialogService.open(CartComponent);
  }

  addOneInCart(album: Album) {
    this.cartService.add(album);
  }

  removeOneInCart(album: Album) {
    this.cartService.remove(album);
  }

}
