import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { UserRegister } from "../../models/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserRegisterService {
  private registered = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // this.verifyToken();
  }

  get isRegistered(): Observable<boolean> {
    return this.registered.asObservable();
  }

  register(registerData: UserRegister): Observable<string | void> {
    return this.http
      .post<string>(
        `${environment.API_UL}/login/register_user_test`,
        registerData
      )
      .pipe(
        map((res: string) => {
          this.registered.next(true);
          return res;
        }),
        catchError((err: any) => this.handlerError(err))
      );
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
