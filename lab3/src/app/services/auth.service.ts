import { Injectable } from "@angular/core";
import { Observable, delay, tap } from "rxjs";
import { UserModel, UserRole } from "../models/user.model";
import { UserArrayService } from "./user-array.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  isAdmin = false;
   constructor(private userArrayService:UserArrayService){

   }
  login(username: string): Observable<UserModel> {
    let currentUser =  this.userArrayService.getUser(username);
    console.log(currentUser)
    return currentUser.pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = !!currentUser;
        this.isAdmin = val?.role === UserRole.Admin;;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}
