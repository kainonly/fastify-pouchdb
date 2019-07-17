import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JournalComponent} from './journal.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: JournalComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JournalComponent]
})
export class JournalModule {
}
