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
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  ngAfterContentChecked() {
    this.isSessionActive = this.authService.loggedIn.value;
  }

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
