import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Image } from './image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UploadTest';
  ref: any;
  image: Image;
  uploadProgress: any;
  downloadURL: any;
  constructor(private afStorage: AngularFireStorage) { }
  upload(event) {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    this.ref = this.afStorage.ref(randomId);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.image = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.ref.percentageChanges();
    this.downloadURL = this.ref.downloadURL();
  }

}
