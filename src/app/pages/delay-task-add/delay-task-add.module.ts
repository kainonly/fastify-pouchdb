import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelayTaskAddComponent} from './delay-task-add.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: DelayTaskAddComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DelayTaskAddComponent]
})
export class DelayTaskAddModule {
}
