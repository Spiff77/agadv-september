import {TestBed, async, waitForAsync, ComponentFixture} from '@angular/core/testing';
import {AlbumListComponent} from './album-list.component';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {AlbumStore} from '../../../store/album.store';
import {signal} from '@angular/core';
import {CartStore} from '../../../store/cart.store';
jest.mock('../../../store/album.store');

describe('MyComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;
  let dialogService: MatDialog;
  let albumStore:any;
  let cartStore:any;
  let album = {
    id: 1,
    name: 'name',
    artist: 'artist',
    description: 'description',
    price: 10,
    tags: ['tag1', 'tag2']
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AlbumListComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter(([])),
        {provide: MatDialog,  useValue: { open: jest.fn() } },
        {provide: AlbumStore, useValue: { albums: signal([]), loadAllAlbums: jest.fn() } },
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AlbumListComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
    dialogService = TestBed.inject(MatDialog);
    albumStore = TestBed.inject(AlbumStore);
    cartStore = TestBed.inject(CartStore);

    cartStore.albums = signal([{...album, quantity: 2}]);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the right quantity of albums when calling getQuantityInCart', () => {
    expect(component.getQuantityInCart(album)()).toBe(2);
    component.addToCart(album)
    expect(component.getQuantityInCart(album)()).toBe(3);
  });

  it('should load albums once the addAlbum method is called', () => {

    const dialogRefMock = {
      afterClosed: jest.fn().mockReturnValue({
        subscribe: (callback: () => void) => callback()
      })
    };
    const dialogSpy = jest.spyOn(dialogService, 'open').mockReturnValue(dialogRefMock as any);
    const albumSpy = jest.spyOn(albumStore, 'loadAllAlbums');

    component.addAlbum()

    expect(dialogSpy).toHaveBeenCalledTimes(1);
    expect(dialogRefMock.afterClosed).toHaveBeenCalledTimes(1);
    expect(albumSpy).toHaveBeenCalledTimes(1);
  });


});
