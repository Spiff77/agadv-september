import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlbumService} from '../../../services/album.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumAddComponent implements OnInit{

  myForm!: FormGroup
  fb = inject(FormBuilder)
  albumService = inject(AlbumService)
  router = inject(Router)

  constructor() {
  }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      artist: '',
      price: 0,
      description: ''
    })
  }

  submitForm() {
    this.albumService.save(this.myForm.value).subscribe(() => {
      this.router.navigate(['/shop'])
    })
  }
}



/*

      "id": "44",
      "name": "The Doors",
      "artist": "The Doors",
      "description": "The Doors is the debut album by the American rock band the Doors, released on January 4, 1967",
      "price": 26.9,
 */
