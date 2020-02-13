import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardService implements CanActivate {
  canActivate(_active: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('u_EmailId') != null) {
      return true;
    }
    alert('please do login first');
    this._router.navigate(['/']);
    return false;
  }
  constructor(private _router:Router) { }
}
