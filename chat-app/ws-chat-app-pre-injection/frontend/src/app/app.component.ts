import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from 'primeng/button';
import {GeneralComponent} from './chat/general/general.component';
import {MusicComponent} from './chat/music/music.component';
import {CustomChatComponent} from './chat/custom-chat/custom-chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, GeneralComponent, MusicComponent, CustomChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
