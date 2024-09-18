import {Component, ElementRef, inject, Injector, input, viewChild} from '@angular/core';
import {Message} from '../../../../../shared/model/user.message';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {CHANNEL, WsService } from '../../ws.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    FormsModule,
    CardModule
  ],
  providers:[
    WsService,
    {provide: CHANNEL, useValue:'MUSIC'}
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {

  private ws = inject(WsService)
  private ws$!: Observable<any>

  messages: Message[] = [];
  username!:string;
  message: any;

  startChat(): void {
    this.ws.username = this.username
    this.ws$ = this.ws.getWs()
    this.ws$.subscribe(message => {
      this.messages.push(message)
    })
  }

  sendMessage() {
    this.ws.sendMessage(this.message)
    this.message = ''
  }

  setUsername(value: string) {
    this.username = value;
    this.startChat()
  }
}
