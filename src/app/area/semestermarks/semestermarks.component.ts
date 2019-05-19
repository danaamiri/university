import {Component, OnInit} from '@angular/core';
import {StudentSemesterCourseModel} from "../../models/semester.model";
import {SemesterService} from "../../service/semester.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-semestermarks',
  templateUrl: './semestermarks.component.html',
  styleUrls: ['./semestermarks.component.scss']
})
export class SemestermarksComponent implements OnInit {
  displayedColumns: string[] = ['courseName', 'unitCount', 'instructorName', 'mark'];

  constructor(private semesterService: SemesterService,
              private activeRouter: ActivatedRoute) {
  }

  dataSource: StudentSemesterCourseModel[] = [];
  semId: number;

  ngOnInit() {
    this.semId = Number(this.activeRouter.snapshot.paramMap.get('id'));
    if (this.semId) {
      this.getSemesterMarks(this.semId);
    }
  }

  getSemesterMarks(id: number) {
    this.semesterService.getSemesterMarks(id).subscribe(x => {
      this.dataSource = x;
    });
  }

}
