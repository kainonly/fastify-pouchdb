import {Component, OnInit} from '@angular/core';
import {MainService} from '../api/main.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent implements OnInit {

  constructor(
    public main: MainService,
  ) {
  }

  ngOnInit() {

  }
}
