import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueueJournalComponent} from './queue-journal.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: QueueJournalComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QueueJournalComponent]
})
export class QueueJournalModule {
}
