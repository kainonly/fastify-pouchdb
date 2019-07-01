import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnceTaskComponent} from "./once-task.component";
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: OnceTaskComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OnceTaskComponent]
})
export class OnceTaskModule {
}
