import {ChangeDetectionStrategy, Component, inject, Inject} from '@angular/core';
import {Album} from '../../../../model/album.model';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {AlbumCommentsService} from '../../../../services/album-comments.service';
import {CommentsComponent} from '../../../albums/comments/comments.component';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogModule,
    CommentsComponent,
    MatButtonModule
],
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  showComments = false;

  albumCommentsService: AlbumCommentsService= inject(AlbumCommentsService)

  constructor(@Inject(MAT_DIALOG_DATA) public data: {album:Album}) {
  }


}
