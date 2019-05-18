import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';
import {Observable} from 'rxjs';
import {CourseListModel} from '../models/course.model';
import {SearchRequestModel} from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private static courseList = 'api/course/list';

  constructor(private apiClient: ApiClientService) {
  }

  getCourseList(request: SearchRequestModel): Observable<CourseListModel> {
    return this.apiClient.post<CourseListModel>(CourseService.courseList, request, null);
  }
}
