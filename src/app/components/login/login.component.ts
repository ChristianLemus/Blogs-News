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
    username: [
      "",
      [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ],
    ],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  errorToLogin: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin({ value, valid }: { value: UserLogin; valid: boolean }) {
    if (valid) {
      this.authService.login(value).subscribe(
        (res) => {
          if (res) {
            this.router.navigate(["/main"]);
          }
        },
        (err) => {
          if (err.includes(400)) {
            this.errorToLogin = true;
          }
        }
      );
    }
  }
}
