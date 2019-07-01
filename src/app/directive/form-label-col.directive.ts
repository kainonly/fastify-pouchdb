import {Directive, Input, OnInit} from '@angular/core';
import {NzFormLabelComponent} from "ng-zorro-antd";
import {ConfigService} from "../api/config.service";

@Directive({
  selector: '[formLabelCol]'
})
export class FormLabelColDirective implements OnInit {
  private col: any;
  @Input() formLabelCol: string;

  constructor(
    private nzFormLabelComponent: NzFormLabelComponent,
    private configService: ConfigService,
  ) {
  }

  ngOnInit() {
    if (this.formLabelCol !== undefined && this.configService.formLabelCol.hasOwnProperty(this.formLabelCol)) {
      this.col = this.configService.formLabelCol[this.formLabelCol];
    } else {
      this.col = this.configService.formLabelCol.common;
    }

    this.nzFormLabelComponent.nzXs = this.col.hasOwnProperty('nzXs') ? this.col.nzXs : null;
    this.nzFormLabelComponent.nzSm = this.col.hasOwnProperty('nzSm') ? this.col.nzSm : null;
    this.nzFormLabelComponent.nzMd = this.col.hasOwnProperty('nzMd') ? this.col.nzMd : null;
    this.nzFormLabelComponent.nzLg = this.col.hasOwnProperty('nzLg') ? this.col.nzLg : null;
    this.nzFormLabelComponent.nzXl = this.col.hasOwnProperty('nzXl') ? this.col.nzXl : null;
    this.nzFormLabelComponent.nzXXl = this.col.hasOwnProperty('nzXXl') ? this.col.nzXXl : null;
    this.nzFormLabelComponent.setClassMap();
  }
}
