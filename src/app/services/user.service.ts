import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  private firestore: AngularFirestore;

  constructor(afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('Users');
    this.firestore = afs;
  }

  getAllUsers () {
    return this.usersCollection.valueChanges();
  }

  getCurrentUser(firebaseUID: string): Observable<User> {
    // return this.collection.valueChanges();
    return this.usersCollection.doc<User>(firebaseUID).valueChanges();
  }

  set(user: User): void {
    const doc = this.usersCollection.doc<User>(user.id);
    delete user.id;
    doc.set(user);
  }
}
