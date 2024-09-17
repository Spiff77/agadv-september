import {Inject, Injectable, InjectionToken} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {UUID} from 'angular2-uuid';

export const CHANNEL = new InjectionToken<string>('CHANNEL', {
  providedIn: 'root',
  factory: () => 'GENERAL'
});

@Injectable({
  providedIn: 'root',
})
export class WsService {

  private uuidValue!:string;
  private _username: string = '';
  private URL!:string;
  private webSocketSubject!:WebSocketSubject<any>;

  constructor(@Inject(CHANNEL) private channel: string) {
    this.connect()
  }

  private connect() {
    if(this._username === undefined) {
      this._username = 'ANONYMOUS';
    }
    this.uuidValue = UUID.UUID();
    this.URL = `ws://localhost:3001/ws`;
    this.webSocketSubject = webSocket(this.URL);
    this.webSocketSubject.next({type: 'connect', uuid: this.uuidValue, username: this.username, channel: this.channel});
  }

  set username(value: string) {
    this._username = value;
  }
  get username() {
    return this._username
  }

  sendMessage(message: string) {
    this.webSocketSubject.next({type: 'send',uuid: this.uuidValue, text: message, username: this.username, channel: this.channel});
  }

  getWs() {
    return this.webSocketSubject.asObservable();
  }
}
