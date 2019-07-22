import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable()
export class MainService {
  constructor(
    private httpClient: HttpClient,
    private location: Location,
    private router: Router,
    private configService: ConfigService,
  ) {
  }

  /**
   * open routerlink
   */
  open(path: any[]) {
    if (path.length === 0) {
      return;
    }
    const routerlink = path[0];
    const param = path.slice(1);
    this.router.navigateByUrl(`{${routerlink}}` +
      (param.length !== 0 ? '/' + param.join('/') : ''));
  }

  /**
   * Location back
   */
  back() {
    this.location.back();
  }

  http(url: string, body?: any) {
    return this.httpClient.post(this.configService.baseUrl + url, body);
  }
}
