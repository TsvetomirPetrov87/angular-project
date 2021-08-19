import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@ Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router, 
        private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const { data: { 
                authActivate,
                authFailedActivateUrl }} = route;
        if(typeof authActivate === 'boolean' && authActivate === this.authService.checkIfLogged) {
            return true;
        }
        
        return this.router.parseUrl(authFailedActivateUrl || '/');
        
    }
    
}