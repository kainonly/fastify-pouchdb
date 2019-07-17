import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScriptTaskComponent} from './script-task.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: ScriptTaskComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScriptTaskComponent]
})
export class ScriptTaskModule {
}
