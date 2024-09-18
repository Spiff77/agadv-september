import {Component, inject, Injector, Input, OnInit} from '@angular/core';
import {CHANNEL, WsService} from '../../ws.service';
import {Observable} from 'rxjs';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {PrimeTemplate} from 'primeng/api';
import { Message } from '../../../../../shared/model/user.message';

@Component({
  selector: 'app-custom-chat',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    PrimeTemplate
  ],
  templateUrl: './custom-chat.component.html',
  styleUrl: './custom-chat.component.scss'
})
export class CustomChatComponent implements OnInit{

  @Input() channel = 'GENERAL'

  private ws!: WsService
  private ws$!: Observable<any>

  messages: Message[] = [];
  username!:string;
  message: any;

  ngOnInit(): void {
    const injector = Injector.create({
      providers:[
        {provide: WsService},
        {provide: CHANNEL, useValue: this.channel}
      ]})

    this.ws = injector.get(WsService)
  }

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
