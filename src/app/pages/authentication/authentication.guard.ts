import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements  CanActivate {

  constructor(private AuthentificationService: AuthenticationService , private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    // tslint:disable-next-line: no-console
    console.log(this.AuthentificationService.isLoggedIn)
    if (this.AuthentificationService.islogin()) { return true; }

    // Store the attempted URL for redirecting
    this.AuthentificationService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
