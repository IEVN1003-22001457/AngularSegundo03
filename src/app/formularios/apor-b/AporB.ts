export class AporB{
  a:number = 0;
  b:number = 0;

  resultadoAporB:number = 0;

  calculoAporB():void{
    let suma:number = 0;

    for(let i:number = 0; i < this.b; i++){
      console.log('Si funciona ' + (i + 1));
      suma = suma + this.a;

    }

    this.resultadoAporB = suma;
  }
}
