import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // email: string;
  // password: string;

  constructor(
    // private fireAuth: AngularFireAuth,
    // private service: UserService,
    // private snackBar: MatSnackBar,
    // private router: Router) { }
  ) { }

  ngOnInit(): void {
  }

  loginWithEmailAndPassword(): void {
    console.log("Signing in with email and password");
  }

  loginWithGoogle(): void {
    console.log("Loggin in with google");
  }

  loginWithFacebook(): void {
    console.log("Logging in with facebook");
  }

}
