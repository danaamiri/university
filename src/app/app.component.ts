import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'university';
  isLogin = true;
  @ViewChild('toolbar') toolbar: ElementRef;
  @ViewChild('windowRouter') windowRouter: ElementRef;
  constructor(private activeRouter: ActivatedRoute,
              private router: Router) {
    router.events.subscribe(x => {
      this.checkRoute();
    });
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

  logout() {
    localStorage.removeItem('access-token');
    this.router.navigate(['/login']);
  }

}
