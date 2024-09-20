import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testingkarma';


  unregister(){
    if('serviceWorker' in navigator){
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for(const registration of registrations){
          registration.unregister();
        }
      })
    }
  }
}
