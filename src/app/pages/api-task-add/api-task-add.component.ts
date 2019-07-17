import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MainService} from '../../api/main.service';

@Component({
  selector: 'app-api-task-add',
  templateUrl: './api-task-add.component.html',
  styleUrls: ['./api-task-add.component.scss']
})
export class ApiTaskAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    public main: MainService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: []
    });
  }

  submit() {

  }

}
