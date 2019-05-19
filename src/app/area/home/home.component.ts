import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {UserModel} from "../../models/auth.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: UserModel;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.getCurrentUser().subscribe(x => {
      this.user = x;
    });
  }

}
