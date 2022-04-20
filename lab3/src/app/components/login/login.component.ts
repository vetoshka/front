import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnDestroy {

  username: string = '';
  constructor(public authService: AuthService , private router: Router) { }
  private unsubscribe: Subject<void> = new Subject();
  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  onLogout(): void {
    this.authService.logout();
  }
  onLogin(): void {
    const observer = {
      next: () => {
        console.log(this.authService.isLoggedIn)
        if (this.authService.isLoggedIn) {
           this.router.navigate(['home']);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };
    console.log(this.username)
    this.authService
      .login(this.username)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }
}
