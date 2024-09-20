import {Component, inject, Input, OnInit} from '@angular/core';
import {AlbumCommentsService} from '../../../services/album-comments.service';
import {Comment} from '../../../model/comment.model';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class CommentsComponent implements OnInit{

  albumCommentsService = inject(AlbumCommentsService)

  @Input() albumId!: number;
  comments : Comment[] = []

  ngOnInit(){
    this.albumCommentsService.findAllByAlbumId(this.albumId).subscribe(comments => {
      this.comments = comments
    })
  }

}
