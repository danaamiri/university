import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './area/auth/login/login.component';
import {HomeComponent} from './area/home/home.component';
import {RegistrationComponent} from './area/registration/registration.component';
import {SemesterlistComponent} from './area/semesterlist/semesterlist.component';
import {TimetableComponent} from './area/timetable/timetable.component';
import {AuthService} from './service/auth.service';
import {SemestermarksComponent} from "./area/semestermarks/semestermarks.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'panel', canActivate: [AuthService],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'sem-info',
        component: SemesterlistComponent,
        children: [
          {
            path: 'marks/:id',
            component: SemestermarksComponent
          }
        ]
      },
      {
        path: 'timetable',
        component: TimetableComponent
      },
      {
        path: 'marks/:id',
        component: SemestermarksComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
