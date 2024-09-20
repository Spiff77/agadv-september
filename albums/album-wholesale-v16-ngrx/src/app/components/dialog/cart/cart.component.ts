import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {interval, map, mergeMap, Subject, takeWhile} from 'rxjs';
import {Store} from '@ngrx/store';
import {AlbumCart, CartState} from '../../../store/cart/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:AlbumCart[] = [];
  cartStore = inject(Store<{ cartstore: CartState }>); //AFTER

  displayedColumns: string[] = ['id', 'name', 'artist', 'price', 'quantity', 'totalprice'];

  startProcess$ = new Subject<number>()
  process$ = interval(400).pipe(
    takeWhile(v => (v*10) <= 100 ),
  );
  processProgression = signal(0);
  processId = signal(0)

  ngOnInit() {
    this.startProcess$.pipe(
      mergeMap(id => {
        return this.process$.pipe(map(v => {
          this.processProgression.set(v == 0 ? 1 : (v*10));
          return {id, progression: v*10}
        }),
        )}),
    ).subscribe(v => {
      this.processId.set(v.id)
      this.processProgression.set(v.progression)
    })

    this.cartStore.select("cartstore").subscribe(cartstore => {
      this.cart = cartstore.albums;
    })
  }

  process() {
    const processid = Math.round(Math.random()*1000000000);
    this.startProcess$.next(processid);
  }
}
