import { Component, OnInit } from '@angular/core';
import {StudentSemesterCourseModel} from '../../models/semester.model';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() {
  }

  ngOnInit() {
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: StudentSemesterCourseModel[] = [
  {
    id: 0,
    mark: 0,
    semesterCourse: {
      course: {
        department: {
          id: 0,
          name: 'string'
        },
        id: 0,
        name: 'string',
        unitCount: 0
      },
      finalExamTime: {
        date: 0,
        day: 0,
        hours: 0,
        minutes: 0,
        month: 0,
        nanos: 0,
        seconds: 0,
        time: 0,
        timezoneOffset: 0,
        year: 0
      },
      id: 0,
      instructorName: 'string',
      time: [
        {
          date: 0,
          day: 0,
          hours: 0,
          minutes: 0,
          month: 0,
          seconds: 0,
          time: 0,
          timezoneOffset: 0,
          year: 0
        }
      ]
    }
  }
];
