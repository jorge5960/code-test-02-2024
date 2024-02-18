import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private base: string = '/api';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.base}/users`);
    }

    create(user: IUser): Observable<IUser> {
        return this.http.post<IUser>(`${this.base}/users`, user);
    }

    update(updateUser: IUser): Observable<IUser> {
        return this.http.put<IUser>(`${this.base}/users/${updateUser.id}`, updateUser);
    }

    delete(user: IUser): Observable<IUser> {
        return this.http.delete<IUser>(`${this.base}/users/${user.id}`);
    }
}
