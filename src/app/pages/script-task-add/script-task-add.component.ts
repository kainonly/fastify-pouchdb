import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MainService} from '../../api/main.service';

@Component({
  selector: 'app-script-task-add',
  templateUrl: './script-task-add.component.html',
  styleUrls: ['./script-task-add.component.scss']
})
export class ScriptTaskAddComponent implements OnInit {
  form: FormGroup;
  cron: string[] = ['* * * * * *'];

  constructor(
    public main: MainService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      job_name: [],
      status: [],
    });
  }

  addCron() {
    this.cron.push('* * * * * *');
  }

  submit() {

  }
}
