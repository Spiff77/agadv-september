import {Component, inject, OnInit} from '@angular/core';
import {AlbumCart, CartService} from '../../../services/cart.service';
import {Album} from '../../../model/album.model';
import {
  concatMap,
  exhaustMap,
  finalize,
  interval,
  map,
  mergeMap,
  of,
  Subject,
  switchAll,
  switchMap,
  takeWhile,
  tap
} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartservice = inject(CartService);
  cart:AlbumCart[] = this.cartservice.cartAlbums;
  displayedColumns: string[] = ['id', 'name', 'artist', 'price', 'quantity', 'totalprice'];

  startProcess$ = new Subject<number>()
  process$ = interval(400).pipe(
    takeWhile(v => (v*10) <= 100 ),
  );
  processProgression = 0;
  processId = 0

  ngOnInit() {
    this.startProcess$.pipe(
      exhaustMap(id => {
        return this.process$.pipe(map(v => {
          this.processProgression =  v == 0 ? 1 : (v*10);
          return {id, progression: v*10}
        }),
      )}),
    ).subscribe(v => {
      this.processId = v.id
      this.processProgression = v.progression
    })
  }

  process() {
    const processid = Math.round(Math.random()*1000000000);
    this.startProcess$.next(processid);
  }
}
