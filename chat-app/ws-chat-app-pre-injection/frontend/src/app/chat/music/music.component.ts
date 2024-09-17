import {Component, ElementRef, inject, Injector, input, viewChild} from '@angular/core';
import {Message} from '../../../../../shared/model/user.message';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    FormsModule,
    CardModule
  ],
  providers:[
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  messages: Message[] = [];
  username!:string;

  message: any;

  startChat(): void {

  }

  sendMessage() {
    this.message = ''
  }

  setUsername(value: string) {
    this.username = value;
    this.startChat()
  }
}
