import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormGroup, ReactiveFormsModule,
  ValidationErrors
} from '@angular/forms';
import {AlbumService} from '../../../services/album.service';
import {Router} from '@angular/router';
import {debounce, map, Observable, of} from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CustomDescriptionComponent} from './custom-description/custom-description.component';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-album-add',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './album-add.component.html',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CustomDescriptionComponent,
    JsonPipe
  ],
  styleUrls: ['./album-add.component.scss']
})
export class AlbumAddComponent {

  private fb = inject(FormBuilder);
  private albumService = inject(AlbumService);
  private router = inject(Router);

  albumForm: FormGroup = this.fb.group({
    id: [0],
    name: [''],
    artist: [''],
    description: [''],
    price: [0],
    tags: this.fb.array([])
  }, {asyncValidator: this.albumExistValidator(this.albumService)} as AbstractControlOptions);


  get tags(): FormArray {
    return this.albumForm.get('tags') as FormArray;
  }

  onSubmit() {
    this.albumService.save(this.albumForm.value).subscribe(() => {
      this.router.navigate(['/shop']);
    })
  }

  addTag() {
    this.tags.push(this.fb.control(''));
  }

  albumExistValidator(albumService:AlbumService ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null>  => {
      let group = control as FormGroup
      return albumService.isAlbumExist(group.get('artist')?.value, group.get('name')?.value).pipe(
        map(exist => exist ? {albumExist: true} : null)
      )
    }
  }

}

