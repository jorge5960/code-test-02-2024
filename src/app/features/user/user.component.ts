import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import * as fromUsers from 'src/app/store/user/index';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styles: [':host{display:block}']
})
export class UserComponent implements OnInit {

    users$: Observable<IUser[]>;
    isLoading$: Observable<boolean>;
    selected:IUser;

    constructor(private readonly store: Store) {}
    

    ngOnInit(): void {
        this.initDispatch();
        this.initSubscriptions();
    }

    private initDispatch(): void {
        this.store.dispatch(fromUsers.getUsers());
    }

    private initSubscriptions(): void {
        this.users$ = this.store.pipe(select(fromUsers.selectUsersList));
        this.isLoading$ = this.store.pipe(select(fromUsers.selectUserIsLoading));
    }

    onSelectionChange(user:IUser){
        this.selected = user;
    }
}
