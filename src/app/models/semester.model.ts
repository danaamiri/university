import {Timer, TimestampModel} from './common.model';
import {CourseModel} from './course.model';

export interface RegisterModel {
  courseId: number;
  error: string;
  status: boolean;
  name?: string;
  time?: Timer[];
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

export interface ScheduleModel {
  weekday: string;
  firstTime: CourseModel;
  secondTime: CourseModel;
  thirdTime: CourseModel;
  forthTime: CourseModel;
}

