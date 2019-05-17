import {MatSnackBar} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';

export interface FormContainer {
  model: any;
  fieldErrors: { [key: string]: string[] };
  snackBar: MatSnackBar;
  isWorking: boolean;
  handleError?: (err: HttpErrorResponse) => boolean;
}
