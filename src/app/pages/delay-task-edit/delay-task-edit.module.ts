import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelayTaskEditComponent} from './delay-task-edit.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: DelayTaskEditComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DelayTaskEditComponent]
})
export class DelayTaskEditModule {
}
