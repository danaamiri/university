import { Injectable } from '@angular/core';
import {ApiClientService} from './api-client.service';
import {LoginRequestModel, TokenModel, UserModel} from '../models/auth.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static login = '/api/auth/login';
  private static currentUser = '/api/auth/current';

  constructor(private apiClient: ApiClientService) { }

  login(request: LoginRequestModel): Observable<TokenModel> {
    return this.apiClient.post<TokenModel>(AuthService.login, request, null);
  }

  getCurrentUser(): Observable<UserModel> {
    return this.apiClient.get<UserModel>(AuthService.currentUser, null);
  }
}
