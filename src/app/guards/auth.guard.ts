import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '@app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private us: UserService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true  //la pang gamit to
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): boolean {
    var token

    if (!isPlatformBrowser(this.platformId)) {
        return false
    }

    token = this.us.getToken()
    if(token){
        return true
    }  

    sessionStorage.clear()
    this.router.navigate(['/login']);
    return false
  }
}
