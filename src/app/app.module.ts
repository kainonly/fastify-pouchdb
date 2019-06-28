import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';

registerLocaleData(zh);

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {MainService} from './api/main.service';
import {JournalComponent} from './journal/journal.component';
import {ScheduleComponent} from './schedule/schedule.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JournalComponent,
    ScheduleComponent,
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
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
