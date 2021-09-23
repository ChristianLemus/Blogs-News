import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BlogsNewsResponse } from "../../models/user.interface";

@Injectable({
  providedIn: "root",
})
export class BlogsNewsService {
  constructor(private http: HttpClient) {}

  getBlogsNews(): Observable<BlogsNewsResponse | void> {
    const authToken = localStorage.getItem("token") as string;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    });
    return this.http
      .get<BlogsNewsResponse>(`${environment.API_UL}/blogs/LIST_BLOGS`, {
        headers: headers,
      })
      .pipe(
        map((res: BlogsNewsResponse) => {
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
