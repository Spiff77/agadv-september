import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Message} from '../../../../../shared/model/user.message';
import {CardModule} from 'primeng/card';
import { WsService } from '../../ws.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    FormsModule,
    CardModule
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent{
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
