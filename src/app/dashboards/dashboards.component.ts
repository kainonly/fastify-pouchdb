import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent implements OnInit {
  nav: string;
  private routerSubscription: Subscription;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.nav = this.router.url;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
