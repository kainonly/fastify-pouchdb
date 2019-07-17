import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScriptTaskEditComponent} from './script-task-edit.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: ScriptTaskEditComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScriptTaskEditComponent]
})
export class ScriptTaskEditModule {
}
