import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLogged().pipe(
      tap((res: boolean) => {
        if (!res) {
          this.router.navigate(["/login"]);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
