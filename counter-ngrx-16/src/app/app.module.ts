import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {counterReducer} from './store/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { CounterFormComponent } from './counter-form/counter-form.component';
import {FormsModule} from '@angular/forms';
import { CounterDisplayNameComponent } from './counter-display-name/counter-display-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterFormComponent,
    CounterDisplayNameComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counterStore: counterReducer,
    }, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
