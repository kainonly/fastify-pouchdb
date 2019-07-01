import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {environment} from '../environments/environment';

registerLocaleData(zh);

import {AppComponent} from './app.component';
import {TokenService} from './guard/token.service';
import {MainService} from './api/main.service';
import {ConfigService} from './api/config.service';

const routes: Routes = [
  {path: '', loadChildren: './app.router.module#AppRouterModule', canActivate: [TokenService]},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [
    TokenService,
    MainService,
    {provide: ConfigService, useValue: environment},
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
