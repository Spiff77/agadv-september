import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from 'primeng/button';
import {GeneralComponent} from './chat/general/general.component';
import {MusicComponent} from './chat/music/music.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, GeneralComponent, MusicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
