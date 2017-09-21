import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './../services/authentication.service';
import { UserService } from './../services/user.service';

@Injectable()
export class RoleGuard implements CanActivate {

  /**
   * Constructor
   * @param authenticationService
   */
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router) {
  }

  /**
  //  * Can activate
   * @param next
   * @param state
   */
  canActivate(
    // next: ActivatedRouteSnapshot,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const roles = route.data['roles'] as Array<string>;
    const currentRole = this.authenticationService.getCurrent().userRole.name;
    if (currentRole === AuthenticationService.ROLE_00) {
      return true;
    }

    if (!roles.includes(currentRole)) {
      console.log('Can\'t access this page as: ' + currentRole);
      return false;
    }
    console.log('Success to acccess this page as: ' + currentRole);
    return true;
  }


  /**
  //  * Can activate child
   * @param next
   * @param state
   */
  canActivateChild(
    // next: ActivatedRouteSnapshot,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // const roles = route.data['roles'] as Array<string>;
    const currentRole = this.authenticationService.getCurrent().userRole.name;

    if (currentRole !== AuthenticationService.ROLE_00) {
      return false;
    }
    return true;
  }

}
