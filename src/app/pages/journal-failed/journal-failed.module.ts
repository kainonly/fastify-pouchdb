import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JournalFailedComponent} from "./journal-failed.component";
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: JournalFailedComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JournalFailedComponent]
})
export class JournalFailedModule {
}
