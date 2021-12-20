import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import firebase from 'firebase/compat/app';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: AngularFireAuth,
    private service: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginWithEmailAndPassword(): void {
    console.log("Signing in with email and password");
  }

  loginWithGoogle(): void {
    this.loginWithProvider(new firebase.auth.GoogleAuthProvider());
    // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithProvider(provider: firebase.auth.AuthProvider): void {
    this.login(fireAuth => fireAuth.signInWithPopup(provider));
  }

  login(signIn: (fireAuth: AngularFireAuth) => Promise<firebase.auth.UserCredential>): void {
    signIn(this.auth).then(userCredential => 
      this.service.getCurrentUser(userCredential.user.uid).pipe(first()).subscribe(user =>
        this.router.navigate([user ? '/dashboard' : '/register/continue'])
      )
    ).catch(err =>
      this.showMessage(err)
    );
  }

  showMessage(message: string): void {
    console.log("Showing snackbar error", message);
    // this.snackBar.open(message, null, { duration: 3000 });
  }

  loginWithFacebook(): void {
    console.log("Logging in with facebook");
  }

}
