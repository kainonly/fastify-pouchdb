import {Directive, Input, OnInit} from '@angular/core';
import {ConfigService} from '../api/config.service';
import {NzFormControlComponent} from 'ng-zorro-antd';

@Directive({
  selector: '[formControlCol]'
})
export class FormControlColDirective implements OnInit {
  private col: any;
  @Input() formControlCol: string;

  constructor(
    private nzFormControlComponent: NzFormControlComponent,
    private configService: ConfigService,
  ) {
  }

  ngOnInit() {
    if (this.formControlCol !== undefined && this.configService.formControlCol.hasOwnProperty(this.formControlCol)) {
      this.col = this.configService.formControlCol[this.formControlCol];
    } else {
      this.col = this.configService.formControlCol.common;
    }

    this.nzFormControlComponent.nzXs = this.col.hasOwnProperty('nzXs') ? this.col.nzXs : null;
    this.nzFormControlComponent.nzSm = this.col.hasOwnProperty('nzSm') ? this.col.nzSm : null;
    this.nzFormControlComponent.nzMd = this.col.hasOwnProperty('nzMd') ? this.col.nzMd : null;
    this.nzFormControlComponent.nzLg = this.col.hasOwnProperty('nzLg') ? this.col.nzLg : null;
    this.nzFormControlComponent.nzXl = this.col.hasOwnProperty('nzXl') ? this.col.nzXl : null;
    this.nzFormControlComponent.nzXXl = this.col.hasOwnProperty('nzXXl') ? this.col.nzXXl : null;
    this.nzFormControlComponent.setClassMap();
  }
}
