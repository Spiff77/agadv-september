import {Component, inject, Inject} from '@angular/core';
import {Album} from '../../../../model/album.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AlbumCommentsService} from '../../../../services/album-comments.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  showComments = false;

  albumCommentsService: AlbumCommentsService= inject(AlbumCommentsService)

  constructor(@Inject(MAT_DIALOG_DATA) public data: {album:Album}) {
  }


}
