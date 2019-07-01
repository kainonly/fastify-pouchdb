import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MainService} from '../../api/main.service';

@Component({
  selector: 'app-once-task-edit',
  templateUrl: './once-task-edit.component.html',
  styleUrls: ['./once-task-edit.component.scss']
})
export class OnceTaskEditComponent implements OnInit {
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
