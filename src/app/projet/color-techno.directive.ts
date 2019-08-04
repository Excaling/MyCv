import { Directive, ElementRef, HostListener, Input , Renderer2} from '@angular/core';

//HostListener sert à catch des elements 

//ElementRef: element du dom sur le quel on applique notre directive

@Directive({
  selector: '[ColorTechno]' //s'applique à tout element du dom qui on en attribut la directive (sans crocher = s'applique a tout les balises)
})
export class ColorTechno{
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, 'color', "#FFFFFF");
    }
}