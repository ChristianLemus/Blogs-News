import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth/auth.service";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  status: boolean = false;
  isSessionActive: boolean = false;
  userName: string = "";
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  ngAfterContentChecked() {
    this.isSessionActive = this.authService.loggedIn.value;
    this.userName = localStorage.getItem("username") as string;
    // this.userName = this.authService.userName.value;
    // console.log("username::", this.authService.userName);
  }

  showHideLogout() {
    this.status = !this.status;
  }

  onLogout() {
    const isLogout = this.authService.logout();
    this.status = false;
    if (isLogout) {
      this.router.navigate(["/login"]);
    }
  }

  //Check if the router url contains the specified route
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
