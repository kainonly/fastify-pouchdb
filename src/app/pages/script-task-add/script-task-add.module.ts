import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScriptTaskAddComponent} from './script-task-add.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: ScriptTaskAddComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScriptTaskAddComponent]
})
export class ScriptTaskAddModule {
}
