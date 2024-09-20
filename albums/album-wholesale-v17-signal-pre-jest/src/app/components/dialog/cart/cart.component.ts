import {ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {interval, map, mergeMap, Subject, takeWhile} from 'rxjs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {DecimalPipe} from '@angular/common';
import {CartStore} from '../../../store/cart.store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
    DecimalPipe
],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private cartStore = inject(CartStore)
  cart = this.cartStore.albums
  displayedColumns: string[] = ['id', 'name', 'artist', 'price', 'quantity', 'totalprice'];
  startProcess$ = new Subject<number>()
  process$ =
    interval(400).pipe(
    takeWhile(v => (v*10) <= 100 ),
  )
  processProgression = signal(0);
  processId = signal(0);

  ngOnInit() {
    this.startProcess$.pipe(
      mergeMap(id => {
        return this.process$.pipe(map(v => {
          return {id, progression: v*10}
        }),)}),
    ).subscribe( v => {
      this.processId.set(v.id)
      this.processProgression.set(v.progression)
    })
  }

  process() {
    const processid = Math.round(Math.random()*1000000000);
    this.startProcess$.next(processid);
  }
}
