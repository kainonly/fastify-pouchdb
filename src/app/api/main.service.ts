import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class MainService {
  constructor(
    private httpClient: HttpClient,
    private location: Location
  ) {
  }

  back() {
    this.location.back();
  }
}
