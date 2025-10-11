import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AporB } from './AporB';

@Component({
  selector: 'app-apor-b',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent {
  // Se abre una variable para el formulario que sea del tipo FormGroup que nunca debe de ser nula
  formularioAporB!:FormGroup;
  resultadoAporB!:number;


  //Empezar a inicializar el formGroup como un nuevo grupo y con variables para usar dentro del form donde se use el FormGroup
  ngOnInit(): void {
    this.formularioAporB = new FormGroup({
      a: new FormControl(''),
      b: new FormControl(''),
    });
  }

  AporB = new AporB();

  Calcular():void{
    this.AporB.a = this.formularioAporB.value.a;
    this.AporB.b = this.formularioAporB.value.b;

    this.AporB.calculoAporB();
    this.resultadoAporB = this.AporB.resultadoAporB;

  }
}
