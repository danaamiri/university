import {Component, OnInit} from '@angular/core';
import {ScheduleModel} from "../../models/semester.model";
import {SemesterService} from "../../service/semester.service";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  displayedColumns: string[] = ['weekday', '8-10', '10-12', '14-16', '16-18'];
  dataSource: ScheduleModel[];

  constructor(private sermesterService: SemesterService) {
  }

  ngOnInit() {
    this.getSchedule();
  }

  getSchedule() {
    this.sermesterService.getSemesterSchedule().subscribe(x=>{
      this.dataSource = x;
    });
  }
}


