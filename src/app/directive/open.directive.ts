import {Directive, HostListener, Input} from '@angular/core';
import {MainService} from '../api/main.service';

@Directive({
  selector: '[open]'
})
export class OpenDirective {
  @Input() open: any[];
  @Input() trigger = 'click';

  constructor(
    private main: MainService
  ) {
  }

  @HostListener('click')
  click() {
    if (this.trigger === 'click') {
      this.main.open(this.open);
    }
  }

  @HostListener('touchstart')
  touch() {
    if (this.trigger === 'touch') {
      this.main.open(this.open);
    }
  }
}
