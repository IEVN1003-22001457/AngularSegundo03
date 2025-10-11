import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  // Para poder utilizar los forms reactivos se debe de poner en imports el "ReactiveFormsModule"
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  // Se abre una variable para el formulario que sea del tipo FormGroup que nunca debe de ser nula
  formulario!:FormGroup;
  resultado!:number;


  //Empezar a inicializar el formGroup como un nuevo grupo y con variables para usar dentro del form donde se use el FormGroup
  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      x2: new FormControl(''),
      y1: new FormControl(''),
      y2: new FormControl(''),
    });
  }

  distancia = new Distancia();

  Calcular():void{
    this.distancia.x1 = this.formulario.value.x1;
    this.distancia.x2 = this.formulario.value.x2;
    this.distancia.y1 = this.formulario.value.y1;
    this.distancia.y2 = this.formulario.value.y2;

    this.distancia.calculo();
    this.resultado = this.distancia.resultado;

  }
/* ---------------------------------------------------------------Formulario Reactivo

  formulario!:FormGroup;
  resultado!:number;
  constructor() { }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
  }
  multNumeros():void{
    const numero1=this.formulario.get('numero1')?.value;
    const numero2=this.formulario.get('numero2')?.value;
    this.resultado=numero1*numero2;
  } */
}
