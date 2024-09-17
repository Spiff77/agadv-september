import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Message} from '../../../../../shared/model/user.message';
import {CardModule} from 'primeng/card';

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
