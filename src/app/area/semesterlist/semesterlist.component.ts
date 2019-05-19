import {Component, OnInit} from '@angular/core';
import {SemesterService} from '../../service/semester.service';
import {SemesterModel} from '../../models/semester.model';
import {AuthService} from '../../service/auth.service';
import {UserModel} from '../../models/auth.model';

@Component({
  selector: 'app-semesterlist',
  templateUrl: './semesterlist.component.html',
  styleUrls: ['./semesterlist.component.scss']
})
export class SemesterlistComponent implements OnInit {
  semesterList: SemesterModel[];
  user: UserModel;
  isLoading = true;
  constructor(private semesterService: SemesterService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getCurrentUser();
    this.getSemesters();
  }

  getSemesters() {
    this.isLoading = true;
    this.semesterService.getSemesterList().subscribe(x => {
      this.semesterList = x;
      this.isLoading = false;
    });
  }

  getCurrentUser() {
    this.isLoading = true;
    this.authService.getCurrentUser().subscribe(x => {
      this.user = x;
      this.isLoading = false;
    });
  }

}
