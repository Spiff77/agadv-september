import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors
} from '@angular/forms';
import {AlbumService} from '../../../services/album.service';
import {Router} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {AlbumFireService} from '../../../services/album.fire.service';


@Component({
  selector: 'app-album-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss']
})
export class AlbumAddComponent {

  private fb = inject(FormBuilder);
  private albumService = inject(AlbumFireService);
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

  albumExistValidator(albumService:AlbumService | AlbumFireService ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null>  => {
      let group = control as FormGroup
      return albumService.isAlbumExist(group.get('artist')?.value, group.get('name')?.value).pipe(
        map(exist => exist ? {albumExist: true} : null)
      )
    }
  }

}
