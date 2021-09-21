import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth/auth.service";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  status: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    // this.validateUserLogged();
  }

  // validateUserLogged() {
  //   const isloggedUser = this.authService.isLogged().pipe(
  //     tap((res: boolean) => {
  //       if (!res) {
  //         console.log(res);
  //         // this.router.navigate(["/login"]);
  //         return false;
  //       } else {
  //         console.log(res);
  //         return true;
  //       }
  //     })
  //   );
  //   console.log("jummm::", isloggedUser);
  // }

  showHideLogout() {
    this.status = !this.status;
  }

  onLogout() {
    const isLogout = this.authService.logout();
    if (isLogout) {
      this.router.navigate(["/login"]);
    }
  }

  //Check if the router url contains the specified route
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
