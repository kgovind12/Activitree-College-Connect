import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  profileForm: FormGroup;
  subjects: string[] = [];
  interests: string[] = [];

  constructor(private formBuilder: FormBuilder, public auth: AngularFireAuth, private service: UserService) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      highSchool: ['', Validators.required],
      grade: ['', Validators.required]
    });


    this.auth.user.subscribe(user => {
      this.profileForm.patchValue({
        name: user.displayName,
        email: user.email
      });
    });
  }

  updateName(): void {
    this.auth.user.subscribe(user =>
      user.updateProfile({
        displayName: this.profileForm.value.name
      })
    );
  }

  submit(): void {
    this.auth.user.subscribe(user =>
      this.service.set({
        name: this.profileForm.value.name,
        id: user.uid,
        username: '', // change later according to form
        school: '', // change later according to form
        year: this.profileForm.value.year,
        role: 'Mentor', // change later according to form
        pronouns: '', // change later according to form
        majors: this.subjects,
        interests: this.interests,
        bio: '',  // change later according to form
      })
    );
  }

}
