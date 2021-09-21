import { Component, OnInit } from "@angular/core";
import { UserRegisterService } from "../../services/user-register/user-register.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserRegister } from "../../models/user.interface";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.css"],
})
export class UserRegisterComponent implements OnInit {
  userRegisterForm = this.fb.group({
    nombre: ["", [Validators.required]],
    apellido: ["", [Validators.required]],
    correo: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private userRegisterService: UserRegisterService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  onUserRegister({ value }: { value: UserRegister }) {
    // console.log("data register user::", value);
    this.userRegisterService.register(value).subscribe(
      (res) => {
        if (res) {
          console.log("response::", res);
          this.router.navigate(["/login"]);
        }
      },
      (err) => {
        if (err.includes(400)) {
          console.log("Ya existe un usuario con ese correo electrónico");
        }
      }
    );
  }
}
