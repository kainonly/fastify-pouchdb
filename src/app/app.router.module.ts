import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppExtModule} from './app.ext.module';
import {DashboardsComponent} from './dashboards/dashboards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
      }, {
        path: '{script-task}',
        loadChildren: './pages/script-task/script-task.module#ScriptTaskModule'
      }, {
        path: '{script-task-add}',
        loadChildren: './pages/script-task-add/script-task-add.module#ScriptTaskAddModule'
      }, {
        path: '{script-task-edit}/:id',
        loadChildren: './pages/script-task-edit/script-task-edit.module#ScriptTaskEditModule'
      }, {
        path: '{script-journal}',
        loadChildren: './pages/script-journal/script-journal.module#ScriptJournalModule'
      }, {
        path: '{api-task}',
        loadChildren: './pages/api-task/api-task.module#ApiTaskModule'
      }, {
        path: '{api-task-add}',
        loadChildren: './pages/api-task-add/api-task-add.module#ApiTaskAddModule'
      }, {
        path: '{api-task-edit}/:id',
        loadChildren: './pages/api-task-edit/api-task-edit.module#ApiTaskEditModule'
      }, {
        path: '{api-journal}',
        loadChildren: './pages/api-journal/api-journal.module#ApiJournalModule'
      }, {
        path: '{queue-task}',
        loadChildren: './pages/queue-task/queue-task.module#QueueTaskModule'
      }, {
        path: '{queue-task-add}',
        loadChildren: './pages/queue-task-add/queue-task-add.module#QueueTaskAddModule'
      }, {
        path: '{queue-task-edit}/:id',
        loadChildren: './pages/queue-task-edit/queue-task-edit.module#QueueTaskEditModule'
      }, {
        path: '{queue-journal}',
        loadChildren: './pages/queue-journal/queue-journal.module#QueueJournalModule'
      }, {
        path: '{journal-detail}/:id',
        loadChildren: './pages/journal-detail/journal-detail.module#JournalDetailModule'
      },
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
