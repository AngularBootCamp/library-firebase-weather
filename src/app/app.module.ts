import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SecondsToDatePipe } from './secondsToDatePipe';
import { WeatherPanelComponent } from './weatherPanel';
import { WeatherScreenComponent } from './weatherScreen';

export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>',

  databaseURL: 'https://publicdata-weather.firebaseio.com/'
};

@NgModule({
  declarations: [WeatherScreenComponent, WeatherPanelComponent, SecondsToDatePipe],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [WeatherScreenComponent]
})
export class AppModule { }
