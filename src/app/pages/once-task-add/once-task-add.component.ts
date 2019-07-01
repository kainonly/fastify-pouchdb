import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MainService} from "../../api/main.service";

@Component({
  selector: 'app-once-task-add',
  templateUrl: './once-task-add.component.html',
  styleUrls: ['./once-task-add.component.scss']
})
export class OnceTaskAddComponent implements OnInit {
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
