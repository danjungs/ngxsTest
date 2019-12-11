import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from 'src/app/actions/user.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  private user: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.user = this.formBuilder.group({
      name: ['', Validators.required],
      email:['', Validators.required],
    });
  }
  logForm() {
    console.log(this.user.value)
  }

  addUser() {
    let name
    let email
    if (this.user || this.user.value || this.user.value.name) {
      console.log(this.user.value.name)
      name = this.user.value.name
    }
    (this.user || this.user.value || this.user.value.name) ? email = this.user.value.email : email = ''
    this.store.dispatch(new AddUser({ name, email }))
    this.logForm()
    this.user.reset()
  }

  ngOnInit() { }

}
