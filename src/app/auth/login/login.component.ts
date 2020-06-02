import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  registrationMessage = '';
  errors: any[] = [];
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', Validators.required]
    });

    this.route.params.subscribe((params) => {
      if (params['registered'] === 'success') {
        this.registrationMessage = 'Registration successful!';
      }
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.auth.login(this.userForm.value).subscribe(
      () => {
        this.router.navigate(['/books']);
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
      });
  }
}
