import { LoginPageComponent } from './../../login/login-page/login-page.component';
import { LoginInterface } from './../../shared/interface/login.interface';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  AuthService: any;
  route: any;
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.getAuthToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      localStorage.clear();
      return false;
    }
  }
}
