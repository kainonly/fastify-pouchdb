import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnceTaskAddComponent} from './once-task-add.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: OnceTaskAddComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OnceTaskAddComponent]
})
export class OnceTaskAddModule {
}
