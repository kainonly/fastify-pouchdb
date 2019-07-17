import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiJournalComponent} from './api-journal.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: ApiJournalComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiJournalComponent]
})
export class ApiJournalModule {
}
