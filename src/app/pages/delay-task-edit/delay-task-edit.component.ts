import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MainService} from '../../api/main.service';

@Component({
  selector: 'app-delay-task-edit',
  templateUrl: './delay-task-edit.component.html',
  styleUrls: ['./delay-task-edit.component.scss']
})
export class DelayTaskEditComponent implements OnInit {
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
