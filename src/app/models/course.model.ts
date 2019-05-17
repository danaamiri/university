import {TimeModel, TimestampModel} from './common.model';

export interface CourseListModel {
  list: [];
  totalCount: number;
}

export interface CourseModel {
  course: CourseInfoModel;
  finalExamTime: TimestampModel;
  id: number;
  instructorName: string;
  time: TimeModel;
}

export interface CourseInfoModel {
  department: DepartmentInfoModel;
  id: number;
  name: string;
  unitCount: number;
}

export interface DepartmentInfoModel {
  id: number;
  name: string;
}
