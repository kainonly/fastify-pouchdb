import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';

import {FormLabelColDirective} from './directive/form-label-col.directive';
import {FormControlColDirective} from './directive/form-control-col.directive';
import {BackDirective} from './directive/back.directive';
import {OpenDirective} from './directive/open.directive';

@NgModule({
  imports: [
    MonacoEditorModule
  ],
  declarations: [
    FormLabelColDirective,
    FormControlColDirective,
    BackDirective,
    OpenDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormLabelColDirective,
    FormControlColDirective,
    OpenDirective,
  ],
})
export class AppExtModule {
}
