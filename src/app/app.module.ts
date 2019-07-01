import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {environment} from '../environments/environment';

registerLocaleData(zh);

import {FormLabelColDirective} from './directive/form-label-col.directive';
import {FormControlColDirective} from './directive/form-control-col.directive';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';

import {MainService} from './api/main.service';
import {ConfigService} from "./api/config.service";

import {JournalComponent} from './pages/journal/journal.component';
import {JournalDetailComponent} from './pages/journal-detail/journal-detail.component';
import {JournalFailedComponent} from './pages/journal-failed/journal-failed.component';
import {OnceTaskComponent} from './pages/once-task/once-task.component';
import {OnceTaskAddComponent} from './pages/once-task-add/once-task-add.component';
import {OnceTaskEditComponent} from './pages/once-task-edit/once-task-edit.component';
import {DelayTaskComponent} from './pages/delay-task/delay-task.component';
import {DelayTaskAddComponent} from './pages/delay-task-add/delay-task-add.component';
import {DelayTaskEditComponent} from './pages/delay-task-edit/delay-task-edit.component';
import {TimingTaskComponent} from './pages/timing-task/timing-task.component';
import {TimingTaskAddComponent} from './pages/timing-task-add/timing-task-add.component';
import {TimingTaskEditComponent} from './pages/timing-task-edit/timing-task-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'once-task', component: OnceTaskComponent},
  {path: 'once-task-add', component: OnceTaskAddComponent},
  {path: 'once-task-edit/:id', component: OnceTaskEditComponent},
  {path: 'delay-task', component: DelayTaskComponent},
  {path: 'delay-task-add', component: DelayTaskAddComponent},
  {path: 'delay-task-edit/:id', component: DelayTaskEditComponent},
  {path: 'timing-task', component: TimingTaskComponent},
  {path: 'timing-task-add', component: TimingTaskAddComponent},
  {path: 'timing-task-edit/:id', component: TimingTaskEditComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'journal-failed', component: JournalFailedComponent},
  {path: 'journal-detail/:id', component: JournalDetailComponent},
];

@NgModule({
  declarations: [
    FormLabelColDirective,
    FormControlColDirective,
    AppComponent,
    HomeComponent,
    JournalComponent,
    JournalDetailComponent,
    JournalFailedComponent,
    OnceTaskComponent,
    OnceTaskAddComponent,
    OnceTaskEditComponent,
    DelayTaskComponent,
    DelayTaskAddComponent,
    DelayTaskEditComponent,
    TimingTaskComponent,
    TimingTaskAddComponent,
    TimingTaskEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [
    MainService,
    {provide: ConfigService, useValue: environment},
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
