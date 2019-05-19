import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';
import {Observable} from 'rxjs';
import {RegisterModel, ScheduleModel, SemesterModel, StudentSemesterCourseModel} from '../models/semester.model';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  private static registerCourse = 'api/semester/course/register';
  private static semesterList = 'api/semester/list';
  private static semesterMarks = 'api/semester/marks/';
  private static semesterSchedule = 'api/semester/schedule';
  private static registeredCourse = 'api/semester/registered';

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

  getSemesterSchedule(): Observable<ScheduleModel[]> {
    return this.apiClient.get<ScheduleModel[]>(SemesterService.semesterSchedule, null);
  }

  getRegisteredCourse(): Observable<RegisterModel[]> {
    return this.apiClient.get<RegisterModel[]>(SemesterService.registeredCourse, null);
  }


}
