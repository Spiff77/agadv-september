import {AlbumListComponent} from './album-list.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('AlbumList', () => {

  let component: AlbumListComponent
  let fixture: ComponentFixture<AlbumListComponent>

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

    }).compileComponents()

    fixture = TestBed.createComponent(AlbumListComponent)
    component = fixture.componentInstance

    fixture.detectChanges()


  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });


})
