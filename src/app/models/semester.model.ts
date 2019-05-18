import {TimestampModel} from './common.model';
import {CourseModel} from './course.model';

export interface RegisterModel {
  courseId: number;
  error: string;
  status: boolean;
  name?: string;
}

export interface SemesterModel {
  endSemester: TimestampModel;
  startSemester: TimestampModel;
  id: number;
  year: string;
  yearHalf: number;
}

export interface StudentSemesterCourseModel {
  id: number;
  mark?: number;
  semesterCourse: CourseModel;
}

