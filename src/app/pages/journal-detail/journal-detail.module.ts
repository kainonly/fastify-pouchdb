import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JournalDetailComponent} from './journal-detail.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: JournalDetailComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JournalDetailComponent]
})
export class JournalDetailModule {
}
