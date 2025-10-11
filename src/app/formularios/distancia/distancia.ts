export class Distancia{
  resultado:number = 0;

  x1:number = 0;
  x2:number = 0;
  y1:number = 0;
  y2:number = 0;

  calculo():void{
    this.resultado= Math.sqrt( ((this.x2 - this.x1)**2) + ((this.y2 - this.y1)**2));
  }
}
