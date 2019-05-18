import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'university';
  isLogin = true;

  constructor(private activeRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.checkRoute();
  }

  ngAfterViewChecked(): void {
    this.checkRoute();
  }


  checkRoute() {
    this.isLogin = window.location.href.split('/')[3] === 'login';
  }


}
