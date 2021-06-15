import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberParamGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    return !isNaN(route.params["nbr"]);
  }
  
}
