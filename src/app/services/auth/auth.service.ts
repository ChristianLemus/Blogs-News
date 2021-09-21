import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { UserLogin, UserResponse } from "../../models/user.interface";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.verifyToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(authData: UserLogin): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.API_UL}/login/authenticate`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token);
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err: any) => this.handlerError(err))
      );
  }
  logout(): boolean {
    localStorage.removeItem("token");
    this.loggedIn.next(false);
    return true;
  }
  private verifyToken(): void {
    const userToken = localStorage.getItem("token") as string;
    const isExpired = helper.isTokenExpired(userToken);
    isExpired ? this.logout() : this.loggedIn.next(true);
  }
  private saveToken(token: string): void {
    localStorage.setItem("token", token);
  }
  private handlerError(err: any): Observable<any> {
    let errorMessage: string = "An error occurred while obtaining the data";
    if (err) {
      errorMessage = `Error code: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
