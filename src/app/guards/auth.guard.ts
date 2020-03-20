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
    if(next.url[0].path == "signin"){
      if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
        this.router.navigate(['/user-status']);
      } else {
        return true;
      }
    }else{
      if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
        return true;
      } else {
        this.router.navigate(['/signin']);
      }
    }
  }
}