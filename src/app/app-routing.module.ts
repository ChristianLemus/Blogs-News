import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./components/main/main.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { UserRegisterComponent } from "./components/user-register/user-register.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    children: [{ path: "", component: LoginComponent }],
  },
  {
    path: "user-register",
    component: UserRegisterComponent,
  },
  { path: "main", component: MainComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
