import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './../services/authentication.service';

@Injectable()
export class AuthenticateGuard implements CanActivate, CanActivateChild {

  /**
   * Constructor
   * @param authenticationService
   */
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  /**
  //  * Can activate
   * @param next
   * @param state
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.isLogin();
    // return this.authenticationService.isLogin().map(
    //   data => {
    //     if (data.isLogin) {
    //       return true;
    //     } else {
    //       this.router.navigate(['/auth/login']);
    //       return false;
    //     }
    //   },
    //   error => {
    //     return false;
    //   }
    // );
  }

  /**
   * Can activate child?
   * @param next
   * @param state
   */
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.isLogin();
    // return this.authenticationService.isLogin().map(
    //   data => {
    //     if (data.isLogin) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   },
    //   error => {
    //     return false;
    //   }
    // );
  }
}
