import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  status: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

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
