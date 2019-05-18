import {DepartmentInfoModel} from './course.model';
import {SemesterModel} from './semester.model';


export interface UserModel {
  avatar: string;
  department: DepartmentInfoModel;
  email: string;
  id: number;
  firstName: string;
  lastName: string;
  studentNumber: string;
  startSemester: SemesterModel;
  endSemester: SemesterModel;
}

export interface LoginRequestModel {
  username: string;
  password: string;
}

export interface TokenModel {
  access_toke: string;
  token_type: string;
}
