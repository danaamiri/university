import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ErrorResponse} from '../models/respone-wrapper.model';
import {FormContainer} from '../models/fromContainer.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor(private http: HttpClient) {
  }

  private _auth_token: string;

  setAuthToken(token: string) {
    this._auth_token = token;
    localStorage.setItem('auth-token', this._auth_token);
  }

  getAuthToken() {
    if (!this._auth_token) {
      this._auth_token = localStorage.getItem('auth-token');
    }
    return this._auth_token;
  }

  getHeaders(config?: ApiConfig) {
    let headers = new HttpHeaders();
    if (!config || !config.noAuth) {
      if (this.getAuthToken()) {
        headers = headers.set('Authorization', 'bearer ' + this.getAuthToken());
      }
    }
    return headers;
  }

  post<T>(api: string, data: any, component: FormContainer, config?: ApiConfig): Observable<T> {
    if (component) {
      component.isWorking = true;
      component.fieldErrors = {};
    }
    return this.http.post<T>(ServiceTools.api(api), data, {headers: this.getHeaders(config)})
      .pipe(
        map(res => this.processResponse(res, component)),
        catchError(err => this.processError(err, component)));
  }

  put<T>(api: string, data: any, component: FormContainer, config?: ApiConfig): Observable<T> {
    if (component) {
      component.isWorking = true;
      component.fieldErrors = {};
    }
    return this.http.put<T>(ServiceTools.api(api), data, {headers: this.getHeaders(config)})
      .pipe(
        map(res => this.processResponse(res, component)),
        catchError(err => this.processError(err, component)));
  }

  get<T>(api: string, component: FormContainer, config?: ApiConfig): Observable<T> {
    if (component) {
      component.isWorking = true;
      component.fieldErrors = {};
    }
    return this.http.get<T>(ServiceTools.api(api), {headers: this.getHeaders(config)})
      .pipe(
        map(res => this.processResponse(res, component)),
        catchError(err => this.processError(err, component)));
  }

  delete<T>(api: string, component: FormContainer, config?: ApiConfig): Observable<T> {
    if (component) {
      component.isWorking = true;
      component.fieldErrors = {};
    }
    // @ts-ignore
    return this.http.delete<T>(ServiceTools.api(api), {headers: this.getHeaders(config)})
      .pipe(
        map(res => this.processResponse(res, component)),
        catchError(err => this.processError(err, component)));
  }

  processResponse<T>(res: T, component: FormContainer) {
    if (component) {
      component.isWorking = false;
    }
    return res;
  }


  processError(err: HttpErrorResponse, component: FormContainer) {
    if (component) {
      component.isWorking = false;
    }
    if (component && component.handleError && component.handleError(err)) {
      return EMPTY;
    }
    if (component && err.status === 400) {
      const error = err.error as ErrorResponse;
      if (error && error.errors) {
        for (const e of error.errors) {
          if (!component.fieldErrors[e.field]) {
            component.fieldErrors[e.field] = [];
          }
          component.fieldErrors[e.field].push(e.code);
        }
      }
    }
    console.log(err);
    return throwError(err);
  }
}

export interface ApiConfig {
  noAuth?: boolean;
}

export class ServiceTools {
  static api(relative: string) {
    return environment.serverRootUrl + relative;
  }
}
