import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';

registerLocaleData(zh);

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {MainService} from './api/main.service';
import {JournalComponent} from './journal/journal.component';
import {ScheduleComponent} from './schedule/schedule.component';
import en from '@angular/common/locales/en';
import {ScheduleAddComponent} from './schedule-add/schedule-add.component';
import {ScheduleEditComponent} from './schedule-edit/schedule-edit.component';
import {JournalDetailComponent} from './journal-detail/journal-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'schedule-add', component: ScheduleAddComponent},
  {path: 'schedule-edit/:id', component: ScheduleEditComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'journal-detail/:id', component: JournalDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    ScheduleAddComponent,
    ScheduleEditComponent,
    JournalComponent,
    JournalDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [
    MainService,
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
