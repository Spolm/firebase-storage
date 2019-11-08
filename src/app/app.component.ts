import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FirebaseStorageService } from './firebase-storage.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentReference } from '@angular/fire/firestore';
import { Todo } from './todo/models/todo';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
import { TodoService } from './todo/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal, private firebaseStorage: FirebaseStorageService,
    private todoService: TodoService) {  }

    ngOnInit(){
      this.todoForm = this.formBuilder.group({ 
        title: ['',Validators.required],
        description: ['',Validators.required],
        done: false
      });
    }

    saveTodo() {
      if (this.todoForm.invalid){
        return;
      }
      let todo: Todo = this.todoForm.value;
      todo.lastModifiedDate = new Date();
      this.todoService.saveTodo(todo)
        .then(response => this.handleSuccessfulSaveTodo(response, todo))
        .catch(err => console.error(err));
    }

    handleSuccessfulSaveTodo(response: DocumentReference, todo: Todo) {
      this.activeModal.dismiss({ todo: todo, id: response.id });
    }


  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  //Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  //Sube el archivo a Cloud Storage
  public subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
    });
  }
}