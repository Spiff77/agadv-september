import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {AlbumService} from '../../../../services/album.service';
import {Album} from '../../../../model/album.model';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    SlicePipe
],
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  private albumService = inject(AlbumService);
  private matDialogRef = inject(MatDialog);
  private albums= signal<Album[]>([])

  /* look at available albums in api/db.json and add 5 more in this array */
  albumAsideAvailable = signal([
    {
      "id": 20,
      "name": "Electric Ladyland",
      "artist": "Jimi Hendrix",
      "description": "Electric Ladyland is the third and final studio album by the Jimi Hendrix Experience, released on October 16, 1968",
      "price": 23.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 21,
      "name": "London Calling",
      "artist": "The Clash",
      "description": "London Calling is the third studio album by English rock band the Clash, released on 14 December 1979",
      "price": 24.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 43,
      "name": "Sgt. Pepper's Lonely Hearts Club Band",
      "artist": "The Beatles",
      "description": "Sgt. Pepper's Lonely Hearts Club Band is the eighth studio album by the English rock band the Beatles, released on 26 May 1967",
      "price": 28.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 44,
      "name": "The Doors",
      "artist": "The Doors",
      "description": "The Doors is the debut album by the American rock band the Doors, released on January 4, 1967",
      "price": 26.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 45,
      "name": "Highway 61 Revisited",
      "artist": "Bob Dylan",
      "description": "Highway 61 Revisited is the sixth studio album by American singer-songwriter Bob Dylan, released on August 30, 1965",
      "price": 24.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 46,
      "name": "Court and Spark",
      "artist": "Joni Mitchell",
      "description": "Court and Spark is the sixth studio album by Canadian singer-songwriter Joni Mitchell, released on January 1, 1974",
      "price": 25.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 47,
      "name": "Aja",
      "artist": "Steely Dan",
      "description": "Aja is the sixth studio album by the American jazz rock band Steely Dan, released on September 23, 1977",
      "price": 27.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 48,
      "name": "Kind of Blue",
      "artist": "Miles Davis",
      "description": "Kind of Blue is a studio album by American jazz trumpeter Miles Davis, released on August 17, 1959",
      "price": 23.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 49,
      "name": "Rum Sodomy & the Lash",
      "artist": "The Pogues",
      "description": "Rum Sodomy & the Lash is the second studio album by the London-based folk punk band the Pogues, released on 5 August 1985",
      "price": 21.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 50,
      "name": "Ziggy Stardust",
      "artist": "David Bowie",
      "description": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars is the fifth studio album by English musician David Bowie, released on June 16, 1972",
      "price": 26.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 51,
      "name": "The Dark Side of the Moon",
      "artist": "Pink Floyd",
      "description": "The Dark Side of the Moon is the eighth studio album by English rock band Pink Floyd, released on 1 March 1973",
      "price": 29.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 52,
      "name": "Back in Black",
      "artist": "AC/DC",
      "description": "Back in Black is the seventh studio album by Australian rock band AC/DC, released on 25 July 1980",
      "price": 30.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 53,
      "name": "Thriller",
      "artist": "Michael Jackson",
      "description": "Thriller is the sixth studio album by American singer Michael Jackson, released on November 30, 1982",
      "price": 31.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 54,
      "name": "A Night at the Opera",
      "artist": "Queen",
      "description": "A Night at the Opera is the fourth studio album by the British rock band Queen, released on 21 November 1975",
      "price": 28.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 55,
      "name": "Born to Run",
      "artist": "Bruce Springsteen",
      "description": "Born to Run is the third studio album by American singer-songwriter Bruce Springsteen, released on August 25, 1975",
      "price": 29.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 56,
      "name": "Nevermind",
      "artist": "Nirvana",
      "description": "Nevermind is the second studio album by American rock band Nirvana, released on September 24, 1991",
      "price": 26.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 57,
      "name": "Hotel California",
      "artist": "Eagles",
      "description": "Hotel California is the fifth studio album by American rock band the Eagles, released on December 8, 1976",
      "price": 27.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 58,
      "name": "Blood on the Tracks",
      "artist": "Bob Dylan",
      "description": "Blood on the Tracks is the fifteenth studio album by American singer-songwriter Bob Dylan, released on January 20, 1975",
      "price": 24.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 59,
      "name": "The Rise and Fall of Ziggy Stardust",
      "artist": "David Bowie",
      "description": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars is the fifth studio album by English musician David Bowie, released on June 16, 1972",
      "price": 25.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 60,
      "name": "Blue",
      "artist": "Joni Mitchell",
      "description": "Blue is the fourth studio album by Canadian singer-songwriter Joni Mitchell, released on June 22, 1971",
      "price": 22.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 61,
      "name": "Bridge over Troubled Water",
      "artist": "Simon & Garfunkel",
      "description": "Bridge over Troubled Water is the fifth and final studio album by American folk rock duo Simon & Garfunkel, released on January 26, 1970",
      "price": 23.90,
      "tags": ["rock", "pop", "classic"]
    },
    {
      "id": 62,
      "name": "Court and Spark",
      "artist": "Joni Mitchell",
      "description": "Court and Spark is the sixth studio album by Canadian singer-songwriter Joni Mitchell, released on January 1, 1974",
      "price": 26.90,
      "tags": ["rock", "pop", "classic"]
    }
  ])

  ngOnInit() {
    this.albumService.findAll().subscribe(albums => {
      this.albums.set(albums);
    });
  }

  albumsAvailable() {
    return this.albumAsideAvailable().filter(album => this.albums().find(a => a.id === album.id) === undefined);
  }

  makeItAvailable(album: Album) {
    this.albumService.save(album).subscribe(() => {
      this.matDialogRef.closeAll();
    })

  }
}
