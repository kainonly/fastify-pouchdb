import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MainService} from "../../api/main.service";

@Component({
  selector: 'app-timing-task-add',
  templateUrl: './timing-task-add.component.html',
  styleUrls: ['./timing-task-add.component.scss']
})
export class TimingTaskAddComponent implements OnInit {
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
