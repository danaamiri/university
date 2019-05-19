import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginRequestModel, TokenModel} from "../../../models/auth.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginData = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    if (this.loginData.status === 'INVALID') {
      return;
    }
    const tempLoginRequest: LoginRequestModel = {
      username: this.loginData.value.username,
      password: this.loginData.value.password
    };
    this.authService.login(tempLoginRequest).subscribe(x => {
      this.processResponse(x);
    });
  }

  processResponse(r: TokenModel) {
    this.authService.setAuthToken(r.accessToken);
    this.router.navigate(['/panel/home']);
  }


}
