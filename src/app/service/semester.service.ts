import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';
import {Observable} from 'rxjs';
import {RegisterModel, SemesterModel, StudentSemesterCourseModel} from '../models/semester.model';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  private static registerCourse = '/api/semester/course/register';
  private static semesterList = '/api/semester/list';
  private static semesterMarks = 'api/semester/marks/';
  private static semesterSchedule = 'api/semester/schedule/';

  constructor(private apiClient: ApiClientService) {
  }

  registerCourse(request: RegisterModel[]): Observable<RegisterModel[]> {
    return this.apiClient.post<RegisterModel[]>(SemesterService.registerCourse, request, null);
  }

  getSemesterList(): Observable<SemesterModel[]> {
    return this.apiClient.get<SemesterModel[]>(SemesterService.semesterList, null);
  }

  getSemesterMarks(semesterId: number): Observable<StudentSemesterCourseModel[]> {
    return this.apiClient.get<StudentSemesterCourseModel[]>(SemesterService.semesterMarks + semesterId, null);
  }

  getSemesterSchedule(semesterId: number): Observable<StudentSemesterCourseModel[]> {
    return this.apiClient.get<StudentSemesterCourseModel[]>(SemesterService.semesterSchedule + semesterId, null);
  }


}
