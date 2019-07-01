import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class TokenService implements CanActivate {
  canActivate() {
    return true;
  }
}
