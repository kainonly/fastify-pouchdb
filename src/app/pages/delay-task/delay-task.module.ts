import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelayTaskComponent} from "./delay-task.component";
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: DelayTaskComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DelayTaskComponent]
})
export class DelayTaskModule {
}
