import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required],
  });
  constructor(
    private localStorageService: LocalStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form.value.password !== this.form.value.repeatPassword) {
    } else {
      this.router.navigate(['/']);
      //this.localStorageService.setLocalStorage(Config.CURRENT_USER, user);
    }
  }
}
