import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from 'src/app/actions/user.action';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  users: Observable<User>

  constructor(private store: Store) {
    this.users = this.store.select(state => state.users.users);
   }

  ngOnInit() {}

}
