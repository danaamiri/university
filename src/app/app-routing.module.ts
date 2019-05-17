import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './area/auth/login/login.component';
import {HomeComponent} from './area/home/home.component';
import {RegistrationComponent} from './area/registration/registration.component';
import {SemesterlistComponent} from './area/semesterlist/semesterlist.component';
import {TimetableComponent} from './area/timetable/timetable.component';

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
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'sem-info',
    component: SemesterlistComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
