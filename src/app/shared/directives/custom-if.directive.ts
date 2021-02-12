import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  @Input() set appCustomIf(condicion: boolean){

    if(condicion){
      this.vieContainer.createEmbeddedView(this.templateref);
    } else {
      this.vieContainer.clear();
    }
  }


  constructor(private templateref: TemplateRef<HTMLElement>,
              private vieContainer: ViewContainerRef) { 
  }

}
