import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScriptJournalComponent} from './script-journal.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: ScriptJournalComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScriptJournalComponent]
})
export class ScriptJournalModule {
}
