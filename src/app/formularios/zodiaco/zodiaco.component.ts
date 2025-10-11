import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Zodiaco } from './zodiaco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  imports: [CommonModule ,FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario! : FormGroup;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apeP: new FormControl(''),
      apeM: new FormControl(''),

      fDia: new FormControl(''),
      fMes: new FormControl(''),
      fAnio: new FormControl(''),

      sexo: new FormControl('0'),
    })
  }

  impreso:number = 0;
  nombreCompleto : string = "";
  edad : number = 0;
  signoE:string[] = [ '', '' ]


  zodiac = new Zodiaco();

  imprimir(): void{
    this.impreso = 1;

    this.zodiac.nombre = this.formulario.value.nombre;
    this.zodiac.apeM = this.formulario.value.apeP;
    this.zodiac.apeP = this.formulario.value.apeM;
    this.zodiac.fDia = this.formulario.value.fDia;
    this.zodiac.fMes = this.formulario.value.fMes;
    this.zodiac.fAnio = this.formulario.value.fAnio;
    this.zodiac.calcular();
    this.nombreCompleto = this.zodiac.nombreCompleto;
    this.edad = this.zodiac.Edad;

    this.signoE[0] = this.zodiac.signoE[0];
    this.signoE[1] = this.zodiac.signoE[1];
  }
}
