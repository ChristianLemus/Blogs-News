import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserLogin } from "../../models/user.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin({ value }: { value: UserLogin }) {
    this.authService.login(value).subscribe((res) => {
      if (res) {
        console.log("res::", res);
        this.router.navigate(["/main"]);
      }
    });
  }
}
