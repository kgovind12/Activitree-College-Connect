import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // currentUser: User;
  // user: User;
  // firebaseUser: firebase.User;

  constructor(public auth: AngularFireAuth, private userService: UserService) { }

  ngOnInit(): void {
    // this.auth.user.subscribe(user => {
    //   this.firebaseUser = user;
    //   this.userService.getCurrentUser(user.uid).subscribe(user => this.user = user);
    // });
  }

}
