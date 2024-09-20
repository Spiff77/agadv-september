import {ChangeDetectionStrategy, Component, effect, inject, input, OnInit, signal, WritableSignal} from '@angular/core';
import {AlbumCommentsService} from '../../../services/album-comments.service';
import {Comment} from '../../../model/comment.model';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent{

  albumCommentsService = inject(AlbumCommentsService)

  albumId = input.required<number>();
  comments: WritableSignal<Comment[] | undefined> = signal([])

  constructor() {
    effect(() => {
      if(this.albumId()){
        this.albumCommentsService.findAllByAlbumId(this.albumId()).subscribe(c => this.comments.set(c))
      }
    });
  }

}
