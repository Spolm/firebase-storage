import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment' 
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [],
  providers: [NgbActiveModal, AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [TodoFormComponent],
})
export class AppModule { }
