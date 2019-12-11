import {User} from '../models/user'

export class AddUser {
    static readonly type = '[To do] Add'

    constructor(public payload: User) {}
}