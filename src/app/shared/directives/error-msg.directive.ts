import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor:string){
    
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor:string){

    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor:boolean){

    if(valor === false){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit():void {

    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {

    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {

    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setEstilo(): void {

    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
