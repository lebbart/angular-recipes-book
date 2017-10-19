import {Directive, HostListener, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective {
  areadyClicked: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') click(eventData: Event) {
    this.areadyClicked = !this.areadyClicked;
    if (this.areadyClicked) {
      this.renderer.setAttribute(this.elRef.nativeElement.querySelector('ul'), 'class', 'display-dropdown');
    } else {
      this.renderer.setAttribute(this.elRef.nativeElement.querySelector('ul'), 'class', 'hide-dropdown');
    }
  }
}
