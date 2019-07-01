import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppExtModule} from './app.ext.module';
import {DashboardsComponent} from './dashboards/dashboards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      {path: '', loadChildren: './pages/home/home.module#HomeModule'},
      {path: '{once-task}', loadChildren: './pages/once-task/once-task.module#OnceTaskModule'},
      {path: '{once-task-add}', loadChildren: './pages/once-task-add/once-task-add.module#OnceTaskAddModule'},
      {path: '{once-task-edit}/:id', loadChildren: './pages/once-task-edit/once-task-edit.module#OnceTaskEditModule'},
      {path: '{delay-task}', loadChildren: './pages/delay-task/delay-task.module#DelayTaskModule'},
      {path: '{delay-task-add}', loadChildren: './pages/delay-task-add/delay-task-add.module#DelayTaskAddModule'},
      {
        path: '{delay-task-edit}/:id',
        loadChildren: './pages/delay-task-edit/delay-task-edit.module#DelayTaskEditModule'
      },
      {path: '{timing-task}', loadChildren: './pages/timing-task/timing-task.module#TimingTaskModule'},
      {path: '{timing-task-add}', loadChildren: './pages/timing-task-add/timing-task-add.module#TimingTaskAddModule'},
      {
        path: '{timing-task-edit}/:id',
        loadChildren: './pages/timing-task-edit/timing-task-edit.module#TimingTaskEditModule'
      },
      {path: '{journal}', loadChildren: './pages/journal/journal.module#JournalModule'},
      {path: '{journal-failed}', loadChildren: './pages/journal-failed/journal-failed.module#JournalFailedModule'},
      {path: '{journal-detail}/:id', loadChildren: './pages/journal-detail/journal-detail.module#JournalDetailModule'},
    ]
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardsComponent
  ],
})
export class AppRouterModule {
}
