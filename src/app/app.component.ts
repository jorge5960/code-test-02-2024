import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import * as fromUsers from './store/user/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    users$: Observable<IUser[]>;
    isLoading$: Observable<boolean>;

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
}
