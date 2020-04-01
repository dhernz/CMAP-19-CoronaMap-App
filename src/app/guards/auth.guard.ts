import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next.url[0].path)
    if(next.url[0].path == "signin" || next.url[0].path == "login" || next.url[0].path == "onboarding" || next.url[0].path == "map"){
      
        return true;
      
    }else{
      if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
}