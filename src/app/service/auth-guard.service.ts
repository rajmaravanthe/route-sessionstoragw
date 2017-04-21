import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    canActivate() {
        if(sessionStorage.getItem("login")) {
            return true;
        } else {
            return false;
        }
    }
 

}
