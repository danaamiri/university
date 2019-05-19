import {Component, OnInit} from '@angular/core';
import {RegisterModel} from '../../models/semester.model';
import {CourseListModel} from "../../models/course.model";
import {CourseService} from "../../service/course.service";
import {SearchRequestModel} from "../../models/common.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  displayedColumns1: string[] = ['Status', 'Course Name', 'Message'];
  displayedColumns2: string[] = ['Course Name', 'Unit Count', 'Instructor Name', 'Time'];
  registeredDataSource: RegisterModel[] = [];
  courseDataSource: CourseListModel;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    const tempRequest: SearchRequestModel = {
      count: 20,
      startIndex: 0
    };
    this.courseService.getCourseList(tempRequest).subscribe(x => {
      this.courseDataSource = x;
      console.log(x.list[0].time);
    });
  }

}
