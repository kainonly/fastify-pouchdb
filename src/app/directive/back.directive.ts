import {Directive, HostListener, Input} from '@angular/core';
import {MainService} from "../api/main.service";

@Directive({
  selector: '[back]'
})
export class BackDirective {
  @Input() trigger = 'click';

  constructor(
    private main: MainService
  ) {
  }

  @HostListener('click')
  click() {
    this.main.back();
  }


  @HostListener('touchstart')
  touch() {
    if (this.trigger === 'touch') {
      this.main.back();
    }
  }
}
