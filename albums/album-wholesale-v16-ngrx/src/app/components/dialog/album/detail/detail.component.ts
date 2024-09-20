import {Component, inject, Inject} from '@angular/core';
import {Album} from '../../../../model/album.model';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {AlbumCommentsService} from '../../../../services/album-comments.service';
import { MatButtonModule } from '@angular/material/button';
import { CommentsComponent } from '../../../albums/comments/comments.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    standalone: true,
    imports: [MatDialogModule, NgIf, CommentsComponent, MatButtonModule]
})
export class DetailComponent {

  showComments = false;

  albumCommentsService: AlbumCommentsService= inject(AlbumCommentsService)

  constructor(@Inject(MAT_DIALOG_DATA) public data: {album:Album}) {
  }


}
