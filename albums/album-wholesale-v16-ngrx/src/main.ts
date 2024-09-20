import { AppComponent } from './app/app.component';
import {bootstrapApplication } from '@angular/platform-browser';
import {appconfig} from './app/app.config';



bootstrapApplication(AppComponent, appconfig)
  .catch(err => console.error(err));
