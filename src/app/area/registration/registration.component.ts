import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RegisterModel} from '../../models/semester.model';
import {CourseListModel, CourseModel} from "../../models/course.model";
import {CourseService} from "../../service/course.service";
import {SearchRequestModel} from "../../models/common.model";
import {MatCheckboxChange, MatTableDataSource} from "@angular/material";
import {add} from "ngx-bootstrap/chronos";
import {SemesterService} from "../../service/semester.service";

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

  constructor(private courseService: CourseService,
              private changeDetector: ChangeDetectorRef,
              private semesterService: SemesterService) {
  }

  ngOnInit() {
    this.getRegisteredCourse();
    this.getCourses();
  }

  getCourses() {
    const tempRequest: SearchRequestModel = {
      count: 20,
      startIndex: 0
    };
    this.courseService.getCourseList(tempRequest).subscribe(x => {
      this.courseDataSource = x;
      this.changeDetector.detectChanges();
    });
  }

  addCourse(course: CourseModel) {

    const tempData: RegisterModel[] = this.registeredDataSource.slice();
    const addData: RegisterModel = {
      courseId: course.id,
      status: true,
      name: course.course.name,
      error: '',
      time: course.time
    };
    if (this.contains(addData)) {
      return;
    }
    tempData.push(addData);
    this.registeredDataSource = tempData;
  }

  contains(data: RegisterModel): boolean {
    for (const item of this.registeredDataSource) {
      if (item.courseId === data.courseId) {
        return true;
      }
      if (item.name === data.name) {
        return true;
      }
    }
    return false;
  }

  submit() {
    if (this.checkErrors()) {
      this.sendToServer();
    }
  }

  checkErrors(): boolean {
    const tempDate: RegisterModel[] = this.registeredDataSource.slice();
    for (const item of tempDate) {
      for (const it of tempDate) {
        if (item !== it) {
          for (const t1 of item.time) {
            for (const t2 of it.time) {
              if (t1.id === t2.id) {
                if (item.status && it.status) {
                  item.error = 'Time Conflict';
                  it.error = 'Time Conflict';
                  this.registeredDataSource = tempDate;
                  return false;
                } else {
                  item.error = '';
                  it.error = '';
                  this.registeredDataSource = tempDate;
                  console.log(this.registeredDataSource);
                }
              }
            }
          }
        }
      }
    }
    return true;
  }

  checkStatus(e: MatCheckboxChange, item: RegisterModel) {
    item.status = e.checked;
  }

  sendToServer() {
    this.semesterService.registerCourse(this.registeredDataSource).subscribe(x => {
      const tempDate = this.registeredDataSource.slice();
      for (const item of tempDate) {
        if (item.status === false) {
          const ind = tempDate.indexOf(item);
          tempDate.splice(ind, 1);
        }
      }
      this.registeredDataSource = tempDate;
    });
  }

  getRegisteredCourse() {
    this.semesterService.getRegisteredCourse().subscribe(x => {
      this.registeredDataSource = x;
    });
  }
}
