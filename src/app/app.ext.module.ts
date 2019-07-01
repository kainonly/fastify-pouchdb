import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {FormLabelColDirective} from './directive/form-label-col.directive';
import {FormControlColDirective} from './directive/form-control-col.directive';
import {BackDirective} from './directive/back.directive';
import {OpenDirective} from './directive/open.directive';

@NgModule({
  declarations: [
    FormLabelColDirective,
    FormControlColDirective,
    BackDirective,
    OpenDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormLabelColDirective,
    FormControlColDirective,
    OpenDirective,
  ],
})
export class AppExtModule {
}
