import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDI9P9RV77HorL1o0tTXZ6dwCtMD1LIA4s",
      authDomain: "uploadtest-a0ebc.firebaseapp.com",
      databaseURL: "https://uploadtest-a0ebc.firebaseio.com",
      projectId: "uploadtest-a0ebc",
      storageBucket: "uploadtest-a0ebc.appspot.com",
      messagingSenderId: "928110400155",
      appId: "1:928110400155:web:9e3d46a3e9fdab70e0ac3e"
   }),
   AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
