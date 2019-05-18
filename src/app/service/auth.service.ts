import { Injectable } from '@angular/core';
import {ApiClientService} from './api-client.service';
import {LoginRequestModel, TokenModel, UserModel} from '../models/auth.model';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  private static login = '/api/auth/login';
  private static currentUser = '/api/auth/current';

  constructor(private apiClient: ApiClientService,
              private router: Router) { }

  login(request: LoginRequestModel): Observable<TokenModel> {
    return this.apiClient.post<TokenModel>(AuthService.login, request, null);
  }

  getCurrentUser(): Observable<UserModel> {
    return this.apiClient.get<UserModel>(AuthService.currentUser, null);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('auth-token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    if (this.apiClient.getAuthToken()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  setAuthToken(token: string) {
    this.apiClient.setAuthToken(token);
  }
}
