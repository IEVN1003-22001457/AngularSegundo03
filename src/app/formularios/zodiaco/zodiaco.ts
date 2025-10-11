export class Zodiaco {

  nombre:string = '';
  apeM:string = '';
  apeP:string = '';
  fDia:number = 0;
  fMes:number = 0;
  fAnio:number = 0;

  nombreCompleto:string = '';
  Edad:number = 0;
  signoE:string[] = [ '', '' ]

  signos:any[]=[
    {numero:'0', nombre:'La Rata', img:'https://www.losarcanos.com/horoscopo_chino_clip_image001.gif'},
    {numero:'1', nombre:'El Buey', img:'https://www.losarcanos.com/horoscopo_chino_clip_image002.gif'},
    {numero:'2', nombre:'El Tigre', img:'https://www.losarcanos.com/horoscopo_chino_clip_image003.gif'},
    {numero:'3', nombre:'El Conejo', img:'https://www.losarcanos.com/horoscopo_chino_clip_image004.gif'},
    {numero:'4', nombre:'El Dragón', img:'https://www.losarcanos.com/horoscopo_chino_clip_image005.gif'},
    {numero:'5', nombre:'La Serpiente', img:'https://www.losarcanos.com/horoscopo_chino_clip_image006.gif'},
    {numero:'6', nombre:'El Caballo', img:'https://www.losarcanos.com/horoscopo_chino_clip_image007.gif'},
    {numero:'7', nombre:'La Cabra', img:'https://www.losarcanos.com/horoscopo_chino_clip_image008.gif'},
    {numero:'8', nombre:'El Mono', img:'https://www.losarcanos.com/horoscopo_chino_clip_image009.gif'},
    {numero:'9', nombre:'El Gallo', img:'https://www.losarcanos.com/horoscopo_chino_clip_image010.gif'},
    {numero:'10', nombre:'El Perro', img:'https://www.losarcanos.com/horoscopo_chino_clip_image011.gif'},
    {numero:'11', nombre:'El jabalí', img:'https://www.losarcanos.com/horoscopo_chino_clip_image012.gif'}
  ]

  calcular(): void{
    //Nombre completo
    this.nombreCompleto = `${this.nombre} ${this.apeP} ${this.apeM}`;

    //Calcular la edad
    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1; // Aqui se suma 1 porque los meses van de 0 a 11
    const diaActual = hoy.getDate();

    if(this.fMes > mesActual){

      this.Edad = anioActual - this.fAnio - 1;

    }else if(this.fMes == mesActual && this.fDia > diaActual){

      this.Edad = anioActual - this.fAnio - 1;

    }else{

      this.Edad = anioActual - this.fAnio;

    }



    for (let signo of this.signos) {
      if (parseInt(signo.numero) == ((this.fAnio - 4) % 12)) {
        this.signoE[0] = signo.nombre;
        this.signoE[1] = signo.img;
      }
    }

  }




}
