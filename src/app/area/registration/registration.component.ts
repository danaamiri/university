import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../../models/semester.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  displayedColumns1: string[] = ['Status', 'Course Name', 'Message'];
  displayedColumns2: string[] = ['Course Name', 'Unit Count', 'Instructor Name', 'Time'];
  registeredDataSource: RegisterModel[] = [];
  constructor() { }

  ngOnInit() {
  }

}
