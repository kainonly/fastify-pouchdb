import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnceTaskEditComponent} from './once-task-edit.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: OnceTaskEditComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OnceTaskEditComponent]
})
export class OnceTaskEditModule {
}
