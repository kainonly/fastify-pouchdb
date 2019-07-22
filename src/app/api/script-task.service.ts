import {Injectable} from '@angular/core';
import {MainService} from './main.service';

@Injectable()
export class ScriptTaskService {
  constructor(
    private mainService: MainService,
  ) {
  }

  lists() {
    return this.mainService.http('/script-task/lists', {
      page: {
        limit: 20,
        index: 0
      }
    });
  }
}
