import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from '../api/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private mainService: MainService,
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(18)]]
    });
  }

  submit() {
  }
}
