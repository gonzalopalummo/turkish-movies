import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private localStorageService: LocalStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(['/']);
    //this.localStorageService.setLocalStorage(Config.CURRENT_USER, user);
  }
}
